import{b as a,M as t}from"./myData.82e16f68.js";import{_ as e}from"./MyPage.eca92ca4.js";import{F as l,r as s,G as o,H as p,I as d,W as r,u as i,R as u,P as c,Q as y,X as n,Y as m,a7 as b,i as v,U as w,V as h,at as f,au as x,ax as j,O as _,a6 as g}from"./vue.5acda677.js";import{M}from"./MyEmpty.986d5879.js";import{_ as V}from"./index.febf5166.js";import"./date.23847c74.js";const k=a=>(f("data-v-3b6dda35"),a=a(),x(),a),z={class:"up2b-detail mytable"},I={class:"top-tip"},P=h(" 为您找到 "),U={class:"red-color"},q=h(" 家符合条件的客户 （ "),C=k((()=>d("span",{class:"red-color"},"*根据政策与监管法规要求，联系人手机号脱敏展示",-1))),D=h("） ");var E=V(l({setup(l){const h=j();let f=s(0),x=s(1),V=s(!1);const k=s([{type:"select",prop:"select",width:130},{type:"text",lable:"姓名",prop:"contact",width:90},{type:"text",lable:"性别",prop:"sex",width:80},{type:"text",lable:"联系方式",prop:"mobiles",width:100},{type:"text",lable:"邮箱",prop:"email",width:150},{type:"text",lable:"从事行业",prop:"industry_id",width:130},{type:"city",lable:"地区",prop:"region",width:150}]),E=s([]),F=async()=>{V.value=!0;let t={current:x.value,size:10,id:h.query.id};const{status:e,body:l}=await a(t);V.value=!1,e&&(f.value=l.total,E.value=l.records)};return F(),(a,l)=>{const s=_("el-table"),h=g("loading");return o(),p("div",z,[d("div",I,[P,d("span",U,r(i(f)),1),q,C,D]),u((o(),c(s,{data:E.value,size:"large","row-class-name":"my-data-table-row",class:"table"},{empty:y((()=>[n(M)])),default:y((()=>[(o(!0),p(m,null,b(k.value,((a,e)=>(o(),c(t,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[h,i(V)]]),i(f)?(o(),c(e,{key:0,total:i(f),modelValue:i(x),"onUpdate:modelValue":l[0]||(l[0]=a=>v(x)?x.value=a:x=a),onChange:F},null,8,["total","modelValue"])):w("",!0)])}}}),[["__scopeId","data-v-3b6dda35"]]);export{E as default};
