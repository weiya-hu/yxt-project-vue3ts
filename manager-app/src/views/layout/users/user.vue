<template>
  <div class="user_page">
    <div @click="$router.push('userinfo')">去详情</div>
    <Mypage :total="50" v-model="page"/>

    <div class="dragbox">
      <draggable 
        v-model="myArray" 
        @start="drag=true" 
        @end="drag=false"
        tag="transition-group"
        item-key="order"
        v-bind="dragOptions"
        @change="changeDrag"
      >
        <template #item="{element}">
          <div class="items fcc">{{element.name}}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mypage from "@/components/Mypage.vue";
import draggable from 'vuedraggable'
const page = ref(1)

const myArray = ref([
  {
    "name": "vue.draggable",
    "order": 1
  },
  {
    "name": "draggable",
    "order": 2
  },
  {
    "name": "component",
    "order": 3
  },
  {
    "name": "for",
    "order": 4
  },
  {
    "name": "vue.js 2.0",
    "order": 5
  },
  {
    "name": "based",
    "order": 6
  },
  {
    "name": "on",
    "order": 7
  },
  {
    "name": "Sortablejs",
    "order": 8
  }
])
const drag = ref(false)
const dragOptions ={
  animation: 200,
  ghostClass: "ghost",
  disabled:false
}
  console.log(myArray.value);

const changeDrag = ()=>{
  console.log(myArray.value);
}
</script>

<script lang="ts">
export default { name:'User' }
</script>

<style scoped lang="scss">
.items{
  background-color: #fff;
  width: 200px;
  height: 30px;
  margin-bottom: 5px;
}
.ghost{
  opacity: 0.5;
}
</style>