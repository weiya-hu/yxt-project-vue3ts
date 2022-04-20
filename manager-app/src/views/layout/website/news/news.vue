<template>
  <div class="news-container">
    <div class="ftitle">资讯中心</div>
    <div class="news-handle">
      <el-button type="primary" @click="drawer2 = true">分类管理</el-button>
      <el-button type="primary" @click="drawer2 = true">数据源更新</el-button>
      <el-button type="primary" @click="$router.push('/website/articleAdd')">添加</el-button>
    </div>
    <div class="news-search">
      <el-card class="mycard">
        <el-form :inline="true" label-position="right" :model="newsForm"  ref="manageRef" class="demo-form-inline" label-width="120px" style="max-width: 1250px">
          <div class="topitems">
            <el-form-item label="关键字：" prop="keyword">
            <el-input v-model="newsForm.keyword" placeholder="输入搜索"  maxlength="36"/>
          </el-form-item>
          <el-form-item label="作者：" prop="author">
            <el-input v-model="newsForm.author" placeholder="输入搜索" maxlength="36"/>
          </el-form-item>
          <el-form-item label="分类：" prop="itemize">
            <el-select v-model="newsForm.itemize" placeholder="请选择">
              <el-option
                v-for="item in typeDate"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="状态：" prop="status">
            <el-select v-model="newsForm.status" placeholder="请选择">
              <el-option label="草稿" value="0" />
              <el-option label="审核中" value="1" />
              <el-option label="驳回" value="2" />
              <el-option label="已通过" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="审核结果：" prop="reslut">
            <el-select v-model="newsForm.reslut" placeholder="请选择">
              <el-option label="离线" value="3" />
              <el-option label="在线" value="4" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="check-btns">
              <el-button type="primary" size="large" @click="wordSearch">查询</el-button>
              <el-button type="primary" size="large" @click="resetForm()">重置</el-button>
            </div>
          </el-form-item>
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="news-content">
      <div class="news-tips">
              <span>线上咨讯：{{statisticsDate.audit}}</span>
              <span>待审核：{{statisticsDate.online}}</span>
              <span>今日新增：{{statisticsDate.increase}}</span>
            </div>
      <el-card class="mycard" header="资讯列表">
        <template #header>
          <div class="card-header">
            <span>资讯列表</span>
            
          </div>
        </template>
      <div class="mytable">
        <el-table :data="newsData" border >
          <el-table-column property="title" label="文章标题" width="230"/>
          <el-table-column property="author" label="作者" width="180"/>
          <el-table-column property="type_name" label="分类" width="160"/>
          <el-table-column property="create_time" label="创建时间" width="200">
            <template #default="{row}">
              <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
            </template>
          </el-table-column>
          <el-table-column property="readed" label="查看量"/>
          <el-table-column property="collectioned" label="收藏量"/>
          <el-table-column property="shared" label="分享数"/>
          <el-table-column property="commented" label="评论数"/>
          <el-table-column property="source" label="审核结果" width="120">
            <template #default="{row}">
              <div class="ss">
                <div class="point" :style="row.state == 1?'background:#FFB700':row.state == 2?'background:#E40000':row.state == 0?'background:#51A1FC':'background:#24BD13'"></div>
                <span>{{row.state == 1?'审核中':row.state == 2?'驳回':row.state == 0?'草稿':'已通过'}}</span>          
              </div>
            </template>
          </el-table-column>
          <el-table-column property="source" label="状态">
            <template #default="{row}">
              <div class="ss">
                <div class="point" :style="row.state == 4?'background: #51A1FC;': 'background:#24BD13;'"></div>
                <span> {{row.state == 4?'在线':'离线'}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template #default="{row}">
              <div class="fcs" >
                <el-link type="primary" @click="$router.push('/website/newsdetails?id='+row.id)">查看</el-link>
                <div class="line"></div>
                <el-link type="primary" v-if="row.state == 4" @click="getNewsDown(row.id)">下线</el-link>
                <el-link type="primary" v-if="row.state == 3" @click="getNewsUp(row.id)">上线</el-link>
                <el-link type="primary" v-if="row.state == 1" @click="$router.push('/website/examine?id='+row.id)">审核</el-link>
                <div class="line"></div>
                <el-link type="primary" v-if="row.state == 2||row.state == 3|| row.state ==0"  @click="getDel(row.id)">删除</el-link>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div> 
        <MyPage :total="total" v-model:page="page" @change="newsList" v-model:size="size"/>
        <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="getDelDate"/>
      </el-card>
    </div>
    <div class="type-tips">
      <el-drawer v-model="drawer2" :direction="direction">
        <template #title>
          <div class="tips-nav">
            <span>分类管理</span>
          </div>
        </template>
        <template #default>
          <ul>
            <div class="btns">
              <el-button type="primary"  class="typeAdd">添加</el-button>
            </div>
            <li v-for="(v,i) in typeDate" :key="v.id">
              <div class="txt">{{v.name}}</div>
              <div class="handle">
                <div class="iconImg" v-for="(v,i) in typeImg" :key="v.icon">
                  <img :src="v.icon" alt="">
                </div>
              </div>
            </li>
          </ul>
        </template>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">取消</el-button>
            <el-button type="primary" @click="confirmClick">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import { formatDate } from '@/utils/date';
import { ElMessageBox } from 'element-plus'
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import index_1 from '@/assets/images/index_1.png'
import index_2 from '@/assets/images/index_2.png'
import {news_api,statistics_api,typeList_api,newsUp_api,newsDown_api,newsDel_api} from '@/api/website';

const page = ref(1)
const total = ref(0)
const size = ref(10)
interface SData {
  size:number,
  current:number,
  author:string,
  keyword:string,
  state:number,
}
const newsData = ref<SData[]>([])
const newsList= async ()=>{
  const res = await news_api({
    current:page.value,
    size:size.value,
  })
  if(res.status==1){
    newsData.value=res.body.records
    total.value = res.body.total  
  }
}
newsList()
const wordSearch =()=>{
  newsList()
}
const statisticsDate = ref<any>({})
const statisticsList = async ()=>{
  const res =await statistics_api()
  if(res.status==1){
    statisticsDate.value = res.body
    console.log(res);
  }
}
statisticsList()
const typeDate = ref<any>({})
const typeList = async ()=>{
  const res =await typeList_api()
  if(res.status==1){
    typeDate.value = res.body
    console.log(res);
  }
}
typeList()

const newsForm = reactive({
  keyword: '',
  author: '',
  itemize:'',
  status:'',
  reslut:''
})

const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const typeImg=ref([
  {
    name:'编辑',
    icon:index_1
  },
   {
    name:'删除',
    icon:index_1
  },
   {
    name:'详情',
    icon:index_2
  }
])
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
const manageRef= ref<any>({})
const resetForm = () => {
  console.log('重置')
  manageRef.value.clearValidate()
  manageRef.value.resetFields()
};

// 上下线操作
const DownId = ref('')
const getNewsDown =(id:string)=>{
  DownId.value=id
  newsDown()
}
const newsDown=async()=>{
  const res = await newsDown_api({id:DownId.value}).then((res:res)=>{
    if(res.status==1){
      newsList()
    }
  })
}
const upId = ref('')
const getNewsUp =(id:string)=>{
  upId.value=id
  newsUp()
}
const newsUp=async()=>{
  const res = await newsUp_api({id:upId.value}).then((res:res)=>{
    if(res.status==1){
      newsList()
    }
  })
}

// 删除
const delId = ref('')
const delShow = ref(false)
const getDel = (id:string)=>{
  delId.value = id
  delShow.value = true
}
const getDelDate = async()=>{
  newsDel_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      newsList()
      delShow.value = false
    }
  })
}

