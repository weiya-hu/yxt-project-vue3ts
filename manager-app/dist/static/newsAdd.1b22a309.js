var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e},l=(e,r)=>t(e,a(r));import{G as u,g as n,o as d,H as b,I as p,a as m,w as y,a1 as f,az as _,av as v,b as j}from"./vue.73bee448.js";import{m as w}from"./index.4593ca48.js";import{D as O}from"./DetailsHeader.04989b1a.js";import{K as g}from"./KzAddArticle.eb5db19d.js";import{G as x,H as h,t as P,z as k}from"./website.5b053d00.js";import"./index.2ae254bd.js";import"./login.f44d1550.js";import"./request.b31e1908.js";import"./index.aeb80721.js";const z={class:"add_article"},D={class:"fsc"},H={class:"btns"},K=f("稍后编辑"),q=f("提交"),A=u({setup(e){const t=w(),a=_(),r=v(),s=a.query.id,o=n(),i=n(1),u=async e=>{i.value=e,o.value.submit()},f=async e=>{const a={content:e.text,source_url:e.source_url,type_id:e.article_type,thumb_url:e.thumb_url,title:e.title,creator_name:e.creator,source:e.source},{status:o}=1===i.value?await x(l(c({},a),{id:s})):await h(l(c({},a),{id:s}));1===o&&(t.setKeepList([]),r.replace("/website/news"))},A=n([]);return(async()=>{const e=await P();1==e.status&&(A.value=e.body.map((e=>({label:e.name,value:e.id}))),s&&(async()=>{const{status:e,body:t}=await k({id:s});1===e&&o.value.setForm({title:t.title,article_type:Number(t.type_id),text:t.content,thumb_url:t.thumb_url,creator:t.creator_name,source_url:t.source_url,source:t.source})})())})(),(e,t)=>{const a=j("el-button");return d(),b("div",z,[p("div",D,[m(O),p("div",H,[m(a,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>u(1))},{default:y((()=>[K])),_:1}),m(a,{type:"primary",onClick:t[1]||(t[1]=e=>u(2))},{default:y((()=>[q])),_:1})])]),m(g,{ref_key:"addRef",ref:o,needimg:"",needtype:"",needsource:1,types:A.value,onSuccess:f},null,8,["types"])])}}});export{A as default};
