var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{q as c,f as i,o as l,t as d,a as p,w as u,v as b,V as f,az as v,b as m}from"./vue.89ed3d48.js";import{D as j}from"./DetailsHeader.dc89d7cd.js";import{j as y}from"./myWork.27ec77a2.js";import{_ as O}from"./index.fdca730b.js";import"./request.aa9790cc.js";const w={class:"article_details"},P={class:"content"},_={class:"title"},g=["innerHTML"],q=c((D=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&n(e,a,t[a]);return e})({},{name:"我的作品库软文详情"}),t(D,a({setup(e){const t=v().query.id,a=i({title:"",content:""});return(async()=>{const e=await y({id:t});1==e.status&&(a.value=e.body)})(),(e,t)=>{const r=m("el-card");return l(),d("div",w,[p(j),p(r,null,{default:u((()=>[b("div",P,[b("div",_,f(a.value.title),1),b("div",{innerHTML:a.value.content},null,8,g)])])),_:1})])}}}))));var D,H=O(q,[["__scopeId","data-v-480e1cb2"]]);export{H as default};