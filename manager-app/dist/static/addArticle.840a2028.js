var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&o(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&o(e,s,t[s]);return e},l=(e,a)=>t(e,s(a));import{G as n,g as u,o as p,H as d,I as b,a as f,w as m,a1 as y,az as v,av as j,b as w}from"./vue.73bee448.js";import{m as O}from"./index.5d447f79.js";import{D as _}from"./DetailsHeader.535ed972.js";import{K as x}from"./KzAddArticle.73cd051b.js";import{p as g,q as P,r as h}from"./service.c79881eb.js";import{w as k}from"./index.a86c6ab1.js";import"./index.12522c67.js";import"./login.76a81bb1.js";import"./request.b31062f2.js";const q={class:"add_article"},D={class:"fsc"},K={class:"btns"},z=y("稍后编辑"),A=y("提交"),C=n({setup(e){const t=O(),s=v(),a=j(),r=s.query.id;r&&(async()=>{const{status:e,body:t}=await g({id:r});if(1==e){if(3==t.status)return k("请下线文章后再编辑"),void a.replace("/website/service/articledetails?id="+r);i.value.setForm({title:t.title,article_type:t.article_type,text:t.text,thumb_url:t.thumb_url})}})();const i=u(),o=u(1),n=async e=>{o.value=e,i.value.submit()},y=async e=>{const{status:s}=r?await P(l(c({},e),{status:o.value,id:r})):await h(l(c({},e),{status:o.value}));1==s&&(t.setKeepList([]),a.replace("/website/service/school"))};return(e,t)=>{const s=w("el-button");return p(),d("div",q,[b("div",D,[f(_),b("div",K,[f(s,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>n(1))},{default:m((()=>[z])),_:1}),f(s,{type:"primary",onClick:t[1]||(t[1]=e=>n(2))},{default:m((()=>[A])),_:1})])]),f(x,{ref_key:"addRef",ref:i,needtype:"",onSuccess:y},null,512)])}}});export{C as default};