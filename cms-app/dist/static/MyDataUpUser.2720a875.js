import{F as e}from"./date.23847c74.js";import{a as l,k as a,i as t,f as s}from"./index.239f6d1a.js";import{d as o,i as d,a9 as i,b as r,o as u,t as p,u as n,c,w as m,v as y,V as v,S as f,a as w,U as b,L as h,F as _,a2 as k,az as V,_ as x,a5 as g,Q as F,H as z}from"./vue.ca737a59.js";import{M as C}from"./MyUpload.50dfdaac.js";import{d as M}from"./custom.610274c8.js";const U={class:"flexl"},j={class:"flexl"},L={class:"text-tooltip-style"},S={class:"text-style"},B={class:"flexl"},E={key:0},q={class:"fcs"},I=["onClick"],A={class:"fcc msg"},D={class:"fcc"},H=b("我知道了");var N=l(o({props:{type:null,lable:null,prop:null,width:null,operatButton:null},emits:["click"],setup(l,{emit:t}){const s=l,o=d(!1),{type:V,lable:x,prop:g,width:F,operatButton:z}=i(s);return(l,s)=>{const d=r("el-table-column"),i=r("el-tooltip"),C=r("el-link"),M=r("el-button"),N=r("el-dialog");return u(),p(_,null,["text"===n(V)?(u(),c(d,{key:0,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[y("div",U,[y("div",null,v(n(g)&&e[n(g)]?e[n(g)]:"---"),1)])])),_:1},8,["property","label","min-width"])):f("",!0),"text-tooltip"===n(V)?(u(),c(d,{key:1,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[y("div",j,[w(i,{class:"box-item",effect:"dark",placement:"top-start"},{content:m((()=>[y("div",L,v(e[n(g)]||"---"),1)])),default:m((()=>[y("div",S,v(n(g)&&e[n(g)]?e[n(g)]:"---"),1)])),_:2},1024)])])),_:1},8,["property","label","min-width"])):f("",!0),"num"===n(V)?(u(),c(d,{key:2,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e,$index:l})=>[y("div",B,[e?(u(),p("div",E,v(l+1),1)):f("",!0)])])),_:1},8,["property","label","min-width"])):f("",!0),"link"===n(V)?(u(),c(d,{key:3,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[w(C,{type:"primary",href:e[n(g)]},{default:m((()=>[b(v(e[n(g)]),1)])),_:2},1032,["href"])])),_:1},8,["property","label","min-width"])):f("",!0),"select"===n(V)?(u(),c(d,{key:4,type:"selection",width:n(F),align:"center"},null,8,["width"])):f("",!0),"status"===n(V)?(u(),c(d,{key:5,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[y("div",q,[y("div",{class:h(["status_dot",n(a)(e.status).className])},null,2),y("div",null,v(n(a)(e.status).text),1)])])),_:1},8,["property","label","min-width"])):f("",!0),"date"===n(V)?(u(),c(d,{key:6,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:l})=>[y("div",null,v(n(e)("yyyy-MM-dd",new Date(l[n(g)]))),1)])),_:1},8,["property","label","min-width"])):f("",!0),"city"===n(V)?(u(),c(d,{key:7,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[y("div",null,v(e.province)+v(e.city)+v(e.district),1)])),_:1},8,["property","label","min-width"])):f("",!0),"operateLook"===n(V)?(u(),c(d,{key:8,property:n(g),label:n(x),"min-width":n(F)},{default:m((({row:e})=>[(u(!0),p(_,null,k(n(z),((l,a)=>(u(),p("div",{key:a,class:"operate-button",onClick:l=>((e,l)=>{2===l.status&&t("click",e,l),0===l.status&&(o.value=!0)})(a,e)},v(2===e.status?l:0===e.status?"失败原因":"---"),9,I)))),128)),w(N,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=e=>o.value=e),title:"失败原因",width:"400px"},{footer:m((()=>[y("div",D,[w(M,{type:"primary",onClick:s[0]||(s[0]=e=>o.value=!1)},{default:m((()=>[H])),_:1})])])),default:m((()=>[y("div",A,v(e.fail_reason),1)])),_:2},1032,["modelValue"])])),_:1},8,["property","label","min-width"])):f("",!0)],64)}}}),[["__scopeId","data-v-5a9086d3"]]);const Q={class:"upload-users"},R={class:"myform"},$={class:"fcs fjend"},G=b("取消"),J=b("提交");var K=l(o({props:{modelValue:{type:Boolean},type:null},emits:["update:modelValue","submitSuccess"],setup(e,{emit:l}){const a=e;V();const o=x({title:[{required:!0,message:"请输入需求标题",trigger:"blur"}],desc:[{required:!0,message:"请输入需求描述",trigger:"blur"}],updateFile:[{validator:(e,l,a)=>{switch(i.value){case"size":a(new Error("请添加大小不超过4M的文件"));break;case"type":a(new Error("请添加 .zip、.rar、.7z 格式的文件"));break;default:a()}},trigger:"change"}]});let i=d("none");const c=d(),v=d();let f=d({title:"",desc:"",updateFile:""}),b=d(!1);d("");const h=()=>{c.value.resetFields(),v.value.clear(),l("update:modelValue",!1)},_=e=>{b.value?t().then((()=>{v.value.doAbort(),e()})).catch((()=>{})):e()},k=()=>{c.value.validate((e=>{if(!e)return!1;b.value=!0,f.value.updateFile?v.value.submit():L("")}))},U=e=>{e?(i.value=e,f.value.updateFile="",c.value.validateField("updateFile",(()=>null))):(i.value="",c.value.clearValidate("updateFile"))},j=e=>{f.value.updateFile="",i.value="none",v.value.clear(),b.value=!1,s("上传失败")},L=async e=>{const t=await M({attach_url:e,detail:f.value.desc,title:f.value.title},a.type);b.value=!1,1==t.status&&l("submitSuccess")};return(l,a)=>{const t=r("el-input"),s=r("el-form-item"),d=r("el-form"),i=r("el-button"),V=r("el-dialog"),x=g("loading");return u(),p("div",Q,[w(V,{modelValue:e.modelValue,"onUpdate:modelValue":a[3]||(a[3]=e=>z(modelValue)?modelValue.value=e:null),width:500,onClose:h,title:"创建需求","before-close":_},{default:m((()=>[F((u(),p("div",R,[w(d,{model:n(f),ref_key:"formRef",ref:c,rules:n(o),"label-width":"90px"},{default:m((()=>[w(s,{label:"需求标题",prop:"title"},{default:m((()=>[w(t,{placeholder:"请输入需求标题",modelValue:n(f).title,"onUpdate:modelValue":a[0]||(a[0]=e=>n(f).title=e)},null,8,["modelValue"])])),_:1}),w(s,{label:"需求描述",prop:"desc"},{default:m((()=>[w(t,{type:"textarea",maxlength:"150","show-word-limit":"",rows:"5",resize:"none",placeholder:"简要描述您的具体需求，以及期望目标。",modelValue:n(f).desc,"onUpdate:modelValue":a[1]||(a[1]=e=>n(f).desc=e)},null,8,["modelValue"])])),_:1}),w(s,{label:"文件上传",prop:"updateFile",style:{"margin-bottom":"20px"}},{default:m((()=>[w(C,{msg:"附件大小不超过4M<br/>支持.zip、.rar、.7z压缩包",modelValue:n(f).updateFile,"onUpdate:modelValue":a[2]||(a[2]=e=>n(f).updateFile=e),onChange:U,onError:j,onSuccess:L,exnameList:[".zip",".rar",".7z"],ref_key:"upload",ref:v,"max-size":4},null,8,["modelValue","exnameList"])])),_:1})])),_:1},8,["model","rules"]),y("div",$,[w(i,{onClick:h},{default:m((()=>[G])),_:1}),w(i,{type:"primary",onClick:k},{default:m((()=>[J])),_:1})])])),[[x,n(b)]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-6da74c94"]]);export{K as M,N as a};
