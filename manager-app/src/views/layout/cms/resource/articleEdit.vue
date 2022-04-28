<template>
  <div class="article_add">
    <div class="fsc">
      <DetailsHeader />
    </div>

    <div class="addform">
      <div class="tip fcs">
        <img :src="tip_i" alt="" />
        <span
          >请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。</span
        >
      </div>
      <KzAddArticle ref="addRef" needimg needdigest @success="subSuccess" />
    </div>

    <el-card v-loading="loading" class="mycard mt20">
      <div class="form_title">内容设置</div>
      <el-form ref="aFormRef" :model="aForm" :rules="aRules" hide-required-asterisk>
        <div class="fcs">
          <el-form-item label="第三方URL链接：" prop="url" class="mr20">
            <el-input v-model="aForm.url" placeholder="请输入第三方URL链接"></el-input>
          </el-form-item>
          <el-form-item label="第三方URL秘钥：" prop="url_key">
            <el-input v-model="aForm.url_key" placeholder="请输入第三方URL秘钥"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="行业分类：" prop="industry_id">
          <el-radio-group v-model="aForm.industry_id">
            <el-radio v-for="item in industry" :key="item.id" :label="item.id">{{
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
            <el-form-item prop="qr_code">
              <MediaUpload
                v-if="qrShow"
                v-show="aForm.down_type == 2"
                ref="upload"
                :max="1"
                :exname-list="exnameList"
                :img-list="aForm.qr_code ? [aForm.qr_code] : []"
                :msg="'只能上传' + exnameList.join('、') + '图片，不超过2M'"
                @upOneSuccess="upOne"
                @error="upError"
                @look="upLook"
                @del="aForm.qr_code = ''"
                @change="onChangeQr"
              />
            </el-form-item>
          </div>
        </el-form-item>
      </el-form>
      <div class="btns fjend">
        <el-button class="bdc_btn" @click="$router.push('/cms/resource')">返回</el-button>
        <el-button class="bdc_btn" @click="submit(1)">保存</el-button>
        <el-button type="primary" :disabled="!aForm.industry_id" @click="submit(2)">发布</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tip_i from '@/assets/images/tip.png'
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
  articleLook_api({ id: id as string }).then((res) => {
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
const subSuccess = async (val: IArticleForm) => {
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
  .addform {
    span {
      font-size: 12px;
      font-weight: 400;
      color: $color999;
      margin-left: 22px;
    }
    .tip {
      position: relative;
      left: 115px;
      top: 529px;
      background-color: #fff8e5;
      color: $color666;
      border: 1px solid rgba(255, 191, 0, 1);
      border-radius: 2px;
      font-size: 12px;
      height: 30px;
      width: 1056px;
      line-height: 14px;
      padding-left: 12px;
      img {
        width: 14px;
        height: 14px;
        margin-right: 8px;
      }
    }
  }
  .btns {
    margin-top: 20px;
  }
}
</style>
