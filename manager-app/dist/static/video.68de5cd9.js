var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,r=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&u(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&u(e,l,a[l]);return e},i=(e,t)=>a(e,l(t));import{s as d}from"./Search.26ac40a5.js";import{M as n}from"./MyPage.512ed0c7.js";import{M as p}from"./MyDataTable.c0452b38.js";import{M as c}from"./MyDialog.50f39301.js";import{M as m}from"./MyEmpty.72a1acd1.js";import{M as v}from"./MyUpload.2ae4dd0d.js";import{o as y,e as f,k as b}from"./index.eaa6bc8d.js";import{a as _,b as w,c as h,e as k,h as g,v as j}from"./custom.27effc65.js";import{_ as C,a as x,E as V}from"./index.fdca730b.js";import{q as M,f as U,_ as O,o as P,t as z,a as D,w as S,u as T,I as E,Q as I,c as q,F as B,a2 as N,v as A,S as F,U as L,b as Q,a6 as R}from"./vue.89ed3d48.js";import"./date.23847c74.js";import"./index.5003068f.js";import"./login.6de82fdd.js";import"./request.aa9790cc.js";import"./empty.f131d8fb.js";const G={class:"mytable"},H={class:"fcs"},J=L("编辑"),K=L("驳回原因"),W=L("详情"),X={key:3},Y=L("下载附件"),Z=L("通过"),$=L("驳回"),ee={key:0,class:"img-dialog"},ae=["src","onClick"],le={class:"dialog-footer"},te=L("确认"),oe={class:"fcs btns fjend"},se=L("取消"),ue=L("提交"),re=["src"];var ie=C(M(i(r({},{name:"个性化内容库-视频库"}),{setup(e,{expose:a}){const l=U([{type:"text",lable:"需求ID",prop:"id",width:120},{type:"text",lable:"账户名",prop:"user_name",width:120},{type:"text",lable:"客户名称",prop:"company_name",width:180},{type:"text",lable:"标题",prop:"title",width:150},{type:"text",lable:"描述",prop:"detail",width:120},{type:"date",lable:"创建日期",prop:"create_time",width:110},{type:"status",lable:"状态",prop:"status",width:100}]),t=U(!1),o=U(0),s=U(10),u=U(1),C=U([]),M=U(!1),L=U(""),ie=O({userName:"",status:"",create_time:""}),de=()=>{ie.userName="",ie.status="",ie.create_time="",Me()},ne=e=>{u.value=1,Me()},pe=async e=>{const a=await h({id:e});1==a.status&&(window.location.href=a.body.attach_url)},ce=U(!1),me=U([]),ve=U(!1),ye=U(""),fe=U(""),be=U(!1),_e=[".mp4"],we=U(),he=()=>{ge.value="",we.value.clear(),be.value=!1,t.value=!1},ke=()=>{t.value=!0,we.value.submit()},ge=U(""),je=e=>{},Ce=async(e=[])=>{1==(await g({urls:e,order_id:fe.value})).status&&(y("上传成功"),he(),Me())},xe=e=>{f(e,0),t.value=!1},Ve=e=>{t.value?b().then((()=>{})).catch((()=>{we.value.doAbort(),e()})):e()};U(!1),a({getData:pe});const Me=async()=>{t.value=!0;const e=await j(i(r({size:s.value,current:u.value},ie),{startTime:ie.create_time[0],endTime:ie.create_time[1]}));t.value=!1,1==e.status&&(o.value=e.body.total,C.value=e.body.records)};return Me(),(e,a)=>{const r=Q("el-option"),i=Q("el-link"),y=Q("el-table-column"),f=Q("el-table"),b=Q("el-card"),h=Q("el-button"),g=Q("el-dialog"),j=R("loading");return P(),z("div",G,[D(d,{onSearch:ne,modelValue:T(ie),"onUpdate:modelValue":a[0]||(a[0]=e=>E(ie)?ie.value=e:ie=e),onReset:de},{default:S((()=>[D(r,{label:"待处理",value:"1"}),D(r,{label:"已受理",value:"2"}),D(r,{label:"被驳回",value:"3"}),D(r,{label:"已完成",value:"4"})])),_:1},8,["modelValue"]),D(b,{class:"mycard mt20"},{default:S((()=>[I((P(),q(f,{data:C.value,border:"",style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:S((()=>[D(m)])),default:S((()=>[(P(!0),z(B,null,N(l.value,((e,a)=>(P(),q(p,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),D(y,{width:"150",label:"操作"},{default:S((({row:e})=>[A("div",H,[2==e.status?(P(),q(i,{key:0,type:"primary",onClick:a=>{return l=e.id,be.value=!0,void(fe.value=l);var l}},{default:S((()=>[J])),_:2},1032,["onClick"])):F("",!0),3==e.status?(P(),q(i,{key:1,type:"primary",onClick:a=>{L.value=e.fail_reason,M.value=!0}},{default:S((()=>[K])),_:2},1032,["onClick"])):F("",!0),4==e.status?(P(),q(i,{key:2,type:"primary",onClick:a=>(async e=>{const a=await k({id:e});1==a.status&&(me.value=a.body.list),ce.value=!0})(e.id)},{default:S((()=>[W])),_:2},1032,["onClick"])):F("",!0),1==e.status?(P(),z("div",X,[D(i,{type:"primary",class:"fcss",onClick:a=>pe(e.id)},{default:S((()=>[Y])),_:2},1032,["onClick"]),D(i,{type:"primary",class:"fcss",onClick:a=>(async e=>{await _({id:e}),Me()})(e.id)},{default:S((()=>[Z])),_:2},1032,["onClick"]),D(i,{type:"primary",onClick:a=>{return l=e.id,void x.prompt("驳回原因","提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async({value:e})=>{await w({fail_reason:e,id:l}),Me()})).catch((()=>{V({type:"info",message:"取消驳回"})}));var l}},{default:S((()=>[$])),_:2},1032,["onClick"])])):F("",!0)])])),_:1})])),_:1},8,["data"])),[[j,t.value]]),D(n,{total:o.value,page:u.value,"onUpdate:page":a[1]||(a[1]=e=>u.value=e),onChange:Me,size:s.value,"onUpdate:size":a[2]||(a[2]=e=>s.value=e)},null,8,["total","page","size"])])),_:1}),D(c,{modelValue:M.value,"onUpdate:modelValue":a[3]||(a[3]=e=>M.value=e),msg:L.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),D(g,{modelValue:ce.value,"onUpdate:modelValue":a[5]||(a[5]=e=>ce.value=e),title:"详情视频",width:"500px"},{footer:S((()=>[A("span",le,[D(h,{type:"primary",onClick:a[4]||(a[4]=e=>ce.value=!1)},{default:S((()=>[te])),_:1})])])),default:S((()=>[me.value?(P(),z("div",ee,[(P(!0),z(B,null,N(me.value,(e=>(P(),z("video",{style:{width:"125px",height:"135px"},cover:"",key:e,src:e,onClick:a=>(e=>{ye.value=e,ve.value=!0})(e)},null,8,ae)))),128))])):F("",!0)])),_:1},8,["modelValue"]),D(g,{modelValue:be.value,"onUpdate:modelValue":a[7]||(a[7]=e=>be.value=e),title:"上传视频",width:"500px",onClose:he,"custom-class":"upimgs","before-close":Ve},{default:S((()=>[I((P(),z("div",null,[D(v,{type:"video",modelValue:ge.value,"onUpdate:modelValue":a[6]||(a[6]=e=>ge.value=e),"max-size":200,onError:xe,onSuccess:Ce,onChange:je,exnameList:_e,msg:"视频尺寸：宽高16:9或9:16；<br/>不超过200M；<br/>支持"+_e.join("、")+"格式",ref_key:"upload",ref:we},null,8,["modelValue","msg"]),A("div",oe,[D(h,{onClick:he},{default:S((()=>[se])),_:1}),we.value?(P(),q(h,{key:0,type:"primary",onClick:ke,disabled:!ge.value},{default:S((()=>[ue])),_:1},8,["disabled"])):F("",!0)])])),[[j,t.value]])])),_:1},8,["modelValue"]),D(g,{modelValue:ve.value,"onUpdate:modelValue":a[8]||(a[8]=e=>ve.value=e),title:"查看视频",fullscreen:"",onClose:a[9]||(a[9]=e=>ye.value=""),"custom-class":"videobox"},{default:S((()=>[A("video",{src:ye.value,controls:"",class:"show_video"},null,8,re)])),_:1},8,["modelValue"])])}}})),[["__scopeId","data-v-b23beaf0"]]);export{ie as default};