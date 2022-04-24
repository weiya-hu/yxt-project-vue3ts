var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{s as r}from"./Search.2792c96f.js";import{f as o}from"./date.23847c74.js";import{M as u}from"./MyPage.088b462f.js";import{l as c,m as n,n as d}from"./findc.844d68eb.js";import{R as i}from"./Refuse.4fe1c951.js";import{_ as p,a as y}from"./index.547c0c45.js";import{q as m,f,_ as v,o as b,t as _,a as k,w as g,u as w,I as j,v as C,M as h,V,c as x,S as O,U as B,b as M}from"./vue.89ed3d48.js";import"./request.356cbcf4.js";const S={class:"bigdata_data"},U={class:"mytable"},z={class:"fcs ss"},D={class:"fcc"},F=B("详情"),I=B("下载附件"),P={key:2,class:"line"},E=B("驳回"),N={key:4,class:"line"},R=B("通过"),q=B("上传客户"),T=B("驳回原因");var $=p(m({setup(e){const p=f(1),m=f(0),B=f(10),$=v({userName:"",status:"",create_time:""}),A=()=>{J()},G=()=>{$.userName="",$.status="",$.create_time="",J()},H=f([]),J=async()=>{const e=await c(((e,r)=>{for(var o in r||(r={}))t.call(r,o)&&s(e,o,r[o]);if(a)for(var o of a(r))l.call(r,o)&&s(e,o,r[o]);return e})({current:p.value,size:B.value},$));1==e.status&&(H.value=e.body.records,m.value=e.body.total)};J();const K=f(""),L=async()=>{n({id:K.value}).then((e=>{J()}))};let Q=f(!1);f(!1);let W=f();const X=async e=>{let a={id:W.value,fail_reason:e};const{status:t,body:l}=await d(a);t&&(Q.value=!1,J())};return(e,a)=>{const t=M("el-option"),l=M("el-table-column"),s=M("el-link"),c=M("el-table"),n=M("el-card");return b(),_("div",S,[k(r,{onSearch:A,onReset:G,modelValue:w($),"onUpdate:modelValue":a[0]||(a[0]=e=>j($)?$.value=e:$=e)},{default:g((()=>[k(t,{label:"待审核",value:"2"}),k(t,{label:"已通过",value:"3"}),k(t,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),k(n,{class:"mycard"},{default:g((()=>[C("div",U,[k(c,{data:H.value,border:""},{default:g((()=>[k(l,{type:"selection",width:"50"}),k(l,{property:"id",label:"ID"}),k(l,{property:"user_name",label:"账户名"}),k(l,{property:"company_name",label:"客户名称"}),k(l,{property:"group_name",label:"人群名称"}),k(l,{property:"group_desc",label:"人群描述"}),k(l,{property:"status",label:"处理状态"},{default:g((({row:e})=>[C("div",z,[C("div",{class:"point",style:h(0==e.status?"background:#FFBF00":1==e.status?"background:#24BD13":2==e.status?"background:#2D68EB":"background:#E40000")},null,4),C("div",null,V(0==e.status?"待处理":1==e.status?"已受理":2==e.status?"已完结":"被驳回"),1)])])),_:1}),k(l,{property:"count",label:"覆盖用户人数"}),k(l,{property:"money",label:"消费金额（元）"},{default:g((({row:e})=>[C("div",null,V(Number(e.money).toFixed(2)),1)])),_:1}),k(l,{property:"source",label:"来源"},{default:g((({row:e})=>[C("div",null,V(1==e.source?"康州数智":2==e.source?"第三方数据":3==e.source?"号码段":4==e.source?"广告投放":5==e.source?"微信好友":6==e.source?"百度关键词":7==e.source?"大数据获客":8==e.source?"400获客":9==e.source?"竞价获客":"短信获客"),1)])),_:1}),k(l,{property:"create_time",label:"创建日期"},{default:g((({row:e})=>[C("div",null,V(w(o)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),k(l,{label:"操作",width:"220",fixed:"right"},{default:g((({row:t})=>[C("div",D,[2==t.status?(b(),x(s,{key:0,type:"primary",onClick:a=>e.$router.push("/dmp/findc/bigdatadata?id="+t.id)},{default:g((()=>[F])),_:2},1032,["onClick"])):O("",!0),0==t.status?(b(),x(s,{key:1,type:"primary",onClick:a[1]||(a[1]=()=>{})},{default:g((()=>[I])),_:1})):O("",!0),0==t.status||2==t.status?(b(),_("div",P)):O("",!0),0==t.status?(b(),x(s,{key:3,type:"primary",onClick:e=>{return a=t.id,Q.value=!0,void(W.value=a);var a}},{default:g((()=>[E])),_:2},1032,["onClick"])):O("",!0),0==t.status?(b(),_("div",N)):O("",!0),0==t.status?(b(),x(s,{key:5,type:"primary",onClick:e=>{return a=t.id,K.value=a,void L();var a}},{default:g((()=>[R])),_:2},1032,["onClick"])):O("",!0),1==t.status||2==t.status?(b(),x(s,{key:6,type:"primary",onClick:a[2]||(a[2]=()=>{})},{default:g((()=>[q])),_:1})):O("",!0),3==t.status?(b(),x(s,{key:7,type:"primary",onClick:e=>(e=>{y.confirm(e.fail_reason,"驳回原因",{confirmButtonText:"确认",cancelButtonText:"取消"})})(t)},{default:g((()=>[T])),_:2},1032,["onClick"])):O("",!0)])])),_:1})])),_:1},8,["data"])]),k(u,{total:m.value,page:p.value,"onUpdate:page":a[3]||(a[3]=e=>p.value=e),onChange:J,size:B.value,"onUpdate:size":a[4]||(a[4]=e=>B.value=e)},null,8,["total","page","size"]),k(i,{modelValue:w(Q),"onUpdate:modelValue":a[5]||(a[5]=e=>j(Q)?Q.value=e:Q=e),onSuccess:X},null,8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-95341f80"]]);export{$ as default};
