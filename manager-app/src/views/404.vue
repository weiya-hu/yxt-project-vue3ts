<template>
  <div class="page_404 fcc">
    <el-result
      icon="error"
      title="Error 404"
      sub-title="未找到页面，请检查浏览器地址"
    >
      <template #extra>
        <el-button type="primary" @click="$router.back">返回</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.page_404 {
  height: 100%;
}
</style>
