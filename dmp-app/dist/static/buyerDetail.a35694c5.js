import{M as e}from"./MyDataTable.5ecddf32.js";import{a as t,M as a}from"./MyEmpty.201b711b.js";import{_ as l,I as p,J as s,K as o}from"./index.585b2ef6.js";import{F as r,r as d,f as i,R as n,u,G as y,H as c,X as b,I as m,Q as h,Y as w,a7 as v,P as f,i as x,U as _,ax as g,O as j,a6 as k}from"./vue.5acda677.js";import{T as M}from"./TopBtns.f162de6f.js";import"./date.23847c74.js";const S={class:"up2b-detail"},z={class:"mytable"};var I=l(r({setup(l){const r=g();let I=d(0),R=d(1),T=d(!1);const V=d([{type:"select",prop:"select",width:30},{type:"num",lable:"序号",prop:"num",width:70},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:74},{type:"text",lable:"联系方式",prop:"mobiles",width:100},{type:"text",lable:"邮箱",prop:"email",width:100},{type:"country",lable:"地区",prop:"country_id",width:110},{type:"text",lable:"公司地址",prop:"address",width:140},{type:"link",lable:"企业官网",prop:"url",width:150},{type:"text-tooltip",lable:"HS编码",prop:"code",width:120},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量（kg）",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),B=d([]),C=async()=>{T.value=!0;let e={current:R.value,size:50,id:r.query.id};const{status:t,body:a}=await s(e);T.value=!1,t&&(I.value=a.total,B.value=a.records)};C();const H=d([]),U=e=>{H.value=e.map((e=>e.id))},q=d(),D=d(),E=i((()=>!H.value.length)),F=async()=>{D.value.setLoading(!0);const e=await o({list:H.value});D.value.close(e.message),H.value=[],q.value.clearSelection()};return(l,s)=>{const o=j("el-table"),r=k("loading");return n((y(),c("div",S,[b(M,{total:u(I),syncbtn:"",onSync:F,ref_key:"topBtnRef",ref:D,"sync-api":u(p),"sync-disabled":u(E)},null,8,["total","sync-api","sync-disabled"]),m("div",z,[b(o,{data:B.value,size:"large","row-class-name":"my-data-table-row",height:"100%",onSelectionChange:U,ref_key:"tableRef",ref:q},{empty:h((()=>[b(t)])),default:h((()=>[(y(!0),c(w,null,v(V.value,((t,a)=>(y(),f(e,{key:a,type:t.type,width:t.width,lable:t.lable,prop:t.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])]),u(I)?(y(),f(a,{key:0,size:50,total:u(I),modelValue:u(R),"onUpdate:modelValue":s[0]||(s[0]=e=>x(R)?R.value=e:R=e),onChange:C},null,8,["total","modelValue"])):_("",!0)])),[[r,u(T)]])}}}),[["__scopeId","data-v-7a5c0db7"]]);export{I as default};
