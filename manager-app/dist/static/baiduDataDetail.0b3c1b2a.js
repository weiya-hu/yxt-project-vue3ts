import{D as a}from"./DetailsHeader.b84bab8d.js";import{m as e}from"./index.fd3330ea.js";import{n as t}from"./findc.8d392b2c.js";import{M as s}from"./MyPage.f8168d8f.js";import{f as r}from"./date.23847c74.js";import{G as d,g as l,o,H as i,a as n,w as p,I as u,a2 as m,C as c,az as b,b as f}from"./vue.73bee448.js";import{_ as v}from"./index.69d32547.js";import"./login.b5af171c.js";import"./request.d2675abe.js";import"./index.188a36b0.js";const y={class:"ad_data_details_page"},_={class:"mytable"};var g=v(d({setup(d){const v=e(),g=b();g.query.id;const j=l(1),w=l(0),h=l(10);l(v.state.addressHash);const z=l([]),x=async()=>{const a={current:j.value,size:h.value,id:g.query.id},e=await t(a);1===e.status&&(z.value=e.body.records,w.value=e.body.total)};return x(),(e,t)=>{const d=f("el-table-column"),l=f("el-table"),b=f("el-card");return o(),i("div",y,[n(a),n(b,{class:"mycard"},{default:p((()=>[u("div",_,[n(l,{data:z.value,border:""},{default:p((()=>[n(d,{type:"selection",width:"50"}),n(d,{property:"name",label:"称呼"}),n(d,{property:"gender",label:"性别"},{default:p((({row:a})=>[u("div",null,m(1==a.gender?"男":0==a.gender?"未知":"女"),1)])),_:1}),n(d,{property:"mobiles",label:"联系方式"}),n(d,{property:"create_time",label:"提交时间"},{default:p((({row:a})=>[u("div",null,m(c(r)(new Date(a.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),n(s,{page:j.value,"onUpdate:page":t[0]||(t[0]=a=>j.value=a),size:h.value,"onUpdate:size":t[1]||(t[1]=a=>h.value=a),total:w.value,onChange:x},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-0774e722"]]);export{g as default};
