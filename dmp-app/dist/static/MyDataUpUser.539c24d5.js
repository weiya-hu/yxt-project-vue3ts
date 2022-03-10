import{M as e}from"./MyUpload.3cc87795.js";import{_ as a,z as l,q as s}from"./index.e956d55f.js";import{a as r}from"./myData.9e37074a.js";import{F as o,ax as t,a as u,r as d,A as n,O as p,a6 as i,G as m,H as c,X as v,Q as f,I as g,R as b,u as V,P as h,b as x,at as y,au as _,V as F}from"./vue.2fa59680.js";const w={class:"upload-users"},k=(e=>(y("data-v-729739cd"),e=e(),_(),e))((()=>g("div",{class:"up-user-title"},"上传客户",-1))),q={class:"dialog-footer"},D=F("取消"),U=F("上传");var j=a(o({props:{modelValue:{type:Boolean}},emits:["update:modelValue","submitSuccess"],setup(a,{emit:o}){const y=t(),_=u({personsName:[{required:!0,message:"请输入人群名称",trigger:"change"},{required:!0,message:"请输入人群名称",trigger:"blur"}],personsDesc:[{required:!0,message:"请输入人群描述",trigger:"change"},{required:!0,message:"请输入人群描述",trigger:"blur"}],updateFile:[{required:!0,message:"请添加文件",trigger:"blur"},{validator:(e,a,l)=>{switch(F.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]});let F=d("none");const j=d(),L=d();let N=d({personsName:"",personsDesc:"",updateFile:""}),C=d(!1),E=d("");n((()=>{let e="/myData/up2b"===y.path?"/dmp/file-download?type=1":"/dmp/file-download?type=2";l({url:e,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"}).then((e=>{E.value=URL.createObjectURL(e.data)}))}));const M=()=>{o("update:modelValue",!1)},R=()=>{j.value.validate((e=>{if(!e)return!1;C.value=!0,L.value.submit()}))},S=e=>{e?(F.value=e,N.value.updateFile="",j.value.validateField("file",(()=>null))):(F.value="",j.value.clearValidate("updateFile"))},T=e=>{N.value.updateFile="",F.value="none",L.value.clear(),C.value=!1,s("上传失败")},z=e=>{C.value=!1,r({attachment:e,group_desc:N.value.personsDesc,group_name:N.value.personsName,type:"/myData/up2b"===y.path?1:2}).then((e=>{e.status?(M(),j.value.resetFields(),o("submitSuccess",1)):(N.value.updateFile="",F.value="none",L.value.clear()),C.value=!1})).catch((()=>{T()}))};return(l,s)=>{const r=p("el-input"),o=p("el-form-item"),t=p("el-form"),u=p("el-button"),d=p("el-dialog"),n=i("loading");return m(),c("div",w,[v(d,{modelValue:a.modelValue,"onUpdate:modelValue":s[3]||(s[3]=e=>x(modelValue)?modelValue.value=e:null),width:500,draggable:"",onClose:M},{title:f((()=>[k])),footer:f((()=>[g("span",q,[v(u,{onClick:M},{default:f((()=>[D])),_:1}),v(u,{type:"primary",onClick:R},{default:f((()=>[U])),_:1})])])),default:f((()=>[g("div",null,[b((m(),h(t,{model:V(N),ref_key:"formRef",ref:j,rules:V(_)},{default:f((()=>[v(o,{label:"人群名称",required:"",prop:"personsName"},{default:f((()=>[v(r,{placeholder:"请输入人群名称",modelValue:V(N).personsName,"onUpdate:modelValue":s[0]||(s[0]=e=>V(N).personsName=e),clearable:""},null,8,["modelValue"])])),_:1}),v(o,{label:"人群描述",required:"",prop:"personsDesc"},{default:f((()=>[v(r,{type:"textarea",maxlength:"150","show-word-limit":"",class:"input-textarea",placeholder:"请对人群进行简单的描述",modelValue:V(N).personsDesc,"onUpdate:modelValue":s[1]||(s[1]=e=>V(N).personsDesc=e)},null,8,["modelValue"])])),_:1}),v(o,{label:"文件上传",prop:"updateFile",required:""},{default:f((()=>[v(e,{modelValue:V(N).updateFile,"onUpdate:modelValue":s[2]||(s[2]=e=>V(N).updateFile=e),downLink:V(E),onChange:S,onError:T,onSuccess:z,exnameList:[".doc",".docx",".pdf",".xls",".xlsx"],ref_key:"upload",ref:L},null,8,["modelValue","downLink","exnameList"])])),_:1})])),_:1},8,["model","rules"])),[[n,V(C)]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-729739cd"]]);export{j as M};
