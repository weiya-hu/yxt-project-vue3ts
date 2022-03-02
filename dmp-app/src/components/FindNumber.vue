<template>
  <div class="find_number">
    为您找到<span>&ensp;{{total}}&ensp;</span>家符合条件的客户（<span>*根据政策与监管法规要求，联系人手机号脱敏展示</span>）
  </div>
</template>

<script setup lang="ts">
//分页组件
const props = withDefaults(defineProps<{
  total:number,
}>(),{
  total:0
})

</script>

<style scoped lang="scss">
.find_number{
  font-size: 14px;
  color: #363636;
  display: inline-block;
  span{
    color: #E40000;
  }
}
</style>