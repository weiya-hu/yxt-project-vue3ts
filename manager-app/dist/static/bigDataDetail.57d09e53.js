import{D as a}from"./DetailsHeader.3aa57709.js";import{m as e}from"./index.5cd3bac6.js";import{s as t}from"./findc.5508c550.js";import{M as s}from"./MyPage.2279dcbd.js";import{M as r}from"./MyEmpty.ce239837.js";import{f as o}from"./date.23847c74.js";import{G as l,g as d,o as i,H as m,a as p,w as n,I as u,a2 as c,C as f,az as y,b}from"./vue.73bee448.js";import{_ as v}from"./index.f86653d0.js";import"./login.6a4fa518.js";import"./request.64bd2e3c.js";import"./index.10b470b5.js";import"./empty.f131d8fb.js";const j={class:"ad_data_details_page"},_={class:"mytable"};var g=v(l({setup(l){e();const v=y();v.query.id;const g=d(1),w=d(0),M=d(10),z=d([]),h=async()=>{const a={current:g.value,size:M.value,id:v.query.id},e=await t(a);1===e.status&&(z.value=e.body.records,w.value=e.body.total)};return h(),(e,t)=>{const l=b("el-table-column"),d=b("el-table"),y=b("el-card");return i(),m("div",j,[p(a),p(y,{class:"mycard"},{default:n((()=>[u("div",_,[p(d,{data:z.value,border:""},{empty:n((()=>[p(r)])),default:n((()=>[p(l,{type:"selection",width:"50"}),p(l,{property:"name",label:"称呼"}),p(l,{property:"gender",label:"性别"},{default:n((({row:a})=>[u("div",null,c(1==a.gender?"男":0==a.gender?"未知":"女"),1)])),_:1}),p(l,{property:"mobiles",label:"联系方式"}),p(l,{property:"create_time",label:"提交时间"},{default:n((({row:a})=>[u("div",null,c(f(o)(new Date(a.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),p(s,{page:g.value,"onUpdate:page":t[0]||(t[0]=a=>g.value=a),size:M.value,"onUpdate:size":t[1]||(t[1]=a=>M.value=a),total:w.value,onChange:h},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-340cf2bf"]]);export{g as default};
