<template>
  <div class="big_data">
    <!-- <div @click="$router.push('teldatadetails')">去详情</div> -->
    <Mypage :total="50" v-model="page"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mypage from "@/components/Mypage.vue";
const page = ref(1)
</script>

<script lang="ts">
export default { name:'BigData' }
</script>

<style scoped lang="scss">

</style>