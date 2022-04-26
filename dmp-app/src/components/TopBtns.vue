<template>
  <div class="top_btns fsc">
    <div class="find_number" v-if="total !== ''">
      为您找到<span>&ensp;{{total}}&ensp;</span>家符合条件的客户（<span>*根据政策与监管法规要求，联系人手机号脱敏展示</span>）
    </div>
    <el-button size="large" type="primary" @click="emit('add')" v-else>新增需求</el-button>
    <el-button size="large" v-if="syncbtn" @click="showSync" :disabled="syncDisabled">同步数据</el-button>

    <el-dialog v-model="show" title="同步数据" width="465px" @close="close" custom-class="sync_dialog">
      <div v-loading="loading">
        <div class="fsc">
          <div class="lt">选择同步系统</div>
          <div class="rt fcs">每天同步上限<span>{{syncInfo.surplus}}/{{syncInfo.total}}</span>条数据</div>
        </div>
        <div class="btn_list flex">
          <el-button class="btn_item" 
            :type="v.id == active ? 'primary' : ''"
            :disabled="v.disabled"
            :class="v.disabled && 'btn_disabled'"
            v-for="v in list" :key="v.id"
            @click="active = v.id"
          >{{v.btns}}</el-button>
        </div>
      </div>
      <template #footer>
        <span class="flex fjend">
          <el-button @click="show = false" :disabled="loading">取消</el-button>
          <el-button type="primary" :disabled="!active || loading" @click="$emit('sync')">同步</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
/**
 * 顶部按钮组
 * @author chn 
*/
import { ref } from 'vue'
const props = withDefaults(defineProps<{
  total?:number|string, // 总数 显示总数则不会显示新增按钮
  syncbtn?:boolean, // 是否显示同步按钮
  syncDisabled?:boolean // 同步按钮是否禁用
  syncApi?:Function // 同步条数接口
}>(),{
  total: '',
  syncbtn:true,
  syncDisabled:true,
})

// add：点击新增时触发；sync：点击同步时触发
const emit = defineEmits(['add', 'sync'])

const syncInfo = ref<any>({})
const showSync = async () => {
  const res = props.syncApi && await props.syncApi()
  if(res && res.status == 1){
    syncInfo.value = res.body
    show.value = true
  }
}

const loading = ref(false)
const setLoading = (val?:boolean) => {
  loading.value = Boolean(val)
}

const close = () => {
  active.value = 0
  show.value = false
  loading.value = false
}
const show = ref(false)
const list = ref([
  { id:1, btns:'同步APP营销矩阵', disabled:false },
  { id:2, btns:'同步SCRM系统', disabled:true },
  { id:3, btns:'同步DSP系统', disabled:true },
  { id:4, btns:'同步SMS系统', disabled:true }
])
const active = ref(0)

defineExpose({
  close, // 关闭同步弹窗
  setLoading // 设置加载中
})

</script>

<style scoped lang="scss">
.top_btns{
  margin-bottom: 20px;
  .find_number{
    font-size: 14px;
    color: #363636;
    display: inline-block;
    span{
      color: #E40000;
    }
  }
}
.sync_dialog{
  .lt{
    color:$color333;
  }
  .rt{
    font-size: 12px;
    color:$color999;
    line-height: 1;
    span{
      color: $colorred;
    }
  }
  .btn_list{
    flex-wrap: wrap;
    .btn_item{
      margin-top: 16px;
      line-height: 1;
      margin-right: 16px;
    }
    .el-button+.el-button {
      margin-left: 0px;
    }
    .btn_item:nth-child(3n) {
      margin-right: 0;
    }
    .btn_disabled{
      background-color: #D2D5DB;
      border-color: #D2D5DB;
      color: #fff;
    }
  }
}
</style>