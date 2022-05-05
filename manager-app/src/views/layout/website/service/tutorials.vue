<template>
  <div class="tutorials_page">
    <el-card class="mycard">
      <template #header>
        <div>
          首页展示<span class="color999">（{{toplist.length}}）</span>
        </div>
      </template>
      <div class="imgs_list flex" v-if="toplist.length">
        <div class="imgs_item" v-for="(v, i) in toplist" :key="v.id">
          <div class="imgbox">
            <img :src="v.cover_url" alt="">
            <div class="lookicon fcc lookhover" @click="lookBanner(i, true)">
              <el-icon size="20px"><zoom-in/></el-icon>
            </div>
            <div class="videoicon fcc lookhover" @click="lookVideo(v.video_url)">
              <el-icon size="40px"><caret-right/></el-icon>
            </div>
          </div>
          <div class="imginfo">
            <div class="imgname els">{{v.video_name}}</div>
            <div class="imglink fcs">
              <span class="fcc">{{v.link_url ? '链接：' : '无链接'}}</span>
              <el-link type="primary" v-if="v.link_url" target="_blank" :href="'//' + v.link_url">{{v.link_url}}</el-link>
            </div>
            <div class="fsc imgicon">
              <div class="fcs">
                <el-icon size="14px"><pointer /></el-icon>
                <span>0</span>
              </div>
              <div @click="setBanner(0, v.id)" class="chover dfcolor">下架</div>
            </div>
          </div>
        </div>
      </div>
      <MyEmpty v-else/>
      
    </el-card>

    <el-card class="mycard mt20">
      <template #header>
        <div class="fsc f1">
          <div>所有教程<span class="color999">（{{total}}）</span></div>
          <el-button type="primary" @click="addShow = true">+ 添加</el-button>
        </div>
      </template>
      <div class="imgs_list flex fww" v-if="list.length">
        <div class="imgs_item mb20" v-for="(v, i) in list" :key="v.id">
          <div class="imgbox">
            <img :src="v.cover_url" alt="">
            <div class="is_top_show fcc" v-if="v.status == 1">
              <el-icon size="14px"><collection-tag /></el-icon>
              <div>展示中</div>
            </div>
            <div class="lookicon fcc lookhover" @click="lookBanner(i)">
              <el-icon size="20px"><zoom-in/></el-icon>
            </div>
            <div class="videoicon fcc lookhover" @click="lookVideo(v.video_url)">
              <el-icon size="40px"><caret-right/></el-icon>
            </div>
          </div>
          <div class="imginfo">
            <div class="imgname els">{{v.video_name}}</div>
            <div class="imglink fcs">
              <span class="fcc">{{v.link_url ? '链接：' : '无链接'}}</span>
              <el-link type="primary" v-if="v.link_url" target="_blank" :href="'//' + v.link_url">{{v.link_url}}</el-link>
            </div>
            <div class="fsc imgicon">
              <div class="fcs">
                <el-icon size="14px"><pointer /></el-icon>
                <span>0</span>
              </div>
              <div class="fcs">
                <div @click="delVideo(v.id)" class="chover dfcolor mr20" v-if="v.status == 0">删除</div>
                <div @click="setBanner(v.status == 1 ? 0 : 1, v.id)" class="chover dfcolor">{{v.status == 1 ? '下架' : '上架'}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyEmpty v-else/>
      <Mypage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
      
    </el-card>

    <MyDialog v-model="delShow" :msg="'确认删除此视频?'" @sure="sureDel"/>

    <el-dialog v-model="addShow" title="添加视频" width="380px" @close="close">
      <el-form :model="addForm" :rules="rules" ref="addFormRef">
        <el-form-item label="选择视频" required label-width="90px">
          <div class="sel_pool fcc" @click="showKzPool('sel_tutorials', 2, true)">
            <div class="poolbox" v-if="addPool.id">
              <img :src="addPool.cover_url" alt="">
              <div class="lookicon fcc lookhover" @click.stop="lookImage([addPool.cover_url!],0)">
                <el-icon size="14px"><zoom-in/></el-icon>
              </div>
              <div class="videoicon fcc lookhover" @click.stop="lookVideo(addPool.video_url)">
                <el-icon size="20px"><caret-right/></el-icon>
              </div>
            </div>
            <div class="fc fcc" v-else>
              <el-icon><plus/></el-icon>
              <div class="file_name">点击添加</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="视频分类" prop="video_type" label-width="90px">
          <el-select v-model="addForm.video_type" placeholder="请选择视频分类" class="f1">
            <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="添加链接" prop="link" label-width="90px">
          <el-input v-model="addForm.link" placeholder="请输入链接"/>
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="addVideo" :disabled="!addPool.id">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ZoomIn, CaretRight, Plus, Pointer, CollectionTag } from '@element-plus/icons-vue'
import emiter from '@/utils/bus'
import { showKzPool, lookImage, lookVideo } from '@/utils/index'
import { getTutorialsTypeList_api, getTutorialsList_api, addTutorialsVideo_api, delTutorialsVideo_api, setTutorialsVideo_api, getTopTutorialsList_api } from '@/api/website/service'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";

