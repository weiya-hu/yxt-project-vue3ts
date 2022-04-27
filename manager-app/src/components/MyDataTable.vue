<template>
  <el-table-column
    v-if="type === 'text'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div class="fleximg">
        <div>{{ prop && row[prop] ? row[prop] : '---' }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'text-tooltip'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div class="fleximg">
        <el-tooltip class="box-item" effect="dark" placement="top-start">
          <template #content
            ><div class="text-tooltip-style">{{ (prop && row[prop]) || '---' }}</div></template
          >
          <div class="text-style fleximg">{{ prop && row[prop] ? row[prop] : '---' }}</div>
        </el-tooltip>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'num'" :label="lable" :min-width="width" align="center">
    <template #default="{ row, $index }">
      <div class="fleximg">
        <div v-if="row">{{ $index + 1 }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'link'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <el-link type="primary" :href="prop && row[prop]">{{ prop && row[prop] }}</el-link>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'select'" type="selection" :width="width" align="center" />
  <el-table-column
    v-if="type === 'status'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div class="fleximg">
        <div :class="getStatus(row.status).className"></div>
        <div>{{ getStatus(row.status).text }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'status_do'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div class="flexl">
        <div
          :class="
            row.status === 0
              ? 'before-deal'
              : row.status === 1
              ? 'dealing'
              : row.status === 2
              ? 'deal-refuse'
              : row.status === 3
              ? 'dealed'
              : ''
          "
        ></div>
        <div>
          {{
            row.status === 0
              ? '待处理'
              : row.status === 1
              ? '已受理'
              : row.status === 2
              ? '被驳回'
              : row.status === 3
              ? '已完结'
              : ''
          }}
        </div>
      </div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'date'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div>{{ Format('yyyy-MM-dd', new Date(prop && row[prop])) }}</div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'city'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div>{{ row.province }}{{ row.city }}{{ row.district }}</div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'operateLook'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <div
        v-for="(item, index) in operatButton"
        :key="index"
        class="operate-button"
        @click="operate(index, row)"
      >
        {{ row.status === 2 ? item : row.status === 0 ? '失败原因' : '---' }}
      </div>
      <el-dialog v-model="errorShow" title="失败原因" width="400px">
        <div class="fcc msg">{{ row.fail_reason }}</div>
        <template #footer>
          <div class="fcc">
            <el-button type="primary" @click="errorShow = false">我知道了</el-button>
          </div>
        </template>
      </el-dialog>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'industry_id'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="scope">
      <div>{{ getHashStr(scope.row.industry_id, store.state.typeHash, 'last') }}</div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'city_id'"
    :property="prop"
    :label="lable"
    :min-width="width"
    align="center"
  >
    <template #default="{ row }">
      <el-tooltip effect="dark" placement="top">
        <template #content>
          <div style="width: 100px">
            {{
              row.province > 0 &&
              getHashStr(strToArr(row.province, row.city, row.district), store.state.addressHash)
            }}
          </div>
        </template>
        <div class="text-style">
          {{
            row.province > 0 &&
            getHashStr(strToArr(row.province, row.city, row.district), store.state.addressHash)
          }}
        </div>
      </el-tooltip>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'source'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ prop && getSource(row[prop]) }}</div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'company_type'"
    :property="prop"
    :label="lable"
    :min-width="width"
  >
    <template #default="{ row }">
      <div>{{ getCompanyType(row.company_id) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'country'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ getCountry(row.country_id) }}</div>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { Format } from '@/utils/date'
import { getHashStr, strToArr, getSource } from '@/utils/index'
import { mainStore } from '@/store/index'
import { businessCompanyType, overseasCountry } from '@/api/dmp/findb'
const store = mainStore()
const props = withDefaults(
  defineProps<{
    type: string
    lable?: string
    prop?: string
    width: number
    operatButton?: string[]
  }>(),
  {}
)

const errorShow = ref(false)
const emit = defineEmits(['click'])
const operate = (index: number, row: any) => {
  row.status === 2 && emit('click', index, row)
  row.status === 0 && (errorShow.value = true)
}
const { type, lable, prop, width, operatButton } = toRefs(props)

const getStatus = (type: number) => {
  const obj = ref<{ text: string; className: string }>()
  switch (type) {
    case 2:
      obj.value = {
        text: '已受理',
        className: 'calculating',
      }
      break
    case 3:
      obj.value = {
        text: '被驳回',
        className: 'calculat-false',
      }
      break
    case 4:
      obj.value = {
        text: '已完成',
        className: 'calculated',
      }
      break
    default:
      obj.value = {
        text: '待处理',
        className: 'calcula_yellow',
      }
      break
  }
  return obj.value
}
const statuses = {
  1: { text: '待处理', className: 'calcula_yellow' },
  2: { text: '已受理', className: 'calculating' },
  3: { text: '被驳回', className: 'calculat-false' },
  4: { text: '已完成', className: 'calculated' },
}
const companyType = ref()
const country = ref([])
props.type === 'company_type' &&
  businessCompanyType().then((res) => {
    companyType.value = res.body
  })
props.type === 'country' &&
  overseasCountry().then((res) => {
    country.value = res.body
  })
const getCompanyType = (val: any) => {
  if (val && companyType.value) {
    let name
    companyType.value.forEach((m: any) => {
      m.value === val && (name = m.name)
    })
    return name
  }
  return '---'
}

const getCountry = (val: any) => {
  if (val && country.value) {
    let name
    country.value.forEach((m: any) => {
      m.code === val && (name = m.country_name)
    })
    return name
  }
  return '---'
}
</script>

<style scoped lang="scss">
.text-style {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.text-tooltip-style {
  width: 150px !important;
  white-space: wrap;
}
.calcula_yellow,
.before-deal {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ffbf00;
  margin-right: 8px;
}
.calculating,
.dealing {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #2bd34e;
  margin-right: 8px;
}
.calculated,
.dealed {
  width: 8px;
  height: 8px;
  background-color: $dfcolor;
  border-radius: 50%;
  margin-right: 8px;
}
.calculat-false,
.deal-refuse {
  width: 8px;
  height: 8px;
  background-color: #e40000;
  border-radius: 50%;
  margin-right: 8px;
}
.operate-button {
  font-size: 14px;
  color: #2d68eb;
  cursor: pointer;
}
.msg {
  font-size: 14px;
  color: #333;
}
.el-overlay {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
