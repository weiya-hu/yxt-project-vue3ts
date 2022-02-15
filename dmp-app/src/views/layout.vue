<template>
  <div class="layout_page">
    <el-row class="layout_top">
      <el-col class="logobox" :span="24">
        <img :src="logo_i" alt="" />
      </el-col>
    </el-row>
    <el-row class="layout_content">
      <el-col :span="4" class="layout_nav">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="/user"
          text-color="#fff"
          router
          class="yxtnav"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/user">
            <el-icon><icon-menu /></el-icon>
            <span>user</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import { provide, reactive, ref } from 'vue'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout_page {
  height: 100%;
  .logobox {
    height: 100px;
    background-color: aqua;
    padding: 20px;
  }
  .layout_content {
    height: calc(100% - 100px);
    .layout_nav {
      background-color: #545c64;
      .yxtnav {
        border-right: none;
      }
    }
  }
}
</style>
