var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&o(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&o(e,s,t[s]);return e},l=(e,a)=>t(e,s(a));import{q as n,f as d,o as u,t as p,v as f,a as b,w as m,U as y,az as v,av as j,b as w}from"./vue.89ed3d48.js";import{m as O}from"./index.f47187aa.js";import{D as _}from"./DetailsHeader.a6f50e8f.js";import{K as x}from"./KzAddArticle.86428a68.js";import{x as g,E as P,F as h}from"./website.a7cc2447.js";import{w as k}from"./index.3b31d7d7.js";import"./index.547c0c45.js";import"./login.ed01525e.js";import"./request.356cbcf4.js";import"./Edit.f721bdef.js";const q={class:"add_article"},D={class:"fsc"},E={class:"btns"},K=y("稍后编辑"),z=y("提交"),A=n({setup(e){const t=O(),s=v(),a=j(),r=s.query.id;r&&(async()=>{const{status:e,body:t}=await g({id:r});if(1==e){if(3==t.status)return k("请下线文章后再编辑"),void a.replace("/website/service/articledetails?id="+r);i.value.setForm({title:t.title,article_type:t.article_type,text:t.text,thumb_url:t.thumb_url})}})();const i=d(),o=d(1),n=async e=>{o.value=e,i.value.submit()},y=async e=>{const{status:s}=r?await P(l(c({},e),{status:o.value,id:r})):await h(l(c({},e),{status:o.value}));1==s&&(t.setKeepList([]),a.replace("/website/service/school"))};return(e,t)=>{const s=w("el-button");return u(),p("div",q,[f("div",D,[b(_),f("div",E,[b(s,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>n(1))},{default:m((()=>[K])),_:1}),b(s,{type:"primary",onClick:t[1]||(t[1]=e=>n(2))},{default:m((()=>[z])),_:1})])]),b(x,{ref_key:"addRef",ref:i,needimg:"",needtype:"",needsource:"",onSuccess:y},null,512)])}}});export{A as default};