const typeList = ref<{ value: number, label: string }[]>([])
const getTypeList = async () => {
  const { status, body } = await getTutorialsTypeList_api()
  if(status == 1){
    for (const [key, value] of Object.entries(body)) {
      typeList.value.push({ value:Number(key), label:value as string })
    }
    getTopList()
    getList()
  }
}
getTypeList()

const toplist = ref<any[]>([])
const getTopList = async () => {
  const { status, body } = await getTopTutorialsList_api({ status : 1 })
  if(status == 1){
    toplist.value = body
  }
}

const page = ref(1)
const size = ref(20)
const total = ref(0)
const list = ref<any[]>([])
const getList = async () => {
  const { status, body } = await getTutorialsList_api({
    size: size.value,
    current: page.value
  })
  if(status == 1){
    total.value = body.total
    list.value = body.records
  }
}

const lookBanner = (i:number,isTop = false) => {
  const blist = isTop ? toplist.value.map(v => v.cover_url) : list.value.map(v => v.cover_url)
  lookImage(blist, i)
}

const close = () => {
  addFormRef.value.resetFields()
  addPool.value = {} as KzPool
  addShow.value = false
}
const addShow = ref(false)

const rules = reactive({
  video_type: [{ required: true, message: '请选择分类！', trigger: 'change' }],
})
const addForm = reactive({
  link:'',
  video_type:''
})
const addFormRef = ref()
const addPool = ref({} as KzPool)
emiter.on('sel_tutorials', (val:KzPool) => {
  addPool.value = val
})

const addVideo = () => {
  addFormRef.value.validate(async (valid:boolean) => {
    if(valid){
      const { status } = await addTutorialsVideo_api({
        id: addPool.value.id,
        link_url: addForm.link,
        video_type: addForm.video_type,
      })
      if(status == 1){
        close()
        getList()
      }
    }
  })
}

const setBanner = async (type:0|1, id?:number|string) => {
  const { status } = await setTutorialsVideo_api({
    id: id ? id : addPool.value.id,
    status: type,
  })
  if(status == 1){
    getList()
    getTopList()
  }
}

const delShow = ref(false)
const delId = ref<string|number>('')
const delVideo =  (id:number|string) => {
  delId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const { status } = await delTutorialsVideo_api({ id: delId.value })
  if(status == 1){
    getList()
    getTopList()
    delShow.value = false
  }
}

</script>

<style scoped lang="scss">
.tutorials_page{
  .imgs_list{
    margin-top: 10px;
    .imgs_item{
      margin-right: 20px;
      width: calc( (100% - 80px) / 5 );
      box-sizing: border-box;
      border: 1px solid #e4e7ed;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      overflow: hidden;
      .imgbox{
        position: relative;
        padding-top: 56.25%;
        .is_top_show{
          position: absolute;
          right: 0;
          top: 8px  ;
          width: 78px;
          height: 24px;
          background: linear-gradient(270deg, #FF9500 0%, #FFB700 100%);
          border-radius: 16px 0px 0px 16px;
          color: #fff;
          font-size: 12px;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
          position: absolute;
          top: 0;
          border-radius: 4px;
        }
        .lookicon{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 30px;
          height: 30px;
          background-color: rgba(0,0,0,0.5);
        }
        .videoicon{
          position: absolute;
          bottom: 50%;
          right: 50%;
          transform: translate(50%,50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
        }
        .el-icon{
          color: #fff;
        }
      }
      .imginfo{
        padding: 10px;
        color: $color333;
        .imgname{
          line-height: 1.1;
          font-size: 16px;
        }
        .imglink{
          margin-top: 4px;
          color: $color666;
          font-size: 12px;
          line-height: 14px;
          .el-link{
            font-size: 12px;
            line-height: 14px;
            max-width: calc( 100% - 36px );
            justify-content: flex-start;
            :deep(.el-link__inner){
              display: inline;
              overflow: hidden;
              text-overflow: ellipsis;
	            white-space:nowrap
            }
          }
        }
        .imgicon{
          margin-top: 16px;
          font-size: 12px;
          color: $color999;
          span{
            margin-left: 5px;
          }
        }
      }
    }
    .imgs_item:nth-child(5n){
      margin-right: 0;
    }
  }
  .sel_pool{
    width: 100px;
    height: 100px;
    border:1px dashed $colorddd;
    border-radius: 3px;
    .file_name{
      color: var(--el-text-color-regular);
      font-size: 12px;
      line-height: 12px;
      margin-top: 12px;
    }
    .fc{
      .el-icon{
        font-size: 28px;
        color: $colorddd;
      }
    }
    &:hover{
      border-color: $dfcolor;
      color: $dfcolor;
      cursor: pointer;
      .fc{
        .el-icon{
          color: $dfcolor;
        }
      }
      .file_name{
        color: $dfcolor;
      }
    }
    .poolbox{
      width: 100%;
      height: 100%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      .el-icon{
        color: #fff;
      }
      .lookicon{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: rgba(0,0,0,0.5);
      }
      .videoicon{
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        width: 30px; 
        height: 30px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.5);
      }
    }
  }
}
</style>