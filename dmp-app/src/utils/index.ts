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

/**
 * 递归循环查找字符
 * @arr ['A','2'] 要查找的值组成的数组
 * @listArr 带有children的数组，层级和arr的长度一致
 * @key arr在listArr中的字段名称
 * @return 'xx,xx'
*/
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
/**
 * 带有children的对象数组 转换为 哈希表
 * @arr 要转换的数组
 * @key arr中要当成哈希表键名的字段
 * @return '{A:{name:xx,children:{2:{name:xx}...}},...}'
*/
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
/**
 * 获取哈希表中字符串，先getHash获取哈希表
 * @arr ['A','2'] 要查找的值组成的数组
 * @hash 哈希表，getHash获取
 * @return 'xx,xx'
*/
export function getHashStr(arr:any,hash:any){
  //获取哈希表中字符串
  let str = '';
  (arr[0]&&hash[arr[0]]) && (str += hash[arr[0]].name + '，');
  (arr[1]&&hash[arr[0]]) && (str += hash[arr[0]].children[arr[1]].name + '，');
  (arr[2]&&hash[arr[0]]) && (str += hash[arr[0]].children[arr[1]].children[arr[2]].name + '，');
  return str.substring(0, str.length - 1);
}
/**
 * 3个以内字符串转为长度3以内的数组，方便getHashStr使用
 * @return [str1,str2?,str3?]
*/
export function strToArr(str1:string|number,str2?:string|number,str3?:string|number,) {
  //3个以内字符串转为长度3以内的数组
  let arr = [str1.toString()]
  if(str2 && !str3){
    arr.push(str2.toString())
  }else if(str2 && str3){
    arr.push(str2.toString())
    arr.push(str3.toString())
  }
  return arr
}