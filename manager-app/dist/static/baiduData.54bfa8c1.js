var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,u=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{s as d}from"./Search.43a44bd4.js";import{f as n}from"./date.23847c74.js";import{M as c}from"./MyPage.2c8a4bc7.js";import{M as p}from"./MyEmpty.8e216a46.js";import{d as m,f as y,o as v}from"./index.6c11e008.js";import{j as f,k as b,l as _,m as j}from"./findc.28253493.js";import{R as k}from"./Refuse.c4dd5bb9.js";import{U as w}from"./UpUser.0375c39a.js";import{_ as g,E as C}from"./index.aefc30ce.js";import{G as h,g as O,j as U,o as V,H as x,a as M,w as P,C as z,k as N,I as S,W as D,a2 as I,c as T,a0 as B,a1 as E,b as R}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./request.65081ce8.js";import"./MyUpload.ef53f60d.js";import"./login.857dc837.js";import"./findb.c1031062.js";import"./tinymce.5416ef76.js";const q={class:"baidu_data"},F={class:"mytable"},G={class:"fcs"},H={class:"fcs"},W=E("详情"),$=E("下载附件"),A={key:2,class:"line"},J=E("驳回"),K={key:4,class:"line"},L=E("通过"),Q=E("上传客户"),X=E("驳回原因");var Y=g(h(i(u({},{name:"BaiduData"}),{setup(e){const a=O(1),t=O(0),l=O(10),s=U({userName:"",status:"",create_time:""}),r=()=>{h()},o=()=>{s.userName="",s.status="",s.create_time="",h()},g=O([]),h=async()=>{const e=await f(i(u({current:a.value,size:l.value},s),{name:s.userName,startTime:s.create_time[0],endTime:s.create_time[1]}));1===e.status&&(g.value=e.body.records,t.value=e.body.total)};h();const E=O(""),Y=async()=>{b({id:E.value}).then((()=>{v("操作成功！"),h()}))},Z=O(!1),ee=O(!1),ae=O(),te=async e=>{const a={id:ae.value,fail_reason:e},{status:t,body:l}=await _(a);t&&(Z.value=!1,h())},le=O(""),se=async e=>{1===(await j(i(u({},e),{id:le.value}))).status&&(v("操作成功！"),h())};return(e,u)=>{const i=R("el-option"),v=R("el-table-column"),f=R("el-link"),b=R("el-table"),_=R("el-card");return V(),x("div",q,[M(d,{modelValue:z(s),"onUpdate:modelValue":u[0]||(u[0]=e=>N(s)?s.value=e:s=e),onSearch:r,onReset:o},{default:P((()=>[M(i,{label:"全部",value:"null"}),M(i,{label:"待处理",value:"1"}),M(i,{label:"已受理",value:"2"}),M(i,{label:"被驳回",value:"3"}),M(i,{label:"已完成",value:"4"})])),_:1},8,["modelValue"]),M(_,{class:"mycard"},{default:P((()=>[S("div",F,[M(b,{data:g.value,border:""},{empty:P((()=>[M(p)])),default:P((()=>[M(v,{type:"selection",width:"50"}),M(v,{property:"id",label:"ID"}),M(v,{property:"user_name",label:"账户名"}),M(v,{property:"company_name",label:"客户名称"}),M(v,{property:"group_name",label:"人群名称"}),M(v,{property:"group_desc",label:"人群描述"}),M(v,{property:"status",label:"处理状态"},{default:P((({row:e})=>[S("div",G,[S("div",{class:D(["status_dot",z(m)(e.status).className])},null,2),S("div",null,I(z(m)(e.status).text),1)])])),_:1}),M(v,{property:"count",label:"覆盖用户人数"}),M(v,{property:"money",label:"消费金额（元）"},{default:P((({row:e})=>[S("div",null,I(Number(e.money).toFixed(2)),1)])),_:1}),M(v,{property:"source",label:"来源"},{default:P((({row:e})=>[S("div",null,I(z(y)(e.source)),1)])),_:1}),M(v,{property:"create_time",label:"创建日期"},{default:P((({row:e})=>[S("div",null,I(z(n)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),M(v,{label:"操作",width:"220"},{default:P((({row:a})=>[S("div",H,[4==a.status?(V(),T(f,{key:0,type:"primary",onClick:t=>e.$router.push("/dmp/findc/baidudatadetail?id="+a.id)},{default:P((()=>[W])),_:2},1032,["onClick"])):B("",!0),1==a.status?(V(),T(f,{key:1,type:"primary",href:a.attachment,"down-load":"附件.zip"},{default:P((()=>[$])),_:2},1032,["href"])):B("",!0),1==a.status||4==a.status?(V(),x("div",A)):B("",!0),1==a.status?(V(),T(f,{key:3,type:"primary",onClick:e=>{return t=a.id,Z.value=!0,void(ae.value=t);var t}},{default:P((()=>[J])),_:2},1032,["onClick"])):B("",!0),1==a.status?(V(),x("div",K)):B("",!0),1==a.status?(V(),T(f,{key:5,type:"primary",onClick:e=>{return t=a.id,E.value=t,void Y();var t}},{default:P((()=>[L])),_:2},1032,["onClick"])):B("",!0),2==a.status||4==a.status?(V(),T(f,{key:6,type:"primary",onClick:e=>{return t=a.id,ee.value=!0,void(le.value=t);var t}},{default:P((()=>[Q])),_:2},1032,["onClick"])):B("",!0),3==a.status?(V(),T(f,{key:7,type:"primary",onClick:e=>(e=>{C.confirm(e.fail_reason,"驳回原因",{confirmButtonText:"确认",cancelButtonText:"取消"})})(a)},{default:P((()=>[X])),_:2},1032,["onClick"])):B("",!0)])])),_:1})])),_:1},8,["data"])]),M(c,{page:a.value,"onUpdate:page":u[1]||(u[1]=e=>a.value=e),size:l.value,"onUpdate:size":u[2]||(u[2]=e=>l.value=e),total:t.value,onChange:h},null,8,["page","size","total"]),M(k,{modelValue:Z.value,"onUpdate:modelValue":u[3]||(u[3]=e=>Z.value=e),onSuccess:te},null,8,["modelValue"]),M(w,{modelValue:ee.value,"onUpdate:modelValue":u[4]||(u[4]=e=>ee.value=e),type:"money",onSuccess:se},null,8,["modelValue"])])),_:1})])}}})),[["__scopeId","data-v-68834c6b"]]);export{Y as default};
