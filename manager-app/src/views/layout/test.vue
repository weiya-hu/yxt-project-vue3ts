<template>
  <div class="company_page">
    <div @click="$router.push('companydetails')">去详情</div>
    <Mypage :total="50" v-model="page"/>

    <el-card class="mycard">
      <template #header>
        <div class="fsc">
          <span>Card name</span>
          <el-button type="primary">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>

    <el-card class="mycard mt20">
      <template #header>
        <div class="fsc">
          <span>Card name</span>
          <el-button type="primary">Operation button</el-button>
        </div>
      </template>
      <el-descriptions :column="2">
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-tabs
      v-model="activeName"
      type="border-card"
      class="mytabs mt20 mb20"
    >
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

    <el-tree :data="data" :props="defaultProps" show-checkbox draggable node-key="id" ref="lvtree" :default-checked-keys="[4,5]"/>
    <el-button type="primary" @click="getlv" class="mt20">获取</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mypage from "@/components/Mypage.vue";

const page = ref(1)

const activeName = ref('first')

const defaultProps = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}

const data = [
  {
    id: 1,
    label: 'Level one 1 id:1',
    children: [
      {
        id: 3,
        label: 'Level two 2-1 id:3',
        children: [
          {
            id: 4,
            label: 'Level three 3-1-1 id:4',
          },
          {
            id: 5,
            label: 'Level three 3-1-2 id:5',
          },
        ],
      },
      {
        id: 2,
        label: 'Level two 2-2 id:2',
        children: [
          {
            id: 6,
            label: 'Level three 3-2-1 id:6',
          },
          {
            id: 7,
            label: 'Level three 3-2-2 id:7',
          },
        ],
      },
    ],
  },
]

const lvtree = ref()
const getlv = ()=>{
  const id = lvtree.value.getCheckedKeys() // 选中的
  const hid = lvtree.value.getHalfCheckedKeys() // 半选中
  console.log(id,hid);
}

</script>

<style scoped lang="scss">

</style>