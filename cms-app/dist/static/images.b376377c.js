var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as i}from"./date.23847c74.js";import{a as r,f as n,o as d,e as c,b as v,d as m}from"./index.8495ff11.js";import{M as p}from"./MyEmpty.202565af.js";import{_ as f}from"./MyPage.b41c257e.js";import{M as y}from"./MyDialog.e0bf1f18.js";import{T as b}from"./TopBtns.57897eb6.js";import{i as h,f as g,g as w}from"./myWork.1cc93e9a.js";import{d as _,i as k,o as j,t as C,a as x,v as P,w as O,V,u as I,L as M,Q as S,c as E,S as G,U as N,av as D,aw as U,b as J,a5 as z}from"./vue.ca737a59.js";const T=e=>(D("data-v-40e13730"),e=e(),U(),e),q={class:"m_images"},A={class:"mytable"},F=["src","onClick"],R={class:"fcs"},B={class:"staus"},K={key:0,class:"fcs"},L=N("删除"),Q=T((()=>P("div",{class:"line"},null,-1))),W=N("拒绝原因"),H={key:1,class:"fcs"},X=N("删除"),Y=T((()=>P("div",{class:"line"},null,-1))),Z=N("查看"),$={class:"fc fcc"},ee=T((()=>P("div",{class:"file_name"},"点击上传",-1))),ae=T((()=>P("div",{class:"tips"},"图片尺寸16:9，建议尺寸：220*160≤尺寸≤1920*890；支持JPG、PNG 、JPEG等格式；一次最多上传9张",-1))),le={class:"fcs btns fjend"},te=N("取消"),se=N("提交"),ue=_((oe=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&o(e,l,a[l]);return e})({},{name:"我的作品库-图片库"}),a(oe,l({setup(e){const a=k(1),l=k(0),t=k([]),s=async()=>{const e=await h({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const u=()=>{s()},o=k([]),r=e=>{o.value=e},_=e=>{const a=k();switch(e){case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"已拒绝",className:"cred"};break;default:a.value={text:"待审核",className:"cyellow"}}return a.value},N=k(""),D=k(!1),U=e=>{N.value=e,D.value=!0},T=async()=>{1==(await g({id:N.value})).status&&s(),D.value=!1},ue=k([]),oe=k(!1),ie=k(0),re=e=>{let a=[];t.value.forEach((e=>{a.push(e.thumb_url)})),ue.value=a,ie.value=ue.value.findIndex((a=>a==e)),oe.value=!0},ne=k(!1),de=k(""),ce=k(!1),ve=k(!1),me=k([]),pe=k();let fe=[];const ye=()=>{pe.value.clearFiles(),ce.value=!1,ve.value=!1,me.value=[],ue.value=[],oe.value=!1,ie.value=0,fe=[]},be=async e=>{const a=await v({site:"cms_image"});if(1==a.status){const l=e.name.substring(e.name.lastIndexOf(".")),t=new FormData,s={key:a.body.dir+"/"+a.body.uuid+l,OSSAccessKeyId:a.body.accessid,success_action_status:200,policy:a.body.policy,signature:a.body.signature};for(const[e,a]of Object.entries(s))t.append(e,a);if(t.append("file",e.raw),200==(await m({url:a.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:t})).status){const e=a.body.host+"/"+a.body.dir+"/"+a.body.uuid+l;return fe.push(e),await w({thumb_url:e}),Promise.resolve(e)}return Promise.reject(e.name+"上传失败")}return Promise.reject("获取上传配置失败")},he=async()=>{ve.value=!0;try{for(let e=0;e<me.value.length;e++){const a=me.value[e];if(await be(a).catch((e=>{throw new Error(e)})),fe.length==me.value.length){d("上传成功"),ye(),s();break}}}catch(e){c(e,0),ye(),s()}},ge=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],we=(e,a)=>{const l=e.name.substring(e.name.lastIndexOf("."));return-1==ge.indexOf(l)?(pe.value.handleRemove(e),void c("图片格式错误！")):e.size&&e.size/1024/1024>10?(pe.value.handleRemove(e),void c("图片文件大小不能超过10M")):(me.value=a,void(me.value.length>=9&&(document.querySelector(".el-upload--picture-card").style.display="none")))},_e=(e,a)=>{me.value=a,document.querySelector(".el-upload--picture-card").style.display="inline-flex"},ke=e=>{let a=[];me.value.forEach((e=>{a.push(e.url)})),ue.value=a,ie.value=ue.value.findIndex((a=>a==e.url)),oe.value=!0};return(e,s)=>{const o=J("el-table-column"),d=J("el-link"),c=J("el-table"),v=J("el-icon"),m=J("el-upload"),h=J("el-button"),g=J("el-dialog"),w=J("el-image-viewer"),k=z("loading");return j(),C("div",q,[x(b,{onAdd:s[0]||(s[0]=e=>ce.value=!0)}),P("div",A,[x(c,{data:t.value,style:{width:"100%"},onSelectionChange:r},{empty:O((()=>[x(p)])),default:O((()=>[x(o,{type:"selection",width:"50"}),x(o,{property:"id",label:"ID",width:"230"}),x(o,{property:"thumb_url",label:"图片"},{default:O((({row:e})=>[P("img",{src:e.thumb_url,alt:"",class:"firstimg lookhover",onClick:a=>re(e.thumb_url)},null,8,F)])),_:1}),x(o,{property:"create_time",label:"创建日期",width:"200"},{default:O((({row:e})=>[P("div",null,V(I(i)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),x(o,{property:"status",label:"状态",width:"180"},{default:O((({row:e})=>[P("div",R,[P("div",{class:M(["dot",_(e.status).className])},null,2),P("div",B,V(_(e.status).text),1)])])),_:1}),x(o,{label:"操作",width:"150"},{default:O((({row:e})=>[4==e.status?(j(),C("div",K,[x(d,{type:"primary",onClick:a=>U(e.id)},{default:O((()=>[L])),_:2},1032,["onClick"]),Q,x(d,{type:"primary",onClick:a=>{de.value=e.fail_reason,ne.value=!0}},{default:O((()=>[W])),_:2},1032,["onClick"])])):(j(),C("div",H,[x(d,{type:"primary",onClick:a=>U(e.id)},{default:O((()=>[X])),_:2},1032,["onClick"]),Y,x(d,{type:"primary",onClick:a=>re(e.thumb_url)},{default:O((()=>[Z])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),x(f,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:u},null,8,["total","modelValue"]),x(y,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),msg:"确认删除这条数据吗?",onSure:T},null,8,["modelValue"]),x(y,{modelValue:ne.value,"onUpdate:modelValue":s[3]||(s[3]=e=>ne.value=e),msg:de.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),x(g,{modelValue:ce.value,"onUpdate:modelValue":s[4]||(s[4]=e=>ce.value=e),title:"上传图片",width:"380px",onClose:ye,"custom-class":"upimgs"},{default:O((()=>[S((j(),C("div",null,[x(m,{action:"#","auto-upload":!1,limit:9,multiple:!0,"list-type":"picture-card","on-change":we,"on-preview":ke,"on-remove":_e,accept:ge.join(","),ref_key:"upload",ref:pe,class:"upbox"},{default:O((()=>[P("div",$,[x(v,null,{default:O((()=>[x(I(n))])),_:1}),ee])])),_:1},8,["accept"]),ae,P("div",le,[x(h,{onClick:ye},{default:O((()=>[te])),_:1}),x(h,{type:"primary",onClick:he,disabled:!me.value.length},{default:O((()=>[se])),_:1},8,["disabled"])])])),[[k,ve.value]])])),_:1},8,["modelValue"]),oe.value?(j(),E(w,{key:0,onClose:s[5]||(s[5]=e=>oe.value=!1),"url-list":ue.value,"initial-index":ie.value},null,8,["url-list","initial-index"])):G("",!0)])}}}))));var oe,ie=r(ue,[["__scopeId","data-v-40e13730"]]);export{ie as default};
