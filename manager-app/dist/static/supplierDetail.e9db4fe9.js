import{D as t}from"./DetailsHeader.dc89d7cd.js";import{p as a}from"./findb.8a797d42.js";import{M as e}from"./Mypage.92221329.js";import{M as p}from"./MyDataTable.c0452b38.js";import{M as l}from"./MyEmpty.72a1acd1.js";import{q as s,f as o,o as d,t as r,a as i,v as c,Q as m,u as n,c as b,w as u,F as y,a2 as w,I as f,S as h,az as v,b as x,a6 as j}from"./vue.89ed3d48.js";import{_}from"./index.fdca730b.js";import"./request.aa9790cc.js";import"./date.23847c74.js";import"./index.eaa6bc8d.js";import"./index.5003068f.js";import"./login.6de82fdd.js";import"./empty.f131d8fb.js";const g={class:"specific_data_details_page"},z={class:"specific_data-content"},M={class:"mytable-data"},k={class:"flexr"};var q=_(s({setup(s){const _=o([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"邮箱",prop:"email",width:140},{type:"text-tooltip",lable:"公司地址",prop:"address",width:150},{type:"link",lable:"企业官网",prop:"url",width:160},{type:"text",lable:"HS编码",prop:"code",width:130},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量(kg)",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),q=v();let D=o(),H=o(1),I=o(10),S=o(!1),U=o([]);const C=async()=>{S.value=!0;let t={current:H.value,size:I.value,id:q.query.id};const{status:e,body:p}=await a(t);S.value=!1,e&&(U.value=p.records,D.value=p.total)};return C(),(a,s)=>{const o=x("el-table"),v=j("loading");return d(),r("div",g,[i(t),c("div",z,[c("div",M,[m((d(),b(o,{data:n(U),size:"small","row-class-name":"my-data-table-row",border:!0},{empty:u((()=>[i(l)])),default:u((()=>[(d(!0),r(y,null,w(_.value,((t,a)=>(d(),b(p,{key:a,type:t.type,width:t.width,lable:t.lable,prop:t.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[v,n(S)]])]),c("div",k,[n(D)?(d(),b(e,{key:0,total:n(D),page:n(H),"onUpdate:page":s[0]||(s[0]=t=>f(H)?H.value=t:H=t),size:n(I),"onUpdate:size":s[1]||(s[1]=t=>f(I)?I.value=t:I=t),onChange:C},null,8,["total","page","size"])):h("",!0)])])])}}}),[["__scopeId","data-v-1004a6dc"]]);export{q as default};
