<template>
  <div class="mytable people_table">
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column property="id" label="ID" width="150"/>
      <el-table-column property="group_name" label="人群名称" width="150"/>
      <el-table-column property="group_desc" label="人群描述"/>
      <el-table-column property="status" label="状态" width="130">
        <template #default="scope">
          <div class="fcs">
            <div class="status_dot" :class="getKzStatus(scope.row.status).className"></div>
            <div>{{getKzStatus(scope.row.status).text}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="address" label="地区">
        <template #default="scope">
          <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
        </template>
      </el-table-column>
      <el-table-column property="count" label="覆盖用户人数" width="140">
        <template #default="scope">
          <div>{{ scope.row.count }}</div>
        </template>
      </el-table-column>
      <el-table-column property="money" label="消耗金额 (元)" width="130">
        <template #default="scope">
          <div>{{Number(scope.row.money).toFixed(2)}}</div>
        </template>
      </el-table-column>
      <el-table-column property="create_time" label="创建日期" width="130">
        <template #default="scope">
          <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" width="130">
        <template #default="scope">
          <div>{{ getSource(scope.row.source) }}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="操作" width="150" fixed="right">
        <template #default="scope">
          <div class="fcs" v-if="scope.row.status == 1">
            <el-link type="primary" v-if="scope.row.attachment" :href="scope.row.attachment">下载附件</el-link>
            <div class="line" v-if="scope.row.attachment"></div>
            <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
          </div>
          <div class="fcs" v-if="scope.row.status == 2">
            ---
          </div>
          <div class="fcs" v-if="scope.row.status == 3">
            <el-link type="primary" @click="errorMsg = scope.row.fail_reason;errorShow=true">拒绝原因</el-link>
            <div class="line"></div>
            <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
          </div>
          <div class="fcs" v-if="scope.row.status == 4">
            <el-link type="primary" @click="goDetails(scope.row.id)">查看</el-link>
            <div class="line"></div>
            <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
            <!-- <el-link type="primary" :href="scope.row.plan_url">下载方案</el-link> -->
          </div>
        </template>
      </el-table-column>
      <template #empty>
        <MyEmpty/>
      </template>
    </el-table>

    <el-dialog v-model="errorShow" title="拒绝原因" width="400px">
      <div class="fcc msg">{{errorMsg}}</div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="errorShow=false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>

    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>

  </div>
</template>

<script setup lang="ts">
/**
 * 人群表格
 * @author chn 
*/
import { ref ,computed} from 'vue'
import MyEmpty from "@/components/MyEmpty.vue";
import { formatDate } from '@/utils/date'
import MyDialog from "@/components/MyDialog.vue";
import {useRouter} from 'vue-router'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, getSource, getKzStatus } from '@/utils/index'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const props = defineProps({
  data: Array,
  details:String
})
const emit = defineEmits(['select','del'])
// select 选择时触发，返回选择数据；del 确认删除时触发，返回id

interface IData {
  id:number,
  group_name:string,//人群名称
  group_desc:string,//人群描述
  status:number,//状态
  address:string,//地区
  count:number,//覆盖用户人数
  money:number,//消耗金额 (元)
  create_time:number,//创建日期
  plan_url:string,//附件地址
  source:number,//来源
  province:number,//省份
  city:number,//城市
  district:number,//区
  error?:string,//拒绝原因
}
const handleSelectionChange = (val:IData[]) => {
  emit('select',val)
}
const errorShow = ref(false)
const errorMsg = ref('')

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
  //删除需求
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  //确认删除需求
  emit('del',delId.value)
  delShow.value = false
}
const router = useRouter()
const goDetails = (id:string)=>{
  router.push(props.details+'?id='+id)
  // router.push({path:props.details as string,query: { id }})
}

</script>

<style scoped lang="scss">
.people_table{
  .line{
    height: 14px;
    width: 1px;
    margin: 0 16px;
    background-color: $coloreee;
  }
  .msg{
    font-size: 14px;
    color: #333;
  }
}
</style>