</script>

<style scoped lang="scss">
.news-handle{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin:10px 20px;
  .tj,.gl,.update{
    width:130px;
    height: 40px;
    border: 1px solid #333;
    color:#333
  }
}

.news-content{
  padding: 20px;
  .news-tips{
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
    span{
        margin-left: 15px;
    }
  } 
}
.line{
  margin-left: -3px;
}
.news-search{
  padding: 20px;
}
.topitems{
  margin-top:25px;
  width: 1250px;
  .el-form-item{
    margin-right: 40px;
  }
  .el-input{
    width: 250px;
  }
  .el-select--default{
    width: 250px;
  }
  
  :deep(.el-select){
    width: 250px;
  }
  .check-btns{
    display: flex;
    justify-content: flex-end;
    width:1200px;
  }
}
//侧边分类弹窗
.type-tips{
  :deep(.el-drawer){
    width: 20% !important;;
  }
  .el-drawer--header{
    background-color: #333!important;;
    color: #fff!important;;
  }
  ul{
    padding: 10px;
    width:300px;
    .btns{
      display: flex;
      justify-content: flex-end;
      margin:0 18px 15px 0;
    }
    li{
      border:1px solid #999;
      border-radius: 4px;
      margin-bottom: 8px;
      width:260px;
      height:40px;
      line-height: 40px;
      display:flex;
      flex-direction: row;
      
     
      .txt{
       margin-left: 8px; 
      }
      .handle{
        display:flex;
        flex-direction: row;
        flex: 1;
        justify-content: flex-end;
        img{
          width:20px;
          height:20px;
          margin-right: 5px;
        }
      }
    }
  }
}
.ss{
  margin:20px 0;
  font-size: 14px;
  .point{
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  #24BD13;
    border-radius: 50%;
    margin: 7px 15px 3px 0;
  }
}
.news-content{
  position: relative;
  .news-tips{
    position: absolute;
    right: 100px;
    top:40px;
  }
}
</style>