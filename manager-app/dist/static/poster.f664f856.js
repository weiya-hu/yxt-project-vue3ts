var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,o=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&u(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&u(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{f as c}from"./date.23847c74.js";import{M as n}from"./MyEmpty.c87e98e1.js";import{s as d}from"./Search.2792c96f.js";import{M as m}from"./MyPage.088b462f.js";import{M as p}from"./MyDialog.e1451ef4.js";import{p as v,e as f,f as y}from"./myWork.dcebe850.js";import{_ as b,a as _,E as w}from"./index.547c0c45.js";import{q as h,f as k,_ as g,o as j,t as x,a as C,w as O,u as M,I as N,v as V,V as P,L as I,S,c as U,U as z,aw as D,ax as T,b as E}from"./vue.89ed3d48.js";import"./empty.f131d8fb.js";import"./request.356cbcf4.js";const q=e=>(D("data-v-b5a48eca"),e=e(),T(),e),B={class:"tel_data"},L={class:"mytable"},R=["src"],W={class:"fcs"},A={class:"staus"},F={key:0,class:"fcs"},G=z("详情"),H={key:1,class:"fcs"},J=z("通过"),K=q((()=>V("div",{class:"line"},null,-1))),Q=z("驳回"),X={key:2,class:"fcs"},Y=z("驳回原因");var Z=b(h(i(o({},{name:"我的作品库——海报库"}),{setup(e){const a=k([]),t=k(1),l=k(0),s=k(10),r=k(!1),u=k(""),b=g({userName:"",status:"",create_time:""}),h=()=>{t.value=1,D()},z=()=>{b.userName="",b.status="",b.create_time="",D()},D=async()=>{const e=await v(i(o({size:s.value,current:t.value},b),{startTime:b.create_time[0],endTime:b.create_time[1]}));1==e.status&&(a.value=e.body.records,l.value=e.body.total)};D();const T=k(!1),q=k([]),Z=k(0),$=k([]),ee=e=>{$.value=e},ae=e=>{const a=k();switch(e){case"2":a.value={text:"待审核",className:"cred"};break;case"3":a.value={text:"已通过",className:"cdf"};break;case"4":a.value={text:"被驳回",className:"cyellow "};break;default:a.value={text:"草稿草稿",className:"cbbb"}}return a.value};return(e,o)=>{const i=E("el-option"),v=E("el-table-column"),k=E("el-link"),g=E("el-table"),$=E("el-card"),te=E("el-image-viewer");return j(),x("div",B,[C(d,{onSearch:h,onReset:z,modelValue:M(b),"onUpdate:modelValue":o[0]||(o[0]=e=>N(b)?b.value=e:b=e)},{default:O((()=>[C(i,{label:"待审核",value:"2"}),C(i,{label:"已通过",value:"3"}),C(i,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),C($,{class:"mycard mt20"},{default:O((()=>[V("div",L,[C(g,{border:"",data:a.value,style:{width:"100%"},onSelectionChange:ee},{empty:O((()=>[C(n)])),default:O((()=>[C(v,{property:"id",label:"ID",width:"180"}),C(v,{property:"uname",label:"账户名",width:"180"}),C(v,{property:"cname",label:"客户名称"}),C(v,{property:"thumb_url",label:"海报",width:"210"},{default:O((({row:e})=>[V("img",{src:e.thumb_url,alt:"",class:"firstimg"},null,8,R)])),_:1}),C(v,{property:"create_time",label:"创建日期",width:"200"},{default:O((({row:e})=>[V("div",null,P(M(c)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),C(v,{property:"status",label:"状态",width:"200"},{default:O((({row:e})=>[V("div",W,[V("div",{class:I(["dot",ae(e.status).className])},null,2),V("div",A,P(ae(e.status).text),1)])])),_:1}),C(v,{label:"操作"},{default:O((({row:e})=>[3==e.status?(j(),x("div",F,[C(k,{type:"primary",onClick:a=>(async(e,a)=>{let t=[];const l=await y({id:a});t.push(l.body.thumb_url),q.value=t,Z.value=q.value.findIndex((a=>a==e)),T.value=!0})(e.thumb_url,e.id)},{default:O((()=>[G])),_:2},1032,["onClick"])])):S("",!0),2==e.status?(j(),x("div",H,[C(k,{type:"primary",onClick:a=>(async e=>{await f({id:e,status:3,fail_reason:""}),D()})(e.id)},{default:O((()=>[J])),_:2},1032,["onClick"]),K,C(k,{type:"primary",onClick:a=>{return t=e.id,void _.prompt("驳回原因","提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async({value:e})=>{await f({fail_reason:e,status:4,id:t}),D()})).catch((()=>{w({type:"info",message:"取消驳回"})}));var t}},{default:O((()=>[Q])),_:2},1032,["onClick"])])):S("",!0),4==e.status?(j(),x("div",X,[C(k,{type:"primary",onClick:a=>{u.value=e.fail_reason,r.value=!0}},{default:O((()=>[Y])),_:2},1032,["onClick"])])):S("",!0)])),_:1})])),_:1},8,["data"])]),C(m,{total:l.value,page:t.value,"onUpdate:page":o[1]||(o[1]=e=>t.value=e),onChange:D,size:s.value,"onUpdate:size":o[2]||(o[2]=e=>s.value=e)},null,8,["total","page","size"])])),_:1}),C(p,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=e=>r.value=e),msg:u.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),T.value?(j(),U(te,{key:0,onClose:o[4]||(o[4]=e=>T.value=!1),"url-list":q.value,"initial-index":Z.value},null,8,["url-list","initial-index"])):S("",!0)])}}})),[["__scopeId","data-v-b5a48eca"]]);export{Z as default};
