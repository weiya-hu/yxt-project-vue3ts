var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&o(a,t,e[t]);if(s)for(var t of s(e))r.call(e,t)&&o(a,t,e[t]);return a};import{T as c}from"./TopSearch.e6b7b9c0.js";import{M as n}from"./MyEmpty.0194cb63.js";import{T as v}from"./TopBtns.e5b3ccd0.js";import{C as d}from"./CompanyTable.e58b3e4d.js";import{_ as i,g as p,b,w as y,e as f,s as m,c as h}from"./index.2af4c4b9.js";import{F as j,r as w,f as g,R as O,G as _,H as P,X as S,u as T,a6 as k}from"./vue.5acda677.js";import"./MyCascader.4b13ceb1.js";const C={class:"kzdata_page"};var I=i(j({setup(a){const s=w([]),l=()=>{b().then((a=>{s.value=a.body}))};l();const r=w({size:50,current:1,source:1}),o=w(0),i=w([]),j=w(!1),I=w(1),z=w(""),H=async a=>{I.value=1,j.value=!0,r.value.current=1,z.value=a,await L(),l()},L=async()=>{var a,s;await y((a=u({},r.value),s={keywords:z.value},e(a,t(s)))).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),j.value=!1})).catch((()=>{f("查询失败"),j.value=!1}))},M=w({}),R=async a=>{j.value=!0,I.value=2,r.value.current=1,M.value=a,await V()},V=async()=>{await m(u(u({},r.value),M.value)).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),j.value=!1})).catch((()=>{f("查询失败"),j.value=!1}))},x=()=>{1==I.value?L():V()},B=w(),E=w(),D=g((()=>E.value&&!E.value.selIdList.length)),F=async()=>{B.value.setLoading(!0);const a=await h({list:E.value.selIdList});B.value.close(a.message),E.value.clear()};return(a,e)=>{const t=k("loading");return O((_(),P("div",C,[S(c,{onHeightSearch:R,onSearch:H,words:s.value,hasHeight:!0,placeholder:"请输入企业名称、联系人、经营范围关键词"},null,8,["words"]),S(v,{total:o.value,syncbtn:"",onSync:F,ref_key:"topBtnRef",ref:B,"sync-api":T(p),"sync-disabled":T(D),class:"topbtns"},null,8,["total","sync-api","sync-disabled"]),S(d,{data:i.value,ref_key:"tableRef",ref:E},null,8,["data"]),S(n,{total:o.value,size:50,modelValue:r.value.current,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value.current=a),onChange:x},null,8,["total","modelValue"])])),[[t,j.value]])}}}),[["__scopeId","data-v-539f5b88"]]);export{I as default};
