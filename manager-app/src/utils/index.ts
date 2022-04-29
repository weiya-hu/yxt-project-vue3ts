import { ElMessage , ElMessageBox } from 'element-plus'

import emiter from '@/utils/bus'

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
    duration: typeof time == 'number' ? time : 3000,
  })
}

export function errMsg(msg: string, time?: number) {
  ElMessage({
    showClose: true,
    message: msg,
    grouping: true,
    type: 'error',
    duration: typeof time == 'number' ? time : 3000,
  })
}

export function warnMsg(msg: string, time?: number) {
  ElMessage({
    showClose: true,
    message: msg,
    grouping: true,
    type: 'warning',
    duration: time||3000,
  })
}

export function kzConfirm(msg?:string){
  return ElMessageBox.confirm(
    msg||'正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
}

/**
 * 递归循环查找字符
 * @arr ['A','2'] 要查找的值组成的数组
 * @listArr 带有children的数组，层级和arr的长度一致
 * @key arr在listArr中的字段名称
 * @nameKey 对应字符的键名，默认值'name'
 * @childrenKey arr中children数组键名，默认值'children'
 * @return 'xx,xx'
*/
export function get_Str(arr:Array<number|string>, listArr:any[], key:string, nameKey:string = 'name', childrenKey:string = 'children'){
  // 递归循环查找字符
  console.time('getStr');
  let i = 0
  let str = ''
  const dg = (list:any)=>{
    for (let j = 0; j < list.length; j++) {
      if(arr[i] == list[j][key]){
        str += list[j][nameKey] + '，'
        if(i<arr.length-1){
          i++
          if(list[j][childrenKey]){
            dg(list[j][childrenKey])
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
 * @key arr中要当成哈希表键名的字段名称
 * @nameKey arr中要当成哈希表key对应字符串的键名，默认值'name'
 * @childrenKey arr中children数组键名，默认值'children'
 * @return '{A:{name:xx,[childrenKey]:{2:{name:xx}...}},...}'
*/
export function getHash (arr:any[], key:string, nameKey:string = 'name', childrenKey:string = 'children'){
  //转换为哈希表
  console.time('getHash');
  let obj:any = {}
  const dg = (list:any[],item:any)=>{
    for (let i = 0; i < list.length; i++) {
      item[list[i][key]] = {
        [nameKey]:list[i][nameKey]
      }
      if(list[i][childrenKey]){
        item[list[i][key]][childrenKey] = {}
        dg(list[i][childrenKey],item[list[i][key]][childrenKey])
      }
    }
  }
  dg(arr,obj)
  console.timeEnd('getHash');
  return obj
}

/**
 * 获取哈希表中字符串，先getHash获取哈希表
 * @arr 要查找的值组成的数组，例如['A','2'] 
 * @hash 哈希表，getHash获取
 * @type 返回的数据类型
 * @nameKey 哈希表中所需字符串的键名，默认值'name'
 * @childrenKey 哈希表中children键名，默认值'children'
 * @return 根据type判断，'arr'返回['xx','xx']，'last'返回最后一位'xx'，其他返回'xx，xx'，查找不到返回上一级能查到的数据
*/
export function getHashStr(arr:(string|number)[], hash:any, type?:'arr'|'last', nameKey:string = 'name', childrenKey:string = 'children'){
  //获取哈希表中arr对应的name字符串
  let strArr:(string|number)[] = [];
  const toReturn = ()=>{
    switch (type) {
      case 'arr':
        return strArr
        break;
      case 'last':
        return strArr[strArr.length - 1] ? strArr[strArr.length - 1] : ''
        break;
      default:
        return strArr.join('，')
        break;
    }
  }
  let i = 0
  const dg = (obj:any) => {
    strArr.push(obj[nameKey])
    if(obj[childrenKey] && i < arr.length){
      i++
      dg(obj[childrenKey][arr[i]])
    }
  }
  try {
    hash[arr[i]] && dg(hash[arr[i]])
    return toReturn()
  } catch (error) {
    return toReturn()
  }

}

/**
 * 3个以内字符串转为长度3以内的数组，方便getHashStr使用
 * @return [str1,str2?,str3?]
*/
export function strToArr(str1:string|number,str2?:string|number,str3?:string|number,) {
  //3个以内字符串转为长度3以内的数组
  try {
    let arr = [str1.toString()]
    if(str2 && !str3){
      arr.push(str2.toString())
    }else if(str2 && str3){
      arr.push(str2.toString())
      arr.push(str3.toString())
    }
    return arr
  } catch (error) {
    return [str1.toString()]
  }
}

export function getSource(source:number){
  const sourceObj: Record<number, string> = {
    1: '康州数智',
    2: '第三方数据',
    3: '号码段',
    4: '广告投放',
    5: '微信好友',
    6: '百度关键词',
    7: '大数据获客',
    8: '400获客',
    9: '竞价获客',
    10: '短信获客',
  }
  try {
    if(sourceObj[source as keyof typeof sourceObj]){
      return sourceObj[source as keyof typeof sourceObj]
    }
  } catch (error) {
    return '---'
  }
  return '---'
}

export const telReg = new RegExp(/^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/) // 手机号
export const passReg = /^[A-Za-z0-9]*$/ // 数字或者字母

/**
 * 预览图片
 * @imgs 图片数组
 * @index 要展示的图片在imgs里对应的索引，默认0
*/
export function lookImage(imgs:string[], index = 0){
  emiter.emit('lookImage', {imgs, index})
}

/**
 * 预览视频
 * @video 视频地址
*/
export function lookVideo(video:string){
  emiter.emit('lookVideo', video)
}

/**
 * 显示素材库组件以选择 
 * @callbackName 选择素材后emiter.on回调名，此参数尽量全局唯一，即不要有同样的回调名 (内部显示emiter.emit为'kzPoolShow')
 * @type 显示时默认展示的tab，1：图片，2：视频 不传默认1
 * @disabled 传入type时另一个tab是否禁用
*/
export function showKzPool(callbackName:string, type?:1|2, disabled?:Boolean) {
  emiter.emit('kzPoolShow', { callbackName , type, disabled })
}

/**
 * 清空重置素材库内容 (内部emiter.emit为'kzPoolClear')
 * @type 1：图片，2：视频
*/
export function clearKzPool(type:1 | 2) {
  emiter.emit('kzPoolClear', type)
}

/**
 * 下载图片 图片地址不同源时a标签无法下载而会直接跳转，则用此方法
 * @imgSrc 图片地址
 * @imgName 下载文件名
*/
export const downLoadimage = (imgSrc:string, imgName?:string) => {
  const image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function() {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context!.drawImage(image, 0, 0, image.width, image.height);
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob as Blob)
      const a = document.createElement('a')
      a.download = imgName || '未命名' // 设置图片名称
      a.href = url
      a.click()
      a.remove()
      canvas.remove()
      image.remove()
      URL.revokeObjectURL(url)
    })
    // const url = canvas.toDataURL("image/png"); //得到图片的base64
    // const a = document.createElement("a");
    // a.download = imgName || '未命名'; // 设置图片名称
    // a.href = url;
    // a.click();
    // a.remove()
    // canvas.remove()
  };
  image.src = imgSrc;
}

/**
 * 下载视频
 * @VideoSrc 视频地址
 * @videoName 下载文件名
*/
export const downLoadVideo = (videoSrc:string, videoName?:string) => {
  fetch(videoSrc).then(res => res.blob()).then(blob => {
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = videoName || '未命名'
    a.click();
    a.remove()
    window.URL.revokeObjectURL(url);
  });
}

/**
 * 全局状态
*/
export const KZ_STATUS: Record<number, { text:string, className: string }> = {
  0: { text: '---', className: '' },
  1: { text: '待处理', className: 'sdot_y' },
  2: { text: '已受理', className: 'sdot_g' },
  3: { text: '被驳回', className: 'sdot_r' },
  4: { text: '已完结', className: 'sdot_b' }
}

/**
 * 获取状态
*/
export function getKzStatus(key:number) {
  const obj = { text: '---', className: '' }
  try {
    if(KZ_STATUS[key as keyof typeof KZ_STATUS]){
      return KZ_STATUS[key as keyof typeof KZ_STATUS]
    }
  } catch (error) {
    return obj
  }
  return obj
}