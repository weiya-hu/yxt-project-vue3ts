var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&o(a,t,e[t]);if(r)for(var t of r(e))s.call(e,t)&&o(a,t,e[t]);return a};import{T as c}from"./TopSearch.5cd8661a.js";import{_ as n}from"./MyPage.eca92ca4.js";import{F as d}from"./FindNumber.2b33aeaf.js";import{C as v}from"./CompanyTable.9b71438f.js";import{_ as i,g as p,w as b,e as f,s as m}from"./index.8e773d39.js";import{F as y,r as h,G as j,H as g,X as w,I as O,Q as _,R as P,V as S,O as C,a6 as M}from"./vue.5acda677.js";import"./MyCascader.8d53fe9b.js";import"./MyEmpty.17c4d8dd.js";const z={class:"otherdata_page"},V={class:"topbtns fsc"},F={class:"rt fcs"},H=S("同步SCRM"),I=S("同步CMS"),T=S("同步DSP系统");var x=i(y({setup(a){const r=h([]),l=()=>{p().then((a=>{r.value=a.body}))};l();const s=h({size:10,current:1,source:2}),o=h(0),i=h([]),y=h(!1),S=h(1),x=h(""),D=async a=>{S.value=1,y.value=!0,s.value.current=1,x.value=a,await E(),l()},E=async()=>{var a,r;await b((a=u({},s.value),r={keywords:x.value},e(a,t(r)))).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),y.value=!1})).catch((()=>{f("查询失败"),y.value=!1}))},R=h({}),k=async a=>{y.value=!0,S.value=2,s.value.current=1,R.value=a,await G()},G=async()=>{await m(u(u({},s.value),R.value)).then((a=>{1==a.status&&(o.value=a.body.total,i.value=a.body.records),y.value=!1})).catch((()=>{f("查询失败"),y.value=!1}))},N=()=>{1==S.value?E():G()};return(a,e)=>{const t=C("el-button"),l=M("loading");return j(),g("div",z,[w(c,{onHeightSearch:k,onSearch:D,words:r.value,hasHeight:!0,placeholder:"请输入企业名称、联系人、经营范围关键词"},null,8,["words"]),O("div",V,[w(d,{class:"lt",total:o.value},null,8,["total"]),O("div",F,[w(t,{size:"large"},{default:_((()=>[H])),_:1}),w(t,{size:"large"},{default:_((()=>[I])),_:1}),w(t,{size:"large"},{default:_((()=>[T])),_:1})])]),P(w(v,{data:i.value},null,8,["data"]),[[l,y.value]]),w(n,{total:o.value,modelValue:s.value.current,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value.current=a),onChange:N},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-1cdf6d75"]]);export{x as default};