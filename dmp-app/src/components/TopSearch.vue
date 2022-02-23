<template>
  <div class="search_components">
    <div class="search_main fc">
      <div class="iptbox fsc">
        <el-input
          v-model="searchWord"
          placeholder="请输入企业名称、联系人、经营范围关键词"
        >
          <template #prefix>
            <el-icon class="searchicon"><search /></el-icon>
          </template>
          <template #suffix>
            <div class="searchbtn">查询一下</div>
          </template>
        </el-input>
        <div class="heisearch" @click="heightShow=true">高级查询</div>
      </div>
      <div class="his_search">历史搜索：紫金矿业集团有限公司   康洲数智   重庆城科</div>
    </div>
    <div class="height_searchbox" :class="{'height_searchbox_show':heightShow,'height_condition_show':conditionShow}">
      <el-icon @click="heightShow=false;conditionShow=false" class="closebtn rotate" size="18px"><close-bold /></el-icon>

      <el-form class="myform" ref="formRef" :model="form">
        <div class="topitems fcs">
          <el-form-item label="经营范围" prop="business_scope">
            <el-input v-model="form.business_scope" placeholder="请输入经营范围"></el-input>
          </el-form-item>
          <el-form-item label="行业分类" prop="type">
            <el-cascader
              v-model="form.type"
              :options="typeList"
              @change="typeChange"
              :props="typeProps"
              placeholder="请选择行业分类"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="省份地区" prop="addr">
            <el-cascader
              v-model="form.addr"
              :options="addressList"
              @change="addrChange"
              :props="addrProps"
              placeholder="请选择地区"
            ></el-cascader>
          </el-form-item>
        </div>
        <div class="contact_mode fcs">
          <el-form-item label="联系方式" prop="mobile">
            <el-select v-model="form.mobile" placeholder="手机号">
              <el-option label="手机号（不限）" value="0"></el-option>
              <el-option label="手机号（有）" value="1"></el-option>
              <el-option label="手机号（无）" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="phone">
            <el-select v-model="form.phone" placeholder="固定电话">
              <el-option label="固定电话（不限）" value="0"></el-option>
              <el-option label="固定电话（有）" value="2"></el-option>
              <el-option label="固定电话（无）" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="email">
             <el-select v-model="form.email" placeholder="联系邮箱">
              <el-option label="联系邮箱（不限）" value="0"></el-option>
              <el-option label="联系邮箱（有）" value="4"></el-option>
              <el-option label="联系邮箱（无）" value="0"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="企业类型" prop="ctype">
          <el-checkbox-group v-model="form.ctype">
            <el-checkbox :label="v.id" v-for="v in ctypeArr" :key="v.id">{{v.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <div class="fcs btns">
          <el-button type="primary" @click="conditionShow=true">查询条件</el-button>
          <el-button @click="addShow = true">保存条件</el-button>
          <el-button @click="resetForm(formRef)">重置条件</el-button>
          <el-dropdown @command="changeDrop">
            <div class="fcs">
              <div>条件组</div>
              <el-icon class="right_icon"><arrow-down /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu v-if="conditionArr.length">
                <el-dropdown-item :command="v" v-for="(v,i) in conditionArr" :key="v.id">
                  <div class="fsc ditems">
                    <div class="dname els">{{v.conditions_name}}</div>
                    <div class="dbtns fcs">
                      <div @click.stop="delCondition(v,i)">删除</div>
                      <div class="dline"></div>
                      <div>选择</div>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
              <div v-else class="empty_drop">暂无数据</div>
            </template>
          </el-dropdown>
        </div>
      </el-form>

      <div class="now_condition fcs" v-show="conditionShow">
        <div>筛选条件：</div>
        <el-tag closable>经营范围：计算机网络产品</el-tag>
        <el-tag closable>经营范围：计算机网络产品</el-tag>
        <el-tag closable>经营范围：计算机网络产品</el-tag>
      </div>

    </div>
    
    <el-dialog v-model="addShow" title="新建筛选" width="500px" @close="closeAdd">
      <el-form class="myform no_margin" :model="Addform" :rules="addRules" ref="addFormRef">
        <el-form-item label="经营范围" prop="title">
          <el-input v-model="Addform.title" placeholder="请输入条件组名称"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="flex fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" :disabled="!Addform.title" @click="saveCondition">确认</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
//布局内容中的头部搜索组件
import { Search , CloseBold , ArrowDown} from '@element-plus/icons-vue'
import { reactive, ref  } from 'vue'
import type { ElForm } from 'element-plus'
import { conditionsList_api,subConditions_api } from '@/api/findB'
import { Gajax } from '@/utils/request'
import { mainStore } from '@/store/index'

const searchWord = ref('')
const heightShow = ref(false)

const store = mainStore()
const typeList = ref<any[]>([])
const addressList = ref<any[]>([])
store.setTypeList().then((res:any[])=>{
  typeList.value = res
})
store.setAddressList().then((res:any[])=>{
  addressList.value = res
})

const typeProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'industryId',
  label:'name',
}
const addrProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'id',
  label:'name',
}
const ctypeArr = ref([
  {id:1,value:'有限责任公司'},
  {id:2,value:'股份有限公司'},
  {id:4,value:'股份合作公司'},
  {id:6,value:'国有企业'},
  {id:8,value:'其它'},
])
const form = reactive({
  mobile:'', //手机号 位运算
  phone:'', //固定电话 位运算
  email:'', //邮箱 位运算
  ctype:[], //企业类型 位运算
  type:[], //行业分类 树状
  addr:[], //省市区 树状

  province:'',//省（区域码）
  city:'',//市（区域码）
  district:'',//区（区域码）
  business_scope:'',//经营范围
  industry_id:'',//行业分类ID
  contact:'',//联系方式  位运算
  company_type:'',//企业类型  位运算
  conditions_name:'',//	条件组名称
})
const addrChange = (value:any) => {
  console.log(form.addr)
}
const typeChange = (value:any) =>{
  console.log(value)
}

