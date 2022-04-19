<template>
  <div class="article_Add">
    <div class="fcs">
        <DetailsHeader/>
        <div class="btns">
           <el-button type="primary" class="edit">稍后编辑</el-button>
          <el-button type="primary" @click="">提交</el-button>
        </div>
    </div>
    <div class="content">
      <el-form label-position="top">
        <el-card class="mycard"  header="文章封面">
          <el-form-item label="" prop="thumb_url"></el-form-item>
        </el-card>
        <el-card class="mycard" header="标题">
          <el-form-item label="" prop="title">
            <el-input v-model="input" placeholder="请输入文章标题（5~30个字）" minlength="5" maxlength="30" />
          </el-form-item>
        </el-card>
        <el-card class="mycard" >
          <el-form-item label="原文链接（选填）" prop="" >
            <el-input v-model="input" placeholder="请输入原文链接" />
          </el-form-item>
          <el-form-item label="分类：" prop="itemize" >
            <el-select v-model="newsForm.itemize" placeholder="请选择">
              <el-option
                v-for="item in typeDate"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-card>
       <el-card class="mycard" header="正文内容">
          <el-form-item label="" prop="content"></el-form-item>
       </el-card>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import DetailsHeader from "@/components/DetailsHeader.vue";
import { ref,reactive } from 'vue'
import {typeList_api} from '@/api/website';
const input = ref('')

const typeDate = ref<any>({})
const typeList = async ()=>{
  const res =await typeList_api()
  if(res.status==1){
    typeDate.value = res.body
    console.log(res);
  }
}
typeList()

const newsForm = reactive({
  keyword: '',
  author: '',
  itemize:'',
  status:'',
  source:'',
})
</script>

<style scoped lang="scss">
.fcs{
  margin-bottom: 20px;
  .btns{
    display: flex;
    justify-content: flex-end;
    flex: 1;
    .edit{
      background: none;
      color: $dfcolor;
    }
  }
}
.mycard{
  margin-bottom: 10px;
  :deep(.el-form-item__label){
    font-size: 18px;
    font-weight: 600;
  }
}
</style>