var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as r}from"./date.23847c74.js";import{M as i}from"./MyEmpty.95c36c07.js";import{_ as n}from"./MyPage.b41c257e.js";import{M as d}from"./MyDialog.0bb06ca0.js";import{a as c,f as m,e as p,b as v,d as f,o as y}from"./index.cf7ad3b2.js";import{d as b,i as g,b as _,o as x,t as h,a as w,w as k,v as j,u as C,L as O,av as S,aw as P,V,c as M,S as z,U as I}from"./vue.ca737a59.js";import{p as E,h as L,j as D}from"./myWork.96722444.js";const G={class:"fc fcc"},N=(e=>(S("data-v-741cd300"),e=e(),P(),e))((()=>j("div",{class:"file_name"},"点击上传",-1))),U=["innerHTML"];var J=c(b({props:{exnameList:{default:()=>[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"]},max:{default:3},msg:null,maxSize:{default:10}},emits:["upOneSuccess","error","look"],setup(e,{expose:a,emit:l}){const t=e,s=g([]),u=g(),o=(e,a)=>{console.log("change");const l=e.name.substring(e.name.lastIndexOf("."));if(-1==t.exnameList.indexOf(l))return u.value.handleRemove(e),void p("图片格式错误！");e.size&&e.size/1024/1024>t.maxSize&&p(`图片文件大小不能超过${t.maxSize}M`),s.value=a;const o=document.querySelector(".el-upload--picture-card");s.value.length>=t.max&&(o.style.display="none")},r=(e,a)=>{s.value=a,document.querySelector(".el-upload--picture-card").style.display="inline-flex"},i=e=>{let a=[];s.value.forEach((e=>{a.push(e.url)})),l("look",a,a.findIndex((a=>a==e.url)))},n=async e=>{const a=await v({site:"cms_image"});if(1==a.status){const t=e.name.substring(e.name.lastIndexOf(".")),u=new FormData,o={key:a.body.dir+"/"+a.body.uuid+t,OSSAccessKeyId:a.body.accessid,success_action_status:200,policy:a.body.policy,signature:a.body.signature};for(const[e,a]of Object.entries(o))u.append(e,a);u.append("file",e.raw);if(200==(await f({url:a.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:u})).status){const e=a.body.host+"/"+a.body.dir+"/"+a.body.uuid+t;return l("upOneSuccess",e,s.value.length),Promise.resolve(e)}return Promise.reject(e.name+"上传失败")}return Promise.reject("获取上传配置失败")},d=e=>{t.max>1||(u.value.clearFiles(),u.value.handleStart(e[0]))};return a({submit:async()=>{try{for(let e=0;e<s.value.length;e++){const a=s.value[e];await n(a).catch((e=>{throw new Error(e)}))}}catch(e){l("error",e)}},clear:()=>{},imgs:s}),(a,l)=>{const t=_("el-icon"),s=_("el-upload");return x(),h("div",{class:O(["media_upload flex",1==e.max?"one_up":""])},[w(s,{action:"#","auto-upload":!1,limit:e.max,multiple:e.max>1,"list-type":"picture-card","on-exceed":d,"on-change":o,"on-preview":i,"on-remove":r,accept:e.exnameList.join(","),ref_key:"upload",ref:u,class:"upbox"},{default:k((()=>[j("div",G,[w(t,null,{default:k((()=>[w(C(m))])),_:1}),N])])),_:1},8,["limit","multiple","accept"]),j("div",{class:"tips",innerHTML:e.msg},null,8,U)],2)}}}),[["__scopeId","data-v-741cd300"]]);const T=e=>(S("data-v-2bbdee4d"),e=e(),P(),e),q={class:"m_poster"},F={class:"fsc m_topbtn"},H=I(" 创建 "),R={class:"fcs"},A=I("同步SCRM"),K=I("同步官网"),W=I("同步DSP系统"),$={class:"mytable"},B=["src"],Q={class:"fcs"},X={class:"staus"},Y={key:0,class:"fcs"},Z=I("删除"),ee=T((()=>j("div",{class:"line"},null,-1))),ae=I("拒绝原因"),le={key:1,class:"fcs"},te=I("删除"),se=T((()=>j("div",{class:"line"},null,-1))),ue=I("查看"),oe={class:"fcs btns fjend"},re=I("取消"),ie=I("提交"),ne=b((de=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&o(e,l,a[l]);return e})({},{name:"我的作品库-海报库"}),a(de,l({setup(e){const a=g(1),l=g(0),t=g([]),s=async()=>{const e=await E({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const u=()=>{s()},o=g([]),c=e=>{o.value=e},m=e=>{const a=g();switch(e){case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"已拒绝",className:"cred"};break;default:a.value={text:"待审核",className:"cyellow"}}return a.value},v=g(""),f=g(!1),b=e=>{v.value=e,f.value=!0},S=async()=>{1==(await L({id:v.value})).status&&s(),f.value=!1},P=g([]),I=g(!1),G=g(0),N=g(!1),U=g(""),T=g(!1),ne=g(!1),de=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],ce=g(),me=()=>{ne.value=!1,T.value=!1,I.value=!1,P.value=[],G.value=0},pe=()=>{ce.value.submit()},ve=g(0),fe=async(e,a)=>{1==(await D({thumb_url:e})).status&&ve.value++,ve.value===a&&ye()},ye=()=>{y("上传成功"),ve.value=0,me(),s()},be=e=>{p(e,0),me(),s()},ge=(e,a)=>{P.value=e,G.value=a,I.value=!0};return(e,s)=>{const o=_("el-button"),p=_("el-table-column"),v=_("el-link"),y=_("el-table"),g=_("el-dialog"),E=_("el-image-viewer");return x(),h("div",q,[j("div",F,[w(o,{type:"primary",size:"large",onClick:s[0]||(s[0]=e=>T.value=!0)},{default:k((()=>[H])),_:1}),j("div",R,[w(o,{size:"large"},{default:k((()=>[A])),_:1}),w(o,{size:"large"},{default:k((()=>[K])),_:1}),w(o,{size:"large"},{default:k((()=>[W])),_:1})])]),j("div",$,[w(y,{data:t.value,style:{width:"100%"},onSelectionChange:c},{empty:k((()=>[w(i)])),default:k((()=>[w(p,{type:"selection",width:"50"}),w(p,{property:"id",label:"ID",width:"230"}),w(p,{property:"thumb_url",label:"海报"},{default:k((({row:e})=>[j("img",{src:e.thumb_url,alt:"",class:"firstimg"},null,8,B)])),_:1}),w(p,{property:"create_time",label:"创建日期",width:"200"},{default:k((({row:e})=>[j("div",null,V(C(r)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),w(p,{property:"status",label:"状态",width:"180"},{default:k((({row:e})=>[j("div",Q,[j("div",{class:O(["dot",m(e.status).className])},null,2),j("div",X,V(m(e.status).text),1)])])),_:1}),w(p,{label:"操作",width:"150"},{default:k((({row:e})=>[4==e.status?(x(),h("div",Y,[w(v,{type:"primary",onClick:a=>b(e.id)},{default:k((()=>[Z])),_:2},1032,["onClick"]),ee,w(v,{type:"primary",onClick:a=>{U.value=e.fail_reason,N.value=!0}},{default:k((()=>[ae])),_:2},1032,["onClick"])])):(x(),h("div",le,[w(v,{type:"primary",onClick:a=>b(e.id)},{default:k((()=>[te])),_:2},1032,["onClick"]),se,w(v,{type:"primary",onClick:a=>(e=>{let a=[];t.value.forEach((e=>{a.push(e.thumb_url)})),P.value=a,G.value=P.value.findIndex((a=>a==e)),I.value=!0})(e.thumb_url)},{default:k((()=>[ue])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),w(n,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:u},null,8,["total","modelValue"]),w(d,{modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=e=>f.value=e),msg:"确认删除这条数据吗?",onSure:S},null,8,["modelValue"]),w(d,{modelValue:N.value,"onUpdate:modelValue":s[3]||(s[3]=e=>N.value=e),msg:U.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),w(g,{modelValue:T.value,"onUpdate:modelValue":s[4]||(s[4]=e=>T.value=e),title:"上传海报",width:"380px",onClose:me,"custom-class":"upimgs"},{default:k((()=>[T.value?(x(),M(J,{key:0,max:1,onUpOneSuccess:fe,onError:be,onLook:ge,exnameList:de,msg:"图片尺寸：16:9<br/>建议尺寸：640x1136px、800*2000px、1242px*1242px<br/>支持"+de.join("、")+"等图片格式",ref_key:"upload",ref:ce},null,8,["msg"])):z("",!0),j("div",oe,[w(o,{onClick:me},{default:k((()=>[re])),_:1}),ce.value?(x(),M(o,{key:0,type:"primary",onClick:pe,disabled:!ce.value.imgs.length},{default:k((()=>[ie])),_:1},8,["disabled"])):z("",!0)])])),_:1},8,["modelValue"]),I.value?(x(),M(E,{key:0,onClose:s[5]||(s[5]=e=>I.value=!1),"url-list":P.value,"initial-index":G.value},null,8,["url-list","initial-index"])):z("",!0)])}}}))));var de,ce=c(ne,[["__scopeId","data-v-2bbdee4d"]]);export{ce as default};