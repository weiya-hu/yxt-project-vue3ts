<template>
  <el-table-column v-if="type==='text'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
      <div class="flexl">
        <div >{{prop && row[prop]?row[prop]:'---'}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='link'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
        <el-link type="primary" :href="row.website">{{ row.website }}</el-link>
      </template>
  </el-table-column>
  <el-table-column v-if="type==='select'" type="selection" :width="width" align="center" />
  <el-table-column v-if="type==='status'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div class="flexl">
        <div :class="row.status === 1?'calculating':'calculated'"></div>
        <div >{{row.status?'计算完成':'计算中'}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='date'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div>{{Format('yyyy-MM-dd',new Date(row.date)) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='operateLook'" :label="lable" :min-width="width">
    <template #default="{row}">
      <div v-for="(item,index) in operatButton" :key="index" class="operate-button" @click="operate(index,row)">{{row.status?item:'---'}}</div>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
  import { toRefs} from 'vue'
  import {Format} from '@/utils/date'
  const props = withDefaults(defineProps<{
    type:string,
    lable?:string,
    prop:string,
    width:number,
    operatButton?:string[]
  }>(),{})


  const emit = defineEmits(['click'])
  const operate=(index:number,row:any)=>{
    row.status && emit('click',index)
  }
  const {type,lable,prop,width,operatButton} =toRefs(props)

</script>

<style scoped lang="scss">
  .calculating{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2BD34E;
    margin-right: 8px;
  }
  .calculated{
    width: 8px;
    height: 8px;
    background: #2D68EB;
    border-radius: 50%;
    margin-right: 8px;
  }
  .operate-button{
    font-size: 14px;
    color: #2D68EB;
    cursor: pointer;
  }
</style>