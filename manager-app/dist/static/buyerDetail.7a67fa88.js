import{D as e}from"./DetailsHeader.7f53a82d.js";import{u as a}from"./findb.56b387ff.js";import{M as t}from"./Mypage.db7e0a49.js";import{M as l}from"./MyDataTable.358a0a68.js";import{M as p}from"./MyEmpty.9765e68b.js";import{G as s,g as o,o as r,H as i,a as d,I as u,_ as c,c as m,w as n,P as b,aa as y,a0 as v,az as w,b as f,ae as h}from"./vue.73bee448.js";import{_ as x}from"./index.7462c988.js";import"./request.031adcd7.js";import"./date.23847c74.js";import"./index.eef2ec07.js";import"./index.64b2c7d4.js";import"./login.a3184624.js";import"./empty.f131d8fb.js";const _={class:"specific_data_details_page"},j={class:"specific_data-content"},g={class:"mytable-data"},z={class:"flexr"};var M=x(s({setup(s){const x=o([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"邮箱",prop:"email",width:140},{type:"country",lable:"地区",prop:"country_id",width:130},{type:"text-tooltip",lable:"公司地址",prop:"address",width:150},{type:"link",lable:"企业官网",prop:"url",width:160},{type:"text",lable:"HS编码",prop:"code",width:130},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量(kg)",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),M=w(),k=o(),D=o(1),H=o(10),q=o(!1),I=o([]),U=async()=>{q.value=!0;const e={current:D.value,size:H.value,id:M.query.id},{status:t,body:l}=await a(e);q.value=!1,t&&(I.value=l.records,k.value=l.total)};return U(),(a,s)=>{const o=f("el-table"),w=h("loading");return r(),i("div",_,[d(e),u("div",j,[u("div",g,[c((r(),m(o,{data:I.value,size:"small","row-class-name":"my-data-table-row",border:!0},{empty:n((()=>[d(p)])),default:n((()=>[(r(!0),i(b,null,y(x.value,((e,a)=>(r(),m(l,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[w,q.value]])]),u("div",z,[k.value?(r(),m(t,{key:0,page:D.value,"onUpdate:page":s[0]||(s[0]=e=>D.value=e),size:H.value,"onUpdate:size":s[1]||(s[1]=e=>H.value=e),total:k.value,onChange:U},null,8,["page","size","total"])):v("",!0)])])])}}}),[["__scopeId","data-v-380fc2c3"]]);export{M as default};
