<template>
  <KzUserDataDetails :get-list-api="getMsgUserList_api"/>
</template>

<script setup lang="ts">
import { getMsgUserList_api } from '@/api/findC'
import KzUserDataDetails from "@/components/KzUserDataDetails.vue";
</script>