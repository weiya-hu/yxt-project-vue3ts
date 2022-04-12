<template>
  <div class="top_btns fsc">
    <div class="find_number" v-if="total !== ''">
      为您找到<span>&ensp;{{total}}&ensp;</span>家符合条件的客户（<span>*根据政策与监管法规要求，联系人手机号脱敏展示</span>）
    </div>
    <el-button size="large" type="primary" @click="emit('add')" v-else>新增需求</el-button>
    <!-- <div class="rt fcs">
      <el-button size="large">同步SCRM</el-button>
      <el-button size="large">同步CMS</el-button>
      <el-button size="large">同步DSP系统</el-button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
/**
 * 顶部按钮组
 * @author chn 
*/
const props = withDefaults(defineProps<{
  total?:number|string,
}>(),{
  total: ''
})

const emit = defineEmits(['add', 'scrm', 'cms', 'dsp'])

</script>

<style scoped lang="scss">
.top_btns{
  margin-bottom: 20px;
  .find_number{
    font-size: 14px;
    color: #363636;
    display: inline-block;
    span{
      color: #E40000;
    }
  }
}
</style>