import{D as a}from"./DetailsHeader.535ed972.js";import{f as e}from"./findb.c21ee009.js";import{M as t}from"./Mypage.690d826c.js";import{M as s}from"./MyDataTable.870ec3a0.js";import{M as l}from"./MyEmpty.d21dbe7c.js";import{G as p,g as i,o,H as d,a as r,I as u,_ as c,c as m,w as n,P as b,aa as y,a0 as v,az as f,b as w,ae as h}from"./vue.73bee448.js";import{_ as j}from"./index.12522c67.js";import"./request.b31062f2.js";import"./date.23847c74.js";import"./index.a86c6ab1.js";import"./index.5d447f79.js";import"./login.76a81bb1.js";import"./empty.f131d8fb.js";const _={class:"specific_data_details_page"},x={class:"specific_data-content"},g={class:"mytable-data"},z={class:"flexr"};var M=j(p({setup(p){const j=i([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"固定电话",prop:"telephone",width:110},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:120},{type:"city_id",lable:"地区",prop:"city",width:130},{type:"text-tooltip",lable:"详细地址",prop:"address",width:130}]),M=f(),D=i(),k=i(1),q=i(10),H=i(!1),I=i([]),U=async()=>{H.value=!0;const a={current:k.value,size:q.value,id:M.query.id},{status:t,body:s}=await e(a);H.value=!1,t&&(I.value=s.records,D.value=s.total)};return U(),(e,p)=>{const i=w("el-table"),f=h("loading");return o(),d("div",_,[r(a),u("div",x,[u("div",g,[c((o(),m(i,{data:I.value,size:"small","row-class-name":"my-data-table-row",border:!0},{empty:n((()=>[r(l)])),default:n((()=>[(o(!0),d(b,null,y(j.value,((a,e)=>(o(),m(s,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[f,H.value]])]),u("div",z,[D.value?(o(),m(t,{key:0,size:q.value,"onUpdate:size":p[0]||(p[0]=a=>q.value=a),page:k.value,"onUpdate:page":p[1]||(p[1]=a=>k.value=a),total:D.value,onChange:U},null,8,["size","page","total"])):v("",!0)])])])}}}),[["__scopeId","data-v-2e891b52"]]);export{M as default};