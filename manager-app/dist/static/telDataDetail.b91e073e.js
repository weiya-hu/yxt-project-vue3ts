import{D as e}from"./DetailsHeader.a6f50e8f.js";import{m as a}from"./index.f47187aa.js";import{s as t}from"./findc.844d68eb.js";import{M as s}from"./MyPage.088b462f.js";import{f as r}from"./date.23847c74.js";import{q as l,f as d,o,t as i,a as n,w as u,v as p,V as m,u as c,az as f,b as v}from"./vue.89ed3d48.js";import{_ as y}from"./index.547c0c45.js";import"./login.ed01525e.js";import"./request.356cbcf4.js";import"./index.3b31d7d7.js";const b={class:"ad_data_details_page"},_={class:"mytable"};var g=y(l({setup(l){const y=a(),g=f();g.query.id;const j=d(1),w=d(0),h=d(10);d(y.state.addressHash);const z=d([]),q=async()=>{let e={current:j.value,size:h.value,id:g.query.id};const a=await t(e);1==a.status&&(z.value=a.body.records,w.value=a.body.total)};return q(),(a,t)=>{const l=v("el-table-column"),d=v("el-table"),f=v("el-card");return o(),i("div",b,[n(e),n(f,{class:"mycard"},{default:u((()=>[p("div",_,[n(d,{data:z.value,border:""},{default:u((()=>[n(l,{type:"selection",width:"50"}),n(l,{property:"name",label:"称呼"}),n(l,{property:"gender",label:"性别"},{default:u((({row:e})=>[p("div",null,m(1==e.gender?"男":0==e.gender?"未知":"女"),1)])),_:1}),n(l,{property:"mobiles",label:"联系方式"}),n(l,{property:"create_time",label:"提交时间"},{default:u((({row:e})=>[p("div",null,m(c(r)(new Date(e.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),n(s,{total:w.value,page:j.value,"onUpdate:page":t[0]||(t[0]=e=>j.value=e),onChange:q,size:h.value,"onUpdate:size":t[1]||(t[1]=e=>h.value=e)},null,8,["total","page","size"])])),_:1})])}}}),[["__scopeId","data-v-68165fe9"]]);export{g as default};
