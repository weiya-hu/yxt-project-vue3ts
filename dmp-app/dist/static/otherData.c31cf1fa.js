var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,u=(a,e)=>{for(var t in e||(e={}))s.call(e,t)&&o(a,t,e[t]);if(l)for(var t of l(e))r.call(e,t)&&o(a,t,e[t]);return a};import{T as n}from"./TopSearch.e112e91f.js";import{M as c}from"./MyEmpty.264a195e.js";import{T as v}from"./TopBtns.9de9b4e3.js";import{_ as d}from"./CompanyTable.2a870c7e.js";import{_ as i,g as p,b as y,w as b,e as f,s as m,c as h}from"./index.8618f993.js";import{F as j,r as w,f as g,R as O,G as _,H as P,X as S,u as T,a6 as I}from"./vue.5acda677.js";import"./MyCascader.6170cadd.js";const k={class:"otherdata_page"};var C=i(j({setup(a){const l=w([]),s=()=>{y().then((a=>{l.value=a.body}))};s();const r=w({size:50,current:1,source:2}),o=w(0),i=w([]),j=w(!1),C=w(1),H=w(""),L=async a=>{C.value=1,j.value=!0,r.value.current=1,H.value=a,await M(),s()},M=async()=>{var a,l;j.value=!0,await b((a=u({},r.value),l={keywords:H.value},e(a,t(l)))).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),j.value=!1})).catch((()=>{f("查询失败"),j.value=!1}))},R=w({}),V=async a=>{j.value=!0,C.value=2,r.value.current=1,R.value=a,await x()},x=async()=>{j.value=!0,await m(u(u({},r.value),R.value)).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),j.value=!1})).catch((()=>{f("查询失败"),j.value=!1}))},z=()=>{1==C.value?M():x()},B=w(),E=w(),D=g((()=>E.value&&!E.value.selIdList.length)),F=async()=>{B.value.setLoading(!0);const a=await h({list:E.value.selIdList});B.value.close(a.message),E.value.clear()};return(a,e)=>{const t=I("loading");return O((_(),P("div",k,[S(n,{onHeightSearch:V,onSearch:L,words:l.value,hasHeight:!0,placeholder:"请输入企业名称、联系人、经营范围关键词"},null,8,["words"]),S(v,{total:o.value,syncbtn:"",onSync:F,ref_key:"topBtnRef",ref:B,"sync-api":T(p),"sync-disabled":T(D),class:"topbtns"},null,8,["total","sync-api","sync-disabled"]),S(d,{data:i.value,ref_key:"tableRef",ref:E},null,8,["data"]),S(c,{total:o.value,size:50,modelValue:r.value.current,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value.current=a),onChange:z},null,8,["total","modelValue"])])),[[t,j.value]])}}}),[["__scopeId","data-v-4ccec268"]]);export{C as default};