<template>
  <div class="my_dialog">
    <el-dialog v-model="modelValue" width="280px" v-if="type=='kf'" @close="close" :show-close="false" custom-class="kf_dialog">
      <template #title>
        <div class="fcc kf_title">联系客服</div>
      </template>
      <template #default>
        <div class="fcc fc">
          <img :src="kf_code_i" alt="">
          <div class="tip">请扫描上方二维码，联系客服人员</div>
        </div>
      </template>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="close">我知道了</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="modelValue" :title="title" width="400px" @close="close" v-else>
      <div class="fcc msg">{{msg}}</div>
      <template #footer>
        <span class="fcc">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//简易的居中布局弹窗 和 客服弹窗
import kf_code_i from '@/assets/images/kf_code.png'
const props = withDefaults(defineProps<{
  modelValue:boolean,
  title?:string,
  msg?:string,
  type?:string,
}>(),{
  title:'提示',
  type:'',
  msg:'',
})

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