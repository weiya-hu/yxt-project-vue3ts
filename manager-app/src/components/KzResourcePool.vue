<template>

  <el-dialog v-model="show" title="资源库" @close="closeLib" custom-class="pool_box" width="900px" :append-to-body="true">
    <el-button class="upbtn bdc_btn" @click="goUp">去上传</el-button>
    <el-tabs v-model="Tabtype" @tab-click="changeTabs">
      <el-tab-pane label="图片" :name="1" :disabled="tabDisabled == 1">

        <div class="imageslibrary images_sel">
          <div class="imgsel fcs">
            <el-input placeholder="请输入图片名关键字" style="width:200px" v-model="imgWord" clearable></el-input>
            <el-button class="ml20 bdc_btn" @click="wordSearch">搜索</el-button>
          </div>
          <div class="imglist fcs" v-if="imgTotal">
            <div class="imgitem flex fc mt20 mr20" :class="i == imgIndex ? 'active' : ''" v-for="(v,i) in imgList" :key="v.id" @click.stop="imgIndex = i" @dblclick="handTwo(i)">
              <div class="imgbox">
                <img :src="v.source_url" alt="" @load="getImageSize(v.id,$event)">
                <div class="lookicon fcc" @click="look(i)">
                  <el-icon><zoom-in/></el-icon>
                </div>
                <div class="imgsel fcc faend" v-if="i == imgIndex">
                  <el-icon><check /></el-icon>
                </div>
              </div>
              <div class="imginfo">
                <div class="imgname els">{{v.source_name}}</div>
                <div class="imgsize">{{sizeHash[v.id]}}</div>
              </div>
            </div>
          </div>
          <MyEmpty v-else/>
          <Mypage v-model:page="imgPage" :total="imgTotal" @change="changePage" hide-sizes/>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="视频" :name="2" :disabled="tabDisabled == 2">
        
        <div class="imageslibrary images_sel">
          <div class="imgsel fcs">
            <el-input placeholder="请输入视频名关键字" style="width:200px" v-model="videoWord" clearable></el-input>
            <el-button class="ml20" @click="wordSearch">搜索</el-button>
          </div>
          <div class="imglist fcs" v-if="videoTotal">
            <div class="imgitem flex fc mt20 mr20" :class="i == videoIndex ? 'active' : ''" v-for="(v,i) in videoList" :key="v.id" @click.stop="videoIndex = i" @dblclick="handTwo(i)">
              <div class="imgbox">
                <img :src="v.cover_url" alt="">
                <div class="look_videoicon fcc" @click="lookVideo(v.source_url)">
                  <el-icon size="40px"><caret-right/></el-icon>
                </div>
                <div class="imgsel fcc faend" v-if="i == videoIndex">
                  <el-icon><check /></el-icon>
                </div>
              </div>
              <div class="imginfo">
                <div class="imgname els">{{v.source_name}}</div>
                <div class="imgsize">{{formatDate(new Date(v.create_time),'yyyy-MM-dd')}}</div>
              </div>
            </div>
          </div>
          <MyEmpty v-else/>
          <Mypage v-model:page="videoPage" :total="videoTotal" @change="changePage" hide-sizes/>
        </div>

      </el-tab-pane>
    </el-tabs>
    <div class="fjend mt20">
      <el-button @click="closeLib">取消</el-button>
      <el-button type="primary" @click="sureSel" :disabled="Tabtype == 1 ? !imgTotal : !videoTotal">选择</el-button>
    </div>
  </el-dialog>

</template>

<script setup lang="ts">
/**
 * 资源库组件
 * @author chn 
*/
import { ref } from 'vue'
import { ZoomIn, Check, CaretRight } from '@element-plus/icons-vue'
import emiter from '@/utils/bus'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getPoolList_api } from '@/api/system'
import { lookImage, lookVideo } from '@/utils/index'
import { useRouter } from 'vue-router'
import { formatDate } from '@/utils/date'

const imgList = ref<KzPool[]>([])
const imgTotal = ref(0)
const imgPage = ref(1)
const imgWord = ref('')
const imgIndex = ref(0)

const videoList = ref<KzPool[]>([])
const videoTotal = ref(0)
const videoPage = ref(1)
const videoWord = ref('')
const videoIndex = ref(0)

