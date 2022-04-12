<template>
  <div class="top_btns fsc">
    <el-button size="large" type="primary" @click="emit('add')">&emsp;创建&emsp;</el-button>
    <!-- <div class="rt fcs">
      <el-button size="large">同步SCRM</el-button>
      <el-button size="large">同步官网</el-button>
      <el-button size="large">同步DSP系统</el-button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
/**
 * 顶部按钮组
 * @author chn 
*/

const emit = defineEmits(['add', 'scrm', 'main', 'dsp'])

</script>

<style scoped lang="scss">
.top_btns{
  margin-bottom: 20px;
}
</style>