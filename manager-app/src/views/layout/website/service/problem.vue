<template>
  <div class="problem_page">

    <el-card class="mycard">
      <template #header>
        <div class="fsc f1">
          <div>问题列表</div>
          <el-button type="primary" @click="addShow = true">创建</el-button>
        </div>
      </template>

      <div class="problem_list" v-if="list.length">
        <div class="problem_item" v-for="v in list" :key="v.id">
          <div class="problem_top fsc">
            <div class="fcs">
              <div>分类：</div>
              <el-tag>{{typeList.find(j => j.value == v.problem_type)?.label}}</el-tag>
            </div>
            <div>
              <el-icon size="18px" class="mr20 dfcolor chover" @click="editProblem(v)"><edit /></el-icon>
              <el-icon size="18px" class="dfcolor chover" @click="delProblem(v.id)"><delete /></el-icon>
            </div>
          </div>
          <div class="problem_line"></div>
          <div class="problem_bt">
            <div class="problem_q fcs">
              <div class="qa_icon q_icon fcc">Q</div>
              <div class="problem_q_text">{{v.problem}}</div>
            </div>
            <div class="problem_a fcs">
              <div class="qa_icon a_icon fcc">A</div>
              <div class="problem_a_text">{{v.answer}}</div>
            </div>
          </div>
        </div>
      </div>
      <MyEmpty v-else/>
      <Mypage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
    </el-card>

    <el-dialog v-model="addShow" :title="setId ? '编辑问题' : '创建问题'" width="380px" @close="close">
      <el-form :model="addForm" :rules="rules" ref="addFormRef">
        <el-form-item label="分类：" prop="problem_type">
          <el-select v-model="addForm.problem_type" placeholder="请选择问题分类" class="f1">
            <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="问题：" prop="problem">
          <el-input v-model="addForm.problem" type="textarea" :rows="3" placeholder="请输入问题"/>
        </el-form-item>
        <el-form-item label="答案：" prop="answer">
          <el-input v-model="addForm.answer" type="textarea" :rows="5" placeholder="请输入答案"/>
        </el-form-item>
        <div class="fcs fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="addProblem">确定</el-button>
        </div>
      </el-form>
    </el-dialog>

    <MyDialog v-model="delShow" :msg="'确认删除此问题?'" @sure="sureDel"/>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";
import { Edit, Delete } from '@element-plus/icons-vue'
import { getProblemTypeList_api, getProblemList_api, saveProblem_api, delProblem_api } from '@/api/website/service'

const typeList = ref<{ value: number, label: string }[]>([])
const getTypeList = async () => {
  const { status, body } = await getProblemTypeList_api()
  if(status == 1){
    for (const [key, value] of Object.entries(body)) {
      typeList.value.push({ value:Number(key), label:value as string })
    }
    getList()
  }
}
getTypeList()

const page = ref(1)
const size = ref(20)
const total = ref(0)
const list = ref<any[]>([])
const getList = async () => {
  const { status, body } = await getProblemList_api({
    size: size.value,
    current: page.value
  })
  if(status == 1){
    total.value = body.total
    list.value = body.records
  }
}

const close = () => {
  addFormRef.value.resetFields()
  addForm.problem = ''
  addForm.problem_type = ''
  addForm.answer = ''
  setId.value = ''
  addShow.value = false
}
const addShow = ref(false)

const rules = reactive({
  problem_type: [{ required: true, message: '请选择分类！', trigger: 'blur' }],
  problem: [{ required: true, message: '请输入问题！', trigger: 'blur' }],
  answer: [{ required: true, message: '请输入答案！', trigger: 'blur' }],
})
const addForm = reactive({
  problem_type:'',
  problem:'',
  answer:''
})
const addFormRef = ref()
const addProblem = () => {
  addFormRef.value.validate(async (valid:boolean) => {
    if(valid){
      const { status } = await saveProblem_api({
        ...addForm,
        id:setId.value ? setId.value : ''
      })
      if(status == 1){
        close()
        getList()
      }
    }
  })
}

const setId = ref<string|number>('')
const editProblem = (v:any) => {
  addShow.value = true
  setId.value = v.id
  addForm.problem_type = v.problem_type
  addForm.problem = v.problem
  addForm.answer = v.answer
}

const delShow = ref(false)
const delProblem =  (id:number|string) => {
  setId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const { status } = await delProblem_api({ id: setId.value })
  if(status == 1){
    getList()
    delShow.value = false
  }
}

</script>

<style scoped lang="scss">
.problem_page{
  .problem_list{
    .problem_item{
      background-color: #F7F8FA;
      border-radius: 8px;
      margin-bottom: 16px;
      padding: 24px;
      .problem_top{
        color: $color999;
      }
      .problem_line{
        height: 1px;
        background-color: $coloreee;
        margin: 16px 0;
      }
      .qa_icon{
        width: 16px;
        height: 16px;
        border-radius: 1px;
        color: #fff;
        font-style: italic;
        margin-right: 12px;
        flex-shrink: 0;
      }
      .q_icon{
        background-color: #51A1FC;
      }
      .a_icon{
        background-color: #98A3C5;
      }
      .problem_q_text{
        color: $color333;
      }
      .problem_a_text{
        color: $color666;
      }
      .problem_a{
        margin-top: 16px;
      }
    }
  }
}
</style>