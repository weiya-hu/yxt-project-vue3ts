import{D as a}from"./DetailsHeader.3aa57709.js";import{m as e}from"./index.5cd3bac6.js";import{i as t}from"./findc.5508c550.js";import{M as s}from"./MyPage.2279dcbd.js";import{M as r}from"./MyEmpty.ce239837.js";import{f as o}from"./date.23847c74.js";import{G as d,g as l,o as i,H as m,a as p,w as n,I as u,a2 as c,C as b,az as y,b as f}from"./vue.73bee448.js";import{_ as v}from"./index.f86653d0.js";import"./login.6a4fa518.js";import"./request.64bd2e3c.js";import"./index.10b470b5.js";import"./empty.f131d8fb.js";const j={class:"ad_data_details_page"},_={class:"mytable"};var g=v(d({setup(d){const v=e(),g=y();g.query.id;const w=l(1),M=l(0),h=l(10);l(v.state.addressHash);const z=l([]),x=async()=>{const a={current:w.value,size:h.value,id:g.query.id},e=await t(a);1==e.status&&(z.value=e.body.records,M.value=e.body.total)};return x(),(e,t)=>{const d=f("el-table-column"),l=f("el-table"),y=f("el-card");return i(),m("div",j,[p(a),p(y,{class:"mycard"},{default:n((()=>[u("div",_,[p(l,{data:z.value,border:""},{empty:n((()=>[p(r)])),default:n((()=>[p(d,{type:"selection",width:"50"}),p(d,{property:"name",label:"称呼"}),p(d,{property:"gender",label:"性别"},{default:n((({row:a})=>[u("div",null,c(1==a.gender?"男":0==a.gender?"未知":"女"),1)])),_:1}),p(d,{property:"mobiles",label:"联系方式"}),p(d,{property:"create_time",label:"提交时间"},{default:n((({row:a})=>[u("div",null,c(b(o)(new Date(a.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),p(s,{page:w.value,"onUpdate:page":t[0]||(t[0]=a=>w.value=a),size:h.value,"onUpdate:size":t[1]||(t[1]=a=>h.value=a),total:M.value,onChange:x},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-32b0db6a"]]);export{g as default};
