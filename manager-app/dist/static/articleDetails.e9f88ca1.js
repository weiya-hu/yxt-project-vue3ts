var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{G as n,g as i,o as l,H as u,a as d,w as p,I as b,a2 as f,C as m,a1 as v,az as y,b as j}from"./vue.73bee448.js";import{D as O}from"./DetailsHeader.17be1c46.js";import{e as _}from"./resource.323c1d0a.js";import{_ as w}from"./index.83d90a4b.js";import"./request.aac31659.js";const P={class:"article_add"},g={class:"content"},H={class:"title"},h=["innerHTML"],C={class:"fjend btns twos"},D=v("返回"),I=v("编辑"),$=n((k=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&c(e,a,t[a]);return e})({},{name:"资源内容库软文详情"}),t(k,a({setup(e){const t=y().query.id,a=i({title:"",content:""});return(async()=>{const e=await _({id:t});1==e.status&&(a.value=e.body)})(),(e,r)=>{const s=j("el-button"),o=j("el-card");return l(),u("div",P,[d(O),d(o,null,{default:p((()=>[b("div",g,[b("div",H,f(a.value.title),1),b("div",{innerHTML:a.value.content},null,8,h),b("div",C,[d(s,{class:"bdc_btn",onClick:r[0]||(r[0]=t=>e.$router.push("/cms/resource"))},{default:p((()=>[D])),_:1}),d(s,{type:"primary",onClick:r[1]||(r[1]=a=>e.$router.push(`/cms/resourceedit?id=${m(t)}`))},{default:p((()=>[I])),_:1})])])])),_:1})])}}}))));var k,q=w($,[["__scopeId","data-v-5fc12d86"]]);export{q as default};