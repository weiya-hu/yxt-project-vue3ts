var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&s(a,t,e[t]);if(r)for(var t of r(e))o.call(e,t)&&s(a,t,e[t]);return a};import{T as c}from"./TopSearch.a24f2c81.js";import{M as n}from"./MyEmpty.3acbd4a9.js";import{T as v}from"./TopBtns.601fdecb.js";import{C as d}from"./CompanyTable.ff6e6462.js";import{_ as p,g as i,w as y,e as b,s as m}from"./index.4847e6ad.js";import{F as f,r as h,G as j,H as w,X as g,R as O,a6 as P}from"./vue.5acda677.js";import"./MyCascader.b53f0195.js";const T={class:"otherdata_page"};var C=p(f({setup(a){const r=h([]),l=()=>{i().then((a=>{r.value=a.body}))};l();const o=h({size:10,current:1,source:2}),s=h(0),p=h([]),f=h(!1),C=h(1),S=h(""),_=async a=>{C.value=1,f.value=!0,o.value.current=1,S.value=a,await H(),l()},H=async()=>{var a,r;await y((a=u({},o.value),r={keywords:S.value},e(a,t(r)))).then((a=>{1==a.status&&(s.value=a.body.total,p.value=a.body.records),f.value=!1})).catch((()=>{b("查询失败"),f.value=!1}))},M=h({}),V=async a=>{f.value=!0,C.value=2,o.value.current=1,M.value=a,await x()},x=async()=>{await m(u(u({},o.value),M.value)).then((a=>{1==a.status&&(s.value=a.body.total,p.value=a.body.records),f.value=!1})).catch((()=>{b("查询失败"),f.value=!1}))},E=()=>{1==C.value?H():x()};return(a,e)=>{const t=P("loading");return j(),w("div",T,[g(c,{onHeightSearch:V,onSearch:_,words:r.value,hasHeight:!0,placeholder:"请输入企业名称、联系人、经营范围关键词"},null,8,["words"]),g(v,{total:s.value,class:"topbtns"},null,8,["total"]),O(g(d,{data:p.value},null,8,["data"]),[[t,f.value]]),g(n,{total:s.value,modelValue:o.value.current,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value.current=a),onChange:E},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-3ecf310e"]]);export{C as default};
