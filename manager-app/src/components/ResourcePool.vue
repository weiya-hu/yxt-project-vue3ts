<template>

  <el-dialog v-model="show" title="资源库" @close="closeLib">
    <el-tabs tab-position="left">
      <el-tab-pane label="图片库">
        <div class="imageslibrary" :class="type == 'sel'?'images_sel':''">
          <div class="imgsel fcs">
            <el-input placeholder="请输入图片名关键字" class="mr20" style="width:200px"></el-input>
            <el-select v-model="imgType" placeholder="请选择图片类型">
              <el-option :label="v.name" :value="v.value" v-for="(v,i) in imgTypeArr" :key="i"/>
            </el-select>
            <el-button type="primary" class="ml20">搜索</el-button>
            <el-button type="primary">上传</el-button>
          </div>
          <div class="imglist fcs">
            <div class="imgitem flex fc mt20 mr20" :class="i==index?'active':''" v-for="(v,i) in 10" :key="v" @click.stop="index = i">
              <div class="imgbox">
                <img :src="empty_i" alt="">
                <div class="lookicon fcc">
                  <el-icon><zoom-in/></el-icon>
                </div>
                <div class="imgsel fcc faend" v-if="i==index && type == 'sel'">
                  <el-icon><check /></el-icon>
                </div>
              </div>
              <div class="imginfo">
                <div class="imgname els">图片名{{v}}<span>其他</span></div>
                <div class="fcs fjend imgicon">
                  <el-icon class="chover" @click.stop="downloadImage"><download /></el-icon>
                  <el-icon class="chover"><copy-document /></el-icon>
                  <el-icon class="chover"><delete /></el-icon>
                </div>
              </div>
            </div>
          </div>
          <Mypage v-model="page" :total="50"/>
        </div>
        
      </el-tab-pane>
      <el-tab-pane label="视频库">
        
      </el-tab-pane>
    </el-tabs>
    <div class="fjend mt20" v-if="type == 'sel'">
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
import { Download, CopyDocument, Delete, ZoomIn, Check } from '@element-plus/icons-vue'
import emiter from '@/utils/bus'
import Mypage from "@/components/Mypage.vue";
import empty_i from '@/assets/images/empty.png'

const closeLib = ()=>{
  index.value = 0
  type.value = ''
  page.value = 1
  show.value = false
}

const imgTypeArr = [
  {name:'其他',value:1},
]
const imgType = ref(null)

const index = ref(0)
const sureSel = ()=>{
  show.value = false
  emiter.emit('sureSel', empty_i)
}

const page = ref(1)
const show = ref(false)
const type = ref('')

emiter.on('poolShow', (value:string)=>{
  show.value = true
  type.value = value
  // emiter.off('poolShow')
})

const downloadImage = ()=>{
  console.log(123)
}
</script>

<script lang="ts">
export default { name:'Company' }
</script>

<style scoped lang="scss">
.imageslibrary{
  .imglist{
    flex-wrap: wrap;
    .imgitem{
      border: 1px solid $coloreee;
      border-radius: 4px;
      overflow: hidden;
      width: 140px;
      .imgbox{
        position: relative;
        img{
          width: 140px;
          height: 140px;
        }
        .lookicon{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background-color: rgba(0,0,0,0.5);
          .el-icon{
            color: #fff;
            cursor: pointer;
          }
        }
      }
      .imginfo{
        padding: 10px;
        .imgname{
          span{
            font-size: 12px;
            color: $colorbbb;
            margin-left: 10px;
          }
        }
        .imgicon{
          margin-top: 10px;
          .el-icon{
            margin-left: 5px;
          }
        }
      }
    }
  }
}
.images_sel{
  .imgitem{
    &:hover{
      cursor: pointer;
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