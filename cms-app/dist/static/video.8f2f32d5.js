var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as r}from"./date.23847c74.js";import{M as d}from"./MyEmpty.83e37b1e.js";import{_ as i}from"./MyPage.092a21a7.js";import{M as c}from"./MyDialog.1275652e.js";import{M as n}from"./MyUpload.8779856a.js";import{a as v,o as m,e as p,h as f}from"./index.ac187171.js";import{v as y,k as b,l as _}from"./myWork.67358b47.js";import{y as g,r as w,z as k,A as V,B as h,_ as C,T as j,Z as M,u as x,O,U,S as z,X as P,Y as S,av as D,aw as N,a4 as E,ab as I}from"./vue.92f8d02a.js";const A=e=>(D("data-v-8e1eb6de"),e=e(),N(),e),B={class:"m_video"},L={class:"fsc m_topbtn"},R=S(" 创建 "),T={class:"fcs"},W=S("同步SCRM"),X=S("同步官网"),Y=S("同步DSP系统"),Z={class:"mytable"},q=["src"],F={class:"fcs"},G={class:"staus"},H={key:0,class:"fcs"},J=S("删除"),K=A((()=>h("div",{class:"line"},null,-1))),Q=S("拒绝原因"),$={key:1,class:"fcs"},ee=S("删除"),ae=A((()=>h("div",{class:"line"},null,-1))),le=S("查看"),te={class:"fcs btns fjend"},se=S("取消"),oe=S("提交"),ue=["src"],re=g((de=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&u(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&u(e,l,a[l]);return e})({},{name:"我的作品库-视频库"}),a(de,l({setup(e){const a=w(1),l=w(0),t=w([]),s=async()=>{const e=await y({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const o=()=>{s()},u=w([]),v=e=>{u.value=e},g=e=>{const a=w();switch(e){case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"已拒绝",className:"cred"};break;default:a.value={text:"待审核",className:"cyellow"}}return a.value},S=w(""),D=w(!1),N=e=>{S.value=e,D.value=!0},A=async()=>{1==(await b({id:S.value})).status&&s(),D.value=!1},re=w(!1),de=w(""),ie=w(!1),ce=w(""),ne=w(!1),ve=w(!1),me=[".mp4",".mpeg",".3gp",".avi"],pe=w(),fe=()=>{be.value="",pe.value.clear(),ne.value=!1,ve.value=!1},ye=()=>{ve.value=!0,pe.value.submit()},be=w(""),_e=e=>{},ge=async e=>{1==(await _({thumb_url:e})).status&&(m("上传成功"),fe(),s())},we=e=>{p(e,0),ve.value=!1},ke=e=>{ve.value?f().then((()=>{})).catch((()=>{pe.value.doAbort(),e()})):e()};return(e,s)=>{const u=E("el-button"),m=E("el-table-column"),p=E("el-link"),f=E("el-table"),y=E("el-dialog"),b=I("loading");return k(),V("div",B,[h("div",L,[C(u,{type:"primary",size:"large",onClick:s[0]||(s[0]=e=>ne.value=!0)},{default:j((()=>[R])),_:1}),h("div",T,[C(u,{size:"large"},{default:j((()=>[W])),_:1}),C(u,{size:"large"},{default:j((()=>[X])),_:1}),C(u,{size:"large"},{default:j((()=>[Y])),_:1})])]),h("div",Z,[C(f,{data:t.value,style:{width:"100%"},onSelectionChange:v},{empty:j((()=>[C(d)])),default:j((()=>[C(m,{type:"selection",width:"50"}),C(m,{property:"id",label:"ID",width:"230"}),C(m,{property:"video",label:"视频"},{default:j((({row:e})=>[h("video",{src:e.video_url,alt:"",class:"firstimg"},null,8,q)])),_:1}),C(m,{property:"create_time",label:"创建日期",width:"200"},{default:j((({row:e})=>[h("div",null,M(x(r)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),C(m,{property:"status",label:"状态",width:"180"},{default:j((({row:e})=>[h("div",F,[h("div",{class:O(["dot",g(e.status).className])},null,2),h("div",G,M(g(e.status).text),1)])])),_:1}),C(m,{label:"操作",width:"150"},{default:j((({row:e})=>[4==e.status?(k(),V("div",H,[C(p,{type:"primary",onClick:a=>N(e.id)},{default:j((()=>[J])),_:2},1032,["onClick"]),K,C(p,{type:"primary",onClick:a=>{ce.value=e.fail_reason,ie.value=!0}},{default:j((()=>[Q])),_:2},1032,["onClick"])])):(k(),V("div",$,[C(p,{type:"primary",onClick:a=>N(e.id)},{default:j((()=>[ee])),_:2},1032,["onClick"]),ae,C(p,{type:"primary",onClick:a=>{return l=e.video_url,de.value=l,void(re.value=!0);var l}},{default:j((()=>[le])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),C(i,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:o},null,8,["total","modelValue"]),C(c,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),msg:"确认删除这条数据吗?",onSure:A},null,8,["modelValue"]),C(c,{modelValue:ie.value,"onUpdate:modelValue":s[3]||(s[3]=e=>ie.value=e),msg:ce.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),C(y,{modelValue:ne.value,"onUpdate:modelValue":s[5]||(s[5]=e=>ne.value=e),title:"上传视频",width:"380px",onClose:fe,"custom-class":"upimgs","before-close":ke},{default:j((()=>[U((k(),V("div",null,[C(n,{type:"video",modelValue:be.value,"onUpdate:modelValue":s[4]||(s[4]=e=>be.value=e),"max-size":200,onError:we,onSuccess:ge,onChange:_e,exnameList:me,msg:"视频尺寸：宽高16:9或9:16；<br/>不超过200M；<br/>支持"+me.join("、")+"格式",ref_key:"upload",ref:pe},null,8,["modelValue","msg"]),h("div",te,[C(u,{onClick:fe},{default:j((()=>[se])),_:1}),pe.value?(k(),z(u,{key:0,type:"primary",onClick:ye,disabled:!be.value},{default:j((()=>[oe])),_:1},8,["disabled"])):P("",!0)])])),[[b,ve.value]])])),_:1},8,["modelValue"]),C(y,{modelValue:re.value,"onUpdate:modelValue":s[6]||(s[6]=e=>re.value=e),title:"查看视频",fullscreen:"",onClose:s[7]||(s[7]=e=>de.value=""),"custom-class":"videobox"},{default:j((()=>[h("video",{src:de.value,controls:"",class:"show_video"},null,8,ue)])),_:1},8,["modelValue"])])}}}))));var de,ie=v(re,[["__scopeId","data-v-8e1eb6de"]]);export{ie as default};