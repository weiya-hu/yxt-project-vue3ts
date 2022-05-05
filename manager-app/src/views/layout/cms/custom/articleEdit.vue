<template>
  <div class="add_article">
    <div class="fsc">
      <DetailsHeader />
      <div class="btns">
        <el-button class="bdc_btn" @click="$router.push('/cms/custom')">返回</el-button>
        <el-button class="bdc_btn" @click="submit(1)">保存</el-button>
        <el-button type="primary" @click="submit(2)">完成</el-button>
      </div>
    </div>

    <div class="aw">
      <KzAddArticle ref="addRef" needimg @success="subSuccess" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsHeader from '@/components/DetailsHeader.vue'
import tip_i from '@/assets/images/tip.png'
import KzAddArticle from '@/components/KzAddArticle.vue'
import { articleEditing_api, articleSaveedit_api, articleDetail_api } from '@/api/cms/custom'
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
const aStatus = ref<1 | 2>(1)
const submit = (status: 1 | 2) => {
  aStatus.value = status
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
  const { status } =
    aStatus.value == 1
      ? await articleSaveedit_api({ ...rData, order_id: id })
      : await articleEditing_api({ ...rData, order_id: id })

  if (status == 1) {
    store.setKeepList([])
    router.replace('/cms/custom/article')
  }
}
</script>

<style scoped lang="scss">
.article_add {
  .aw {
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
