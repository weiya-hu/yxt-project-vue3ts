<template>
  <div class="specific_data_details_page">
    <DetailsHeader />
    <div class="specific_data-content">
      <div class="mytable-data">
        <el-table
          v-loading="loading"
          :data="tableList"
          size="small"
          row-class-name="my-data-table-row"
          :border="true"
        >
          <MyDataTable
            v-for="(item, index) in tableTitle"
            :key="index"
            :type="item.type"
            :width="item.width"
            :lable="item.lable"
            :prop="item.prop"
          />
          <template #empty>
            <MyEmpty />
          </template>
        </el-table>
      </div>
      <div class="flexr">
        <Mypage
          v-if="total"
          v-model:size="size"
          v-model:page="page"
          :total="total"
          @change="getList"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from '@/components/DetailsHeader.vue'
// eslint-disable-next-line camelcase
import { itemDetail_api } from '@/api/dmp/findb'
import Mypage from '@/components/Mypage.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import { useRoute } from 'vue-router'

const tableTitle = ref([
  { type: 'num', lable: '序号', width: 60 },
  { type: 'text', lable: '企业名称', prop: 'name', width: 130 },
  { type: 'text', lable: '联系人', prop: 'contact', width: 100 },
  { type: 'text', lable: '联系方式', prop: 'mobiles', width: 110 },
  { type: 'text', lable: '固定电话', prop: 'telephone', width: 110 },
  { type: 'industry_id', lable: '行业分类', prop: 'industry_id', width: 120 },
  { type: 'city_id', lable: '地区', prop: 'city', width: 130 },
  { type: 'text-tooltip', lable: '详细地址', prop: 'address', width: 130 },
  { type: 'company_type', label: '企业类型', prop: 'company_id', width: 110 },
  { type: 'text', lable: '统一社会信用代码', prop: 'code', width: 130 },
  { type: 'link', lable: '企业官网', prop: 'url', width: 140 },
  { type: 'text-tooltip', lable: '经营范围', prop: 'business_scope', width: 130 },
  { type: 'text', lable: '项目名称', prop: 'item_name', width: 120 },
  { type: 'text-tooltip', lable: '项目介绍', prop: 'item_desc', width: 130 },
  { type: 'text', lable: '招标金额(万元)', prop: 'amount', width: 120 },
  { type: 'date', lable: '截止日期', prop: 'left_time', width: 120 },
  { type: 'link', lable: '项目附件', prop: 'attachment', width: 130 },
  { type: 'date', lable: '上传时间', prop: 'update_time', width: 110 },
])
const route = useRoute()
const total = ref()
const page = ref(1)
const size = ref(10)
const loading = ref(false)
const tableList = ref([])
const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    size: size.value,
    id: route.query.id,
  }
  const { status, body } = await itemDetail_api(data)
  loading.value = false
  if (status) {
    tableList.value = body.records
    total.value = body.total
  }
}
getList()
</script>

<style scoped lang="scss">
.specific_data-content {
  margin-top: 16px;
  background: #ffffff;
  padding: 24px;
  border: 1px solid rgba(221, 221, 221, 1);
  .mytable-data {
    margin-bottom: 24px;
  }
}
</style>
