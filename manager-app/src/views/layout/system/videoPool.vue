<template>
  <div class="videopool_page">
    <div class="fsc topbox">
      <div class="fcs">
        <el-input v-model="word" placeholder="输入视频名关键字搜索" clearable/>
        <el-button type="primary" class="ml20" @click="search">搜索</el-button>
      </div>
      <div class="fcs">
        <div class="total mr20">共{{total}}条</div>
        <el-button type="primary" @click="addShow = true">+ 上传</el-button>
      </div>
    </div>
    <div class="imgs_list flex" v-if="total">
      <div class="imgs_item" v-for="v in list" :key="v.id">
        <div class="imgbox lookhover" @click="lookVideo(v.source_url)">
          <img :src="v.cover_url" alt="">
          <div class="lookicon fcc">
            <el-icon size="40px"><caret-right/></el-icon>
          </div>
        </div>
        <div class="imginfo">
          <div class="imgname els">{{v.source_name}}</div>
          <div class="imgsize">{{formatDate(new Date(v.create_time),'yyyy-MM-dd')}}</div>
          <div class="fcs fjend imgicon">
            <el-tooltip effect="dark" content="下载" placement="bottom">
              <el-icon class="chover" size="18px" @click="downLoadVideo(v.source_url, v.source_name)"><download /></el-icon>
            </el-tooltip>
            <el-tooltip effect="dark" content="修改名称" placement="bottom">
              <el-icon class="chover" size="18px" @click="editImg(v)"><edit /></el-icon>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="bottom">
              <el-icon class="chover" size="18px" @click="delImg(v)"><delete /></el-icon>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <MyEmpty v-else/>
    <Mypage v-model="page" :total="total"/>

    <MyDialog v-model="delShow" :msg="'确认删除视频 “ ' + imgName +' ” ?'" @sure="sureDel"/>
    <el-dialog v-model="editShow" title="修改名称" width="380px" @close="imgName = ''">
      <el-input v-model="imgName" placeholder="请输入视频名"/>
      <div class="fcs btns fjend mt20">
        <el-button @click="editShow = false">取消</el-button>
        <el-button type="primary" @click="sureEdit" :disabled="!imgName">提交</el-button>
      </div>
    </el-dialog>

    <el-dialog v-model="addShow" title="上传视频" width="380px" @close="close" :before-close="beforeCloseAdd">
      <el-form v-loading="loading" :model="addForm" :rules="addRules" ref="addFormRef">
        <el-form-item label="视&emsp;频" required>
          <MyUpload
            type="video"
            v-model="addForm.source_oldName"
            :max-size="200"
            @error="upVideoError"
            @success="upSuccess"
            @changeName="upChange"
            :exnameList="exnameList1"
            :msg="'只能上传'+exnameList1.join('、')+'视频，不超过200M，推荐尺寸1280*720'"
            ref="upVideo"
          />
        </el-form-item>
        <el-form-item label="名&emsp;称" prop="source_name">
          <el-input v-model="addForm.source_name" placeholder="请输入视频名"/>
        </el-form-item>
        <el-form-item label="封面图" required>
          <MediaUpload
            :max="1"
            v-if="addShow"
            @upOneSuccess="upOne"
            @error="upError"
            @look="upLook"
            :exnameList="exnameList"
            :msg="'只能上传'+exnameList.join('、')+'图片，不超过2M'"
            ref="upload"
          />
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button v-if="upload" type="primary" @click="goSubmit" :disabled="!upload.imgs.length || !addForm.source_oldName">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Download, Edit, Delete, CaretRight } from '@element-plus/icons-vue'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";
import MediaUpload from "@/components/MediaUpload.vue";
import MyUpload from "@/components/MyUpload.vue";
import { lookImage, lookVideo, downLoadVideo, errMsg, clearKzPool, kzConfirm } from '@/utils/index'
import { getPoolList_api, upPool_api, delPool_api, editPoolName_api } from '@/api/system'
import { formatDate } from '@/utils/date'

