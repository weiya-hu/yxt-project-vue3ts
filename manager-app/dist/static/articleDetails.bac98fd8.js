var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;import{G as l,g as c,o as n,H as d,a as m,I as u,w as b,C as p,a1 as f,aw as v,ax as j,az as y,av as _,b as O}from"./vue.73bee448.js";import{D as h}from"./DetailsHeader.04989b1a.js";import{t as g}from"./tip.19edb433.js";import{K as w}from"./KzAddArticle.eb5db19d.js";import{e as x,j as P}from"./custom.621e226c.js";import{m as k}from"./index.4593ca48.js";import{_ as C}from"./index.2ae254bd.js";import"./login.f44d1550.js";import"./request.b31e1908.js";import"./index.aeb80721.js";const D=t=>(v("data-v-2a921bf0"),t=t(),j(),t),I={class:"article_add"},K={class:"addform"},q={class:"fjend btns"},z=f("返回"),A=f("提交"),H={class:"form_content"},S={class:"tip fcs"},E=["src"],F=D((()=>u("span",null,"请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。",-1)));var G=C(l({setup(t){const l=k(),f=y(),v=_(),j=f.query.id;j&&x({id:j}).then((t=>{C.value.setForm({thumb_url:t.body.thumb_url,title:t.body.title,text:t.body.content})}));const C=c(),D=()=>{C.value.validate().then((t=>{t&&C.value.submit()}))},G=async t=>{const c={content:t.text,thumb_url:t.thumb_url,title:t.title},{status:n}=await P((d=((t,e)=>{for(var a in e||(e={}))r.call(e,a)&&i(t,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&i(t,a,e[a]);return t})({},c),m={order_id:j},e(d,a(m))));var d,m;1==n&&(l.setKeepList([]),v.replace("/cms/custom/article"))};return(t,e)=>{const a=O("el-button");return n(),d("div",I,[m(h),u("div",K,[u("div",q,[m(a,{class:"bdc_btn",onClick:e[0]||(e[0]=e=>t.$router.push("/cms/custom"))},{default:b((()=>[z])),_:1}),m(a,{type:"primary",onClick:D},{default:b((()=>[A])),_:1})]),u("div",H,[u("div",S,[u("img",{src:p(g),alt:""},null,8,E),F]),m(w,{ref_key:"addRef",ref:C,needimg:"",onSuccess:G},null,512)])])])}}}),[["__scopeId","data-v-2a921bf0"]]);export{G as default};
