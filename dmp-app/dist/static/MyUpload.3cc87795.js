import{_ as e,t as a,u as s,v as l}from"./index.e956d55f.js";import{F as o,r as t,O as u,G as d,P as i,Q as n,I as c,K as r,X as p,u as m,W as v,H as f,V as y}from"./vue.2fa59680.js";const h={class:"upbox"},b={class:"file_name"},x={class:"upbox"},_={class:"up_rt"},k={key:0,class:"up_tip dfcolor fcs"},g=y("下载模板示例"),V=y("（上传附件大小不超过4M）"),L={key:1,class:"up_tip dfcolor"};var w=e(o({props:{modelValue:{default:""},exnameList:{default:()=>[".doc",".docx",".pdf"]},downLink:null,msg:null},emits:["update:modelValue","change","error","success"],setup(e,{expose:o,emit:y}){const w=e,I=t(),j=t({}),O=t(""),C=t(""),F=t(""),M=e=>{I.value.clearFiles(),I.value.handleStart(e[0])},S=(e,a)=>{const s=e.name.lastIndexOf("."),l=e.name.substring(s);w.exnameList.indexOf(l)<0?y("change","type"):e.size/1024/1024>4?y("change","size"):(y("change",""),y("update:modelValue",e.name),C.value=l)},z=(e,a)=>{y("success",F.value)},K=(e,a,s)=>{P(),y("error",e)},P=()=>{I.value.clearFiles()},A=()=>{};return o({submit:()=>{l().then((e=>new Promise(((a,s)=>{1==e.status?(O.value=e.body.host,j.value={key:e.body.dir+e.body.uuid+C.value,OSSAccessKeyId:e.body.accessid,success_action_status:200,policy:e.body.policy,signature:e.body.signature,"Content-Disposition":"attachment; filename="+encodeURIComponent(w.modelValue)},a(e.body.host+"/"+e.body.dir+e.body.uuid+C.value)):s()})))).then((e=>{F.value=e,I.value.submit()})).catch((e=>{y("error",e)}))},clear:P}),(l,o)=>{const t=u("el-icon"),y=u("el-link"),w=u("el-upload");return d(),i(w,{action:O.value,"auto-upload":!1,limit:1,multiple:!1,"show-file-list":!1,data:j.value,"on-exceed":M,"on-change":S,"on-success":z,"on-error":K,ref_key:"upload",ref:I,accept:e.exnameList.join(","),class:"my_upload"},{default:n((()=>[c("div",h,[c("div",{class:r(["fcc up_lt",e.modelValue?"hasfile":""])},[c("div",null,[p(t,null,{default:n((()=>[e.modelValue?(d(),i(m(a),{key:0})):(d(),i(m(s),{key:1}))])),_:1}),c("div",b,v(e.modelValue||"点击上传"),1)])],2)])])),tip:n((()=>[c("div",x,[c("div",_,[c("div",null,v(e.msg||"可适当描述所处的行业现状，以及公司目前采取的运营、渠道、推广等多种获客方式，以便运营人员进一步了解熟悉您的所处的行业及需求，同时也为您提供更好的客户服务。"),1),e.downLink?(d(),f("div",k,[p(y,{type:"primary",href:e.downLink,onClick:A,download:"模板.xlsx"},{default:n((()=>[g])),_:1},8,["href"]),V])):(d(),f("div",L,"附件支持 "+v(e.exnameList.join(" "))+"，大小不超过4M",1))])])])),_:1},8,["action","data","accept"])}}}),[["__scopeId","data-v-98274cb4"]]);export{w as M};
