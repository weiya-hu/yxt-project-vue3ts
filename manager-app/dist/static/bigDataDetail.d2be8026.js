import{D as e}from"./DetailsHeader.159e29ee.js";import{m as a}from"./index.46ed79dd.js";import{s as t}from"./findc.28253493.js";import{M as s}from"./MyPage.2c8a4bc7.js";import{M as r}from"./MyEmpty.8e216a46.js";import{f as o}from"./date.23847c74.js";import{G as l,g as d,o as i,H as m,a as p,w as c,I as n,a2 as u,C as y,az as f,b as v}from"./vue.73bee448.js";import{_ as b}from"./index.aefc30ce.js";import"./login.857dc837.js";import"./request.65081ce8.js";import"./index.6c11e008.js";import"./empty.f131d8fb.js";import"./tinymce.5416ef76.js";const j={class:"ad_data_details_page"},_={class:"mytable"};var g=b(l({setup(l){a();const b=f();b.query.id;const g=d(1),w=d(0),M=d(10),z=d([]),h=async()=>{const e={current:g.value,size:M.value,id:b.query.id},a=await t(e);1===a.status&&(z.value=a.body.records,w.value=a.body.total)};return h(),(a,t)=>{const l=v("el-table-column"),d=v("el-table"),f=v("el-card");return i(),m("div",j,[p(e),p(f,{class:"mycard"},{default:c((()=>[n("div",_,[p(d,{data:z.value,border:""},{empty:c((()=>[p(r)])),default:c((()=>[p(l,{type:"selection",width:"50"}),p(l,{property:"name",label:"称呼"}),p(l,{property:"gender",label:"性别"},{default:c((({row:e})=>[n("div",null,u(1==e.gender?"男":0==e.gender?"未知":"女"),1)])),_:1}),p(l,{property:"mobiles",label:"联系方式"}),p(l,{property:"create_time",label:"提交时间"},{default:c((({row:e})=>[n("div",null,u(y(o)(new Date(e.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),p(s,{page:g.value,"onUpdate:page":t[0]||(t[0]=e=>g.value=e),size:M.value,"onUpdate:size":t[1]||(t[1]=e=>M.value=e),total:w.value,onChange:h},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-340cf2bf"]]);export{g as default};
