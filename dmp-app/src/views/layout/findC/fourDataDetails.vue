<template>
  <KzUserDataDetails :get-list-api="getFourUserList_api"/>
</template>

<script setup lang="ts">
import { getFourUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>

<style scoped lang="scss">
</style>