const conditionArr = ref<any[]>([])

const getConditionArr =async ()=>{
  const res:res = await conditionsList_api()
  res.status == 1 && (conditionArr.value = res.body)
  console.log(conditionArr.value, 'res')
}
getConditionArr()
const delCondition = (v:any,i:number)=>{
  conditionArr.value.splice(i,1)
}

const changeDrop = (v:any)=>{
  console.log(v);
}

const conditionShow = ref(false)

type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const addShow = ref(false)
const Addform = reactive({
  title:'',
})
const addFormRef = ref<FormInstance>()
const addRules = reactive({
  title:[{
    required: true,
    message: '请输入条件组名称',
    trigger: 'change',
  }],
})
const closeAdd = ()=>{
  addShow.value = false
  Addform.title = ''
  resetForm(addFormRef.value)
}
const saveCondition = ()=>{
  subConditions_api({
    province:'',
    city:'',
    district:'',
    business_scope:'',
    industry_id:'',
    contact:'',
    company_type:'',
    conditions_name:Addform.title,
  }).then((res:res)=>{
    addShow.value = false
    console.log(res);
  })
}
</script>

<style scoped lang="scss">
.search_components{
  position: relative;
  height: auto;
  overflow: hidden;
  min-height: 194px;;
  .search_main{
    height: 194px;
    background-color: $dfcolor;
    border-radius: 6px;
    padding: 0 50px;
    justify-content: center;
    position: absolute;
    transition: height 0.5s;
    z-index: 9;
    width: 100%;
    box-sizing: border-box;
  }
  .iptbox{
    width: 100%;
    .heisearch{
      font-size: 16px;
      color: #fff;
      padding-left: 30px;
      word-break: keep-all;
      &:hover{
        cursor: pointer;
      }
    }
    :deep(.el-input__inner) {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      padding-left: 62px;
    }
    :deep(.el-input__prefix){
      left:20px
    }
    .searchicon{
      height: 60px;
      font-size: 20px;
      color: $dfcolor;
    }
    .searchbtn{
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      font-weight: 600;
      color: $dfcolor;
      padding-right: 20px;
      &:hover{
        cursor: pointer;
      }
    }
  }
  .his_search{
    font-size: 14px;
    color: #FFFFFF;
    padding-top: 20px;
    opacity: 0.6;
  }
}
.height_searchbox{
  transition: height 0.5s;
  height: 0;
  position: relative;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 6px;
  color: $color333;
  .myform{
    padding: 30px;
    .btns{
      margin-top:40px;
    }
    .el-form-item{
      margin-bottom: 16px;
    }
    .topitems{
      .el-form-item{
        margin-right: 40px;
      }
      .el-input{
        width: 270px;
      }
      .el-select--default{
        width: 270px;
      }
      
      :deep(.el-cascader){
        width: 270px;
      }
    }
    .contact_mode{
      .el-select--default{
        width: 150px;
        margin-right: 12px;
      }
    }
  }
  .closebtn{
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .el-dropdown{
    margin-left: 20px;
  }
  .now_condition{
    padding:20px 30px;
    border-top:1px solid $coloreee;
    font-size: 12px;
    >div{
      margin-right: 16px;
    }
    .el-tag{
      height: 28px;
      margin-right: 20px;
    }
  }
}
.height_searchbox_show{
  height: 272px;
}
.height_condition_show{
  height: 341px;
}
.ditems{
  font-size: 14px;
  color: $color666;
  .dname{
    width: 140px;
  }
  .dline{
    width: 1px;
    height: 14px;
    background-color: $coloreee;
    margin: 0 12px;
  }
  .dbtns{
    color: $dfcolor;
  }
}
.no_margin{
  .el-form-item{
    margin-bottom: 0;
  }
}
.empty_drop{
  padding:10px 20px;
  font-size: 12px;
  color: $color999;
}
</style>