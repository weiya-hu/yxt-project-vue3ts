<template>
  <div class="imagepool_page">
    <div class="fsc topbox">
      <div class="fcs">
        <el-input v-model="word" placeholder="输入图片名关键字搜索" clearable/>
        <el-button class="ml20 bdc_btn" @click="search">搜索</el-button>
      </div>
      <div class="fcs">
        <div class="total mr20">共{{total}}条</div>
        <el-button type="primary" @click="addShow = true">+ 上传</el-button>
      </div>
    </div>
    <div class="imgs_list flex" v-if="total">
      <div class="imgs_item" v-for="(v, i) in list" :key="v.id">
        <div class="imgbox lookhover" @click="look(i)">
          <img :src="v.source_url" alt="" @load="getImageSize(v.id,$event)">
          <div class="lookicon fcc">
            <el-icon size="20px"><zoom-in/></el-icon>
          </div>
        </div>
        <div class="imginfo">
          <div class="imgname els">{{v.source_name}}</div>
          <div class="imgsize">{{sizeHash[v.id]}}</div>
          <div class="fcs fjend imgicon">
            <el-tooltip effect="dark" content="下载" placement="bottom">
              <el-icon class="chover" size="18px" @click="downLoadimage(v.source_url, v.source_name)"><download /></el-icon>
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
    <Mypage v-model:page="page" :total="total" @change="changePage" :hide-sizes="true"/>

    <MyDialog v-model="delShow" :msg="'确认删除图片 “ ' + imgName +' ” ?'" @sure="sureDel"/>
    <el-dialog v-model="editShow" title="修改名称" width="380px" @close="imgName = ''">
      <el-input v-model="imgName" placeholder="请输入图片名"/>
      <div class="fcs btns fjend mt20">
        <el-button @click="editShow = false">取消</el-button>
        <el-button type="primary" @click="sureEdit" :disabled="!imgName">提交</el-button>
      </div>
    </el-dialog>

    <el-dialog v-model="addShow" title="上传图片" width="380px" @close="close" :before-close="beforeCloseAdd">
      <el-form v-loading="loading" :model="addForm" :rules="addRules" ref="addFormRef">
        <el-form-item label="图片" required>
          <MediaUpload
            :max="1"
            v-if="addShow"
            @upOneSuccess="upOne"
            @error="upError"
            @look="upLook"
            @change="upChange"
            @del="addForm.source_name = ''"
            :exnameList="exnameList"
            :msg="'只能上传'+exnameList.join('、')+'图片，不超过2M'"
            ref="upload"
          />
        </el-form-item>
        <el-form-item label="名称" prop="source_name">
          <el-input v-model="addForm.source_name" placeholder="请输入图片名"/>
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button v-if="upload" type="primary" @click="goSubmit" :disabled="!upload.imgs.length">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Download, Edit, Delete, ZoomIn } from '@element-plus/icons-vue'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";
import MediaUpload from "@/components/MediaUpload.vue";
import { lookImage, downLoadimage, errMsg, clearKzPool, kzConfirm } from '@/utils/index'
import { getPoolList_api, upPool_api, delPool_api, editPoolName_api } from '@/api/system'

const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const addShow = ref(false)
const loading = ref(false)
const upload = ref()
const upChange = (fileName:string) => {
  addForm.source_name = fileName
}
const upOne = async (url:string) => {
  const res = await upPool_api({
    source_url: url,
    source_name: addForm.source_name,
    source_type: 1
  })
  if(res && res.status == 1){
    close()
    getList()
    clearKzPool(1)
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

const addFormRef = ref()
const addForm = reactive({
  source_name:'',
})
const addRules = reactive({
  source_name: [{ required: true, message: '请输入图片名称！', trigger: 'blur' }],
})
const goSubmit = () => {
  addFormRef.value.validateField('source_name', (valid:boolean) => {
    if(valid){
      loading.value = true
      upload.value.submit()
    }
  })
}
const close = () => {
  loading.value = false
  addFormRef.value.resetFields()
  addShow.value = false
}

const sizeHash = ref<any>({}) // 专门用另外的对象是因为每次getList()会重新赋值整个list，但为了节约性能dom是绑定了:key="v.id"的，有key那vue就会根据key对比dom是否改变而更新dom，不会更新整个列表，没有改变的dom即id相同的dom就不会再次触发img的onload事件，如果宽高直接添加在list上，getList()更新整个list，id不变的dom又不触发img的onload，导致宽高丢失
const getImageSize = (id:string|number,e:any) => {
  // 图片加载后获取图片真实宽高
  const a = e.path[0] as HTMLImageElement
  sizeHash.value[id] = a.naturalWidth + '*' + a.naturalHeight
}

const list = ref<any[]>([])
const total = ref(0)
const page = ref(1)
const word = ref('')
const getList = async () => {
  const { body, status } = await getPoolList_api({
    size: 10,
    current: page.value,
    sourceType: 1,
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
const changePage = () => {
  sizeHash.value = {}
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
    clearKzPool(1)
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
    clearKzPool(1)
  }
}

const look = (i:number) => {
  const imgs = list.value.map(v => v.source_url)
  lookImage(imgs, i)
}


const beforeCloseAdd = (done:Function)=>{
  if(loading.value){
    kzConfirm().then(() => {
      done()
    })
    .catch(() => {})
  }else{
    done()
  }
}

</script>

<style scoped lang="scss">
.imagepool_page{
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
        // aspect-ratio: 16 / 9; // 低版本浏览器及ie不支持
        padding-top: 56.25%;  // margin-top/bottom、padding-top/bottom 设置百分比时是以父级元素的宽度为参考对象
        img{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
          position: absolute;
          top: 0;
        }
        .lookicon{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 30px;
          height: 30px;
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