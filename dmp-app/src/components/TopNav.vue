<template>
  <div class="topnav fcs">
    <div class="item fcc" @click="changeNav(v.path)" v-for="v in nav" :key="v.path" :class="modelValue == v.path?'active':''">
      <span>{{v.name}}</span>
    </div>
    <div class="line" :style="{left:left+'px'}" ref="line"></div>
  </div>
</template>

<script setup lang="ts">
//布局的顶部导航
import { ref ,onMounted,nextTick,watch } from 'vue'
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
  emits('update:modelValue',path) //有点多余
  // changeLeft()
  router.push(path)
}

let left = ref(0)
let line = ref()
onMounted (() => {
  //解决刷新时顶部导航线条会从开始跳到激活位置
  setTimeout(() => {
    line.value.style.transition = 'left 0.5s'
  }, 500);
  changeLeft()
});
const changeLeft = ()=>{
  //改变顶部导航线条位置
  nextTick(()=>{
    let activeDom =ref( document.querySelector('.active') as HTMLElement)
    left.value = activeDom.value.offsetLeft +  activeDom.value.offsetWidth/2
  })
}

// watch(()=>props.modelValue, (newValue, oldValue) => {
//   //onUpdated会触发两次 所以用了watch ,也可以用onBeforeRouteUpdate  改为在父组件调用了 性能可能会好一点
//   changeLeft()
// })
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
      transform: translate(-50%,0);
    }
  .active{
    color:$dfcolor;
    font-weight: 500;
  }
}
</style>