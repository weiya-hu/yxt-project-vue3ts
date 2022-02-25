import { ElMessage } from 'element-plus'

export const getUrlParams = (search: string, name: string) => {
  //search方式跳转获取参数
  const paramsString = search.substring(1)
  const searchParams = new URLSearchParams(paramsString)
  const params = searchParams.get(name)
  return params || ''
}

export function okMsg(msg: string, time?: number) {
  ElMessage({
    showClose: true,
    message: msg,
    grouping: true,
    type: 'success',
    duration: time||3000,
  })
}

export function errMsg(msg: string, time?: number) {
  ElMessage({
    showClose: true,
    message: msg,
    grouping: true,
    type: 'error',
    duration: time||3000,
  })
}

export function infoMsg(msg: string, time?: number) {
  ElMessage({
    showClose: true,
    message: msg,
    grouping: true,
    type: 'info',
    duration: time||3000,
  })
}

export function get_Str(arr:any[],listArr:any[],key:string){
  // 递归循环查找字符
  console.time('getStr');
  let i = 0
  let str = ''
  const dg = (list:any)=>{
    for (let j = 0; j < list.length; j++) {
      if(arr[i] == list[j][key]){
        str += list[j].name + '，'
        if(i<arr.length-1){
          i++
          if(list[j].children){
            dg(list[j].children)
          }
        }else{
          break
        }
      }
    }
  }
  dg(listArr)
  console.timeEnd('getStr');
  return str.substring(0, str.length - 1);  
}
export function getHash (arr:any[],key:string){
  //转换为哈希表
  console.time('getHash');
  let obj:any = {}
  const dg = (list:any[],item:any)=>{
    for (let i = 0; i < list.length; i++) {
      item[list[i][key]] = {
        name:list[i].name
      }
      if(list[i].children){
        item[list[i][key]].children = {}
        dg(list[i].children,item[list[i][key]].children)
      }
    }
  }
  dg(arr,obj)
  console.timeEnd('getHash');
  return obj
}
export function getHashStr(arr:any,hash:any){
  //获取哈希表中字符串
  let str = ''
  arr[0]&&hash[arr[0]] && (str += hash[arr[0]].name + '，')
  arr[1]&&hash[arr[0]] && (str += hash[arr[0]].children[arr[1]].name + '，')
  arr[2]&&hash[arr[0]] && (str += hash[arr[0]].children[arr[1]].children[arr[2]].name + '，')
  return str.substring(0, str.length - 1);
}
export function strToArr(str1:string|number,str2?:string|number,str3?:string|number,) {
  //三个以内字符串转为长度3以内的数组
  let arr = [str1.toString()]
  if(str2 && !str3){
    arr.push(str2.toString())
  }else if(str2 && str3){
    arr.push(str2.toString())
    arr.push(str3.toString())
  }
  return arr
}