/*
  统一封装get post请求 拦截器 默认地址
*/
// 引入axios
import axios from 'axios'

//引入ui框架的弹窗组件
import { ElMessage } from 'element-plus'

//引入路由用于设置响应拦截器
import router from '@/router'
import { reactive, ref } from 'vue'

// 设置默认地址
axios.defaults.baseURL = '/'

// 请求拦截器
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('firstToken')
  if (token) {
    // config.headers.Authorization = token;
    config.headers = {
      'Content-Type': 'application/json', //'application/x-www-form-urlencoded';
      Authorization: token,
      ...config.headers,
    }
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      const response = res.data
      if (response.status == 0 && response.errno && response.errno != 10200) {
        ElMessage({
          showClose: true,
          message: response.message,
          type: 'error',
          grouping: true,
        })
        if(response.errno == 10620){
          setTimeout(() => {
            router.replace('/login')
          }, 2000);
        }
      }
    }
    return res
  },
  (error) => {
    console.log(error, 'axios.error')
    ElMessage({
      showClose: true,
      message: '接口错误，请联系管理员',
      type: 'error',
      grouping: true,
    })
    return error
  }
)

// 封装get请求 isBg 1:后台接口 0:前台接口
export function get(isBg:0|1, url: string, params?: any, showmsg?: boolean) {
  return new Promise<res>((resolve, reject) => {
    axios
      .get(isBg ? 'api' + url : 'bgapi' + url, { params })
      .then((res) => {
        if (showmsg && res.data && res.data.status == 1) {
          ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'success',
            grouping: true,
          })
        }
        resolve(res.data)
      })
      .catch((error) => {
        console.log(error, 'geterror')
        reject(error)
      })
  })
}

// 封装post请求 isBg 0:后台接口 1:前台接口
export function post(isBg:0|1, url: string, params?: any, showmsg?: boolean) {
  return new Promise<res>((resolve, reject) => {
    axios
      .post(isBg ? 'api' + url : 'bgapi' + url, params)
      .then((res) => {
        if (showmsg && res.data && res.data.status == 1) {
          ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'success',
            grouping: true,
          })
        }
        resolve(res.data)
      })
      .catch((error) => {
        console.log(error, 'posterror')
        reject(error)
      })
  })
}

// 想要创建一个通用的调用模板的尝试，返回isLoading，isError，data，getData，但是使用顶层await会导致页面空白
export const Gajax = (ajax: Function) => {
  const isLoading = ref(false)
  const isError = ref(false)
  const data = ref({})
  const getData = () => {
    return new Promise((resolve, reject) => {
      isLoading.value = true
      ajax()
        .then((res: res) => {
          isLoading.value = false
          isError.value = res.status == 1 ? false : true
          data.value = res
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
  // const getData = async ()=>{
  //     isLoading.value = true
  //     const res = await ajax()
  //     isLoading.value = false
  //     isError.value = res.status==1?false:true
  //     data.value = res
  //     return res
  // }
  return reactive({
    isLoading,
    isError,
    data,
    getData,
  }) as ajax
}
// const data1 = Gajax(firstToken)
// data1.getData().then((res:res)=>{
//   console.log(data1.data,'res');
// })

// const sData = Gajax(firstToken)
// await sData.getData() //页面空白 <suspense>组件包裹路由可以解决 但此api为vue3实验性api
