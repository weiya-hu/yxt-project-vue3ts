import{D as e}from"./DetailsHeader.1ecbc33e.js";import{m as a}from"./index.f61f506c.js";import{y as t}from"./findc.0b444a2c.js";import{M as s}from"./MyPage.4b5aaeff.js";import{M as r}from"./MyEmpty.07f2695e.js";import{f as o}from"./date.23847c74.js";import{G as l,g as d,o as i,H as m,a as p,w as n,I as u,a2 as c,C as f,az as y,b}from"./vue.73bee448.js";import{_ as v}from"./index.4a788974.js";import"./login.a80e1ce3.js";import"./request.71e82bfd.js";import"./index.c36e50f5.js";import"./empty.f131d8fb.js";const j={class:"ad_data_details_page"},_={class:"mytable"};var g=v(l({setup(l){const v=a(),g=y();g.query.id;const w=d(1),M=d(0),h=d(10);d(v.state.addressHash);const z=d([]),x=async()=>{const e={current:w.value,size:h.value,id:g.query.id},a=await t(e);1===a.status&&(z.value=a.body.records,M.value=a.body.total)};return x(),(a,t)=>{const l=b("el-table-column"),d=b("el-table"),y=b("el-card");return i(),m("div",j,[p(e),p(y,{class:"mycard"},{default:n((()=>[u("div",_,[p(d,{data:z.value,border:""},{empty:n((()=>[p(r)])),default:n((()=>[p(l,{type:"selection",width:"50"}),p(l,{property:"name",label:"称呼"}),p(l,{property:"gender",label:"性别"},{default:n((({row:e})=>[u("div",null,c(1==e.gender?"男":0==e.gender?"未知":"女"),1)])),_:1}),p(l,{property:"mobiles",label:"联系方式"}),p(l,{property:"create_time",label:"提交时间"},{default:n((({row:e})=>[u("div",null,c(f(o)(new Date(e.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),p(s,{page:w.value,"onUpdate:page":t[0]||(t[0]=e=>w.value=e),size:h.value,"onUpdate:size":t[1]||(t[1]=e=>h.value=e),total:M.value,onChange:x},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-105b4194"]]);export{g as default};
