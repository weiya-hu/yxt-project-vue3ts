var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,u=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&o(e,t,a[t]);return e};import{T as d}from"./TopSearch.a56e9671.js";import{_ as c}from"./MyPage.108e5d13.js";import{F as i}from"./FindNumber.7e4c21e3.js";import{M as n}from"./MyEmpty.ccd2530f.js";import{_ as p,m as v,k as f,l as m,n as b,e as y}from"./index.0c9b2458.js";import{g as h,w}from"./findC.16c42dc2.js";import{F as g,f as j,r as _,G as O,H as P,X as S,I as C,Q as M,R as x,P as z,W as H,u as V,V as F,O as I,a6 as D}from"./vue.d2637ff6.js";import"./MyCascader.438e3faa.js";const E={class:"otherdata_page_c"},R={class:"topbtns fsc"},T={class:"rt fcs"},k=F("同步SCRM"),G=F("同步CMS"),N=F("同步DSP系统"),Q={class:"mytable"};var U=p(g({setup(e){const l=v(),r=j((()=>l.state.addressHash)),s=_([]),o=()=>{h().then((e=>{s.value=e.body}))};o();const p=_(0),g=_(!1),F=_(),U=_({size:10,current:1,source:2}),W=_(1),X=_(""),q=async e=>{W.value=1,X.value=e,U.value.current=1,await A(),o()},A=async()=>{var e,l;await w((e=u({},U.value),l={str:X.value},a(e,t(l)))).then((e=>{1==e.status&&(p.value=e.body.total,F.value=e.body.records),g.value=!1})).catch((()=>{y("查询失败"),g.value=!1}))},B=e=>{W.value=2,U.value=u(u({},U.value),e)},J=_([]),K=e=>{J.value=e},L=()=>{1==W.value&&A()};return(e,a)=>{const t=I("el-button"),l=I("el-table-column"),o=I("el-table"),u=D("loading");return O(),P("div",E,[S(d,{onHeightSearch:B,onSearch:q,words:s.value,hasHeight:!1,placeholder:"请输入电话号码、姓名查询"},null,8,["words"]),C("div",R,[S(i,{class:"lt",total:p.value},null,8,["total"]),C("div",T,[S(t,{size:"large"},{default:M((()=>[k])),_:1}),S(t,{size:"large"},{default:M((()=>[G])),_:1}),S(t,{size:"large"},{default:M((()=>[N])),_:1})])]),C("div",Q,[x((O(),z(o,{data:F.value,style:{width:"100%"},onSelectionChange:K},{empty:M((()=>[S(n)])),default:M((()=>[S(l,{type:"selection",width:"50"}),S(l,{property:"name",label:"姓名",width:"150"}),S(l,{property:"sex",label:"性别",width:"150"},{default:M((e=>[C("div",null,H(0==e.row.sex?"男":"女"),1)])),_:1}),S(l,{property:"mobiles",label:"联系方式",width:"210"}),S(l,{property:"email",label:"邮箱",width:"210"}),S(l,{property:"address",label:"地区"},{default:M((e=>[C("div",null,H(V(f)(V(m)(e.row.province,e.row.city,e.row.district),V(r))),1)])),_:1}),S(l,{property:"source",label:"来源",width:"100"},{default:M((e=>[C("div",null,H(V(b)(e.row.source)),1)])),_:1})])),_:1},8,["data"])),[[u,g.value]])]),S(c,{total:p.value,modelValue:U.value.current,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.current=e),onChange:L},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-978cd98c"]]);export{U as default};
