import { createApp } from 'vue'
import { addClass, removeClass } from '@/utils/dom.js'
import Error from '@/components/Error.vue'

// 一个全局的 position: reactive 的样式类
const relativeCls = 'p-relative'

function createStatusDirective(Comp: any, className?: any) {
  const name = Comp.name
  const classList = [relativeCls]
  if (className) {
    classList.push(className)
  }
  // 自定义指令hook
  return {
    mounted(el: any, binding: any) {
      const app = createApp(Comp)
      const instance = app.mount(document.createElement('div'))

      // 将 instance 存到el对象中，方面使用
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance

      const redoFunction = el.getAttribute('errorRedo') //获取标签上传入的重试事件名
      if (redoFunction) {
        el[name].instance.setFunctionName(redoFunction) //调用组件改变全局事件名函数，error组件上通过全局事件实现重试回调
      }
      if (binding.value) {
        append(el)
      }
    },
    updated(el: any, binding: any) {
      // const redo = binding.arg
      if (binding.oldValue !== binding.value) {
        binding.value ? append(el) : remove(el)
      }
    },
  }

  function append(el: any) {
    const name = Comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, classList)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el: any) {
    removeClass(el, classList)
    el.removeChild(el[name].instance.$el)
  }
}

export default createStatusDirective(Error)
