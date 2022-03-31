<template>
  <router-view #default="{ Component }">
    <transition name="fade">
      <keep-alive :include="keepList" :max="3">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { mainStore } from '@/store/index'
const store = mainStore()
const keepList = computed(() => store.state.keepList)
</script>

<style scoped>

</style>