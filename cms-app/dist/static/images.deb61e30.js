var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as r}from"./date.23847c74.js";import{a as i,f as d,o as n,e as c,b as v,d as m}from"./index.f8e08015.js";import{M as p}from"./MyEmpty.6a76a222.js";import{_ as f}from"./MyPage.092a21a7.js";import{M as y}from"./MyDialog.21c6d2aa.js";import{i as b,f as _,g}from"./myWork.090a1413.js";import{y as h,r as w,z as k,A as j,B as C,_ as x,T as P,Z as O,u as V,O as S,U as I,S as M,X as E,Y as z,av as D,aw as G,a4 as N,ab as U}from"./vue.92f8d02a.js";const J=e=>(D("data-v-4a3d4276"),e=e(),G(),e),q={class:"m_images"},A={class:"fsc m_topbtn"},F=z(" 创建 "),R={class:"fcs"},T=z("同步SCRM"),B=z("同步官网"),K=z("同步DSP系统"),W={class:"mytable"},X=["src"],Y={class:"fcs"},Z={class:"staus"},H={key:0,class:"fcs"},L=z("删除"),Q=J((()=>C("div",{class:"line"},null,-1))),$=z("拒绝原因"),ee={key:1,class:"fcs"},ae=z("删除"),le=J((()=>C("div",{class:"line"},null,-1))),te=z("查看"),se={class:"fc fcc"},ue=J((()=>C("div",{class:"file_name"},"点击上传",-1))),oe=J((()=>C("div",{class:"tips"},"图片尺寸16:9，建议尺寸：220*160≤尺寸≤1920*890；支持JPG、PNG 、JPEG等格式；一次最多上传9张",-1))),re={class:"fcs btns fjend"},ie=z("取消"),de=z("提交"),ne=h((ce=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&o(e,l,a[l]);return e})({},{name:"我的作品库-图片库"}),a(ce,l({setup(e){const a=w(1),l=w(0),t=w([]),s=async()=>{const e=await b({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const u=()=>{s()},o=w([]),i=e=>{o.value=e},h=e=>{const a=w();switch(e){case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"已拒绝",className:"cred"};break;default:a.value={text:"待审核",className:"cyellow"}}return a.value},z=w(""),D=w(!1),G=e=>{z.value=e,D.value=!0},J=async()=>{1==(await _({id:z.value})).status&&s(),D.value=!1},ne=w([]),ce=w(!1),ve=w(0),me=w(!1),pe=w(""),fe=w(!1),ye=w(!1),be=w([]),_e=w();let ge=[];const he=()=>{_e.value.clearFiles(),fe.value=!1,ye.value=!1,be.value=[],ne.value=[],ce.value=!1,ve.value=0,ge=[]},we=async e=>{const a=await v({site:"cms_image"});if(1==a.status){const l=e.name.substring(e.name.lastIndexOf(".")),t=new FormData,s={key:a.body.dir+"/"+a.body.uuid+l,OSSAccessKeyId:a.body.accessid,success_action_status:200,policy:a.body.policy,signature:a.body.signature};for(const[e,a]of Object.entries(s))t.append(e,a);if(t.append("file",e.raw),200==(await m({url:a.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:t})).status){const e=a.body.host+"/"+a.body.dir+"/"+a.body.uuid+l;return ge.push(e),await g({thumb_url:e}),Promise.resolve(e)}return Promise.reject(e.name+"上传失败")}return Promise.reject("获取上传配置失败")},ke=async()=>{ye.value=!0;try{for(let e=0;e<be.value.length;e++){const a=be.value[e];if(await we(a).catch((e=>{throw new Error(e)})),ge.length==be.value.length){n("上传成功"),he(),s();break}}}catch(e){c(e,0),he(),s()}},je=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],Ce=(e,a)=>{const l=e.name.substring(e.name.lastIndexOf("."));if(-1==je.indexOf(l))return _e.value.handleRemove(e),void c("图片格式错误！");be.value=a,be.value.length>=9&&(document.querySelector(".el-upload--picture-card").style.display="none")},xe=(e,a)=>{be.value=a,document.querySelector(".el-upload--picture-card").style.display="inline-flex"},Pe=e=>{let a=[];be.value.forEach((e=>{a.push(e.url)})),ne.value=a,ve.value=ne.value.findIndex((a=>a==e.url)),ce.value=!0};return(e,s)=>{const o=N("el-button"),n=N("el-table-column"),c=N("el-link"),v=N("el-table"),m=N("el-icon"),b=N("el-upload"),_=N("el-dialog"),g=N("el-image-viewer"),w=U("loading");return k(),j("div",q,[C("div",A,[x(o,{type:"primary",size:"large",onClick:s[0]||(s[0]=e=>fe.value=!0)},{default:P((()=>[F])),_:1}),C("div",R,[x(o,{size:"large"},{default:P((()=>[T])),_:1}),x(o,{size:"large"},{default:P((()=>[B])),_:1}),x(o,{size:"large"},{default:P((()=>[K])),_:1})])]),C("div",W,[x(v,{data:t.value,style:{width:"100%"},onSelectionChange:i},{empty:P((()=>[x(p)])),default:P((()=>[x(n,{type:"selection",width:"50"}),x(n,{property:"id",label:"ID",width:"230"}),x(n,{property:"thumb_url",label:"图片"},{default:P((({row:e})=>[C("img",{src:e.thumb_url,alt:"",class:"firstimg"},null,8,X)])),_:1}),x(n,{property:"create_time",label:"创建日期",width:"200"},{default:P((({row:e})=>[C("div",null,O(V(r)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),x(n,{property:"status",label:"状态",width:"180"},{default:P((({row:e})=>[C("div",Y,[C("div",{class:S(["dot",h(e.status).className])},null,2),C("div",Z,O(h(e.status).text),1)])])),_:1}),x(n,{label:"操作",width:"150"},{default:P((({row:e})=>[4==e.status?(k(),j("div",H,[x(c,{type:"primary",onClick:a=>G(e.id)},{default:P((()=>[L])),_:2},1032,["onClick"]),Q,x(c,{type:"primary",onClick:a=>{pe.value=e.fail_reason,me.value=!0}},{default:P((()=>[$])),_:2},1032,["onClick"])])):(k(),j("div",ee,[x(c,{type:"primary",onClick:a=>G(e.id)},{default:P((()=>[ae])),_:2},1032,["onClick"]),le,x(c,{type:"primary",onClick:a=>(e=>{let a=[];t.value.forEach((e=>{a.push(e.thumb_url)})),ne.value=a,ve.value=ne.value.findIndex((a=>a==e)),ce.value=!0})(e.thumb_url)},{default:P((()=>[te])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),x(f,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:u},null,8,["total","modelValue"]),x(y,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),msg:"确认删除这条数据吗?",onSure:J},null,8,["modelValue"]),x(y,{modelValue:me.value,"onUpdate:modelValue":s[3]||(s[3]=e=>me.value=e),msg:pe.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),x(_,{modelValue:fe.value,"onUpdate:modelValue":s[4]||(s[4]=e=>fe.value=e),title:"上传图片",width:"380px",onClose:he,"custom-class":"upimgs"},{default:P((()=>[I((k(),M(b,{action:"#","auto-upload":!1,limit:9,multiple:!0,"list-type":"picture-card","on-change":Ce,"on-preview":Pe,"on-remove":xe,accept:je.join(","),ref_key:"upload",ref:_e,class:"upbox"},{default:P((()=>[C("div",se,[x(m,null,{default:P((()=>[x(V(d))])),_:1}),ue])])),_:1},8,["accept"])),[[w,ye.value]]),oe,C("div",re,[x(o,{onClick:he},{default:P((()=>[ie])),_:1}),x(o,{type:"primary",onClick:ke,disabled:!be.value.length},{default:P((()=>[de])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),ce.value?(k(),M(g,{key:0,onClose:s[5]||(s[5]=e=>ce.value=!1),"url-list":ne.value,"initial-index":ve.value},null,8,["url-list","initial-index"])):E("",!0)])}}}))));var ce,ve=i(ne,[["__scopeId","data-v-4a3d4276"]]);export{ve as default};
