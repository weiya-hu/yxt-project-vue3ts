import{M as a}from"./MyDataTable.6f6fb163.js";import{M as t,_ as e}from"./MyEmpty.b964169c.js";import{b as l}from"./myData.5608381c.js";import{F as s,r as o,G as p,H as r,I as d,W as i,u,R as c,P as y,Q as n,X as b,Y as m,a7 as v,i as w,U as f,V as h,at as x,au as j,ax as _,O as g,a6 as M}from"./vue.5acda677.js";import{_ as V}from"./index.486f2fa0.js";import"./date.23847c74.js";const k=a=>(x("data-v-3b6dda35"),a=a(),j(),a),z={class:"up2b-detail mytable"},D={class:"top-tip"},I=h(" 为您找到 "),U={class:"red-color"},q=h(" 家符合条件的客户 （ "),C=k((()=>d("span",{class:"red-color"},"*根据政策与监管法规要求，联系人手机号脱敏展示",-1))),E=h("） ");var F=V(s({setup(s){const h=_();let x=o(0),j=o(1),V=o(!1);const k=o([{type:"select",prop:"select",width:130},{type:"text",lable:"姓名",prop:"contact",width:90},{type:"text",lable:"性别",prop:"sex",width:80},{type:"text",lable:"联系方式",prop:"mobiles",width:100},{type:"text",lable:"邮箱",prop:"email",width:150},{type:"text",lable:"从事行业",prop:"industry_id",width:130},{type:"city",lable:"地区",prop:"region",width:150}]),F=o([]),G=async()=>{V.value=!0;let a={current:j.value,size:10,id:h.query.id};const{status:t,body:e}=await l(a);V.value=!1,t&&(x.value=e.total,F.value=e.records)};return G(),(l,s)=>{const o=g("el-table"),h=M("loading");return p(),r("div",z,[d("div",D,[I,d("span",U,i(u(x)),1),q,C,E]),c((p(),y(o,{data:F.value,size:"large","row-class-name":"my-data-table-row",class:"table"},{empty:n((()=>[b(t)])),default:n((()=>[(p(!0),r(m,null,v(k.value,((t,e)=>(p(),y(a,{key:e,type:t.type,width:t.width,lable:t.lable,prop:t.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[h,u(V)]]),u(x)?(p(),y(e,{key:0,total:u(x),modelValue:u(j),"onUpdate:modelValue":s[0]||(s[0]=a=>w(j)?j.value=a:j=a),onChange:G},null,8,["total","modelValue"])):f("",!0)])}}}),[["__scopeId","data-v-3b6dda35"]]);export{F as default};
