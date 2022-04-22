<template>
  <div class="school_page">
    <el-card>
      <el-button-group class="btn_tab">
        <el-button :class="tab == 1 && 'btn_tab_active'" @click="tab = 1">文章</el-button>
        <el-button :class="tab == 2 && 'btn_tab_active'" @click="tab = 2">视频</el-button>
      </el-button-group>
      <div class="long_line"></div>
      <div v-show="tab == 1">
        <div class="fsc mycard">
          <div class="el-card__header">文章列表</div>
          <el-button type="primary">添加</el-button>
        </div>
        <div class="mytable">
          <el-table :data="tableData" border draggable>
            <el-table-column prop="title" label="标题"/>
            <el-table-column prop="article_type" label="分类">
            </el-table-column>
            <el-table-column prop="create_time" label="发布时间">
              <template #default="{ row }">{{formatDate(new Date(row.create_time))}}</template>
            </el-table-column>
            <el-table-column prop="hits" label="查看量"/>
            <el-table-column prop="status" label="状态">
              <template #default="{ row }">
                <div class="fcs">
                  <div class="status_dot" :class="row.status == 1 ? 'sdot_b' : row.status == 2 ? 'sdot_r' : 'sdot_g'"></div>
                  <div>{{row.status == 1 ? '草稿' : row.status == 2 ? '离线' : '在线'}}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="240">
              <template #default="{ row }">
                <div class="fcs">
                  <el-link type="primary" v-if="row.status != 1">查看</el-link>
                  <div class="line" v-if="row.status != 1"></div>
                  <el-link type="primary" v-if="row.status != 1" @click="setStatus(row.id, row.status == 2 ? 3 : 2)">{{row.status == 2 ? '上线' : '下线'}}</el-link>
                  <div class="line" v-if="row.status != 1"></div>
                  <el-link type="primary" v-if="row.status != 3">编辑</el-link>
                  <div class="line" v-if="row.status != 3"></div>
                  <el-link type="primary" v-if="row.status != 3" @click="del(row.id)">删除</el-link>
                </div>
              </template>
            </el-table-column>
            <template #empty>
              <MyEmpty/>
            </template>
          </el-table>
        </div>
        <MyPage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
      </div>

      <MyDialog v-model="delShow" :msg="'此文章删除后无法撤回，请谨慎删除！'" @sure="sureDel"/>

      <div v-show="tab == 2">
        <div class="mycard">
          <div class="el-card__header" style="height:32px">首页展示<span class="color999">（{{toplist.length}}）</span></div>
        </div>
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
      </div>
    </el-card>

    <el-card class="mycard mt20" v-show="tab == 2">
      <template #header>
        <div class="fsc f1">
          <div>所有视频<span class="color999">（{{v_total}}）</span></div>
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
      <MyPage :total="v_total" v-model:page="v_page" @change="getVideoList" v-model:size="v_size"/>
    </el-card>

    <MyDialog v-model="v_delShow" :msg="'确认删除此视频?'" @sure="sureDelVideo"/>

    <el-dialog v-model="addShow" title="添加视频" width="380px" @close="close">
      <el-form :model="addForm" :rules="rules" ref="addFormRef">
        <el-form-item label="选择视频" required label-width="90px">
          <div class="sel_pool fcc" @click="showKzPool('sel_tutorials', 2, true)">
            <div class="poolbox" v-if="addPool.id">
              <img :src="addPool.cover_url" alt="">
              <div class="lookicon fcc lookhover" @click.stop="lookImage([addPool.cover_url],0)">
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
import { getArtList_api, delArt_api, setArt_api } from '@/api/website/service'
import { getSchoolVideoList_api, addSchoolsVideo_api, delSchoolVideo_api, setSchoolVideo_api, getSchoolTopList_api } from '@/api/website/service'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import { formatDate } from '@/utils/date'
import { ZoomIn, CaretRight, Plus, Pointer, CollectionTag } from '@element-plus/icons-vue'
import emiter from '@/utils/bus'
import { showKzPool, lookImage, lookVideo } from '@/utils/index'

const tab = ref(1)

const tableData = ref([])
const page = ref(1)
const size = ref(20)
const total = ref(0)
const getList = async () => {
  const res = await getArtList_api({
    size: size.value,
    current: page.value,
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

const setStatus = async (id:string|number, status:2|3) => {
  const res = await setArt_api({ id, status })
  if(res.status == 1){
    getList()
  }
}

const delId = ref<string|number>('')
const delShow = ref(false)
const del = (id:number|string) => {
  delId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const res = await delArt_api({ id:delId.value })
  if(res.status == 1){
    delShow.value = false
    getList()
  }
}

// 文章结束

const toplist = ref<any[]>([])
const getTopList = async () => {
  const { status, body } = await getSchoolTopList_api({ status : 1 })
  if(status == 1){
    toplist.value = body
  }
}
getTopList()

const v_page = ref(1)
const v_size = ref(20)
const v_total = ref(0)
const list = ref<any[]>([])
const getVideoList = async () => {
  const { status, body } = await getSchoolVideoList_api({
    size: v_size.value,
    current: v_page.value
  })
  if(status == 1){
    v_total.value = body.total
    list.value = body.records
  }
}
getVideoList()

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
const typeList = [
  {
    value: 1,
    label: '分类一',
  },
  {
    value: 2,
    label: '分类二',
  },
  {
    value: 3,
    label: '分类三',
  },
  {
    value: 4,
    label: '分类四',
  },
  {
    value: 5,
    label: '分类五',
  },
]
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
      const { status } = await addSchoolsVideo_api({
        id: addPool.value.id,
        link_url: addForm.link,
        video_type: addForm.video_type,
      })
      if(status == 1){
        close()
        getVideoList()
      }
    }
  })
}

const setBanner = async (type:0|1, id?:number|string) => {
  const { status } = await setSchoolVideo_api({
    id: id ? id : addPool.value.id,
    status: type,
  })
  if(status == 1){
    getVideoList()
    getTopList()
  }
}

const v_delShow = ref(false)
const v_delId = ref<string|number>('')
const delVideo =  (id:number|string) => {
  v_delId.value = id
  v_delShow.value = true
}
const sureDelVideo = async () => {
  const { status } = await delSchoolVideo_api({ id: v_delId.value })
  if(status == 1){
    getVideoList()
    getTopList()
    v_delShow.value = false
  }
}

</script>

<style scoped lang="scss">
.school_page{
  .long_line{
    border-top: 1px solid $coloreee;
    margin-top: -1px;
    margin-bottom: 16px;
  }
  .el-card__header{
    padding-left: 0;
    padding-top: 0;
  }
  .mytable{
    margin-top: 12px;
  }
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