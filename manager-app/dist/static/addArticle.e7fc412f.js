var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&o(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&o(e,s,t[s]);return e},l=(e,a)=>t(e,s(a));import{G as n,g as u,o as p,H as d,I as b,a as f,w as m,a1 as y,az as v,av as j,b as w}from"./vue.73bee448.js";import{m as O}from"./index.46ed79dd.js";import{D as _}from"./DetailsHeader.159e29ee.js";import{K as x}from"./KzAddArticle.7c88c03c.js";import{j as g,u as h,v as P,w as k}from"./service.94da7b7d.js";import{w as D}from"./index.6c11e008.js";import"./index.aefc30ce.js";import"./tinymce.5416ef76.js";import"./login.857dc837.js";import"./request.65081ce8.js";const K={class:"add_article"},q={class:"fsc"},z={class:"btns"},A=y("稍后编辑"),C=y("提交"),H=n({setup(e){const t=O(),s=v(),a=j(),r=s.query.id,i=u([]);(async()=>{const{status:e,body:t}=await g();if(1==e){for(const[e,s]of Object.entries(t))i.value.push({value:Number(e),label:s});r&&o()}})();const o=async()=>{const{status:e,body:t}=await h({id:r});if(1==e){if(3==t.status)return D("请下线文章后再编辑"),void a.replace("/website/service/articledetails?id="+r);n.value.setForm({title:t.title,article_type:t.article_type,text:t.text,thumb_url:t.thumb_url})}},n=u(),y=u(1),H=async e=>{y.value=e,n.value.submit()},I=async e=>{const{status:s}=r?await P(l(c({},e),{status:y.value,id:r})):await k(l(c({},e),{status:y.value}));1==s&&(t.setKeepList([]),a.replace("/website/service/school"))};return(e,t)=>{const s=w("el-button");return p(),d("div",K,[b("div",q,[f(_),b("div",z,[f(s,{class:"bdc_btn",onClick:t[0]||(t[0]=e=>H(1))},{default:m((()=>[A])),_:1}),f(s,{type:"primary",onClick:t[1]||(t[1]=e=>H(2))},{default:m((()=>[C])),_:1})])]),f(x,{ref_key:"addRef",ref:n,needtype:"",onSuccess:I,types:i.value},null,8,["types"])])}}});export{H as default};