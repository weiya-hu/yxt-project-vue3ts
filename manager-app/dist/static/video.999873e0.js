var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e},u=(e,l)=>a(e,t(l));import{f as c}from"./date.23847c74.js";import{M as d}from"./MyEmpty.d21dbe7c.js";import{s as n}from"./Search.490f2d0f.js";import{R as m}from"./Refuse.e8d51cc6.js";import{M as p}from"./MyPage.0cd03366.js";import{M as v}from"./MyDialog.32fde60c.js";import{l as f}from"./index.a86c6ab1.js";import{v as y,e as b}from"./myWork.62248b68.js";import{_}from"./index.12522c67.js";import{G as w,g,j as k,o as j,H as C,a as h,w as x,C as V,k as M,I as O,a2 as N,W as P,a0 as S,a1 as U,aw as z,ax as D,b as I}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./request.b31062f2.js";const R=e=>(z("data-v-5f82661e"),e=e(),D(),e),E={class:"tel_data"},T={class:"mytable"},W=["src","onClick"],q={class:"fcs fleximg"},G={class:"staus"},H={key:0,class:"fcs"},A=U("详情"),B={key:1,class:"fcs"},F=U("通过"),J=R((()=>O("div",{class:"line"},null,-1))),K=U("驳回"),L={key:2,class:"fcs"},Q=U("驳回原因");var X=_(w(u(i({},{name:"MyworkVideo"}),{setup(e){const a=g([]),t=g(1),l=g(0),s=g(10),r=k({userName:"",status:"",create_time:""}),o=()=>{t.value=1,w()},_=()=>{r.userName="",r.status="",r.create_time="",w()},w=async()=>{const e=await y(u(i({size:s.value,current:t.value},r),{startTime:r.create_time[0],endTime:r.create_time[1]}));1==e.status&&(a.value=e.body.records,l.value=e.body.total)};w();const U=g(!1),z=g(),D=async e=>{const a={id:z.value,fail_reason:e,status:4},{status:t,body:l}=await b(a);t&&(U.value=!1,w())},R=g([]),X=e=>{R.value=e},Y=e=>{const a=g();switch(e){case 2:a.value={text:"待审核",className:"cred "};break;case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"被驳回",className:"cyellow"};break;default:a.value={text:"草稿",className:"cbbb"}}return a.value},Z=g(!1),$=g("");return(e,i)=>{const u=I("el-option"),y=I("el-table-column"),g=I("el-link"),k=I("el-table"),R=I("el-card");return j(),C("div",E,[h(n,{modelValue:V(r),"onUpdate:modelValue":i[0]||(i[0]=e=>M(r)?r.value=e:r=e),onSearch:o,onReset:_},{default:x((()=>[h(u,{label:"待审核",value:"2"}),h(u,{label:"已通过",value:"3"}),h(u,{label:"被驳回",value:"4"})])),_:1},8,["modelValue"]),h(R,{class:"mycard mt20"},{default:x((()=>[O("div",T,[h(k,{data:a.value,style:{width:"100%"},onSelectionChange:X},{empty:x((()=>[h(d)])),default:x((()=>[h(y,{property:"id",label:"ID",width:"180",align:"center"}),h(y,{property:"uname",label:"账户名",width:"180",align:"center"}),h(y,{property:"cname",label:"客户名称",align:"center"}),h(y,{property:"video",label:"视频",width:"210",align:"center"},{default:x((({row:e})=>[O("video",{src:e.video_url,alt:"",class:"firstimg",onClick:a=>V(f)(e.video_url)},null,8,W)])),_:1}),h(y,{property:"create_time",label:"创建日期",width:"200",align:"center"},{default:x((({row:e})=>[O("div",null,N(V(c)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),h(y,{property:"status",label:"状态",width:"200",align:"center"},{default:x((({row:e})=>[O("div",q,[O("div",{class:P(["dot",Y(e.status).className])},null,2),O("div",G,N(Y(e.status).text),1)])])),_:1}),h(y,{label:"操作"},{default:x((({row:e})=>[3==e.status?(j(),C("div",H,[h(g,{type:"primary",onClick:a=>V(f)(e.video_url)},{default:x((()=>[A])),_:2},1032,["onClick"])])):S("",!0),2==e.status?(j(),C("div",B,[h(g,{type:"primary",onClick:a=>(async e=>{await b({id:e,status:3,fail_reason:""}),w()})(e.id)},{default:x((()=>[F])),_:2},1032,["onClick"]),J,h(g,{type:"primary",onClick:a=>{return t=e.id,U.value=!0,void(z.value=t);var t}},{default:x((()=>[K])),_:2},1032,["onClick"])])):S("",!0),4==e.status?(j(),C("div",L,[h(g,{type:"primary",onClick:a=>{$.value=e.fail_reason,Z.value=!0}},{default:x((()=>[Q])),_:2},1032,["onClick"])])):S("",!0)])),_:1})])),_:1},8,["data"])]),h(p,{page:t.value,"onUpdate:page":i[1]||(i[1]=e=>t.value=e),size:s.value,"onUpdate:size":i[2]||(i[2]=e=>s.value=e),total:l.value,onChange:w},null,8,["page","size","total"])])),_:1}),h(v,{modelValue:Z.value,"onUpdate:modelValue":i[3]||(i[3]=e=>Z.value=e),msg:$.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),h(m,{modelValue:U.value,"onUpdate:modelValue":i[4]||(i[4]=e=>U.value=e),onSuccess:D},null,8,["modelValue"])])}}})),[["__scopeId","data-v-5f82661e"]]);export{X as default};