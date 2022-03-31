import{F as e}from"./date.23847c74.js";import{a as l,h as a,e as t}from"./index.ac187171.js";import{y as s,r as o,d as r,a4 as u,z as i,A as d,u as p,S as n,T as c,B as m,Z as v,X as y,_ as f,Y as b,O as w,G as h,a8 as k,az as _,a as x,ab as V,U as g,i as F}from"./vue.92f8d02a.js";import{M as z}from"./MyUpload.8779856a.js";import{d as C}from"./custom.09b61e36.js";const M={class:"flexl"},U={class:"flexl"},j={class:"text-tooltip-style"},N={class:"text-style"},B={class:"flexl"},S={key:0},E={class:"flexl"},L=["onClick"],q={class:"fcc msg"},A={class:"fcc"},I=b("我知道了");var D=l(s({props:{type:null,lable:null,prop:null,width:null,operatButton:null},emits:["click"],setup(l,{emit:a}){const t=l,s=o(!1),{type:_,lable:x,prop:V,width:g,operatButton:F}=r(t),z=e=>{const l=o();switch(e){case 2:l.value={text:"已授理",className:"calculating"};break;case 3:l.value={text:"驳回",className:"calculat-false"};break;case 4:l.value={text:"已完成",className:"calculated"};break;default:l.value={text:"待处理",className:"calcula_yellow"}}return l.value};return(l,t)=>{const o=u("el-table-column"),r=u("el-tooltip"),C=u("el-link"),D=u("el-button"),G=u("el-dialog");return i(),d(h,null,["text"===p(_)?(i(),n(o,{key:0,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[m("div",M,[m("div",null,v(p(V)&&e[p(V)]?e[p(V)]:"---"),1)])])),_:1},8,["property","label","min-width"])):y("",!0),"text-tooltip"===p(_)?(i(),n(o,{key:1,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[m("div",U,[f(r,{class:"box-item",effect:"dark",placement:"top-start"},{content:c((()=>[m("div",j,v(e[p(V)]||"---"),1)])),default:c((()=>[m("div",N,v(p(V)&&e[p(V)]?e[p(V)]:"---"),1)])),_:2},1024)])])),_:1},8,["property","label","min-width"])):y("",!0),"num"===p(_)?(i(),n(o,{key:2,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e,$index:l})=>[m("div",B,[e?(i(),d("div",S,v(l+1),1)):y("",!0)])])),_:1},8,["property","label","min-width"])):y("",!0),"link"===p(_)?(i(),n(o,{key:3,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[f(C,{type:"primary",href:e[p(V)]},{default:c((()=>[b(v(e[p(V)]),1)])),_:2},1032,["href"])])),_:1},8,["property","label","min-width"])):y("",!0),"select"===p(_)?(i(),n(o,{key:4,type:"selection",width:p(g),align:"center"},null,8,["width"])):y("",!0),"status"===p(_)?(i(),n(o,{key:5,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[m("div",E,[m("div",{class:w(z(e.status).className)},null,2),m("div",null,v(z(e.status).text),1)])])),_:1},8,["property","label","min-width"])):y("",!0),"date"===p(_)?(i(),n(o,{key:6,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:l})=>[m("div",null,v(p(e)("yyyy-MM-dd",new Date(l[p(V)]))),1)])),_:1},8,["property","label","min-width"])):y("",!0),"city"===p(_)?(i(),n(o,{key:7,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[m("div",null,v(e.province)+v(e.city)+v(e.district),1)])),_:1},8,["property","label","min-width"])):y("",!0),"operateLook"===p(_)?(i(),n(o,{key:8,property:p(V),label:p(x),"min-width":p(g)},{default:c((({row:e})=>[(i(!0),d(h,null,k(p(F),((l,t)=>(i(),d("div",{key:t,class:"operate-button",onClick:l=>((e,l)=>{2===l.status&&a("click",e,l),0===l.status&&(s.value=!0)})(t,e)},v(2===e.status?l:0===e.status?"失败原因":"---"),9,L)))),128)),f(G,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),title:"失败原因",width:"400px"},{footer:c((()=>[m("div",A,[f(D,{type:"primary",onClick:t[0]||(t[0]=e=>s.value=!1)},{default:c((()=>[I])),_:1})])])),default:c((()=>[m("div",q,v(e.fail_reason),1)])),_:2},1032,["modelValue"])])),_:1},8,["property","label","min-width"])):y("",!0)],64)}}}),[["__scopeId","data-v-24fd663a"]]);const G={class:"upload-users"},O={class:"myform"},R={class:"fcs fjend"},T=b("取消"),X=b("提交");var Y=l(s({props:{modelValue:{type:Boolean},type:null},emits:["update:modelValue","submitSuccess"],setup(e,{emit:l}){const s=e;_();const r=x({title:[{required:!0,message:"请输入需求标题",trigger:"blur"}],desc:[{required:!0,message:"请输入需求描述",trigger:"blur"}],updateFile:[{validator:(e,l,a)=>{switch(n.value){case"size":a(new Error("请添加大小不超过4M的文件"));break;case"type":a(new Error("请添加 .zip、.rar、.7z 格式的文件"));break;default:a()}},trigger:"change"}]});let n=o("none");const v=o(),y=o();let b=o({title:"",desc:"",updateFile:""}),w=o(!1);o("");const h=()=>{v.value.resetFields(),y.value.clear(),l("update:modelValue",!1)},k=e=>{w.value?a().then((()=>{})).catch((()=>{y.value.doAbort(),e()})):e()},M=()=>{v.value.validate((e=>{if(!e)return!1;w.value=!0,b.value.updateFile?y.value.submit():N("")}))},U=e=>{e?(n.value=e,b.value.updateFile="",v.value.validateField("updateFile",(()=>null))):(n.value="",v.value.clearValidate("updateFile"))},j=e=>{b.value.updateFile="",n.value="none",y.value.clear(),w.value=!1,t("上传失败")},N=async e=>{const a=await C({attach_url:e,detail:b.value.desc,title:b.value.title},s.type);w.value=!1,1==a.status&&l("submitSuccess")};return(l,a)=>{const t=u("el-input"),s=u("el-form-item"),o=u("el-form"),n=u("el-button"),_=u("el-dialog"),x=V("loading");return i(),d("div",G,[f(_,{modelValue:e.modelValue,"onUpdate:modelValue":a[3]||(a[3]=e=>F(modelValue)?modelValue.value=e:null),width:500,onClose:h,title:"创建需求","before-close":k},{default:c((()=>[g((i(),d("div",O,[f(o,{model:p(b),ref_key:"formRef",ref:v,rules:p(r),"label-width":"90px"},{default:c((()=>[f(s,{label:"需求标题",prop:"title"},{default:c((()=>[f(t,{placeholder:"请输入需求标题",modelValue:p(b).title,"onUpdate:modelValue":a[0]||(a[0]=e=>p(b).title=e)},null,8,["modelValue"])])),_:1}),f(s,{label:"需求描述",prop:"desc"},{default:c((()=>[f(t,{type:"textarea",maxlength:"150","show-word-limit":"",rows:"5",resize:"none",placeholder:"简要描述您的具体需求，以及期望目标。",modelValue:p(b).desc,"onUpdate:modelValue":a[1]||(a[1]=e=>p(b).desc=e)},null,8,["modelValue"])])),_:1}),f(s,{label:"文件上传",prop:"updateFile",style:{"margin-bottom":"20px"}},{default:c((()=>[f(z,{msg:"附件大小不超过4M<br/>支持.zip、.rar、.7z压缩包",modelValue:p(b).updateFile,"onUpdate:modelValue":a[2]||(a[2]=e=>p(b).updateFile=e),onChange:U,onError:j,onSuccess:N,exnameList:[".zip",".rar",".7z"],ref_key:"upload",ref:y,"max-size":4},null,8,["modelValue","exnameList"])])),_:1})])),_:1},8,["model","rules"]),m("div",R,[f(n,{onClick:h},{default:c((()=>[T])),_:1}),f(n,{type:"primary",onClick:M},{default:c((()=>[X])),_:1})])])),[[x,p(w)]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-4d93f176"]]);export{Y as M,D as a};
