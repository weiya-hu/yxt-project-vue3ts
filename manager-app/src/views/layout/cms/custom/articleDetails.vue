<template>
  <div class="article_add">
    <DetailsHeader />
    <div class="addform">
      <div class="fjend btns">
        <el-button class="bdc_btn" @click="$router.push('/cms/custom')">返回</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
      <div class="form_content">
        <div class="tip fcs">
          <img :src="tip_i" alt="" />
          <span
            >请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。</span
          >
        </div>
        <KzAddArticle ref="addRef" needimg @success="subSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsHeader from '@/components/DetailsHeader.vue'
import tip_i from '@/assets/images/tip.png'
import KzAddArticle from '@/components/KzAddArticle.vue'
import { articleEditing_api, articleDetail_api } from '@/api/cms/custom'
import { mainStore } from '@/store/index'
const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id //有id就是编辑
if (id) {
  articleDetail_api({ id: id as string }).then((res: res) => {
    addRef.value.setForm({
      thumb_url: res.body.thumb_url,
      title: res.body.title,
      text: res.body.content,
    })
  })
}
const addRef = ref() //添加文章组件
const submit = () => {
  addRef.value.validate().then((flag: boolean) => {
    if (flag) {
      addRef.value.submit()
    }
  })
}
const subSuccess = async (val: any) => {
  // 文章提交成功
  const rData = {
    content: val.text,
    thumb_url: val.thumb_url,
    title: val.title,
  }
  const { status } = await articleEditing_api({ ...rData, order_id: id })

  if (status == 1) {
    store.setKeepList([])
    router.replace('/cms/custom/article')
  }
}
</script>

<style scoped lang="scss">
.article_add {
  .addform {
    // background-color: #fff;
    border-radius: 6px;
    span {
      font-size: 12px;
      font-weight: 400;
      color: $color999;
      margin-left: 22px;
    }
    .tip {
      position: relative;
      left: 115px;
      top: 425px;
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
}
</style>
