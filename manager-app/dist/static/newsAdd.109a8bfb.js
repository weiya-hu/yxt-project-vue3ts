var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&c(e,r,t[r]);return e},l=(e,a)=>t(e,r(a));import{G as u,g as n,o as p,H as d,I as m,a as b,w as y,a1 as f,az as _,av as j,b as v}from"./vue.73bee448.js";import{m as w}from"./index.e7a3094c.js";import{D as O}from"./DetailsHeader.945bd2c0.js";import{K as g}from"./KzAddArticle.4cf9b08c.js";import{G as x,H as h,t as P,z as k}from"./website.aa3bab02.js";import"./index.e7872df1.js";import"./tinymce.5416ef76.js";import"./login.df5d82cd.js";import"./request.7878c8f3.js";import"./index.3ae96932.js";const z={class:"add_article"},D={class:"fsc"},H={class:"btns"},K=f("稍后编辑"),q=f("提交"),A=u({setup(e){const t=w(),r=_(),a=j(),s=r.query.id,o=n(),c=n(1),u=async e=>{c.value=e,o.value.submit()},f=async e=>{const r={content:e.text,source_url:e.source_url,type_id:e.article_type,thumb_url:e.thumb_url,title:e.title,creator_name:e.creator,source:e.source},{status:o}=1===c.value?await x(l(i({},r),{id:s})):await h(l(i({},r),{id:s}));1===o&&(t.setKeepList([]),a.replace("/website/news"))},A=n([]);return(async()=>{const e=await P();1==e.status&&(A.value=e.body.filter((e=>2==e.top)).map((e=>({label:e.name,value:e.id}))),s&&(async()=>{const{status:e,body:t}=await k({id:s});1===e&&o.value.setForm({title:t.title,article_type:Number(t.type_id),text:t.content,thumb_url:t.thumb_url,creator:t.creator_name,source_url:t.source_url,source:t.source})})())})(),(e,t)=>{const r=v("el-button");return p(),d("div",z,[m("div",D,[b(O),m("div",H,[b(r,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>u(1))},{default:y((()=>[K])),_:1}),b(r,{type:"primary",onClick:t[1]||(t[1]=e=>u(2))},{default:y((()=>[q])),_:1})])]),b(g,{ref_key:"addRef",ref:o,needimg:"",needtype:"",needsource:1,types:A.value,onSuccess:f},null,8,["types"])])}}});export{A as default};