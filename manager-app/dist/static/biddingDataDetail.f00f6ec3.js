import{D as e}from"./DetailsHeader.945bd2c0.js";import{m as a}from"./index.e7a3094c.js";import{D as t}from"./findc.6073b4fb.js";import{M as s}from"./MyPage.ced40e22.js";import{M as r}from"./MyEmpty.e7bf4449.js";import{f as o}from"./date.23847c74.js";import{G as d,g as l,o as i,H as m,a as p,w as n,I as u,a2 as c,C as f,az as y,b}from"./vue.73bee448.js";import{_ as v}from"./index.e7872df1.js";import"./login.df5d82cd.js";import"./request.7878c8f3.js";import"./index.3ae96932.js";import"./empty.f131d8fb.js";import"./tinymce.5416ef76.js";const j={class:"ad_data_details_page"},_={class:"mytable"};var g=v(d({setup(d){const v=a(),g=y();g.query.id;const w=l(1),M=l(0),h=l(10);l(v.state.addressHash);const z=l([]),x=async()=>{const e={current:w.value,size:h.value,id:g.query.id},a=await t(e);1==a.status&&(z.value=a.body.records,M.value=a.body.total)};return x(),(a,t)=>{const d=b("el-table-column"),l=b("el-table"),y=b("el-card");return i(),m("div",j,[p(e),p(y,{class:"mycard"},{default:n((()=>[u("div",_,[p(l,{data:z.value,border:""},{empty:n((()=>[p(r)])),default:n((()=>[p(d,{type:"selection",width:"50"}),p(d,{property:"name",label:"称呼"}),p(d,{property:"gender",label:"性别"},{default:n((({row:e})=>[u("div",null,c(1==e.gender?"男":0==e.gender?"未知":"女"),1)])),_:1}),p(d,{property:"mobiles",label:"联系方式"}),p(d,{property:"create_time",label:"提交时间"},{default:n((({row:e})=>[u("div",null,c(f(o)(new Date(e.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),p(s,{page:w.value,"onUpdate:page":t[0]||(t[0]=e=>w.value=e),size:h.value,"onUpdate:size":t[1]||(t[1]=e=>h.value=e),total:M.value,onChange:x},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-570d8b59"]]);export{g as default};
