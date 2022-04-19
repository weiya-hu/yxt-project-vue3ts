<template>
  <div class="banner_page_component">
    <el-card class="mycard">
      <template #header>
        <div class="fsc f1">
          <div>使用中<span class="color999">（{{list.length}}）</span></div>
          <el-link type="primary" v-if="list.length" target="_blank" :href="'//' + yxtUrl.domain + pageProps.url">查看效果<el-icon><arrow-right /></el-icon></el-link>
        </div>
      </template>
      <div class="imgs_list flex">
        <div class="imgs_item" v-for="(v, i) in list" :key="i">
          <div class="imgbox">
            <img :src="v.cover_url||v.source_url" alt="">
            <div class="lookicon fcc lookhover" @click="lookBanner(i)">
              <el-icon size="20px"><zoom-in/></el-icon>
            </div>
            <div class="videoicon fcc lookhover" v-if="v.source_type == 2"  @click="lookVideo(v.source_url)">
              <el-icon size="40px"><caret-right/></el-icon>
            </div>
          </div>
          <div class="imginfo">
            <div class="imgname els">{{v.banner_name}}</div>
            <div class="imglink fcs">
              <span class="fcc">{{v.link_url ? '链接：' : '无链接'}}</span>
              <el-link type="primary" v-if="v.link_url" target="_blank" :href="'//' + v.link_url">{{v.link_url}}</el-link>
            </div>
            <div class="fsc imgicon">
              <div class="fcs">
                <el-icon size="14px"><pointer /></el-icon>
                <span>0</span>
              </div>
              <div @click="setBanner(0, v.material_id)" class="chover">下架</div>
            </div>
          </div>
        </div>
        <div class="imgs_item emptybox fc fcc" v-for="v in (5 - list.length)" @click="addShow = true" :key="v">
          <img :src="empty_i" alt="">
          <div>可用空位</div>
        </div>
      </div>
      
    </el-card>

    <el-dialog v-model="addShow" title="上传图片" width="380px" @close="close">
      <el-form :model="addForm">
        <el-form-item label="选择素材" required label-width="90px">
          <div class="sel_pool fcc" @click="showKzPool('sel_banner')">
            <div class="poolbox" v-if="addPool.id">
              <img :src="addPool.cover_url||addPool.source_url" alt="">
              <div class="lookicon fcc lookhover" @click.stop="lookImage([addPool.cover_url||addPool.source_url],0)">
                <el-icon size="14px"><zoom-in/></el-icon>
              </div>
              <div class="videoicon fcc lookhover" v-if="addPool.source_type == 2"  @click.stop="lookVideo(addPool.source_url)">
                <el-icon size="20px"><caret-right/></el-icon>
              </div>
            </div>
            <div class="fc fcc" v-else>
              <el-icon><plus/></el-icon>
              <div class="file_name">点击添加</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="添加链接" prop="link" label-width="90px">
          <el-input v-model="addForm.link" placeholder="请输入链接"/>
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="setBanner(1)" :disabled="!addPool.id">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { ArrowRight, ZoomIn, CaretRight, Plus, Pointer } from '@element-plus/icons-vue'
import { showKzPool } from '@/utils/index'
import emiter from '@/utils/bus'
import { lookImage, lookVideo } from '@/utils/index'
import { getBannerList_api, setBanner_api } from '@/api/website/banner'
import empty_i from '@/assets/images/empty.png'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'

const store = mainStore()
const yxtUrl = computed(() => store.state.yxtUrl)
const pageProps = ref({
  type:1,
  url:''
})
const route = useRoute()
switch (route.name) {
  case 'BannerProduct':
    pageProps.value.type = 2
    pageProps.value.url = '/product.html'
    break;
  case 'BannerSales':
    pageProps.value.type = 3
    pageProps.value.url = '/sales.html'
    break;
  case 'BannerVipdata':
    pageProps.value.type = 4
    pageProps.value.url = '/vipdata.html'
    break;
  case 'BannerAttract':
    pageProps.value.type = 5
    pageProps.value.url = '/attract.html'
    break;
  case 'BannerMember':
    pageProps.value.type = 6
    pageProps.value.url = '/member.html'
    break;
  case 'BannerHelp':
    pageProps.value.type = 7
    pageProps.value.url = '/help.html'
    break;
  case 'BannerNavigation':
    pageProps.value.type = 8
    pageProps.value.url = '/navigation.html'
    break;
  default:
    pageProps.value.type = 1
    pageProps.value.url = ''
    break;
}

const list = ref<any[]>([])
const getList = async () => {
  const { status, body } = await getBannerList_api({ sectionType : pageProps.value.type })
  if(status == 1){
    list.value = body
  }
}
getList()

const lookBanner = (i:number) => {
  const blist = list.value.map(v => v.cover_url || v.source_url)
  lookImage(blist, i)
}

const addShow = ref(false)
const addForm = reactive({
  link:''
})
const close = () => {
  addForm.link = ''
  addPool.value = {} as KzPool
  addShow.value = false
}
const setBanner = async (type:0|1, id?:number|string) => {
  const { status, body } = await setBanner_api({
    id: id ? id : addPool.value.id,
    section_type: pageProps.value.type,
    status: type,
    link_url:addForm.link
  })
  if(status == 1){
    close()
    getList()
  }
}
const addPool = ref({} as KzPool)
emiter.on('sel_banner', (val:KzPool) => {
  addPool.value = val
})

</script>

<style scoped lang="scss">
.banner_page_component{
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
    .emptybox{
      font-size: 14px;
      color: $color999;
      padding: 50px 0;
      img{
        width: 50%;
        height: 100px;
      }
      &:hover{
        cursor: pointer;
        border-color: $dfcolor;
      }
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