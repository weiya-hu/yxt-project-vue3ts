<template>
  <div class="my_dialog">
    <el-dialog v-model="modelValue" :width="urlData.down_type == 2 ? '280px':'400px'" @close="close" :show-close="false" custom-class="kf_dialog">
      <template #title>
        <div class="fcc kf_title">{{urlData.down_type == 2 ? '联系客服下载':'下载链接'}}</div>
      </template>
      <template #default>
        <div class="fcc fc" v-if="urlData.down_type == 2">
          <img :src="urlData.qr_code" alt="">
          <div class="tip">请扫描上方二维码，联系客服人员</div>
        </div>
        <div class="msg" v-else>
          <div class="url">URL链接: <a href="">{{urlData.url}}</a></div>
          <div class="mm">秘钥: <a href="">{{urlData.url_key}}</a></div>
          <div class="tips-txt">复制上述网址后，输入秘钥。可获取下载链接。</div>
        </div>
      </template>
      <template #footer>
        <div class="fcc" v-if="urlData.down_type == 2">
          <el-button type="primary" @click="close">我知道了</el-button>
        </div>
        <div class="fcc" v-else>
          <el-button type="primary" @click="copy(urlData.url)">复制链接</el-button>
        </div>
      </template>
    </el-dialog>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { downList_api } from '@/api/resource'
import useClipboard from 'vue-clipboard3'
import kf_code_i from '@/assets/images/kf_code.png'
/**
 * 下载qrcode或者链接
 * @author pr 
*/
const props = withDefaults(defineProps<{
  modelValue:boolean, // 是否显示
}>(),{
})

const emit = defineEmits(['update:modelValue'])

const close = ()=>{
  emit('update:modelValue',false)
}

const {	toClipboard } = useClipboard();
const copy=async (val:any) => {
  try {
    await toClipboard(val)
  } catch (e) {
    alert('该浏览器不支持自动复制')
	}
}	


const urlData = ref<any>({})
const getData = async (id:string)=>{
  const res = await downList_api({ id})
  if(res.status == 1){
    urlData.value = res.body
  }
}

defineExpose({
  getData
})

</script>

<style scoped lang="scss">
.my_dialog{
  .msg{
    font-size: 14px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .mm{
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .el-button{
    width: 84px;
  }
  .kf_dialog{
    .tip{
      font-size: 12px;
      color: #666;
      margin-top: 16px;
    }
    .kf_title{
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
    .el-button{
      width: 180px;
    }
    .el-dialog__header{
      border-bottom: none;
    }
    img{
      width: 180px;
      height: 180px;
    }
  }
}
</style>