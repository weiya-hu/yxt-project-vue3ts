<template>

  <el-dialog v-model="show" title="资源库" @close="closeLib" custom-class="pool_box">
    <el-button type="primary" class="upbtn" @click="goUp">去上传</el-button>
    <el-tabs v-model="Tabtype">
      <el-tab-pane label="图片" :name="1">
        <div class="imageslibrary images_sel">
          <div class="imgsel fcs">
            <el-input placeholder="请输入图片名关键字" style="width:200px" v-model="word" clearable></el-input>
            <el-button type="primary" class="ml20" @click="getList">搜索</el-button>
          </div>
          <div class="imglist fcs" v-if="total">
            <div class="imgitem flex fc mt20 mr20" :class="i==index?'active':''" v-for="(v,i) in list" :key="v.id" @click.stop="index = i" @dblclick="handTwo(i)">
              <div class="imgbox">
                <img :src="v.source_url" alt="">
                <div class="lookicon fcc" @click="look(i)">
                  <el-icon><zoom-in/></el-icon>
                </div>
                <div class="imgsel fcc faend" v-if="i==index">
                  <el-icon><check /></el-icon>
                </div>
              </div>
              <div class="imginfo">
                <div class="imgname els">{{v.source_name}}</div>
              </div>
            </div>
          </div>
          <MyEmpty v-else/>
          <Mypage v-model="page" :total="total"/>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="视频" :name="2">
        
      </el-tab-pane>
    </el-tabs>
    <div class="fjend mt20">
      <el-button @click="closeLib">取消</el-button>
      <el-button type="primary" @click="sureSel">选择</el-button>
    </div>
  </el-dialog>

</template>

<script setup lang="ts">
/**
 * 资源库组件
 * @author chn 
*/
import { ref } from 'vue'
import { ZoomIn, Check } from '@element-plus/icons-vue'
import emiter from '@/utils/bus'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getPoolList_api } from '@/api/system'
import { lookImage } from '@/utils/index'
import { useRouter } from 'vue-router'

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

const closeLib = ()=>{
  show.value = false
}

const index = ref(0)
const sureSel = () => {
  show.value = false
  emiter.emit(selEmitFnName.value, list.value[index.value])
}
const handTwo = (i:number) => {
  show.value = false
  emiter.emit(selEmitFnName.value, list.value[i])
}

const show = ref(false)
const Tabtype = ref(1)
const selEmitFnName = ref('')
emiter.on('poolShow', ({ callback, type } : { callback:string, type?:1 | 2 })=>{
  selEmitFnName.value = callback
  Tabtype.value = type ? type : 1
  show.value = true
})

const look = (i:number) => {
  const imgs = list.value.map(v => v.source_url)
  lookImage(imgs, i)
}

const router = useRouter()
const goUp = () => {
  show.value = false
  router.push(Tabtype.value == 1 ? '/system/resourcepool/imagepool' : '/system/resourcepool/videopool')
}

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
        height: 140px;
        img{
          width: 100%;
          height: 100%;
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
      }
      .imginfo{
        padding: 10px;
        .imgname{
          line-height: 1.1;
        }
        .imgicon{
          margin-top: 10px;
          .el-icon{
            margin-left: 5px;
          }
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