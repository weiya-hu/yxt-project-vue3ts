import{D as a}from"./DetailsHeader.3aa57709.js";import{x as e}from"./findb.47f8adbb.js";import{M as t}from"./Mypage.d6408ac2.js";import{M as l}from"./MyDataTable.a583bf8a.js";import{M as p}from"./MyEmpty.ce239837.js";import{G as s,g as o,o as r,H as i,a as d,I as b,_ as u,c as m,w as n,P as c,aa as y,a0 as v,az as w,b as f,ae as h}from"./vue.73bee448.js";import{_ as x}from"./index.f86653d0.js";import"./request.64bd2e3c.js";import"./date.23847c74.js";import"./index.10b470b5.js";import"./index.5cd3bac6.js";import"./login.6a4fa518.js";import"./empty.f131d8fb.js";const _={class:"specific_data_details_page"},j={class:"specific_data-content"},g={class:"mytable-data"},z={class:"flexr"};var M=x(s({setup(s){const x=o([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"邮箱",prop:"email",width:140},{type:"country",lable:"地区",prop:"country_id",width:130},{type:"text-tooltip",lable:"公司地址",prop:"address",width:150},{type:"link",lable:"企业官网",prop:"url",width:160},{type:"text",lable:"HS编码",prop:"code",width:130},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量(kg)",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),M=w(),k=o(),D=o(1),H=o(10),q=o(!1),I=o([]),U=async()=>{q.value=!0;const a={current:D.value,size:H.value,id:M.query.id},{status:t,body:l}=await e(a);q.value=!1,t&&(I.value=l.records,k.value=l.total)};return U(),(e,s)=>{const o=f("el-table"),w=h("loading");return r(),i("div",_,[d(a),b("div",j,[b("div",g,[u((r(),m(o,{data:I.value,size:"small","row-class-name":"my-data-table-row",border:!0},{empty:n((()=>[d(p)])),default:n((()=>[(r(!0),i(c,null,y(x.value,((a,e)=>(r(),m(l,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[w,q.value]])]),b("div",z,[k.value?(r(),m(t,{key:0,page:D.value,"onUpdate:page":s[0]||(s[0]=a=>D.value=a),size:H.value,"onUpdate:size":s[1]||(s[1]=a=>H.value=a),total:k.value,onChange:U},null,8,["page","size","total"])):v("",!0)])])])}}}),[["__scopeId","data-v-7f14b74a"]]);export{M as default};