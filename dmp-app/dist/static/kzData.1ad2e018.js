var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,u=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&o(e,t,a[t]);return e};import{T as d}from"./TopSearch.c15724ba.js";import{M as i,_ as n}from"./MyEmpty.a02eeaa3.js";import{F as c}from"./FindNumber.4ab75f6e.js";import{_ as p,m as v,j as b,k as m,n as y,e as f}from"./index.d66d1016.js";import{g as h,w}from"./findC.1a564399.js";import{F as j,f as g,r as _,G as O,H as S,X as P,I as C,Q as z,R as M,P as x,W as H,u as V,V as F,O as I,a6 as k}from"./vue.5acda677.js";import"./MyCascader.365bb42e.js";const D={class:"kzdata_page_c"},E={class:"topbtns fsc"},R={class:"rt fcs"},T=F("同步SCRM"),G=F("同步CMS"),N=F("同步DSP系统"),Q={class:"mytable"};var U=p(j({setup(e){const l=v(),r=g((()=>l.state.addressHash)),s=_([]),o=()=>{h().then((e=>{s.value=e.body}))};o();const p=_(0),j=_(!1),F=_(),U=_({size:10,current:1,source:1}),W=_(1),X=_(""),q=async e=>{W.value=1,X.value=e,U.value.current=1,await A(),o()},A=async()=>{var e,l;j.value=!0,await w((e=u({},U.value),l={str:X.value},a(e,t(l)))).then((e=>{1==e.status&&(p.value=e.body.total,F.value=e.body.records),j.value=!1})).catch((()=>{f("查询失败"),j.value=!1}))},B=e=>{W.value=2,U.value=u(u({},U.value),e)},J=_([]),K=e=>{J.value=e},L=()=>{1==W.value&&A()};return(e,a)=>{const t=I("el-button"),l=I("el-table-column"),o=I("el-table"),u=k("loading");return O(),S("div",D,[P(d,{onHeightSearch:B,onSearch:q,words:s.value,hasHeight:!1,placeholder:"请输入电话号码、姓名查询"},null,8,["words"]),C("div",E,[P(c,{class:"lt",total:p.value},null,8,["total"]),C("div",R,[P(t,{size:"large"},{default:z((()=>[T])),_:1}),P(t,{size:"large"},{default:z((()=>[G])),_:1}),P(t,{size:"large"},{default:z((()=>[N])),_:1})])]),C("div",Q,[M((O(),x(o,{data:F.value,style:{width:"100%"},onSelectionChange:K},{empty:z((()=>[P(i)])),default:z((()=>[P(l,{type:"selection",width:"50"}),P(l,{property:"name",label:"姓名",width:"150"}),P(l,{property:"sex",label:"性别",width:"150"},{default:z((e=>[C("div",null,H(0==e.row.sex?"男":"女"),1)])),_:1}),P(l,{property:"mobiles",label:"联系方式",width:"210"}),P(l,{property:"email",label:"邮箱",width:"210"}),P(l,{property:"address",label:"地区"},{default:z((e=>[C("div",null,H(V(b)(V(m)(e.row.province,e.row.city,e.row.district),V(r))),1)])),_:1}),P(l,{property:"source",label:"来源",width:"100"},{default:z((e=>[C("div",null,H(V(y)(e.row.source)),1)])),_:1})])),_:1},8,["data"])),[[u,j.value]])]),P(n,{total:p.value,modelValue:U.value.current,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.current=e),onChange:L},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-3987006b"]]);export{U as default};
