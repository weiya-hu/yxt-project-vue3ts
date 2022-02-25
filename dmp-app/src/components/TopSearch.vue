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
          <el-form-item label="行业分类" prop="industry_id">
            <el-cascader
              v-model="form.industry_id"
              :options="typeList"
              @change="typeChange"
              :props="typeProps"
              placeholder="请选择行业分类"
              ref="typeCRef"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="省份地区" prop="addr">
            <el-cascader
              v-model="form.addr"
              :options="addressList"
              @change="addrChange"
              :props="addrProps"
              placeholder="请选择地区"
              ref="addrCRef"
            ></el-cascader>
          </el-form-item>
        </div>
        <div class="contact_mode fcs">
          <!-- <el-form-item label="联系方式" prop="mobile">
            <el-select v-model="form.mobile" placeholder="手机号">
              <el-option label="手机号（不限）" value="0"></el-option>
              <el-option label="手机号（有）" :value="1"></el-option>
              <el-option label="手机号（无）" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="phone">
            <el-select v-model="form.phone" placeholder="固定电话">
              <el-option label="固定电话（不限）" value="0"></el-option>
              <el-option label="固定电话（有）" :value="2"></el-option>
              <el-option label="固定电话（无）" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="email">
             <el-select v-model="form.email" placeholder="联系邮箱">
              <el-option label="联系邮箱（不限）" value="0"></el-option>
              <el-option label="联系邮箱（有）" :value="4"></el-option>
              <el-option label="联系邮箱（无）" :value="0"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="联系方式" prop="contact">
            <el-checkbox-group v-model="form.contact">
              <el-checkbox :label="v.id" v-for="v in contactArr" :key="v.id">{{v.value}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <el-form-item label="企业类型" prop="ctype" style="width: 80%;">
          <el-checkbox-group v-model="form.ctype">
            <el-checkbox :label="v.id" v-for="v in ctypeArr" :key="v.id">{{v.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <div class="fcs btns">
          <el-button type="primary" @click="goSearch">查询条件</el-button>
          <el-button @click="addShow = true">保存条件</el-button>
          <el-button @click="reset">重置条件</el-button>
          <el-dropdown @command="changeDrop" ref="dropRef">
            <div class="fcs">
              <div>{{nowCondition}}</div>
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
        <el-tag closable class="mytag" v-if="showLables.business_scope">经营范围：{{showLables.business_scope}}</el-tag>
        <el-tag closable class="mytag" v-if="showLables.typeLable">行业分类：{{showLables.typeLable}}</el-tag>
        <el-tag closable class="mytag" v-if="showLables.addrLable">省份地区：{{showLables.addrLable}}</el-tag>
        <el-tag closable class="mytag" v-if="showLables.contact">联系方式：{{showLables.contact}}</el-tag>
        <el-tag closable class="mytag" v-if="showLables.ctype">企业类型：{{showLables.ctype}}</el-tag>
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
import { conditionsList_api,subConditions_api,delConditions_api } from '@/api/findB'
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
  {id:0,value:'有限责任公司'},
  {id:1<<1,value:'股份有限公司'},
  {id:1<<2,value:'股份合作公司'},
  {id:1<<3,value:'国有企业'},
  {id:16,value:'其它'},
  {id:32,value:'股份合作公司1'},
  {id:64,value:'股份合作公司2'},
  {id:128,value:'股份合作公司3'},
  {id:256,value:'股份合作公司4'},
  {id:512,value:'股份合作公司5'},
  {id:1024,value:'股份合作公司6'},
  {id:2048,value:'股份合作公司7'},
])
const contactArr = ref([
  {id:1,value:'有手机号'},
  {id:2,value:'有固定电话'},
  {id:4,value:'有邮箱'},
])

const form = reactive<HeightSearchForm>({
  // mobile:'', //手机号 位运算
  // phone:'', //固定电话 位运算
  // email:'', //邮箱 位运算
  ctype:[], //企业类型 位运算
  industry_id:[],//行业分类ID 树状
  addr:[], //省市区 树状
  business_scope:'',//经营范围 输入

  // province:'',//省（区域码）
  // city:'',//市（区域码）
  // district:'',//区（区域码）
  contact:[],//联系方式  位运算
  // company_type:'',//企业类型  位运算
  // conditions_name:'',//	条件组名称 输入
})

type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const reset = ()=>{
  nowCondition.value = '条件组'
  resetForm(formRef.value)
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
  //关闭保存条件组弹窗
  addShow.value = false
  Addform.title = ''
  resetForm(addFormRef.value)
}
const getSearchParams = ()=>{
  //返回高级搜索参数
  let searchParams = {}
  let company_type = 0
  // const contact = Number(form.mobile) | Number(form.phone) | Number(form.email)
  let contact = 0
  // 位运算 | 得到的值相当于合并值
  form.ctype.forEach((v:number|string)=>{
    company_type = company_type | Number(v)
  })
  form.contact.forEach((v:number|string)=>{
    contact = contact | Number(v)
  })
  // let industry_id = form.industry_id.join('>')
  let industry_id = form.industry_id
  searchParams = {
    province:Number(form.addr[0])||'',
    city:Number(form.addr[1])||'',
    district:Number(form.addr[2])||'',
    business_scope:form.business_scope,
    industry_id:industry_id,
    contact:contact,
    company_type:company_type,
    conditions_name:Addform.title,
  }
  return searchParams
}
const saveCondition = ()=>{
  //保存条件组
  subConditions_api(getSearchParams()).then((res:res)=>{
    if(res.status == 1){
      nowCondition.value = Addform.title
      addShow.value = false
      getConditionArr()
    }
  })
}

const nowCondition = ref('条件组')
const conditionArr = ref<any[]>([])
const getConditionArr =async ()=>{
  //获取用户保存的条件组
  const res:res = await conditionsList_api({current:1,size:10})
  res.status == 1 && (conditionArr.value = res.body.records)
}
getConditionArr()
const dropRef = ref()
const delCondition = (v:any,i:number)=>{
  //删除条件组
  delConditions_api({id:v.id}).then((res:res)=>{
    if(res.status == 1){
      conditionArr.value.splice(i,1)
      dropRef.value.handleClose()
      if(v.conditions_name == nowCondition.value){
        nowCondition.value = '条件组'
      }
    }
  })
}

const changeDrop = (v:any)=>{
  //切换条件组
  console.log(v);
  resetForm(formRef.value)
  nowCondition.value = v.conditions_name;
  // form.mobile = (v.contact & 1) > 0 ? 1 : ''
  // form.phone = (v.contact & 2) > 0 ? 2 : ''
  // form.email = (v.contact & 4) > 0 ? 4 : ''
  // 位运算 & > 0 判断是否选择
  contactArr.value.forEach(value=>{
    (v.contact & value.id) && form.contact.push(value.id);
  });
  const addr = [String(v.province),String(v.city),String(v.district)]
  addr.forEach(v=>{
    (Number(v)!=0) && form.addr.push(v)
  })
  form.industry_id = v.industry_id
  // form.industry_id = v.industry_id.split('>')
  form.business_scope = v.business_scope;
  ctypeArr.value.forEach(value=>{
    (v.company_type & value.id) && form.ctype.push(value.id);
  });
  console.log(form);
}

const addrCRef = ref()
const addrChange = (value:any) => {
}
const typeCRef = ref()
const typeChange = (value:any) =>{
}
const showLables = reactive({
  business_scope:'',
  addrLable:'',
  typeLable:'',
  contact:'',
  ctype:'',
})
const emit = defineEmits(['heightSearch','search'])
const conditionShow = ref(false)
const goSearch = ()=>{
  //高级搜索
  showLables.business_scope = form.business_scope
  let contact_str = '',ctype_str = '';
  form.contact.forEach(v=>{
    contact_str += contactArr.value.find(j=>j.id == v)?.value + '，'
  })
  showLables.contact = contact_str.substring(0, contact_str.length - 1);  
  form.ctype.forEach(v=>{
    ctype_str += ctypeArr.value.find(j=>j.id == v)?.value + '，'
  })
  showLables.ctype = ctype_str.substring(0, ctype_str.length - 1);  
  if(addrCRef.value.getCheckedNodes().length) showLables.addrLable = addrCRef.value.getCheckedNodes()[0].text
  if(typeCRef.value.getCheckedNodes().length) showLables.typeLable = typeCRef.value.getCheckedNodes()[0].text
  conditionShow.value = true
  emit('heightSearch',getSearchParams())
}
</script>

<style scoped lang="scss">
.search_components{
  position: relative;
  height: auto;
  overflow: hidden;
  min-height: 194px;
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
      // margin-top:40px;
      // padding-top:24px;
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
      line-height: 28px;
      margin-right: 16px;
    }
    .el-tag{
      height: 28px;
      margin-right: 20px;
    }
  }
}
.height_searchbox_show{
  // height: 272px;
  height: 284px;
}
.height_condition_show{
  // height: 341px;
  height: 353px;
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