<template>
  <el-dialog v-model="modelValue" :width="500" draggable @close="close">
    <template #title>
      <div class="up-user-title">上传客户</div>
    </template>
    <div>
      <el-form>
        <el-form-item
          label="人群名称"
          required
        >
          <el-input></el-input>
        </el-form-item>
        <el-form-item
          label="人群描述"
        >
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      

    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="close">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref,toRefs} from 'vue'


const props = withDefaults(defineProps<{
  modelValue:boolean,
}>(),{})

const emit = defineEmits(['update:modelValue'])
const close=()=>{
  emit('update:modelValue',false)
  console.log(props.modelValue)
}

</script>

<style scoped lang="scss">

</style>