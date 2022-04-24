<template>
    <div class="mytable">
         <search @search="searchword" v-model="inputSearch"  @reset="resetSearch">
           <el-option label="待处理" value=1 />
           <el-option label="已受理" value=2 />
        <el-option label="被驳回" value=3 />
        <el-option label="已完成" value=4 />
         </search>
         <el-card class="mycard mt20">
           <el-table
        :data="tableList"
        border
        style="width: 100%"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column width="150" label="操作" >
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary"  v-if="row.status == 2" @click="videoEdit(row.id)">编辑</el-link>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true" v-if="row.status == 3">驳回原因</el-link>
              <el-link type="primary" v-if="row.status == 4" @click="look(row.id)">详情</el-link>
              <div v-if="row.status == 1" >
                  <el-link type="primary" class="fcss" @click="getData(row.id) " >下载附件</el-link>                  
                  <el-link type="primary" class="fcss" @click="pass(row.id)">通过</el-link>                  
                  <el-link type="primary" @click="open(row.id)">驳回</el-link>
              </div>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
      <MyPage :total="totle" v-model:page="page" @change="getList" v-model:size="size"/>
      </el-card>
      <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
          <el-dialog
            v-model="dialogVisible"
            title="详情视频"
            width="500px" 
            >
            <div class="img-dialog" v-if="showImgs ">
              <video style="width: 125px; height: 135px" cover v-for="url in showImgs" :key="url" :src="url" @click="watchVideo(url)">
              </video>
            </div>
          <template #footer>
            <span class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">确认</el-button>
            </span>
          </template>
      </el-dialog>
    <el-dialog v-model="lookShow" title="查看视频" fullscreen @close="videoSrc = ''" custom-class="videobox">
      <video :src="videoSrc" controls class="show_video"></video>
    </el-dialog>
    <el-dialog v-model="addShow" title="编辑视频" width="380px" @close="close">
      <el-form :model="addForm">
        <el-form-item label="选择素材" required label-width="90px">
          <div class="sel_pool fcc" @click="showKzPool('video_custom',2)">
            <div class="poolbox" v-if="addPool.id">
              <img :src="addPool.cover_url||addPool.source_url" alt="">
              <div class="lookicon fcc lookhover" @click.stop="lookImage([addPool.cover_url||addPool.source_url],0)">
                <el-icon size="14px"><zoom-in/></el-icon>
              </div>
              <div class="videoicon fcc lookhover" v-if="addPool.source_type == 2" @click.stop="lookVideo(addPool.source_url)">
                <el-icon size="20px"><caret-right/></el-icon>
              </div>
            </div>
            <div class="fc fcc" v-else>
              <el-icon><plus/></el-icon>
              <div class="file_name">点击添加</div>
            </div>
          </div>
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="setBanner(1)" :disabled="!addPool.id">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
    </div>
</template>
<script setup  lang="ts">
import { ref ,reactive} from 'vue'
import search from'@/components/Search.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyDialog from "@/components/MyDialog.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { ZoomIn, CaretRight, Plus } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { showKzPool } from '@/utils/index'
import { lookImage, lookVideo } from '@/utils/index'
import emiter from '@/utils/bus'
import { videoList_api,articlePass_api,articleReject_api,articleAttach_api,articleVideosave_api,articleDetail_api } from '@/api/cms/custom'
interface TableTitleProp{
  type:string,
  lable?:string,
  prop:string,
  width:number,
  operatButton?:string[]
}
const tableTitle = ref(<TableTitleProp[]>[
  {type:'text',lable:'需求ID',prop:'id',width:120},
  {type:'text',lable:'账户名',prop:'user_name',width:120},
  {type:'text',lable:'客户名称',prop:'company_name',width:180},
  {type:'text',lable:'标题',prop:'title',width:150},
  {type:'text',lable:'描述',prop:'detail',width:120},
  {type:'date',lable:'创建日期',prop:'create_time',width:110},
  {type:'status',lable:'状态',prop:'status',width:100},    
]) 
const loading = ref(false)

const totle = ref(0)
const size = ref(10)
const page = ref(1)
interface SData {
  id: number|string,
  attach_url:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const tableList = ref<SData[]>([])
const errorShow = ref(false)
const errorMsg = ref('')

const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:''
})
//  重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=''
  getList()
}
// 搜索
const searchword = (val:any) => {
 page.value = 1
  getList()
}
// 通过
const pass =async(id:string|number)=>{
await articlePass_api({ id})
 getList()
}
// 驳回弹出框
const open = (id:string|number) => {
  ElMessageBox.prompt('驳回原因', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
    .then(async ({ value }) => {
      await articleReject_api({
          fail_reason:value,
          id
  })
     getList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消驳回',
      })
    })
}
// 下载附件
const getData = async (id:string)=>{
  const res = await articleAttach_api({ id})
  if(res.status == 1){
    window.location.href = res.body.attach_url
  }
}
// 图片详情
const dialogVisible = ref(false)
const showImgs = ref<string[]>([])//预览图片列表
const look = async(id:string)=>{
  const res = await articleDetail_api({ id})
  console.log(res);
  // let arr:string[] = []
   if(res.status == 1){
       showImgs.value  = res.body.list
  }
  dialogVisible.value = true
}
// 查看视频
const lookShow = ref(false)
const videoSrc = ref('')//视频地址
const watchVideo = (url:string)=>{
  videoSrc.value = url
  lookShow.value = true
}
// 编辑视频
const editId=ref('')
const addShow = ref(false)
const addForm = reactive({
})
const videoEdit=(id:string)=>{
  addShow.value =true
  editId.value =id
}
const close = () => {
  addPool.value = {} as KzPool
  addShow.value = false
}
const addPool = ref({} as KzPool)

emiter.on('video_custom', (val:KzPool) => {
  addPool.value = val
})
const setBanner = async (type:0|1, order_id?:number|string) => {
  let videoPool: string[] =[]
videoPool.push(addPool.value.source_url)
  const { status } = await articleVideosave_api({
     order_id:editId.value,
    urls:videoPool
  })
  console.log(editId.value);
  
  console.log(addPool.value);
  
  if(status == 1){
    close()
    getList()
  }
}
defineExpose({
  getData
})
// 列表
const getList = async ()=>{
  loading.value = true
  const res = await videoList_api({
    size: size.value,
    current: page.value,
    ...inputSearch,
    startTime:inputSearch.create_time[0],
    endTime:inputSearch.create_time[1],
  })
  console.log(res);
  
  loading.value = false
  if(res.status == 1){
    totle.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()

</script>

<script lang="ts">
export default { name:'个性化内容库-视频库' }
</script>
<style lang="scss" scoped>
    .fcss{
      z-index: 20;
      margin-right: 6px;
    }
     .mycard{
      padding-top: 20px;
    }
    .img-dialog {
      display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
    }
    .image-slot {
       display: flex;
        justify-content: center;
        align-items: center;
    }
    .uptext{
      display: block;
      width: 110px;
      height: 50px;
    }
    :deep(.videobox){
  .el-dialog__body{
    padding: 0;
    height: calc(100% - 55px);
     }
    }
    .show_video{
      width: 100%;
      height: 100%;
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
</style>