const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const exnameList1 = ['.mp4']
const addShow = ref(false)
const loading = ref(false)
const upload = ref()
const upOne = async (url:string) => {
  const res = await upPool_api({
    cover_url: url,
    source_url: addForm.source_url,
    source_name: addForm.source_name,
    source_type: 2
  })
  if(res && res.status == 1){
    close()
    getList()
    clearKzPool(2)
  }else{
    loading.value = false
  }
}
const upError = (err:string) => {
  errMsg(err)
  loading.value = false
}
const upLook = (list:string[], i:number) => {
  lookImage(list,i)
}

const upVideo = ref()
const upChange = (videoName:string) => {
  addForm.source_name = videoName
}
const upVideoError = (err:string) => {
  errMsg(err)
  loading.value = false
}
const upSuccess = (videoUrl:string) => {
  addForm.source_url = videoUrl
  upload.value.submit()
}

const addFormRef = ref()
const addForm = reactive({
  source_name:'',
  source_oldName:'',
  source_url:'',
})
const addRules = reactive({
  source_name: [{ required: true, message: '请输入视频名称！', trigger: 'blur' }],
})
const goSubmit = () => {
  addFormRef.value.validateField('source_name', (valid:boolean) => {
    if(valid){
      loading.value = true
      upVideo.value.submit()
    }
  })
}
const close = () => {
  loading.value = false
  addFormRef.value.resetFields()
  upVideo.value.clear()
  addShow.value = false
}

const list = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const word = ref('')
const getList = async () => {
  const { body, status } = await getPoolList_api({
    size: 10,
    current: page.value,
    sourceType: 2,
    sourceName: word.value
  })
  if(status == 1){
    list.value = body.records
    total.value = body.total
  }
}
getList()
const search = () => {
  page.value = 1
  getList()
}

const imgId = ref(0)
const imgName = ref('')
const delShow = ref(false)
const delImg = (img:any) => {
  imgId.value = img.id
  imgName.value = img.source_name
  delShow.value = true
}
const sureDel = async () => {
  const { status } = await delPool_api({id: imgId.value})
  if(status == 1){
    const i = list.value.findIndex(v => v.id == imgId.value)
    delShow.value = false
    getList()
    clearKzPool(2)
  }
}

const editShow = ref(false)
const editImg = (img:any) => {
  imgId.value = img.id
  imgName.value = img.source_name
  editShow.value = true
}
const sureEdit = async () => {
  const { status } = await editPoolName_api({
    id: imgId.value,
    source_name: imgName.value
  })
  if(status == 1){
    editShow.value = false
    getList()
    clearKzPool(2)
  }
}

const beforeCloseAdd = (done:Function)=>{
  if(loading.value){
    kzConfirm().then(() => {
      upVideo.value.doAbort()
      done()
    })
    .catch(() => {})
  }else{
    done()
  }
}

</script>

<style scoped lang="scss">
.videopool_page{
  .topbox{
    border-bottom: 1px solid $colorddd;
    padding-bottom: 10px;
  }
  .imgs_list{
    flex-wrap: wrap;
    .imgs_item{
      margin-right: 20px;
      margin-top: 20px;
      width: calc( (100% - 80px) / 5 );
      box-sizing: border-box;
      border: 1px solid #e4e7ed;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      .imgbox{
        position: relative;
        padding-top: 56.25%;
        img{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
          position: absolute;
          top: 0;
        }
        .lookicon{
          position: absolute;
          bottom: 50%;
          right: 50%;
          transform: translate(50%,50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          .el-icon{
            color: #fff;
          }
        }
      }
      .imginfo{
        padding: 10px;
        color: $color333;
        .imgname{
          line-height: 1.1;
        }
        .imgsize{
          margin-top: 5px;
          color: $color666;
          font-size: 12px;
        }
        .imgicon{
          margin-top: 5px;
          .el-icon{
            margin-left: 5px;
          }
        }
      }
    }
    .imgs_item:nth-child(5n){
      margin-right: 0;
    }
  }
}
</style>