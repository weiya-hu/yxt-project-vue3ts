import{_ as e,r as a,t as s,u as l}from"./index.c9a88071.js";import{F as o,r as t,O as i,G as u,P as d,Q as c,I as n,K as r,X as m,u as p,W as v,H as f,V as y}from"./vue.5acda677.js";const h={class:"upbox"},x={class:"fc fcc"},_={class:"file_name"},b={class:"upbox"},k={class:"up_rt"},g={key:0,class:"up_tip dfcolor fcs"},L=y("下载模板示例"),V=y("（上传附件大小不超过4M）"),w={key:1,class:"up_tip dfcolor"};var z=e(o({props:{modelValue:{default:""},exnameList:{default:()=>[".zip",".rar",".7z"]},downLink:null,msg:null,maxSize:{default:4}},emits:["update:modelValue","change","error","success"],setup(e,{expose:o,emit:y}){const z=e,I=t(),S=t({}),j=t(""),O=t(""),C=t(""),F=e=>{I.value.clearFiles(),I.value.handleStart(e[0])},M=(e,a)=>{const s=e.name.lastIndexOf("."),l=e.name.substring(s);z.exnameList.indexOf(l)<0?y("change","type"):e.size/1024/1024>z.maxSize?y("change","size"):(y("change",""),y("update:modelValue",e.name),O.value=l)},K=(e,a)=>{y("success",C.value)},P=(e,a,s)=>{A(),y("error",e)},A=()=>{I.value.clearFiles()},D=()=>{};return o({submit:()=>{l({site:z.downLink?"dmp_excel":"dmp_attach"}).then((e=>new Promise(((a,s)=>{1==e.status?(j.value=e.body.host,S.value={key:e.body.dir+e.body.uuid+O.value,OSSAccessKeyId:e.body.accessid,success_action_status:200,policy:e.body.policy,signature:e.body.signature,"Content-Disposition":"attachment; filename="+encodeURIComponent(z.modelValue)},a(e.body.host+"/"+e.body.dir+e.body.uuid+O.value)):s()})))).then((e=>{C.value=e,I.value.submit()})).catch((e=>{y("error",e)}))},clear:A}),(l,o)=>{const t=i("el-icon"),y=i("el-link"),z=i("el-upload");return u(),d(z,{action:j.value,"auto-upload":!1,limit:1,multiple:!1,"show-file-list":!1,data:S.value,"on-exceed":F,"on-change":M,"on-success":K,"on-error":P,ref_key:"upload",ref:I,accept:e.exnameList.join(","),class:"my_upload"},{default:c((()=>[n("div",h,[n("div",{class:r(["fcc up_lt",e.modelValue?"hasfile":""])},[n("div",x,[m(t,null,{default:c((()=>[e.modelValue?(u(),d(p(a),{key:0})):(u(),d(p(s),{key:1}))])),_:1}),n("div",_,v(e.modelValue||"点击上传"),1)])],2)])])),tip:c((()=>[n("div",b,[n("div",k,[n("div",null,v(e.msg||"可适当描述所处的行业现状，以及公司目前采取的运营、渠道、推广等多种获客方式，以便运营人员进一步了解熟悉您的所处的行业及需求，同时也为您提供更好的客户服务。"),1),e.downLink?(u(),f("div",g,[m(y,{type:"primary",href:e.downLink,onClick:D,download:"模板.xlsx"},{default:c((()=>[L])),_:1},8,["href"]),V])):(u(),f("div",w,"附件支持 "+v(e.exnameList.join(" "))+"，大小不超过4M",1))])])])),_:1},8,["action","data","accept"])}}}),[["__scopeId","data-v-c806998e"]]);export{z as M};