const getList = async () => {
  const { body, status } = await getPoolList_api({
    size: 10,
    current: Tabtype.value == 1 ? imgPage.value : videoPage.value,
    sourceType: Tabtype.value,
    sourceName: Tabtype.value == 1 ? imgWord.value : videoWord.value
  })
  if(status == 1){
    if(Tabtype.value == 1){
      imgList.value = body.records
      imgTotal.value = body.total
    }else{
      videoList.value = body.records
      videoTotal.value = body.total
    }
  }
}

const wordSearch = () => {
  if(Tabtype.value == 1){
    imgPage.value = 1
    imgIndex.value = 0
  }else{
    videoPage.value = 1
    videoIndex.value = 0
  }
  getList()
}

const changePage = () => {
  if(Tabtype.value == 1){
    imgIndex.value = 0
    sizeHash.value = {}
  }else{
    videoIndex.value = 0
  }
  getList()
}

const sizeHash = ref<any>({})
const getImageSize = (id:string|number,e:any) => {
  // 图片加载后获取图片真实宽高
  const a = e.path[0] as HTMLImageElement
  sizeHash.value[id] = a.naturalWidth + '*' + a.naturalHeight
}

const changeTabs = () => {
  Tabtype.value == 1 ? !imgList.value.length && getList() : !videoList.value.length && getList()
}

const closeLib = ()=>{
  show.value = false
}


const sureSel = () => {
  show.value = false
  emiter.emit(selEmitFnName.value, Tabtype.value == 1 ? imgList.value[imgIndex.value] : videoList.value[videoIndex.value])
}
const handTwo = (i:number) => {
  show.value = false
  emiter.emit(selEmitFnName.value, Tabtype.value == 1 ? imgList.value[i] : videoList.value[i])
}

const show = ref(false)
const Tabtype = ref(1)
const tabDisabled = ref(0)
const selEmitFnName = ref('')
emiter.on('kzPoolShow', ({ callbackName, type, disabled } : { callbackName:string, type?:1 | 2, disabled?:Boolean }) => {
  selEmitFnName.value = callbackName
  Tabtype.value = type ? type : 1
  tabDisabled.value = disabled ? type == 1 ? 2 : 1 : 0
  changeTabs()
  show.value = true
})

const look = (i:number) => {
  const imgs = imgList.value.map(v => v.source_url)
  lookImage(imgs, i)
}

const router = useRouter()
const goUp = () => {
  show.value = false
  router.push(Tabtype.value == 1 ? '/system/resourcepool/imagepool' : '/system/resourcepool/videopool')
}

emiter.on('kzPoolClear', (type:1 | 2) => {
  if(type == 1){
    imgWord.value = ''
    imgPage.value = 1
    imgTotal.value = 0
    imgIndex.value = 0
    imgList.value = []
  }else{
    videoWord.value = ''
    videoPage.value = 1
    videoTotal.value = 0
    videoIndex.value = 0
    videoList.value = []
  }
})

</script>

<script lang="ts">
export default { name:'Company' }
</script>

<style scoped lang="scss">
.upbtn{
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 11;
}
.imageslibrary{
  
  .imglist{
    flex-wrap: wrap;
    .imgitem{
      border-radius: 4px;
      overflow: hidden;
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
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background-color: rgba(0,0,0,0.5);
          cursor: pointer;
          .el-icon{
            color: #fff;
          }
        }
        .look_videoicon{
          position: absolute;
          bottom: 50%;
          right: 50%;
          transform: translate(50%,50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          cursor: pointer;
          .el-icon{
            color: #fff;
          }
        }
      }
      .imginfo{
        padding: 10px;
        .imgname{
          line-height: 1.1;
        }
        .imgsize{
          margin-top: 5px;
          color: $color666;
          font-size: 12px;
        }
      }
    }
    .imgitem:nth-child(5n){
      margin-right: 0;
    }
  }
}
.images_sel{
  .imgitem{
    &:hover{
      // cursor: pointer;
      border-color: $dfcolor;
    }
  }
  .active{
    border-color: $dfcolor!important;
    .imgsel{
      position: absolute;
      color: #fff;
      background-color: $dfcolor;
      right: -15px;
      top: -6px;
      width: 40px;
      height: 24px;
      transform: rotate(45deg);
      .el-icon{
        transform: rotate(-45deg);
        margin-bottom: 1px;
      }
    }
  }
}
</style>