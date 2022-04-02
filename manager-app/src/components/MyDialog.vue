<template>
  <el-dialog v-model="modelValue" :title="title" :width="type=='kf'?'280px':'400px'" v-if="type=='kf'" @close="close" :show-close="false" custom-class="kf_dialog">
    <template #title v-if="type=='kf'">
      <div class="fcc kf_title">联系客服</div>
    </template>
    <template #default>
      <div class="fcc fc" v-if="type=='kf'">
        <img :src="kf_code_i" alt="">
        <div class="tip">请扫描上方二维码，联系客服人员</div>
      </div>
      <div class="fcc msg" v-else>{{msg}}</div>
    </template>
    <template #footer>
      <div class="fcc" v-if="type=='kf'">
        <el-button type="primary" @click="close">我知道了</el-button>
      </div>
      <div v-else>
        <div class="fcc" v-if="btn==2">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">确认</el-button>
        </div>
        <div class="fcc" v-else>
          <el-button type="primary" @click="close">我知道了</el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
/**
 * 简易的居中布局弹窗 和 客服弹窗
 * @author chn 
*/
import kf_code_i from '@/assets/images/kf_code.png'
const props = withDefaults(defineProps<{
  modelValue:boolean, // 是否显示
  title?:string, // 标题
  msg?:string, // 内容
  type?:string, // 'kf' 客服 
  btn?:number, // 按钮数 1/2
}>(),{
  title:'提示',
  type:'',
  msg:'',
  btn:2,
})

//sure 点击确认时
const emit = defineEmits(['update:modelValue','sure'])

const close = ()=>{
  emit('update:modelValue',false)
}
const sure = ()=>{
  emit('sure')
}
</script>

<style scoped lang="scss">
.my_dialog{
  .msg{
    font-size: 14px;
    color: #333;
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