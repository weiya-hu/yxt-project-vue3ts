import{M as t}from"./MyDataTable.b1bec614.js";import{a as e,M as a}from"./MyEmpty.3acbd4a9.js";import{d as l}from"./seekPathPro.7d6f99d2.js";import{F as p,r as o,G as s,H as d,X as i,u as r,R as y,P as n,a8 as m,Q as u,Y as b,a7 as c,i as h,U as w,ax as f,O as v,a6 as x}from"./vue.5acda677.js";import{F as _}from"./FindNumber.8ae033dd.js";import{_ as j}from"./index.4847e6ad.js";import"./date.23847c74.js";const k={class:"up2b-detail mytable"};var M=j(p({setup(p){const j=f();let M=o(0),g=o(1),F=o(!1);const P=o([{type:"select",prop:"select",width:30},{type:"num",lable:"序号",prop:"num",width:70},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:74},{type:"text",lable:"联系方式",prop:"mobiles",width:100},{type:"text",lable:"固定电话",prop:"telephone",width:100},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:100},{type:"city_id",lable:"地区",prop:"city",width:110},{type:"text",lable:"详细地址",prop:"address",width:140},{type:"company_type",lable:"企业类型",prop:"company_type",width:120},{type:"text",lable:"统一社会信用代码",prop:"code",width:170},{type:"link",lable:"企业官网",prop:"url",width:150},{type:"text-tooltip",lable:"经营范围",prop:"business_scope",width:200},{type:"text",lable:"项目名称",prop:"item_name",width:100},{type:"text-tooltip",lable:"项目介绍",prop:"item_desc",width:150},{type:"text",lable:"招标金额（万元）",prop:"amount",width:100},{type:"date",lable:"截止日期",prop:"left_time",width:120},{type:"link",lable:"项目附件",prop:"attachment",width:120}]),V=o([]),z=async()=>{F.value=!0;let t={current:g.value,size:10,id:j.query.id};const{status:e,body:a}=await l(t);F.value=!1,e&&(M.value=a.total,V.value=a.records)};return z(),(l,p)=>{const o=v("el-table"),f=x("loading");return s(),d("div",k,[i(_,{class:"lt",total:r(M)},null,8,["total"]),y((s(),n(o,{data:V.value,size:"large","row-class-name":"my-data-table-row",class:"table"},m({default:u((()=>[(s(!0),d(b,null,c(P.value,((e,a)=>(s(),n(t,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128))])),_:2},[r(M)?{name:"empty",fn:u((()=>[i(e)]))}:void 0]),1032,["data"])),[[f,r(F)]]),r(M)?(s(),n(a,{key:0,total:r(M),modelValue:r(g),"onUpdate:modelValue":p[0]||(p[0]=t=>h(g)?g.value=t:g=t),onChange:z},null,8,["total","modelValue"])):w("",!0)])}}}),[["__scopeId","data-v-06fe3ffd"]]);export{M as default};