<template>
  <div class="index_page">
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="`https://dev.yxtong.com/static/images/ib${item}.jpg`" alt="" class="banner">
      </el-carousel-item>
    </el-carousel>
    <div class="fsc index_content">
      <div class="lt">
        <div class="title fcs">
          <img :src="index_1_i" alt="">
          <div>工作台</div>
        </div>
        <div class="icons fcs">
          <div class="fcc item" v-for="item in icons" :key="item.path" @click="goPath(item.path)">
            <img :src="item.icon" alt="">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="rt f1 fc">
        <div class="title fcs">
          <img :src="index_2_i" alt="">
          <div>公告</div>
        </div>
        <div class="notice f1 fc fsc">
          <div class="item fsc w100" v-for="item in 4" :key="item">
            <div class="text">DMP数据源增加高级客户查询功能</div>
            <div class="time">{{formatDate(new Date(),'yyyy-MM-dd')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import index_1_i from '@/assets/images/index_1.png'
import index_2_i from '@/assets/images/index_2.png'
import index_b_i from '@/assets/images/index_b.png'
import index_c_i from '@/assets/images/index_c.png'
import index_m_i from '@/assets/images/index_m.png'
import { formatDate } from '@/utils/date'
import {useRouter} from 'vue-router'
const icons = [
  {icon:index_b_i,name:'找B端客户',path:'/findB'},
  {icon:index_c_i,name:'找C端客户',path:'/findC'},
  {icon:index_m_i,name:'我的数据源',path:'/myData'},
]
const router = useRouter()
const goPath = (path:string)=>{
  router.push(path)
}
</script>

<style scoped lang="scss">
.index_page{
  padding: 30px 50px;
  height: 100%;
  width: 100%;
  background-color: #F7F8FA;
  box-sizing: border-box;
  .banner{
    width: 100%;
    height: 320px;
  }
  .index_content{
    margin-top: 30px;
    .lt,.rt{
      height: 252px;
      background-color: #fff;
      border-radius: 6px;
      padding: 30px;
      box-sizing: border-box;
      .title{
        font-size: 18px;
        font-weight: 600;
        color:#363636;
        margin-bottom: 32px;
        img{
          width: 32px;
          height: 32px;
          margin-right: 12px;
        }
      }
    }
    .lt{
      margin-right: 30px;
      .item{
        width: 200px;
        height: 128px;
        background-color:  #F7F8FA;
        border-radius: 6px;
        margin-right: 30px;
        color: #333;
        div{
          font-size: 16px;
        }
        img{
          width: 82px;
          height: 82px;
        }
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          cursor: pointer;
          color: $dfcolor;
        }
      }
    }
    .rt{
      .notice{
        .item{
          line-height: 14px;
          .text{
            font-size: 14px;
            color: #363636;
          }
          .time{
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>