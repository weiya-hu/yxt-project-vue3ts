import{M as t}from"./MyDataTable.b1bec614.js";import{a,M as e}from"./MyEmpty.3acbd4a9.js";import{_ as l,D as p}from"./index.4847e6ad.js";import{F as o,r as s,G as r,H as d,X as i,u,R as n,P as y,a8 as b,Q as m,Y as c,a7 as w,i as h,U as v,ax as x,O as _,a6 as f}from"./vue.5acda677.js";import{F as j}from"./FindNumber.8ae033dd.js";import"./date.23847c74.js";const g={class:"up2b-detail mytable"};var k=l(o({setup(l){const o=x();let k=s(0),M=s(1),F=s(!1);const V=s([{type:"select",prop:"select",width:30},{type:"num",lable:"序号",prop:"num",width:70},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:74},{type:"text",lable:"联系方式",prop:"mobiles",width:100},{type:"text",lable:"邮箱",prop:"email",width:100},{type:"country",lable:"地区",prop:"country_id",width:110},{type:"text",lable:"公司地址",prop:"address",width:140},{type:"link",lable:"企业官网",prop:"url",width:150},{type:"text-tooltip",lable:"HS编码",prop:"code",width:120},{type:"text",lable:"数量",prop:"product_number",width:90},{type:"text",lable:"重量（kg）",prop:"product_weight",width:100},{type:"text",lable:"出货港口",prop:"shipment_port",width:120},{type:"text",lable:"卸货港口",prop:"unload_port",width:120}]),z=s([]),D=async()=>{F.value=!0;let t={current:M.value,size:10,id:o.query.id};const{status:a,body:e}=await p(t);F.value=!1,a&&(k.value=e.total,z.value=e.records)};return D(),(l,p)=>{const o=_("el-table"),s=f("loading");return r(),d("div",g,[i(j,{class:"lt",total:u(k)},null,8,["total"]),n((r(),y(o,{data:z.value,size:"large","row-class-name":"my-data-table-row",class:"table"},b({default:m((()=>[(r(!0),d(c,null,w(V.value,((a,e)=>(r(),y(t,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:2},[u(k)?{name:"empty",fn:m((()=>[i(a)]))}:void 0]),1032,["data"])),[[s,u(F)]]),u(k)?(r(),y(e,{key:0,total:u(k),modelValue:u(M),"onUpdate:modelValue":p[0]||(p[0]=t=>h(M)?M.value=t:M=t),onChange:D},null,8,["total","modelValue"])):v("",!0)])}}}),[["__scopeId","data-v-ca528494"]]);export{k as default};
