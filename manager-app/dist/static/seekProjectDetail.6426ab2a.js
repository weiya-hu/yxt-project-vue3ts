import{D as t}from"./DetailsHeader.dc89d7cd.js";import{j as e}from"./findb.8a797d42.js";import{M as a}from"./Mypage.92221329.js";import{M as p}from"./MyDataTable.c0452b38.js";import{M as l}from"./MyEmpty.72a1acd1.js";import{q as s,f as i,o as d,t as o,a as r,v as c,Q as m,u as n,c as y,w as b,F as u,a2 as w,I as h,S as f,az as v,b as _,a6 as x}from"./vue.89ed3d48.js";import{_ as j}from"./index.fdca730b.js";import"./request.aa9790cc.js";import"./date.23847c74.js";import"./index.eaa6bc8d.js";import"./index.5003068f.js";import"./login.6de82fdd.js";import"./empty.f131d8fb.js";const g={class:"specific_data_details_page"},z={class:"specific_data-content"},M={class:"mytable-data"},k={class:"flexr"};var q=j(s({setup(s){const j=i([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"固定电话",prop:"telephone",width:110},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:120},{type:"city_id",lable:"地区",prop:"city",width:130},{type:"text-tooltip",lable:"详细地址",prop:"address",width:130},{type:"text",lable:"统一社会信用代码",prop:"code",width:130},{type:"link",lable:"企业官网",prop:"url",width:140},{type:"text-tooltip",lable:"经营范围",prop:"business_scope",width:130},{type:"text",lable:"项目名称",prop:"item_name",width:120},{type:"text-tooltip",lable:"项目介绍",prop:"item_desc",width:130},{type:"text",lable:"招标金额(万元)",prop:"amount",width:120},{type:"date",lable:"截止日期",prop:"left_time",width:120},{type:"link",lable:"项目附件",prop:"attachment",width:130},{type:"date",lable:"上传时间",prop:"update_time",width:110}]),q=v();let D=i(),I=i(1),U=i(10),C=i(!1),E=i([]);const F=async()=>{C.value=!0;let t={current:I.value,size:U.value,id:q.query.id};const{status:a,body:p}=await e(t);C.value=!1,a&&(E.value=p.records,D.value=p.total)};return F(),(e,s)=>{const i=_("el-table"),v=x("loading");return d(),o("div",g,[r(t),c("div",z,[c("div",M,[m((d(),y(i,{data:n(E),size:"small","row-class-name":"my-data-table-row",border:!0},{empty:b((()=>[r(l)])),default:b((()=>[(d(!0),o(u,null,w(j.value,((t,e)=>(d(),y(p,{key:e,type:t.type,width:t.width,lable:t.lable,prop:t.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[v,n(C)]])]),c("div",k,[n(D)?(d(),y(a,{key:0,total:n(D),page:n(I),"onUpdate:page":s[0]||(s[0]=t=>h(I)?I.value=t:I=t),size:n(U),"onUpdate:size":s[1]||(s[1]=t=>h(U)?U.value=t:U=t),onChange:F},null,8,["total","page","size"])):f("",!0)])])])}}}),[["__scopeId","data-v-6ba998e4"]]);export{q as default};