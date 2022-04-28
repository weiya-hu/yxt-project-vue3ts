<template>
  <KzUserDataDetails :get-list-api="getAdUserList_api"/>
</template>

<script setup lang="ts">
import { getAdUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>

<style scoped lang="scss">
</style>