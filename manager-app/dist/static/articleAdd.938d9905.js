var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e},l=(e,r)=>t(e,a(r));import{G as u,g as n,o as d,H as p,I as m,a as b,w as f,a1 as y,az as v,av as _,b as j}from"./vue.73bee448.js";import{m as w}from"./index.1d8a12f4.js";import{D as O}from"./DetailsHeader.36b626e2.js";import{K as g}from"./KzAddArticle.d439a852.js";import{e as x,i as h,j as P,k}from"./website.4f06fd06.js";import{w as D}from"./index.2f69722d.js";import"./index.1bbbc36a.js";import"./login.176baa88.js";import"./request.68f2d717.js";const K={class:"add_article"},q={class:"fsc"},z={class:"btns"},A=y("稍后编辑"),C=y("提交"),H=u({setup(e){const t=w(),a=v(),r=_(),s=a.query.id,o=async()=>{const{status:e,body:t}=await x({id:s});if(1==e){if(3==t.status)return D("请下线文章后再编辑"),void r.replace("/website/inform/dynamic/dynamicdetails?id="+s);i.value.setForm({title:t.title,article_type:Number(t.type_id),text:t.content,thumb_url:t.thumb_url,creator:t.creator,source_url:t.source_url,source:t.source})}};s&&o();const i=n(),u=n(1),y=async e=>{u.value=e,i.value.submit()},H=async e=>{const a={content:e.text,source:e.source,source_url:e.source_url,type_id:e.article_type,thumb_url:e.thumb_url,title:e.title,creator:e.creator},{status:o}=1===u.value?await h(l(c({},a),{id:s})):await P(l(c({},a),{id:s}));1===o&&(t.setKeepList([]),r.replace("/website/inform/dynamic"))},I=n([]);return(async()=>{const e=await k();1===e.status&&(I.value=e.body.map((e=>({label:e.name,value:e.id}))),s&&o())})(),(e,t)=>{const a=j("el-button");return d(),p("div",K,[m("div",q,[b(O),m("div",z,[b(a,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>y(1))},{default:f((()=>[A])),_:1}),b(a,{type:"primary",onClick:t[1]||(t[1]=e=>y(2))},{default:f((()=>[C])),_:1})])]),b(g,{ref_key:"addRef",ref:i,needimg:"",needtype:"",needsource:1,types:I.value,onSuccess:H},null,8,["types"])])}}});export{H as default};
