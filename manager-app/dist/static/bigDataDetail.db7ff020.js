import{D as a}from"./DetailsHeader.b84bab8d.js";import{m as e}from"./index.fd3330ea.js";import{s as t}from"./findc.8d392b2c.js";import{M as s}from"./MyPage.f8168d8f.js";import{f as r}from"./date.23847c74.js";import{G as l,g as d,o,H as i,a as n,w as p,I as u,a2 as m,C as c,az as b,b as f}from"./vue.73bee448.js";import{_ as v}from"./index.69d32547.js";import"./login.b5af171c.js";import"./request.d2675abe.js";import"./index.188a36b0.js";const y={class:"ad_data_details_page"},_={class:"mytable"};var g=v(l({setup(l){e();const v=b();v.query.id;const g=d(1),j=d(0),w=d(10),z=d([]),h=async()=>{const a={current:g.value,size:w.value,id:v.query.id},e=await t(a);1===e.status&&(z.value=e.body.records,j.value=e.body.total)};return h(),(e,t)=>{const l=f("el-table-column"),d=f("el-table"),b=f("el-card");return o(),i("div",y,[n(a),n(b,{class:"mycard"},{default:p((()=>[u("div",_,[n(d,{data:z.value,border:""},{default:p((()=>[n(l,{type:"selection",width:"50"}),n(l,{property:"name",label:"称呼"}),n(l,{property:"gender",label:"性别"},{default:p((({row:a})=>[u("div",null,m(1==a.gender?"男":0==a.gender?"未知":"女"),1)])),_:1}),n(l,{property:"mobiles",label:"联系方式"}),n(l,{property:"create_time",label:"提交时间"},{default:p((({row:a})=>[u("div",null,m(c(r)(new Date(a.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),n(s,{page:g.value,"onUpdate:page":t[0]||(t[0]=a=>g.value=a),size:w.value,"onUpdate:size":t[1]||(t[1]=a=>w.value=a),total:j.value,onChange:h},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-11e07474"]]);export{g as default};
