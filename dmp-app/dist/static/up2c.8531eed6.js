import{u as a,M as t}from"./myData.229d0678.js";import{_ as e}from"./MyPage.eca92ca4.js";import{M as l}from"./MyDataUpUser.90bad74f.js";import{F as s,r as o,G as p,H as d,I as u,i as r,R as i,u as n,P as c,Q as m,X as b,Y as y,a7 as v,U as h,at as w,au as f,av as M,O as j,a6 as _}from"./vue.5acda677.js";import{M as x}from"./MyEmpty.62621b2b.js";import{_ as g}from"./index.0a59edad.js";import"./date.23847c74.js";import"./MyUpload.1050fbdd.js";const D={class:"up2b"},U={class:"top-button fsc"},V=(a=>(w("data-v-db546b8c"),a=a(),f(),a))((()=>u("div",{class:"flexr"},[
u("div",{class:"union-button"},"同步SCRM"),
u("div",{class:"union-button"},"同步CMS"),
u("div",{class:"union-button"},"同步DSP系统")],-1))),k={class:"mytable"};var C=g(s({setup(s){let w=o(0),f=o(1),g=o(!1),C=M(),S=o(!1),B=o([]),I=o([{type:"select",width:100,prop:"select"},{type:"text",lable:"ID",prop:"id",width:150},{type:"text",lable:"人群名称",prop:"group_name",width:200},{type:"text",lable:"人群描述",prop:"group_desc",width:220},{type:"status",lable:"状态",prop:"status",width:100},{type:"text",lable:"用户数",prop:"count",width:100},{type:"date",lable:"创建日期",prop:"create_time",width:100},{type:"operateLook",lable:"操作",width:100,prop:"operate",operatButton:["查看"]}]);const P=async()=>{S.value=!0;let t={current:f.value,type:2,size:10};const{status:e,body:l}=await a(t);S.value=!1,e&&(w.value=l.total,B.value=l.records)};P();const z=(a,t)=>{C.push({path:"/myData/up2cDetails",query:{id:t.id}})},R=()=>{f.value=1,P()};return(a,s)=>{const o=j("el-table"),M=_("loading");return p(),d("div",D,[u("div",U,[u("div",{class:"up-user fcc",onClick:s[0]||(s[0]=a=>r(g)?g.value=!0:g=!0)},"上传客户"),V]),u("div",k,[i((p(),c(o,{data:n(B),size:"large","row-class-name":"my-data-table-row"},{empty:m((()=>[b(x)])),default:m((()=>[(p(!0),d(y,null,v(n(I),((a,e)=>(p(),c(t,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop,operatButton:a.operatButton,onClick:z},null,8,["type","width","lable","prop","operatButton"])))),128))])),_:1},8,["data"])),[[M,n(S)]])]),u("div",null,[n(w)?(p(),c(e,{key:0,total:n(w),modelValue:n(f),"onUpdate:modelValue":s[1]||(s[1]=a=>r(f)?f.value=a:f=a),onChange:P},null,8,["total","modelValue"])):h("",!0)]),b(l,{modelValue:n(g),"onUpdate:modelValue":s[2]||(s[2]=a=>r(g)?g.value=a:g=a),onSubmitSuccess:R},null,8,["modelValue"])])}}}),[["__scopeId","data-v-db546b8c"]]);export{C as default};
