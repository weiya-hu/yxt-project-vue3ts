import{a as e,i as a,f as s,b as l,e as o}from"./index.d0f073cb.js";import{y as t,r as i,a4 as u,z as d,S as n,T as c,B as r,A as m,_ as p,u as v,Z as y,O as f,Y as b,X as x}from"./vue.92f8d02a.js";const _={class:"upbox"},h={key:0,class:"upvideo up_lt"},k=["src"],L={class:"fcc fc"},g={class:"file_name"},z={class:"upbox"},V={class:"up_rt"},w=["innerHTML"],S={key:0,class:"up_tip dfcolor fcs"},j=b("下载模板示例"),M={key:1,class:"up_tip dfcolor"};var O=e(t({props:{modelValue:{default:""},exnameList:{default:()=>[".zip",".rar",".7z"]},downLink:null,msg:null,type:null,maxSize:{default:4}},emits:["update:modelValue","change","error","success"],setup(e,{expose:t,emit:O}){const I=e,A=i(),C=i({}),R=i(""),T=i(""),U=i(""),F=i(""),H=e=>{A.value.clearFiles(),A.value.handleStart(e[0])},B=i(),D=(e,a)=>{B.value=e;const s=e.name.lastIndexOf("."),l=e.name.substring(s);I.exnameList.indexOf(l)<0?O("change","type"):e.size&&e.size/1024/1024>I.maxSize?O("change","size"):(O("change",""),O("update:modelValue",e.name),T.value=l,"video"==I.type&&(F.value=URL.createObjectURL(e.raw)))},K=(e,a)=>{O("success",U.value)},P=(e,a,s)=>{X(),O("error",e)},X=()=>{A.value.clearFiles(),O("update:modelValue",""),F.value=""},Y=()=>{};return t({submit:()=>{l({site:"video"==I.type?"cms_video":"cms_attach"}).then((e=>new Promise(((a,s)=>{1==e.status?(R.value=e.body.host,C.value={key:e.body.dir+e.body.uuid+T.value,OSSAccessKeyId:e.body.accessid,success_action_status:200,policy:e.body.policy,signature:e.body.signature,"Content-Disposition":"attachment; filename="+encodeURIComponent(I.modelValue)},a(e.body.host+"/"+e.body.dir+e.body.uuid+T.value)):s(e.message)})))).then((e=>{U.value=e,A.value.submit()})).catch((e=>{O("error",e)}))},clear:X,doAbort:()=>{A.value.abort(B.value),o("取消上传")}}),(l,o)=>{const t=u("el-icon"),i=u("el-link"),O=u("el-upload");return d(),n(O,{action:R.value,"auto-upload":!1,limit:1,multiple:!1,"show-file-list":!1,data:C.value,"on-exceed":H,"on-change":D,"on-success":K,"on-error":P,ref_key:"upload",ref:A,accept:e.exnameList.join(","),class:"my_upload"},{default:c((()=>[r("div",_,["video"==e.type&&e.modelValue?(d(),m("div",h,[r("video",{src:F.value,controls:""},null,8,k)])):(d(),m("div",{key:1,class:f(["fcc up_lt",e.modelValue?"hasfile":""])},[r("div",L,[p(t,null,{default:c((()=>[e.modelValue?(d(),n(v(a),{key:0})):(d(),n(v(s),{key:1}))])),_:1}),r("div",g,y(e.modelValue||"点击上传"),1)])],2))])])),tip:c((()=>[r("div",z,[r("div",V,[r("div",{innerHTML:e.msg||"可适当描述所处的行业现状，以及公司目前采取的运营、渠道、推广等多种获客方式，以便运营人员进一步了解熟悉您的所处的行业及需求，同时也为您提供更好的客户服务。"},null,8,w),e.downLink?(d(),m("div",S,[p(i,{type:"primary",href:e.downLink,onClick:Y,download:"模板.xlsx"},{default:c((()=>[j])),_:1},8,["href"]),b("（上传附件大小不超过"+y(e.maxSize)+"M）",1)])):x("",!0),e.downLink||"video"==e.type?x("",!0):(d(),m("div",M,"附件支持 "+y(e.exnameList.join(" "))+"，大小不超过"+y(e.maxSize)+"M",1))])])])),_:1},8,["action","data","accept"])}}}),[["__scopeId","data-v-659d4a8e"]]);export{O as M};
