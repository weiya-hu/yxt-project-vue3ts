<template>
  <div class="article_details_component">
    <el-card class="mycard mt16 mb16">
      <div class="title pt16">{{ info.title }}</div>
      <div class="fcs info mb16">
        <div>分类：</div>
        <div class="info_content mr20">{{ info.article_type }}</div>
        <div>查看量：</div>
        <div class="info_content mr20">{{ info.hits }}</div>
        <div>发布事件：</div>
        <div class="info_content mr20" v-if="info.create_time">
          {{ formatDate(new Date(info.create_time)) }}
        </div>
      </div>
      <div class="status fcs" v-if="statusObj[info.status]">
        <div class="status_dot" :class="statusObj[info.status].className"></div>
        <div>{{ statusObj[info.status].text }}</div>
      </div>
      <div class="btns pt20">
        <slot name="btns" />
      </div>
    </el-card>
    <el-card class="mycard mt16 content">
      <div v-html="info.text"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
/**
 * 文章详情组件
 * @author chn
 */
import { formatDate } from '@/utils/date'

const props = withDefaults(
  defineProps<{
    info: {
      title: string
      article_type: string
      hits: number | string
      create_time: number | string
      status: number
      text: string
    }
    statusObj?: any // status 对应obj
  }>(),
  {
    statusObj: () => ({
      1: { className: 'sdot_b', text: '草稿' },
      2: { className: 'sdot_r', text: '离线' },
      3: { className: 'sdot_g', text: '在线' },
    }),
  }
)
</script>

<style scoped lang="scss">
.article_details_component {
  .title {
    font-size: 24px;
    color: $color333;
    margin-bottom: 10px;
  }
  .info {
    font-size: 12px;
    color: $color999;
    .info_content {
      color: $color666;
    }
  }
  .status {
    color: $color666;
    padding-bottom: 10px;
    border-bottom: 1px solid $coloreee;
  }
  .content {
    padding: 30px;
  }
}
</style>
