<template>
  <KzUserDataDetails :get-list-api="getBaiduUserList_api"/>
</template>

<script setup lang="ts">
import { getBaiduUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>

<style scoped lang="scss">
</style>