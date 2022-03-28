<template>
  <div class="resource_article">
    <div class="item" v-for="(v,i) in arr" :key="v.id" :class="{item1:v.name == 'xx',item2:v.id == 1}">{{v.name}}</div>
    <MyPage :total="total" v-model="page" @change="changePage"/>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyPage from "@/components/MyPage.vue";
const arr = ref([
  {name:'hh',id:1},
  {name:'xx',id:2},
  {name:'qq',id:3},
])
const page = ref(1)
const total = ref(30)
const changePage = ()=>{
  console.log(page.value);
}
</script>

<style scoped lang="scss">
.resource_article{
  .hh{
    background-color: red;
  }
}
</style>