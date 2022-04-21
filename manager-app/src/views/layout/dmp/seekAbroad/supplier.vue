<template>
  <div class="supplier">
    <!-- <div @click="$router.push('teldatadetails')">去详情</div> -->
     <MyPage :total="total" v-model:page="page" @change="" v-model:size="size"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mypage from "@/components/Mypage.vue";
const page = ref(1)
const total = ref(0)
const size = ref(10)
</script>

<script lang="ts">
export default { name:'Supplier' }
</script>

<style scoped lang="scss">

</style>