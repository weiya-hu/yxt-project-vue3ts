import{D as a}from"./DetailsHeader.3080e1da.js";import{m as e}from"./index.539b9ec6.js";import{y as t}from"./findc.dcb93930.js";import{M as s}from"./MyPage.8e7a8180.js";import{f as r}from"./date.23847c74.js";import{G as l,g as o,o as d,H as i,a as n,w as p,I as u,a2 as m,C as c,az as f,b as y}from"./vue.73bee448.js";import{_ as b}from"./index.725446a3.js";import"./login.43d0a44a.js";import"./request.fdae0f3f.js";import"./index.0c4cefbc.js";const v={class:"ad_data_details_page"},_={class:"mytable"};var g=b(l({setup(l){const b=e(),g=f();g.query.id;const j=o(1),w=o(0),h=o(10);o(b.state.addressHash);const z=o([]),x=async()=>{const a={current:j.value,size:h.value,id:g.query.id},e=await t(a);1===e.status&&(z.value=e.body.records,w.value=e.body.total)};return x(),(e,t)=>{const l=y("el-table-column"),o=y("el-table"),f=y("el-card");return d(),i("div",v,[n(a),n(f,{class:"mycard"},{default:p((()=>[u("div",_,[n(o,{data:z.value,border:""},{default:p((()=>[n(l,{type:"selection",width:"50"}),n(l,{property:"name",label:"称呼"}),n(l,{property:"gender",label:"性别"},{default:p((({row:a})=>[u("div",null,m(1==a.gender?"男":0==a.gender?"未知":"女"),1)])),_:1}),n(l,{property:"mobiles",label:"联系方式"}),n(l,{property:"create_time",label:"提交时间"},{default:p((({row:a})=>[u("div",null,m(c(r)(new Date(a.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),n(s,{page:j.value,"onUpdate:page":t[0]||(t[0]=a=>j.value=a),size:h.value,"onUpdate:size":t[1]||(t[1]=a=>h.value=a),total:w.value,onChange:x},null,8,["page","size","total"])])),_:1})])}}}),[["__scopeId","data-v-63aa3b26"]]);export{g as default};
