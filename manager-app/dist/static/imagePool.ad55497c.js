import{M as e}from"./Mypage.a738c27c.js";import{M as a}from"./MyEmpty.c87e98e1.js";import{M as l}from"./MyDialog.e1451ef4.js";import{M as s,d as o}from"./MediaUpload.5ce30eb2.js";import{f as u,e as t,a as d,k as c,h as i}from"./index.3b31d7d7.js";import{u as n,g as r,i as m,j as v}from"./system.62dc0c71.js";import{_ as p,z as f,m as _}from"./index.547c0c45.js";import{e as g}from"./edit.7a021c8c.js";import{q as k,f as y,_ as b,o as h,t as j,v as V,a as C,w as x,V as U,F as M,a2 as z,c as w,Q as q,u as F,S as L,U as E,b as G,a6 as P}from"./vue.89ed3d48.js";import"./empty.f131d8fb.js";import"./login.ed01525e.js";import"./request.356cbcf4.js";const S={class:"imagepool_page"},D={class:"fsc topbox"},I={class:"fcs"},J=E("搜索"),N={class:"fcs"},H={class:"total mr20"},O=E("+ 上传"),Q={key:0,class:"imgs_list flex"},R=["onClick"],T=["src","onLoad"],W={class:"lookicon fcc"},A={class:"imginfo"},B={class:"imgname els"},K={class:"imgsize"},X={class:"fcs fjend imgicon"},Y={class:"fcs btns fjend mt20"},Z=E("取消"),$=E("提交"),ee={class:"fcs btns fjend mt20"},ae=E("取消"),le=E("提交");var se=p(k({setup(p){const k=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],E=y(!1),se=y(!1),oe=y(),ue=e=>{ne.source_name=e},te=async e=>{const a=await n({source_url:e,source_name:ne.source_name,source_type:1});a&&1==a.status?(ve(),ye(),u(1)):se.value=!1},de=e=>{t(e),se.value=!1},ce=(e,a)=>{d(e,a)},ie=y(),ne=b({source_name:""}),re=b({source_name:[{required:!0,message:"请输入图片名称！",trigger:"blur"}]}),me=()=>{ie.value.validateField("source_name",(e=>{e&&(se.value=!0,oe.value.submit())}))},ve=()=>{se.value=!1,ie.value.resetFields(),E.value=!1},pe=y({}),fe=y([]),_e=y(0),ge=y(1),ke=y(""),ye=async()=>{const{body:e,status:a}=await r({size:10,current:ge.value,sourceType:1,sourceName:ke.value});1==a&&(fe.value=e.records,_e.value=e.total)};ye();const be=()=>{ge.value=1,ye()},he=()=>{pe.value={},ye()},je=y(0),Ve=y(""),Ce=y(!1),xe=async()=>{const{status:e}=await m({id:je.value});1==e&&(fe.value.findIndex((e=>e.id==je.value)),Ce.value=!1,ye(),u(1))},Ue=y(!1),Me=async()=>{const{status:e}=await v({id:je.value,source_name:Ve.value});1==e&&(Ue.value=!1,ye(),u(1))},ze=e=>{se.value?c().then((()=>{e()})).catch((()=>{})):e()};return(u,t)=>{const c=G("el-input"),n=G("el-button"),r=G("el-icon"),m=G("el-tooltip"),v=G("el-dialog"),p=G("el-form-item"),y=G("el-form"),b=P("loading");return h(),j("div",S,[V("div",D,[V("div",I,[C(c,{modelValue:ke.value,"onUpdate:modelValue":t[0]||(t[0]=e=>ke.value=e),placeholder:"输入图片名关键字搜索",clearable:""},null,8,["modelValue"]),C(n,{type:"primary",class:"ml20",onClick:be},{default:x((()=>[J])),_:1})]),V("div",N,[V("div",H,"共"+U(_e.value)+"条",1),C(n,{type:"primary",onClick:t[1]||(t[1]=e=>E.value=!0)},{default:x((()=>[O])),_:1})])]),_e.value?(h(),j("div",Q,[(h(!0),j(M,null,z(fe.value,((e,a)=>(h(),j("div",{class:"imgs_item",key:e.id},[V("div",{class:"imgbox lookhover",onClick:e=>(e=>{const a=fe.value.map((e=>e.source_url));d(a,e)})(a)},[V("img",{src:e.source_url,alt:"",onLoad:a=>((e,a)=>{const l=a.path[0];pe.value[e]=l.naturalWidth+"*"+l.naturalHeight})(e.id,a)},null,40,T),V("div",W,[C(r,{size:"20px"},{default:x((()=>[C(F(f))])),_:1})])],8,R),V("div",A,[V("div",B,U(e.source_name),1),V("div",K,U(pe.value[e.id]),1),V("div",X,[C(m,{effect:"dark",content:"下载",placement:"bottom"},{default:x((()=>[C(r,{class:"chover",size:"18px",onClick:a=>F(i)(e.source_url,e.source_name)},{default:x((()=>[C(F(o))])),_:2},1032,["onClick"])])),_:2},1024),C(m,{effect:"dark",content:"修改名称",placement:"bottom"},{default:x((()=>[C(r,{class:"chover",size:"18px",onClick:a=>{return l=e,je.value=l.id,Ve.value=l.source_name,void(Ue.value=!0);var l}},{default:x((()=>[C(F(g))])),_:2},1032,["onClick"])])),_:2},1024),C(m,{effect:"dark",content:"删除",placement:"bottom"},{default:x((()=>[C(r,{class:"chover",size:"18px",onClick:a=>{return l=e,je.value=l.id,Ve.value=l.source_name,void(Ce.value=!0);var l}},{default:x((()=>[C(F(_))])),_:2},1032,["onClick"])])),_:2},1024)])])])))),128))])):(h(),w(a,{key:1})),C(e,{page:ge.value,"onUpdate:page":t[2]||(t[2]=e=>ge.value=e),total:_e.value,onChange:he,"hide-sizes":!0},null,8,["page","total"]),C(l,{modelValue:Ce.value,"onUpdate:modelValue":t[3]||(t[3]=e=>Ce.value=e),msg:"确认删除图片 “ "+Ve.value+" ” ?",onSure:xe},null,8,["modelValue","msg"]),C(v,{modelValue:Ue.value,"onUpdate:modelValue":t[6]||(t[6]=e=>Ue.value=e),title:"修改名称",width:"380px",onClose:t[7]||(t[7]=e=>Ve.value="")},{default:x((()=>[C(c,{modelValue:Ve.value,"onUpdate:modelValue":t[4]||(t[4]=e=>Ve.value=e),placeholder:"请输入图片名"},null,8,["modelValue"]),V("div",Y,[C(n,{onClick:t[5]||(t[5]=e=>Ue.value=!1)},{default:x((()=>[Z])),_:1}),C(n,{type:"primary",onClick:Me,disabled:!Ve.value},{default:x((()=>[$])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),C(v,{modelValue:E.value,"onUpdate:modelValue":t[10]||(t[10]=e=>E.value=e),title:"上传图片",width:"380px",onClose:ve,"before-close":ze},{default:x((()=>[q((h(),w(y,{model:F(ne),rules:F(re),ref_key:"addFormRef",ref:ie},{default:x((()=>[C(p,{label:"图片",required:""},{default:x((()=>[E.value?(h(),w(s,{key:0,max:1,onUpOneSuccess:te,onError:de,onLook:ce,onChange:ue,onDel:t[8]||(t[8]=e=>F(ne).source_name=""),exnameList:k,msg:"只能上传"+k.join("、")+"图片，不超过2M",ref_key:"upload",ref:oe},null,8,["msg"])):L("",!0)])),_:1}),C(p,{label:"名称",prop:"source_name"},{default:x((()=>[C(c,{modelValue:F(ne).source_name,"onUpdate:modelValue":t[9]||(t[9]=e=>F(ne).source_name=e),placeholder:"请输入图片名"},null,8,["modelValue"])])),_:1}),V("div",ee,[C(n,{onClick:ve},{default:x((()=>[ae])),_:1}),oe.value?(h(),w(n,{key:0,type:"primary",onClick:me,disabled:!oe.value.imgs.length},{default:x((()=>[le])),_:1},8,["disabled"])):L("",!0)])])),_:1},8,["model","rules"])),[[b,se.value]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-5a8b400f"]]);export{se as default};
