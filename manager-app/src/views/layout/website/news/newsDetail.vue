<template>
  <div class="article_details">
    <DetailsHeader/>
    <div class="content">
      <div class="title">{{body.title}}</div>
      <div class="nav-tips">
          <span>分类：{{body.type_name}}</span>                  
          <span>查看量：{{body.readed}}</span>
          <span>{{formatDate(new Date(body.create_time),'yyyy-MM-dd hh:mm:ss')}}</span><br>
          <p>
          <span>{{body.state==0?'草稿':body.state==1?'审核中':body.state==2?'驳回':'已通过'}}</span>
          <span> {{body.state==4?'在线':'离线'}}</span><br>
          </p>
          <p>{{body.fail_reason}}</p>
          <el-button type="primary" class="tj" size="large" v-if="body.state == 1" @click="goExamine(id)">审核</el-button>
          <el-button type="primary" class="tj" size="large" v-if="body.state == 3" @click="getNewsUp(id)">上线</el-button>
          <el-button type="primary" class="tj" size="large" v-if="body.state == 4" @click="getNewsDown(id)">下线</el-button>
          <el-button type="primary" class="tj" size="large" v-if="body.state == 2||body.state == 3|| body.state ==0" @click="getDel(id)">删除</el-button>
      </div>
      <div class="news-container">
        <el-tabs type="border-card">
          <el-tab-pane label="文章正文">
            <el-card class="mycard">
              <div v-html="body.content"></div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane :label="'收藏用户'+'('+navTxt[1].num+')'" >
            <el-card class="mycard">
              <div>
                <el-table :data="collectionData" border >
                  <el-table-column property="name" label="用户名" width="230"/>
                  <el-table-column property="mobile" label="电话" width="230"/>
                  <el-table-column property="create_time" label="收藏时间" width="200">
                    <template #default="{row}">
                      <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane :label="'分享用户'+'('+navTxt[2].num+')'" >
             <el-card class="mycard">
              <div>
                <el-table :data="shareData" border >
                  <el-table-column property="name" label="用户名" width="200"/>
                  <el-table-column property="mobile" label="电话" width="200"/>
                  <el-table-column property="shareMode" label="分享方式" width="200">微信</el-table-column>
                  <el-table-column property="time" label="分享时间" width="230">
                    <template #default="{row}">
                      <span>{{new Date(row.create_time) + row.create_time}}</span>
                      <div v-if="row.create_time">{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
                    </template>
                </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane :label="'评论列表'+'('+navTxt[3].num+')'">
            <ul class="comment-content">
              <li v-for="(v,i) in commentData" :key="v.id">
                <el-card class="mycard ">
                  <div class="comment-card">
                    <el-avatar class="avater" :icon="v.head_url" />
                    <div class="userInfo">
                      <span class="name">{{v.name}}</span>
                      <span class="utime">{{formatDate(new Date(v.update_time),'yyyy-MM-dd hh:mm:ss')}}</span>
                      <span class="c-content">{{v.content}}</span>
                    </div>
                    <div class="shield">
                      <el-switch v-if="v.id" :active-value="1" :inactive-value="0" v-model="v.status" @change="changeShieldStatus(v)"/>
                    </div>
                  </div>
                </el-card>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs> 
        <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="getDelDate"/>   
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import MyDialog from "@/components/MyDialog.vue";
import { formatDate } from '@/utils/date';
import {newsDetail_api,collection_api,comment_api,share_api,newsUp_api,newsDown_api,newsShield_api,newsDel_api} from '@/api/website';


const route = useRoute()
const id = route.query.id as string


interface AForm {
  title:string,
  content:string,
  create_time:number,
  type_name:string,
  readed:number,
  state:number,
  fail_reason:string
}

const body = ref<AForm>({
  title:'',
  content:'',
  create_time:0,
  type_name:'',
  readed:0,
  state:0,
  fail_reason:''
})
const getData = async ()=>{
  const res =await newsDetail_api({id})
  res.status == 1 && (body.value = res.body) 
}
getData()
// 选项卡
const page = ref(1)
const navTxt=ref([
  {
    name:'文章正文',
    txtId:1,
    num:0
  },
  {
    name:'收藏用户',
    txtId:2,
    num:0
  },
  {
    name:'收藏用户',
    txtId:3,
    num:0
  },
  {
    name:'评论列表',
    txtId:4,
    num:0
  }
])
// 收藏
const collectionData = ref<any>([])
const collectionList = async () =>{
  const res = await collection_api({
    current:page.value,
    size:10,
    id:id
  })
  if(res.status==1){
    collectionData.value=res.body.records
    navTxt.value[1].num = res.body.total
  }
}
 collectionList()
// 分享
const shareData = ref<any>([])
const shareList = async () =>{
  const res = await share_api({
    current:page.value,
    size:10,
    id:id
  })

  
  if(res.status==1){
    shareData.value=res.body.records
    navTxt.value[2].num = res.body.total
      console.log(res);
  }
}
shareList()
// 评论
const commentData = ref<any>([])
const commentList = async () =>{
  const res = await comment_api({
    current:page.value,
    size:10,
    id:id
  })
  if(res.status==1){
    commentData.value=res.body.records
    navTxt.value[3].num = res.body.total
  }
}
commentList()

// 上下线操作
const DownId = ref('')
const getNewsDown =(id:string)=>{
  DownId.value=id
  newsDown()

}
const newsDown=async()=>{
  const res = await newsDown_api({id:DownId.value}).then((res:res)=>{
    if(res.status==1){
      getData()
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
      getData()
    }
  })
}
// 审核
const goExamine = (id:string)=>{
  window.location.href='/website/news/examine?id='+id
}
// 屏蔽评论

const changeShieldStatus = async (val:any) => {
   if(val.id){
    const res = await newsShield_api({id:val.id})
  }
}

// 删除

const delShow = ref(false)
const getDel = (id:string)=>{
  delShow.value = true  
}
const getDelDate = async()=>{
  newsDel_api({id}).then((res:res)=>{
    if(res.status == 1){
      delShow.value = false
      window.location.href = '/website/news'
    }
  })
}

</script>

<style scoped lang="scss">
.article_details{
  .el-breadcrumb{
    font-size: 12px;
  }
  .content{
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 16%;
    margin-top: 20px;
    .title{
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      color: $color333;
    }
    .nav-tips{
      margin: 20px 0;
      span{
        margin-right: 50px;
      }
      p{
        margin:15px 0;
        span{
         
        }
      }
      .btns{
        width:100px;
        height:30px;
        margin:5px 10px 10px 0;
      }
    }
    .mycard{
      margin-bottom: 10px;
    }
    .comment-card{
      display: flex;
      flex-direction: row;;
      .avater{
         margin: 10px;
      }
      .userInfo{
        display: flex;
        flex-direction: column;
        margin: 10px;
        .name{
          font-size: 18px;
        }
        .utime{
          font-size: 12px;
          margin-top: 2px;
        }
        .c-content{
          margin-top: 15px;
        }
      }
      .shield{
        flex: 1;
        justify-content: flex-end;
        display: flex;
      }
    }

  }
}
</style>