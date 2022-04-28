<template>
  <KzUserDataDetails :get-list-api="getBiddingUserList_api"/>
</template>

<script setup lang="ts">
import { getBiddingUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>

<style scoped lang="scss">
</style>