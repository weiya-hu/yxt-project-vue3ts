var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,u=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{f as c}from"./date.23847c74.js";import{s as n}from"./Search.c2d05462.js";import{M as d}from"./MyEmpty.ce239837.js";import{M as m}from"./MyPage.2279dcbd.js";import{M as p}from"./MyDialog.0b6de626.js";import{R as v}from"./Refuse.f6e88609.js";import{a as b}from"./index.10b470b5.js";import{a as y,b as f}from"./myWork.ee3ddaaa.js";import{_}from"./index.f86653d0.js";import{G as w,g,j as k,o as j,H as h,a as C,w as x,C as O,k as V,I as M,a1 as N,a2 as P,W as S,a0 as U,aw as z,ax as D,b as I}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./request.64bd2e3c.js";const R=e=>(z("data-v-3990ae1c"),e=e(),D(),e),E={class:"tel_data"},T={class:"mytable"},W=["src","onClick"],$={class:"fcs fleximg"},q={class:"staus"},G={key:0,class:"fcs"},H=N("详情"),A={key:1,class:"fcs"},B=N("通过"),F=R((()=>M("div",{class:"line"},null,-1))),J=N("驳回"),K={key:2,class:"fcs"},L=N("驳回原因");var Q=_(w(i(u({},{name:"我的作品库——软文"}),{setup(e){const a=g([]),t=g(1),l=g(0),s=g(10),r=g(!1),o=g(""),_=k({userName:"",status:"",create_time:""}),w=()=>{t.value=1,D()},z=()=>{_.userName="",_.status="",_.create_time="",D()},D=async()=>{const e=await y(i(u({size:s.value,current:t.value},_),{startTime:_.create_time?_.create_time[0]:null,endTime:_.create_time?_.create_time[1]:null}));1==e.status&&(a.value=e.body.records,l.value=e.body.total)};D();const R=g(!1),Q=g(),X=async e=>{const a={id:Q.value,fail_reason:e,status:4},{status:t,body:l}=await f(a);t&&(R.value=!1,D())},Y=g([]),Z=e=>{Y.value=e},ee=e=>{const a=g();switch(Number(e)){case 2:a.value={text:"待审核",className:"cred"};break;case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"被驳回",className:"cyellow "};break;default:a.value={text:"草稿",className:"cbbb"}}return a.value};return(e,u)=>{const i=I("el-option"),y=I("el-table-column"),g=I("el-link"),k=I("el-table"),Y=I("el-card");return j(),h("div",E,[C(n,{modelValue:O(_),"onUpdate:modelValue":u[0]||(u[0]=e=>V(_)?_.value=e:_=e),onSearch:w,onReset:z},{default:x((()=>[C(i,{label:"全部",value:"null"}),C(i,{label:"待审核",value:"2"}),C(i,{label:"已通过",value:"3"}),C(i,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),C(Y,{class:"mycard mt20"},{default:x((()=>[M("div",T,[C(k,{data:a.value,style:{width:"100%"},border:"",onSelectionChange:Z},{empty:x((()=>[C(d)])),default:x((()=>[C(y,{property:"id",label:"ID",align:"center"}),C(y,{property:"uname",label:"账户名",width:"120",align:"center"}),C(y,{property:"cname",label:"客户名称",width:"250",align:"center"}),C(y,{property:"thumb_url",label:"封面图片",width:"104",align:"center"},{default:x((({row:e})=>[M("img",{src:e.thumb_url,alt:"",class:"firstimg",onClick:a=>O(b)([e.thumb_url],0)},null,8,W)])),_:1}),C(y,{label:"标题","show-overflow-tooltip":!0,width:"350",align:"center"},{default:x((({row:a})=>[C(g,{type:"primary",onClick:t=>e.$router.push("/cms/myworkdet?id="+a.id)},{default:x((()=>[N(P(a.title),1)])),_:2},1032,["onClick"])])),_:1}),C(y,{property:"create_time",label:"创建日期",align:"center"},{default:x((({row:e})=>[M("div",null,P(O(c)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),C(y,{property:"status",label:"状态",align:"center"},{default:x((({row:e})=>[M("div",$,[M("div",{class:S(["dot",ee(e.status).className])},null,2),M("div",q,P(ee(e.status).text),1)])])),_:1}),C(y,{label:"操作"},{default:x((({row:a})=>[3==a.status?(j(),h("div",G,[C(g,{type:"primary",onClick:t=>e.$router.push("/cms/myworkdet?id="+a.id)},{default:x((()=>[H])),_:2},1032,["onClick"])])):U("",!0),2==a.status?(j(),h("div",A,[C(g,{type:"primary",onClick:e=>(async e=>{await f({id:e,status:3,fail_reason:""}),D()})(a.id)},{default:x((()=>[B])),_:2},1032,["onClick"]),F,C(g,{type:"primary",onClick:e=>{return t=a.id,R.value=!0,void(Q.value=t);var t}},{default:x((()=>[J])),_:2},1032,["onClick"])])):U("",!0),4==a.status?(j(),h("div",K,[C(g,{type:"primary",onClick:e=>{o.value=a.fail_reason,r.value=!0}},{default:x((()=>[L])),_:2},1032,["onClick"])])):U("",!0)])),_:1})])),_:1},8,["data"])]),C(m,{page:t.value,"onUpdate:page":u[1]||(u[1]=e=>t.value=e),size:s.value,"onUpdate:size":u[2]||(u[2]=e=>s.value=e),total:l.value,onChange:D},null,8,["page","size","total"])])),_:1}),C(p,{modelValue:r.value,"onUpdate:modelValue":u[3]||(u[3]=e=>r.value=e),msg:o.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),C(v,{modelValue:R.value,"onUpdate:modelValue":u[4]||(u[4]=e=>R.value=e),onSuccess:X},null,8,["modelValue"])])}}})),[["__scopeId","data-v-3990ae1c"]]);export{Q as default};
