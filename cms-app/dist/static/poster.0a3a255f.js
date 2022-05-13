var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as i}from"./date.23847c74.js";import{M as r}from"./MyEmpty.83ad9d36.js";import{_ as n}from"./MyPage.b41c257e.js";import{M as d}from"./MyDialog.7048d621.js";import{a as c,h as m,f as p,d as v,e as f,g as y,o as b}from"./index.70dd7e24.js";import{d as _,i as g,b as h,o as x,t as w,a as k,w as j,v as C,u as V,L as O,av as P,aw as S,V as M,Q as I,c as E,S as L,U,a5 as z}from"./vue.ca737a59.js";import{T as G}from"./TopBtns.5a60a077.js";import{p as D,j as T,k as J,l as N}from"./myWork.5e88c8f2.js";const q={class:"fc fcc"},A=(e=>(P("data-v-53699385"),e=e(),S(),e))((()=>C("div",{class:"file_name"},"点击上传",-1))),F=["innerHTML"];var H=c(_({props:{exnameList:{default:()=>[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"]},max:{default:3},msg:null,maxSize:{default:10}},emits:["upOneSuccess","error","look"],setup(e,{expose:a,emit:l}){const t=e,s=g([]),u=g(),o=g(""),i=(e,a)=>{const l=e.name.substring(e.name.lastIndexOf("."));if(o.value=e.name.substring(0,e.name.indexOf(".")),-1==t.exnameList.indexOf(l))return u.value.handleRemove(e),void p("图片格式错误！");if(e.size&&e.size/1024/1024>t.maxSize)return u.value.handleRemove(e),void p(`图片文件大小不能超过${t.maxSize}M`);s.value=a;const i=document.querySelector(".el-upload--picture-card");s.value.length>=t.max&&(i.style.display="none")},r=(e,a)=>{s.value=a,document.querySelector(".el-upload--picture-card").style.display="inline-flex"},n=e=>{let a=[];s.value.forEach((e=>{a.push(e.url)})),l("look",a,a.findIndex((a=>a==e.url)))},d=async e=>{const a=await v({site:"cms_image"});if(1==a.status){const t=e.name.substring(e.name.lastIndexOf(".")),u=new FormData,i={key:a.body.dir+"/"+a.body.uuid+t,OSSAccessKeyId:a.body.accessid,success_action_status:200,policy:a.body.policy,signature:a.body.signature};for(const[e,a]of Object.entries(i))u.append(e,a);u.append("file",e.raw);if(200==(await f({url:a.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:u})).status){const e=a.body.host+"/"+a.body.dir+"/"+a.body.uuid+t;return l("upOneSuccess",e,s.value.length,o.value),Promise.resolve(e)}return Promise.reject(e.name+"上传失败")}return Promise.reject("获取上传配置失败")},c=e=>{t.max>1||(u.value.clearFiles(),u.value.handleStart(e[0]))};return a({submit:async()=>{try{for(let e=0;e<s.value.length;e++){const a=s.value[e];await d(a).catch((e=>{throw new Error(e)}))}}catch(e){l("error",e)}},clear:()=>{},imgs:s}),(a,l)=>{const t=h("el-icon"),s=h("el-upload");return x(),w("div",{class:O(["media_upload flex",1==e.max?"one_up":""])},[k(s,{action:"#","auto-upload":!1,limit:e.max,multiple:e.max>1,"list-type":"picture-card","on-exceed":c,"on-change":i,"on-preview":n,"on-remove":r,accept:e.exnameList.join(","),ref_key:"upload",ref:u,class:"upbox"},{default:j((()=>[C("div",q,[k(t,null,{default:j((()=>[k(V(m))])),_:1}),A])])),_:1},8,["limit","multiple","accept"]),C("div",{class:"tips",innerHTML:e.msg},null,8,F)],2)}}}),[["__scopeId","data-v-53699385"]]);const R=e=>(P("data-v-6cd7b759"),e=e(),S(),e),B={class:"m_poster"},K={class:"mytable"},Q=["src","onClick"],W={class:"els"},$={class:"fcs"},X={key:0,class:"fcs"},Y=U("修改名称"),Z=R((()=>C("div",{class:"line"},null,-1))),ee=U("删除"),ae=R((()=>C("div",{class:"line"},null,-1))),le=U("拒绝原因"),te={key:1,class:"fcs"},se=U("修改名称"),ue=R((()=>C("div",{class:"line"},null,-1))),oe=U("删除"),ie=R((()=>C("div",{class:"line"},null,-1))),re=U("查看"),ne={class:"fcs btns fjend"},de=U("取消"),ce=U("提交"),me={class:"flex fjend"},pe=U("确定"),ve=_((fe=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&o(e,l,a[l]);return e})({},{name:"我的作品库-海报库"}),a(fe,l({setup(e){const a=g(1),l=g(0),t=g([]),s=async()=>{const e=await D({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const u=()=>{s()},o=g([]),c=e=>{o.value=e},m=g(""),v=g(!1),f=e=>{m.value=e,v.value=!0},_=async()=>{1==(await T({id:m.value})).status&&s(),v.value=!1},P=g([]),S=g(!1),U=g(0),q=e=>{let a=[];t.value.forEach((e=>{a.push(e.thumb_url)})),P.value=a,U.value=P.value.findIndex((a=>a==e)),S.value=!0},A=g(!1),F=g(""),R=g(!1),ve=g(!1),fe=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],ye=g(),be=()=>{ve.value=!1,R.value=!1,S.value=!1,P.value=[],U.value=0},_e=()=>{ye.value.submit()},ge=g(0),he=async(e,a,l)=>{1==(await J({thumb_url:e,source_name:l})).status&&ge.value++,ge.value===a&&xe()},xe=()=>{b("上传成功"),ge.value=0,be(),s()},we=e=>{p(e,0),be(),s()},ke=(e,a)=>{P.value=e,U.value=a,S.value=!0},je=g(!1),Ce=g(""),Ve=g(""),Oe=(e,a)=>{Ce.value=e,Ve.value=a,je.value=!0},Pe=async()=>{const{status:e}=await N({id:Ce.value,source_name:Ve.value});1==e&&(je.value=!1,s())};return(e,s)=>{const o=h("el-table-column"),m=h("el-link"),p=h("el-table"),b=h("el-button"),g=h("el-dialog"),D=h("el-input"),T=h("el-form-item"),J=h("el-form"),N=h("el-image-viewer"),ge=z("loading");return x(),w("div",B,[k(G,{onAdd:s[0]||(s[0]=e=>R.value=!0)}),C("div",K,[k(p,{data:t.value,style:{width:"100%"},onSelectionChange:c},{empty:j((()=>[k(r)])),default:j((()=>[k(o,{type:"selection",width:"50"}),k(o,{property:"id",label:"ID",width:"230"}),k(o,{property:"thumb_url",label:"海报"},{default:j((({row:e})=>[C("img",{src:e.thumb_url,alt:"",class:"firstimg lookhover",onClick:a=>q(e.thumb_url)},null,8,Q)])),_:1}),k(o,{property:"source_name",label:"海报名",width:"250"},{default:j((({row:e})=>[C("div",W,M(e.source_name),1)])),_:1}),k(o,{property:"create_time",label:"创建日期",width:"200"},{default:j((({row:e})=>[C("div",null,M(V(i)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),k(o,{property:"status",label:"状态",width:"180"},{default:j((({row:e})=>[C("div",$,[C("div",{class:O(["status_dot",V(y)(e.status).className])},null,2),C("div",null,M(V(y)(e.status).text),1)])])),_:1}),k(o,{label:"操作",fixed:"right",width:"240"},{default:j((({row:e})=>[4==e.status?(x(),w("div",X,[k(m,{type:"primary",onClick:a=>Oe(e.id,e.source_name)},{default:j((()=>[Y])),_:2},1032,["onClick"]),Z,k(m,{type:"primary",onClick:a=>f(e.id)},{default:j((()=>[ee])),_:2},1032,["onClick"]),ae,k(m,{type:"primary",onClick:a=>{F.value=e.fail_reason,A.value=!0}},{default:j((()=>[le])),_:2},1032,["onClick"])])):(x(),w("div",te,[k(m,{type:"primary",onClick:a=>Oe(e.id,e.source_name)},{default:j((()=>[se])),_:2},1032,["onClick"]),ue,k(m,{type:"primary",onClick:a=>f(e.id)},{default:j((()=>[oe])),_:2},1032,["onClick"]),ie,k(m,{type:"primary",onClick:a=>q(e.thumb_url)},{default:j((()=>[re])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),k(n,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:u},null,8,["total","modelValue"]),k(d,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=e=>v.value=e),msg:"确认删除这条数据吗?",onSure:_},null,8,["modelValue"]),k(d,{modelValue:A.value,"onUpdate:modelValue":s[3]||(s[3]=e=>A.value=e),msg:F.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),k(g,{modelValue:R.value,"onUpdate:modelValue":s[4]||(s[4]=e=>R.value=e),title:"上传海报",width:"380px",onClose:be,"custom-class":"upimgs"},{default:j((()=>[I((x(),w("div",null,[R.value?(x(),E(H,{key:0,max:1,onUpOneSuccess:he,onError:we,onLook:ke,exnameList:fe,msg:"图片尺寸：16:9<br/>建议尺寸：640x1136px、800*2000px、1242px*1242px<br/>支持"+fe.join("、")+"等图片格式",ref_key:"upload",ref:ye},null,8,["msg"])):L("",!0),C("div",ne,[k(b,{onClick:be},{default:j((()=>[de])),_:1}),ye.value?(x(),E(b,{key:0,type:"primary",onClick:_e,disabled:!ye.value.imgs.length},{default:j((()=>[ce])),_:1},8,["disabled"])):L("",!0)])])),[[ge,ve.value]])])),_:1},8,["modelValue"]),k(g,{modelValue:je.value,"onUpdate:modelValue":s[6]||(s[6]=e=>je.value=e),title:"修改名称",width:"380px"},{default:j((()=>[k(J,null,{default:j((()=>[k(T,{label:"输入名称"},{default:j((()=>[k(D,{modelValue:Ve.value,"onUpdate:modelValue":s[5]||(s[5]=e=>Ve.value=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1})])),_:1}),C("div",me,[k(b,{type:"primary",disabled:!Ve.value,onClick:Pe},{default:j((()=>[pe])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),S.value?(x(),E(N,{key:0,onClose:s[7]||(s[7]=e=>S.value=!1),"url-list":P.value,"initial-index":U.value},null,8,["url-list","initial-index"])):L("",!0)])}}}))));var fe,ye=c(ve,[["__scopeId","data-v-6cd7b759"]]);export{ye as default};