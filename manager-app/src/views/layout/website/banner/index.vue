<template>
  <div class="banner_index">
    <el-card class="mycard">
      <template #header>
        <div class="fsc f1">
          <div>使用中<span class="color999">（4）</span></div>
          <el-link type="primary">查看效果<el-icon><arrow-right /></el-icon></el-link>
        </div>
      </template>
      <div class="imgs_list flex">
        <div class="imgs_item">
          <div class="imgbox">
            <img :src="''" alt="">
            <div class="lookicon fcc lookhover">
              <el-icon size="20px"><zoom-in/></el-icon>
            </div>
          </div>
          <div class="imginfo">
            <div class="imgname els">123</div>
            <div class="imglink fcs">链接：<el-link type="primary">查看效果</el-link></div>
            <div class="fsc imgicon">
              <div>
                200
              </div>
              <div>下架</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <el-dialog v-model="addShow" title="上传图片" width="380px" @close="close">
      <el-form :model="addForm">
        <el-form-item label="选择素材" required label-width="90px">
          <div class="sel_pool">
            
          </div>
        </el-form-item>
        <el-form-item label="添加链接" prop="link" label-width="90px">
          <el-input v-model="addForm.link" placeholder="请输入链接"/>
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="goSubmit" :disabled="addForm.link">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ArrowRight, ZoomIn, CaretRight, Plus } from '@element-plus/icons-vue'

const addShow = ref(true)
const addForm = reactive({
  link:''
})
const close = () => {
  addForm.link = ''
  addShow.value = false
}
const goSubmit = () => {

}

</script>

<style scoped lang="scss">
.banner_index{
  .imgs_list{
    margin-top: 20px;
    .imgs_item{
      margin-right: 20px;
      width: calc( (100% - 80px) / 5 );
      box-sizing: border-box;
      border: 1px solid #e4e7ed;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      overflow: hidden;
      .imgbox{
        position: relative;
        padding-top: 56.25%;
        img{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
          position: absolute;
          top: 0;
          border-radius: 4px;
        }
        .lookicon{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 30px;
          height: 30px;
          background-color: rgba(0,0,0,0.5);
          .el-icon{
            color: #fff;
          }
        }
      }
      .imginfo{
        padding: 10px;
        color: $color333;
        .imgname{
          line-height: 1.1;
          font-size: 16px;
        }
        .imglink{
          margin-top: 4px;
          font-size: 12px;
          line-height: 1.1;
        }
        .imgicon{
          margin-top: 16px;
          font-size: 12px;
          color: $color999;
        }
      }
    }
    .imgs_item:nth-child(5n){
      margin-right: 0;
    }
  }
}
</style>