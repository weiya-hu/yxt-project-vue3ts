<template>
  <router-view #default="{ Component }" :key="$route.path">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>