<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  font-size: 100px;
}
.p-relative {
  position: relative;
}
</style>
