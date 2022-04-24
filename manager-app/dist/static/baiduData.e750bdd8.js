var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,u=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e};import{s as c}from"./Search.2792c96f.js";import{f as i}from"./date.23847c74.js";import{M as d}from"./MyPage.088b462f.js";import{h as n,i as p,j as y}from"./findc.844d68eb.js";import{R as m}from"./Refuse.4fe1c951.js";import{_ as f,a as b}from"./index.547c0c45.js";import{q as v,f as _,_ as k,o as g,t as j,a as w,w as C,u as h,I as O,v as V,M as x,V as B,c as D,S as P,U as M,b as S}from"./vue.89ed3d48.js";import"./request.356cbcf4.js";const U={class:"baidu_data"},z={class:"mytable"},F={class:"fcs ss"},I={class:"fcc"},E=M("详情"),N=M("下载附件"),R={key:2,class:"line"},q=M("驳回"),T={key:4,class:"line"},$=M("通过"),A=M("上传客户"),G=M("驳回原因");var H,J=f(v((H=u({},{name:"BaiduData"}),a(H,t({setup(e){const a=_(1),t=_(0),s=_(10),l=k({userName:"",status:"",create_time:""}),r=()=>{v()},o=()=>{l.userName="",l.status="",l.create_time="",v()},f=_([]),v=async()=>{const e=await n(u({current:a.value,size:s.value},l));1==e.status&&(f.value=e.body.records,t.value=e.body.total)};v();const M=_(""),H=async()=>{p({id:M.value}).then((e=>{v()}))};let J=_(!1);_(!1);let K=_();const L=async e=>{let a={id:K.value,fail_reason:e};const{status:t,body:s}=await y(a);t&&(J.value=!1,v())};return(e,u)=>{const n=S("el-option"),p=S("el-table-column"),y=S("el-link"),_=S("el-table"),k=S("el-card");return g(),j("div",U,[w(c,{onSearch:r,onReset:o,modelValue:h(l),"onUpdate:modelValue":u[0]||(u[0]=e=>O(l)?l.value=e:l=e)},{default:C((()=>[w(n,{label:"待审核",value:"2"}),w(n,{label:"已通过",value:"3"}),w(n,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),w(k,{class:"mycard"},{default:C((()=>[V("div",z,[w(_,{data:f.value,border:""},{default:C((()=>[w(p,{type:"selection",width:"50"}),w(p,{property:"id",label:"ID"}),w(p,{property:"user_name",label:"账户名"}),w(p,{property:"company_name",label:"客户名称"}),w(p,{property:"group_name",label:"人群名称"}),w(p,{property:"group_desc",label:"人群描述"}),w(p,{property:"status",label:"处理状态"},{default:C((({row:e})=>[V("div",F,[V("div",{class:"point",style:x(0==e.status?"background:#FFBF00":1==e.status?"background:#24BD13":2==e.status?"background:#2D68EB":"background:#E40000")},null,4),V("div",null,B(0==e.status?"待处理":1==e.status?"已受理":2==e.status?"已完结":"被驳回"),1)])])),_:1}),w(p,{property:"count",label:"覆盖用户人数"}),w(p,{property:"money",label:"消费金额（元）"},{default:C((({row:e})=>[V("div",null,B(Number(e.money).toFixed(2)),1)])),_:1}),w(p,{property:"source",label:"来源"},{default:C((({row:e})=>[V("div",null,B(1==e.source?"康州数智":2==e.source?"第三方数据":3==e.source?"号码段":4==e.source?"广告投放":5==e.source?"微信好友":6==e.source?"百度关键词":7==e.source?"大数据获客":8==e.source?"400获客":9==e.source?"竞价获客":"短信获客"),1)])),_:1}),w(p,{property:"create_time",label:"创建日期"},{default:C((({row:e})=>[V("div",null,B(h(i)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),w(p,{label:"操作",width:"220",fixed:"right"},{default:C((({row:a})=>[V("div",I,[2==a.status?(g(),D(y,{key:0,type:"primary",onClick:t=>e.$router.push("/dmp/findc/baidudata?id="+a.id)},{default:C((()=>[E])),_:2},1032,["onClick"])):P("",!0),0==a.status?(g(),D(y,{key:1,type:"primary",onClick:u[1]||(u[1]=()=>{})},{default:C((()=>[N])),_:1})):P("",!0),0==a.status||2==a.status?(g(),j("div",R)):P("",!0),0==a.status?(g(),D(y,{key:3,type:"primary",onClick:e=>{return t=a.id,J.value=!0,void(K.value=t);var t}},{default:C((()=>[q])),_:2},1032,["onClick"])):P("",!0),0==a.status?(g(),j("div",T)):P("",!0),0==a.status?(g(),D(y,{key:5,type:"primary",onClick:e=>{return t=a.id,M.value=t,void H();var t}},{default:C((()=>[$])),_:2},1032,["onClick"])):P("",!0),1==a.status||2==a.status?(g(),D(y,{key:6,type:"primary",onClick:u[2]||(u[2]=()=>{})},{default:C((()=>[A])),_:1})):P("",!0),3==a.status?(g(),D(y,{key:7,type:"primary",onClick:e=>(e=>{b.confirm(e.fail_reason,"驳回原因",{confirmButtonText:"确认",cancelButtonText:"取消"})})(a)},{default:C((()=>[G])),_:2},1032,["onClick"])):P("",!0)])])),_:1})])),_:1},8,["data"])]),w(d,{total:t.value,page:a.value,"onUpdate:page":u[3]||(u[3]=e=>a.value=e),onChange:v,size:s.value,"onUpdate:size":u[4]||(u[4]=e=>s.value=e)},null,8,["total","page","size"]),w(m,{modelValue:h(J),"onUpdate:modelValue":u[5]||(u[5]=e=>O(J)?J.value=e:J=e),onSuccess:L},null,8,["modelValue"])])),_:1})])}}})))),[["__scopeId","data-v-58081bd7"]]);export{J as default};
