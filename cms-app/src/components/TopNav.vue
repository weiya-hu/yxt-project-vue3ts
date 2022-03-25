<template>
  <div class="topnav fcs">
    <div class="item fcc" @click="changeNav(v.path)" v-for="v in nav" :key="v.path" :class="modelValue == v.path?'active':''">
      <span>{{v.name}}</span>
    </div>
    <div class="line" :style="{transform:`translate(${left}px,0)`}" ref="line"></div>
  </div>
</template>

<script setup lang="ts">
//布局的顶部导航
import { ref ,onMounted,nextTick } from 'vue'
import {useRouter} from 'vue-router'

const props = withDefaults(defineProps<{
  modelValue:string,
  nav:Navitem[],
}>(),{
  nav:()=>([{path:'/',name:'-'}]),
  activePath:'/'
})
const emits = defineEmits(['update:modelValue'])

const router = useRouter()
const changeNav = (path:string)=>{
  if(path === props.modelValue) return
  // emits('update:modelValue',path) //有点多余
  // changeLeft() //再这里调用当用浏览器后退时不会有效果
  router.push(path)
}

let left = ref(0)
let line = ref()
let activeDom
onMounted (() => {
  //解决刷新时顶部导航线条会从开始跳到激活位置
  setTimeout(() => {
    line.value.style.transition = 'transform 0.5s'
  }, 500);
  changeLeft()
});
const changeLeft = ()=>{
  //改变顶部导航线条位置
  nextTick(()=>{
    activeDom = document.querySelector('.active') as HTMLElement
    left.value = activeDom.offsetLeft +  activeDom.offsetWidth/2 - 10
  })
}

defineExpose({
  changeLeft
})
</script>

<style scoped lang="scss">
.topnav{
  height: 80px;
  padding-left: 25px;
  box-sizing: border-box;
  position: relative;
  .item{
    padding: 0 25px;
    font-size: 18px;
    font-weight: 400;
    height: 80px;
    &:hover{
      color: $dfcolor;
      cursor: pointer;
      background-color: #8eb1fc3b;
    }
  }
  .line{
      position: absolute;
      width: 20px;
      height: 4px;
      border-radius: 2px;
      background-color: $dfcolor;
      bottom: 16px;
      left: 0;
    }
  .active{
    color:$dfcolor;
    font-weight: 500;
  }
}
</style>