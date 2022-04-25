<template>
  <div class="article_add">
    <div class="fsc">
      <DetailsHeader />
    </div>

    <KzAddArticle ref="addRef" needimg needdigest @success="subSuccess" />

    <el-card class="mycard mt20" v-loading="loading">
      <div class="form_title">内容设置</div>
      <el-form ref="aFormRef" :model="aForm" :rules="aRules" hide-required-asterisk>
        <div class="fcs">
          <el-form-item label="第三方URL链接：" prop="url" class="mr20">
            <el-input placeholder="请输入第三方URL链接" v-model="aForm.url"></el-input>
          </el-form-item>
          <el-form-item label="第三方URL秘钥：" prop="url_key">
            <el-input placeholder="请输入第三方URL秘钥" v-model="aForm.url_key"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="行业分类：" prop="industry_id">
          <el-radio-group v-model="aForm.industry_id">
            <el-radio :label="item.id" v-for="item in industry" :key="item.id">{{
              item.industry_name
            }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="下载设置：" prop="down_type" style="margin-bottom: 0">
          <div class="fc">
            <el-radio-group v-model="aForm.down_type" @change="onChangeDownType">
              <el-radio :label="1">免费下载</el-radio>
              <el-radio :label="2">弹窗二维码</el-radio>
            </el-radio-group>
            <el-form-item prop="qr_code" style="margin-left: 100px">
              <MediaUpload
                v-if="qrShow"
                :max="1"
                v-show="aForm.down_type == 2"
                @upOneSuccess="upOne"
                @error="upError"
                @look="upLook"
                @del="aForm.qr_code = ''"
                @change="onChangeQr"
                :exname-list="exnameList"
                :img-list="aForm.qr_code ? [aForm.qr_code] : []"
                :msg="'只能上传' + exnameList.join('、') + '图片，不超过2M'"
                ref="upload"
              />
            </el-form-item>
          </div>
        </el-form-item>
      </el-form>
      <div class="btns fjend">
        <el-button class="bdc_btn" @click="$router.push('/cms/resource')">返回</el-button>
        <el-button class="bdc_btn" @click="submit(1)">保存</el-button>
        <el-button type="primary" @click="submit(2)" :disabled="!aForm.industry_id">发布</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MediaUpload from '@/components/MediaUpload.vue'
import DetailsHeader from '@/components/DetailsHeader.vue'
import KzAddArticle from '@/components/KzAddArticle.vue'
import { lookImage, errMsg } from '@/utils/index'
import {
  articleLook_api,
  articleRelease_api,
  articleIndustry_api,
  articleSave_api,
} from '@/api/cms/resource'
import { mainStore } from '@/store/index'
const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id //有id就是编辑
const qrShow = ref(false)
if (id) {
  articleLook_api({ id: id as string }).then((res: res) => {
    aForm.value = {
      url: res.body.url,
      url_key: res.body.url_key,
      down_type: res.body.down_type,
      industry_id: res.body.industry_id,
      qr_code: res.body.qr_code,
    }
    addRef.value.setForm({
      thumb_url: res.body.thumb_url,
      title: res.body.title,
      text: res.body.content,
      digest: res.body.digest,
    })
    qrShow.value = true
  })
} else {
  qrShow.value = true
}

//获取行业分类
const industry = ref<any[]>([])
const getIndustry = async () => {
  const res = await articleIndustry_api()
  industry.value = res.body
}
getIndustry()

const addRef = ref() // 添加文章组件ref
const aStatus = ref<1 | 2>(1)
const submit = (status: 1 | 2) => {
  aStatus.value = status
  addRef.value.validate().then((flag: boolean) => {
    aFormRef.value.validate((valid: boolean) => {
      if (flag && valid) {
        loading.value = true
        upload.value.imgs.length ? upload.value.submit() : addRef.value.submit()
      }
    })
  })
}
const subSuccess = async (val: AForm) => {
  // 文章提交成功
  loading.value = false
  const rData = {
    content: val.text,
    digest: val.digest,
    down_type: aForm.value.down_type,
    industry_id: aForm.value.industry_id,
    qr_code: aForm.value.qr_code,
    thumb_url: val.thumb_url,
    title: val.title,
    url: aForm.value.url,
    url_key: aForm.value.url_key,
  }
  const { status } =
    aStatus.value == 1
      ? await articleSave_api({ ...rData, id })
      : await articleRelease_api({ ...rData, id })

  if (status == 1) {
    store.setKeepList([])
    router.replace('/cms/resourceart')
  }
}

const aFormRef = ref() // 表单ref
interface AddForm {
  url: string
  url_key: string
  down_type: number //1免费下载2不免费下载
  industry_id: string
  qr_code: string
}
const aForm = ref<AddForm>({
  url: '',
  url_key: '',
  down_type: 1,
  industry_id: '',
  qr_code: '',
})
const qr_codePass = (rule: any, value: any, callback: Function) => {
  if (aForm.value.down_type == 2 && !value) {
    callback(new Error('请添加二维码'))
    return
  }
  callback()
}
const aRules = {
  url: [{ required: true, message: '请输入第三方URL链接', trigger: 'blur' }],
  url_key: [{ required: true, message: '第三方URL秘钥：', trigger: 'blur' }],
  qr_code: [{ validator: qr_codePass, trigger: 'blur' }],
}
const onChangeDownType = (val: number) => {
  val == 1 && aFormRef.value.clearValidate('qr_code')
}

const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const loading = ref(false)
const upload = ref() // 二维码ref

const upOne = (url: string) => {
  aForm.value.qr_code = url
  addRef.value.submit()
}
const upError = (err: string) => {
  errMsg(err)
  loading.value = false
}
const upLook = (list: string[], i: number) => {
  lookImage(list, i)
}
const onChangeQr = () => {
  aForm.value.qr_code = upload.value.imgs[0].url
  aFormRef.value.validateField('qr_code', () => null)
}
</script>

<style scoped lang="scss">
.article_add {
  .form_title {
    font-size: 16px;
    color: $color333;
    margin-bottom: 20px;
    padding-top: 10px;
    font-weight: 600;
  }
  .is-error {
    :deep(.el-upload--picture-card) {
      border-color: var(--el-color-danger);
    }
  }
}
</style>