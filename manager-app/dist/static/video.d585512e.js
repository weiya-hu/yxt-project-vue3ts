var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,i=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&o(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{f as c}from"./date.23847c74.js";import{M as d}from"./MyEmpty.ce239837.js";import{s as n}from"./Search.c2d05462.js";import{R as m}from"./Refuse.f6e88609.js";import{M as p}from"./MyPage.2279dcbd.js";import{M as v}from"./MyDialog.0b6de626.js";import{l as y}from"./index.10b470b5.js";import{v as f,e as b}from"./myWork.ee3ddaaa.js";import{_}from"./index.f86653d0.js";import{G as w,g,j as k,o as j,H as C,a as h,w as x,C as V,k as M,I as O,a2 as N,W as P,a0 as S,a1 as U,aw as z,ax as D,b as I}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./request.64bd2e3c.js";const R=e=>(z("data-v-9704c6be"),e=e(),D(),e),E={class:"tel_data"},T={class:"mytable"},W=["src","onClick"],q={class:"fcs fleximg"},G={class:"staus"},H={key:0,class:"fcs"},A=U("详情"),B={key:1,class:"fcs"},F=U("通过"),J=R((()=>O("div",{class:"line"},null,-1))),K=U("驳回"),L={key:2,class:"fcs"},Q=U("驳回原因");var X=_(w(u(i({},{name:"MyworkVideo"}),{setup(e){const a=g([]),l=g(1),t=g(0),s=g(10),r=k({userName:"",status:"",create_time:""}),o=()=>{l.value=1,w()},_=()=>{r.userName="",r.status="",r.create_time="",w()},w=async()=>{const e=await f(u(i({size:s.value,current:l.value},r),{startTime:r.create_time?r.create_time[0]:null,endTime:r.create_time?r.create_time[1]:null}));1==e.status&&(a.value=e.body.records,t.value=e.body.total)};w();const U=g(!1),z=g(),D=async e=>{const a={id:z.value,fail_reason:e,status:4},{status:l,body:t}=await b(a);l&&(U.value=!1,w())},R=g([]),X=e=>{R.value=e},Y=e=>{const a=g();switch(e){case 2:a.value={text:"待审核",className:"cred "};break;case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"被驳回",className:"cyellow"};break;default:a.value={text:"草稿",className:"cbbb"}}return a.value},Z=g(!1),$=g("");return(e,i)=>{const u=I("el-option"),f=I("el-table-column"),g=I("el-link"),k=I("el-table"),R=I("el-card");return j(),C("div",E,[h(n,{modelValue:V(r),"onUpdate:modelValue":i[0]||(i[0]=e=>M(r)?r.value=e:r=e),onSearch:o,onReset:_},{default:x((()=>[h(u,{label:"全部",value:"null"}),h(u,{label:"待审核",value:"2"}),h(u,{label:"已通过",value:"3"}),h(u,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),h(R,{class:"mycard mt20"},{default:x((()=>[O("div",T,[h(k,{data:a.value,style:{width:"100%"},onSelectionChange:X},{empty:x((()=>[h(d)])),default:x((()=>[h(f,{property:"id",label:"ID",width:"180",align:"center"}),h(f,{property:"uname",label:"账户名",width:"180",align:"center"}),h(f,{property:"cname",label:"客户名称",align:"center"}),h(f,{property:"video",label:"视频",width:"210",align:"center"},{default:x((({row:e})=>[O("video",{src:e.video_url,alt:"",class:"firstimg",onClick:a=>V(y)(e.video_url)},null,8,W)])),_:1}),h(f,{property:"create_time",label:"创建日期",width:"200",align:"center"},{default:x((({row:e})=>[O("div",null,N(V(c)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),h(f,{property:"status",label:"状态",width:"200",align:"center"},{default:x((({row:e})=>[O("div",q,[O("div",{class:P(["dot",Y(e.status).className])},null,2),O("div",G,N(Y(e.status).text),1)])])),_:1}),h(f,{label:"操作"},{default:x((({row:e})=>[3==e.status?(j(),C("div",H,[h(g,{type:"primary",onClick:a=>V(y)(e.video_url)},{default:x((()=>[A])),_:2},1032,["onClick"])])):S("",!0),2==e.status?(j(),C("div",B,[h(g,{type:"primary",onClick:a=>(async e=>{await b({id:e,status:3,fail_reason:""}),w()})(e.id)},{default:x((()=>[F])),_:2},1032,["onClick"]),J,h(g,{type:"primary",onClick:a=>{return l=e.id,U.value=!0,void(z.value=l);var l}},{default:x((()=>[K])),_:2},1032,["onClick"])])):S("",!0),4==e.status?(j(),C("div",L,[h(g,{type:"primary",onClick:a=>{$.value=e.fail_reason,Z.value=!0}},{default:x((()=>[Q])),_:2},1032,["onClick"])])):S("",!0)])),_:1})])),_:1},8,["data"])]),h(p,{page:l.value,"onUpdate:page":i[1]||(i[1]=e=>l.value=e),size:s.value,"onUpdate:size":i[2]||(i[2]=e=>s.value=e),total:t.value,onChange:w},null,8,["page","size","total"])])),_:1}),h(v,{modelValue:Z.value,"onUpdate:modelValue":i[3]||(i[3]=e=>Z.value=e),msg:$.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),h(m,{modelValue:U.value,"onUpdate:modelValue":i[4]||(i[4]=e=>U.value=e),onSuccess:D},null,8,["modelValue"])])}}})),[["__scopeId","data-v-9704c6be"]]);export{X as default};