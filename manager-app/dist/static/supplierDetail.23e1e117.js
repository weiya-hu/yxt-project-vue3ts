import{D as a}from"./DetailsHeader.17be1c46.js";import{x as e}from"./findb.9ba46f68.js";import{M as t}from"./Mypage.aeab91fd.js";import{M as l}from"./MyDataTable.b1cc2f7b.js";import{M as p}from"./MyEmpty.05634dfb.js";import{G as s,g as o,o as r,H as i,a as d,I as b,_ as u,c,w as m,P as n,aa as y,a0 as v,az as f,b as w,ae as h}from"./vue.73bee448.js";import{_ as x}from"./index.83d90a4b.js";import"./request.aac31659.js";import"./date.23847c74.js";import"./index.ddcc2e3e.js";import"./index.f6907697.js";import"./login.486a2ba7.js";import"./empty.f131d8fb.js";const _={class:"specific_data_details_page"},j={class:"specific_data-content"},g={class:"mytable-data"},z={class:"flexr"};var M=x(s({setup(s){const x=o([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"邮箱",prop:"email",width:140},{type:"country",lable:"地区",prop:"country_id",width:130},{type:"text-tooltip",lable:"公司地址",prop:"address",width:150},{type:"link",lable:"企业官网",prop:"url",width:160},{type:"text",lable:"HS编码",prop:"code",width:130},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量(kg)",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),M=f(),k=o(),D=o(1),H=o(10),q=o(!1),I=o([]),U=async()=>{q.value=!0;const a={current:D.value,size:H.value,id:M.query.id},{status:t,body:l}=await e(a);q.value=!1,t&&(I.value=l.records,k.value=l.total)};return U(),(e,s)=>{const o=w("el-table"),f=h("loading");return r(),i("div",_,[d(a),b("div",j,[b("div",g,[u((r(),c(o,{data:I.value,size:"small","row-class-name":"my-data-table-row",border:!0},{empty:m((()=>[d(p)])),default:m((()=>[(r(!0),i(n,null,y(x.value,((a,e)=>(r(),c(l,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[f,q.value]])]),b("div",z,[k.value?(r(),c(t,{key:0,page:D.value,"onUpdate:page":s[0]||(s[0]=a=>D.value=a),size:H.value,"onUpdate:size":s[1]||(s[1]=a=>H.value=a),total:k.value,onChange:U},null,8,["page","size","total"])):v("",!0)])])])}}}),[["__scopeId","data-v-7f14b74a"]]);export{M as default};