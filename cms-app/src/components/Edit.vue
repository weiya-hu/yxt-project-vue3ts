<template>
  <Editor id="tinymce" v-model="modelValue" :init="init"></Editor>
</template>

<script lang="ts" setup>
//富文本编辑器组件
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import 'tinymce/themes/silver/theme' //编辑器主题
import 'tinymce/icons/default' //引入编辑器图标icon
// import 'tinymce/models/dom' 
import 'tinymce/plugins/link' //超链接
import 'tinymce/plugins/image' //插入编辑图片
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/charmap' //特殊字符
// import 'tinymce/plugins/media' //插入编辑媒体
// import 'tinymce/plugins/wordcount' // 字数统计
import 'tinymce/plugins/table'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/preview'
import { ref , watch } from 'vue'
import { getAliToken_api } from '@/api/login'
import axios from 'axios'
const props = withDefaults(defineProps<{
  modelValue:string, //富文本的值
}>(),{
  modelValue:'',
})

const upload = (blobInfo:any, success:Function, failure:Function, progress:any)=>{
  console.log(blobInfo);
  
  const fileName = blobInfo.filename()
  getAliToken_api({site:'cms_article'}).then(async (res:res)=>{
    if(res.status == 1){
      const exname=fileName.substring(fileName.lastIndexOf("."))
      const fd = new FormData();
      const upData = {
        key: res.body.dir+res.body.uuid+exname,
        OSSAccessKeyId: res.body.accessid,
        success_action_status: 200,
        policy: res.body.policy,
        signature: res.body.signature,
      };
      for (const [key, value] of Object.entries(upData)) {
        fd.append(key, value as string);
      }
      fd.append("file", blobInfo.blob());
      const response = await axios({
        url: res.body.host,
        method: 'post',
        headers: {
          "Content-Type": "multipart/form-data;",
        },
        data: fd,
      })
      if(response.status == 200){
        const url = res.body.host + '/' + res.body.dir + res.body.uuid + exname
        success(url)
      }else{
        failure('上传失败')
      }
    }else{
      failure('获取上传参数失败')
    }
  })
  // if (blobInfo.blob()){
  //   success(URL.createObjectURL(blobInfo.blob()))
  // }
}

// window.tinymce.baseURL = `${window.location.origin}/public/tinymce`;
const init = {
  selector: '#tinymce',
  height: 500,
  width:'100%',
  language_url: '/tinymce/langs/zh_CN.js', //汉化路径是自定义的，一般放在public或static里面
  language: 'zh_CN',
  skin_url: '/tinymce/skins/ui/oxide', //皮肤
  plugins: 'advlist autolink link image lists charmap table fullscreen preview', //插件
  // plugins: 'preview searchreplace autolink directionality visualblocks visualchars fullscreen image link template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  textpattern help emoticons autosave autoresize ',
  menubar: false,//最顶部菜单
  //工具栏
  // toolbar: 'fontselect | undo redo |  formatselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent lists image | fullscreen | preview',
  toolbar: '| styleselect | fontsizeselect | forecolor backcolor bold italic underline strikethrough link image | code undo redo restoredraft | fontselect | cut copy paste pastetext | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat | table media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight axupimgs',
  fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px', //字体大小
  font_formats:"微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
  placeholder: '请输入文章内容',
  statusbar: false, // 底部的状态栏
  images_upload_handler:upload
};
tinymce.init({})

const emit = defineEmits(['update:modelValue'])
watch(()=>props.modelValue,(newValue, oldValue)=>{
  emit('update:modelValue',newValue)
})
</script>