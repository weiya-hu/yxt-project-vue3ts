<template>
  <div class="findc_page">
    <router-view #default="{ Component }">
      <transition name="fade">
        <keep-alive :include="keepList" :max="3">
          <component :is="Component"/>
        </keep-alive>
      </transition>
      <!-- <transition name="fade">
        <component :is="Component" v-if="!$route.meta.keepAlive"/>
      </transition> -->
    </router-view>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { mainStore } from '@/store/index'
const store = mainStore()
const keepList = computed(() => store.state.keepList)
console.log(keepList.value,'keepList');

</script>

<style scoped>

</style>