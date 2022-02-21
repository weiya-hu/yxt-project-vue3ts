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
          <el-form-item label="经营范围" prop="range">
            <el-input v-model="form.range"></el-input>
          </el-form-item>
          <el-form-item label="行业分类" prop="type">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option label="计算机行业" value="1"></el-option>
              <el-option label="医药行业" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="省份地区" prop="addr">
            <el-select v-model="form.addr" placeholder="请选择">
              <el-option label="重庆市" value="1"></el-option>
              <el-option label="四川省" value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="contact_mode fcs">
          <el-form-item label="联系方式" prop="mobile">
            <el-select v-model="form.mobile" placeholder="请选择">
              <el-option label="手机号（有）" value="1"></el-option>
              <el-option label="手机号（无）" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="phone">
            <el-select v-model="form.phone" placeholder="请选择">
              <el-option label="固定电话（有）" value="1"></el-option>
              <el-option label="固定电话（无）" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="email">
             <el-select v-model="form.email" placeholder="请选择">
              <el-option label="联系邮箱（有）" value="1"></el-option>
              <el-option label="联系邮箱（无）" value="2"></el-option>
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
          <el-button>保存条件</el-button>
          <el-button @click="resetForm(formRef)">重置条件</el-button>
          <el-dropdown @command="changeDrop">
            <div class="fcs">
              <div>条件组</div>
              <el-icon class="right_icon"><arrow-down /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="v" v-for="(v,i) in conditionArr" :key="v.id">
                  <div class="fsc ditems">
                    <div class="dname els">{{v.value}}</div>
                    <div class="dbtns fcs">
                      <div @click.stop="delCondition(v,i)">删除</div>
                      <div class="dline"></div>
                      <div>选择</div>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
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
  </div>
</template>

<script setup lang="ts">
//布局内容中的头部搜索组件
import { Search , CloseBold , ArrowDown} from '@element-plus/icons-vue'
import { reactive, ref  } from 'vue'
import type { ElForm } from 'element-plus'

const searchWord = ref('')
const heightShow = ref(false)
const ctypeArr = ref([
  {id:1,value:'有限责任公司'},
  {id:2,value:'股份有限公司'},
  {id:3,value:'股份合作公司'},
  {id:4,value:'国有企业'},
  {id:5,value:'其它'},
])
const form = reactive({
  mobile:'',
  phone:'',
  type:'',
  ctype:[],
  email:'',
  addr:'',
  range:'',
})

const conditionArr = ref([
  {id:1,value:'医疗器械用户'},
  {id:2,value:'医疗器械用户1'},
  {id:3,value:'医疗器械用户2'},
  {id:4,value:'医疗器械用户3'},
  {id:5,value:'医疗器械用户4'},
])
const delCondition = (v:{id:number,value:string},i:number)=>{
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
</style>