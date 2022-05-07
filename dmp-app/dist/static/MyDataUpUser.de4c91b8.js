import{M as e}from"./MyUpload.7004f179.js";import{_ as a,D as l,e as s}from"./index.03fefcec.js";import{a as r}from"./myData.d18ceb32.js";import{F as o,ax as t,a as u,r as d,A as p,O as n,a6 as i,G as m,H as c,X as v,Q as g,I as f,R as b,u as V,P as h,i as x,at as y,au as _,V as F}from"./vue.5acda677.js";const w={class:"upload-users"},D=(e=>(y("data-v-481debc3"),e=e(),_(),e))((()=>f("div",{class:"up-user-title"},"上传客户",-1))),k={class:"dialog-footer"},U=F("取消"),q=F("上传");var L=a(o({props:{modelValue:{type:Boolean}},emits:["update:modelValue","submitSuccess"],setup(a,{emit:o}){const y=t(),_=u({personsName:[{required:!0,message:"请输入人群名称",trigger:"change"},{required:!0,message:"请输入人群名称",trigger:"blur"}],personsDesc:[{required:!0,message:"请输入人群描述",trigger:"change"},{required:!0,message:"请输入人群描述",trigger:"blur"}],updateFile:[{required:!0,message:"请添加文件",trigger:"blur"},{validator:(e,a,l)=>{switch(F.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]});let F=d("none");const L=d(),j=d();let N=d({personsName:"",personsDesc:"",updateFile:""}),C=d(!1),E=d("");p((()=>{let e="/myData/up2b"===y.path?"/dmp/source/template/download.do?type=1":"/dmp/source/template/download.do?type=2";l({url:e,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8",MODULE:"dmp"},responseType:"blob"}).then((e=>{E.value=URL.createObjectURL(e.data)}))}));const M=()=>{o("update:modelValue",!1)},R=()=>{L.value.validate((e=>{if(!e)return!1;C.value=!0,j.value.submit()}))},O=e=>{e?(F.value=e,N.value.updateFile="",L.value.validateField("file",(()=>null))):(F.value="",L.value.clearValidate("updateFile"))},S=e=>{N.value.updateFile="",F.value="none",j.value.clear(),C.value=!1,s("上传失败")},T=e=>{C.value=!1,r({attachment:e,group_desc:N.value.personsDesc,group_name:N.value.personsName,type:"/myData/up2b"===y.path?1:2}).then((e=>{e.status?(M(),L.value.resetFields(),o("submitSuccess",1)):(N.value.updateFile="",F.value="none",j.value.clear()),C.value=!1})).catch((()=>{S()}))};return(l,s)=>{const r=n("el-input"),o=n("el-form-item"),t=n("el-form"),u=n("el-button"),d=n("el-dialog"),p=i("loading");return m(),c("div",w,[v(d,{modelValue:a.modelValue,"onUpdate:modelValue":s[3]||(s[3]=e=>x(modelValue)?modelValue.value=e:null),width:500,draggable:"",onClose:M},{title:g((()=>[D])),footer:g((()=>[f("span",k,[v(u,{onClick:M},{default:g((()=>[U])),_:1}),v(u,{type:"primary",onClick:R},{default:g((()=>[q])),_:1})])])),default:g((()=>[f("div",null,[b((m(),h(t,{model:V(N),ref_key:"formRef",ref:L,rules:V(_)},{default:g((()=>[v(o,{label:"人群名称",required:"",prop:"personsName"},{default:g((()=>[v(r,{placeholder:"请输入人群名称",modelValue:V(N).personsName,"onUpdate:modelValue":s[0]||(s[0]=e=>V(N).personsName=e),clearable:""},null,8,["modelValue"])])),_:1}),v(o,{label:"人群描述",required:"",prop:"personsDesc"},{default:g((()=>[v(r,{type:"textarea",maxlength:"150","show-word-limit":"",class:"input-textarea",placeholder:"请对人群进行简单的描述",modelValue:V(N).personsDesc,"onUpdate:modelValue":s[1]||(s[1]=e=>V(N).personsDesc=e)},null,8,["modelValue"])])),_:1}),v(o,{label:"文件上传",prop:"updateFile",required:""},{default:g((()=>[v(e,{modelValue:V(N).updateFile,"onUpdate:modelValue":s[2]||(s[2]=e=>V(N).updateFile=e),downLink:V(E),onChange:O,onError:S,onSuccess:T,exnameList:[".doc",".docx",".pdf",".xls",".xlsx"],ref_key:"upload",ref:j},null,8,["modelValue","downLink","exnameList"])])),_:1})])),_:1},8,["model","rules"])),[[p,V(C)]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-481debc3"]]);export{L as M};