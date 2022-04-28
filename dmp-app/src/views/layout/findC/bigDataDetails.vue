<template>
  <KzUserDataDetails :get-list-api="getBigUserList_api"/>
</template>

<script setup lang="ts">
import { getBigUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>

<style scoped lang="scss">
</style>