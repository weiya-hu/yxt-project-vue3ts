import{M as e}from"./Mypage.d6408ac2.js";import{M as a}from"./MyEmpty.ce239837.js";import{M as l}from"./MyDialog.0b6de626.js";import{M as s}from"./MediaUpload.68fa92bf.js";import{M as o}from"./MyUpload.dda0094f.js";import{h as u,e as t,a as d,k as r,l as i,i as c}from"./index.10b470b5.js";import{u as m,g as n,i as v,j as f}from"./system.0f8f50ed.js";import{f as p}from"./date.23847c74.js";import{_,f as g,l as y}from"./index.f86653d0.js";import{d as b}from"./download.6468f887.js";import{e as k}from"./edit.fbda0a4b.js";import{G as j,g as V,j as C,o as x,H as h,I as M,a as U,w,a2 as z,P as N,aa as q,c as E,_ as G,C as P,a0 as F,a1 as I,b as L,ae as S}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./login.6a4fa518.js";import"./request.64bd2e3c.js";const D={class:"videopool_page"},J={class:"fsc topbox"},A={class:"fcs"},H=I("搜索"),O={class:"fcs"},R={class:"total mr20"},T=I("+ 上传"),B={key:0,class:"imgs_list flex"},K=["onClick"],Q=["src"],W={class:"lookicon fcc"},X={class:"imginfo"},Y={class:"imgname els"},Z={class:"imgsize"},$={class:"fcs fjend imgicon"},ee={class:"fcs btns fjend mt20"},ae=I("取消"),le=I("提交"),se={class:"fcs btns fjend mt20"},oe=I("取消"),ue=I("提交");var te=_(j({setup(_){const j=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],I=[".mp4"],te=V(!1),de=V(!1),re=V(),ie=async e=>{const a=await m({cover_url:e,source_url:ge.source_url,source_name:ge.source_name,source_type:2});a&&1==a.status?(ke(),he(),u(2)):de.value=!1},ce=e=>{t(e),de.value=!1},me=(e,a)=>{d(e,a)},ne=V(),ve=e=>{ge.source_name=e},fe=e=>{t(e),de.value=!1},pe=e=>{ge.source_url=e,re.value.submit()},_e=V(),ge=C({source_name:"",source_oldName:"",source_url:""}),ye=C({source_name:[{required:!0,message:"请输入视频名称！",trigger:"blur"}]}),be=()=>{_e.value.validateField("source_name",(e=>{e&&(de.value=!0,ne.value.submit())}))},ke=()=>{de.value=!1,_e.value.resetFields(),ne.value.clear(),te.value=!1},je=V([]),Ve=V(0),Ce=V(1),xe=V(""),he=async()=>{const{body:e,status:a}=await n({size:10,current:Ce.value,sourceType:2,sourceName:xe.value});1==a&&(je.value=e.records,Ve.value=e.total)};he();const Me=()=>{Ce.value=1,he()},Ue=V(0),we=V(""),ze=V(!1),Ne=async()=>{const{status:e}=await v({id:Ue.value});1==e&&(je.value.findIndex((e=>e.id==Ue.value)),ze.value=!1,he(),u(2))},qe=V(!1),Ee=async()=>{const{status:e}=await f({id:Ue.value,source_name:we.value});1==e&&(qe.value=!1,he(),u(2))},Ge=e=>{de.value?r().then((()=>{ne.value.doAbort(),e()})).catch((()=>{})):e()};return(u,t)=>{const d=L("el-input"),r=L("el-button"),m=L("el-icon"),n=L("el-tooltip"),v=L("el-dialog"),f=L("el-form-item"),_=L("el-form"),V=S("loading");return x(),h("div",D,[M("div",J,[M("div",A,[U(d,{modelValue:xe.value,"onUpdate:modelValue":t[0]||(t[0]=e=>xe.value=e),placeholder:"输入视频名关键字搜索",clearable:""},null,8,["modelValue"]),U(r,{type:"primary",class:"ml20",onClick:Me},{default:w((()=>[H])),_:1})]),M("div",O,[M("div",R,"共"+z(Ve.value)+"条",1),U(r,{type:"primary",onClick:t[1]||(t[1]=e=>te.value=!0)},{default:w((()=>[T])),_:1})])]),Ve.value?(x(),h("div",B,[(x(!0),h(N,null,q(je.value,(e=>(x(),h("div",{class:"imgs_item",key:e.id},[M("div",{class:"imgbox lookhover",onClick:a=>P(i)(e.source_url)},[M("img",{src:e.cover_url,alt:""},null,8,Q),M("div",W,[U(m,{size:"40px"},{default:w((()=>[U(P(g))])),_:1})])],8,K),M("div",X,[M("div",Y,z(e.source_name),1),M("div",Z,z(P(p)(new Date(e.create_time),"yyyy-MM-dd")),1),M("div",$,[U(n,{effect:"dark",content:"下载",placement:"bottom"},{default:w((()=>[U(m,{class:"chover",size:"18px",onClick:a=>P(c)(e.source_url,e.source_name)},{default:w((()=>[U(P(b))])),_:2},1032,["onClick"])])),_:2},1024),U(n,{effect:"dark",content:"修改名称",placement:"bottom"},{default:w((()=>[U(m,{class:"chover",size:"18px",onClick:a=>{return l=e,Ue.value=l.id,we.value=l.source_name,void(qe.value=!0);var l}},{default:w((()=>[U(P(k))])),_:2},1032,["onClick"])])),_:2},1024),U(n,{effect:"dark",content:"删除",placement:"bottom"},{default:w((()=>[U(m,{class:"chover",size:"18px",onClick:a=>{return l=e,Ue.value=l.id,we.value=l.source_name,void(ze.value=!0);var l}},{default:w((()=>[U(P(y))])),_:2},1032,["onClick"])])),_:2},1024)])])])))),128))])):(x(),E(a,{key:1})),U(e,{page:Ce.value,"onUpdate:page":t[2]||(t[2]=e=>Ce.value=e),total:Ve.value,onChange:he,"hide-sizes":!0},null,8,["page","total"]),U(l,{modelValue:ze.value,"onUpdate:modelValue":t[3]||(t[3]=e=>ze.value=e),msg:"确认删除视频 “ "+we.value+" ” ?",onSure:Ne},null,8,["modelValue","msg"]),U(v,{modelValue:qe.value,"onUpdate:modelValue":t[6]||(t[6]=e=>qe.value=e),title:"修改名称",width:"380px",onClose:t[7]||(t[7]=e=>we.value="")},{default:w((()=>[U(d,{modelValue:we.value,"onUpdate:modelValue":t[4]||(t[4]=e=>we.value=e),placeholder:"请输入视频名"},null,8,["modelValue"]),M("div",ee,[U(r,{onClick:t[5]||(t[5]=e=>qe.value=!1)},{default:w((()=>[ae])),_:1}),U(r,{type:"primary",onClick:Ee,disabled:!we.value},{default:w((()=>[le])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),U(v,{modelValue:te.value,"onUpdate:modelValue":t[10]||(t[10]=e=>te.value=e),title:"上传视频",width:"380px",onClose:ke,"before-close":Ge},{default:w((()=>[G((x(),E(_,{model:P(ge),rules:P(ye),ref_key:"addFormRef",ref:_e},{default:w((()=>[U(f,{label:"视 频",required:""},{default:w((()=>[U(o,{type:"video",modelValue:P(ge).source_oldName,"onUpdate:modelValue":t[8]||(t[8]=e=>P(ge).source_oldName=e),"max-size":200,onError:fe,onSuccess:pe,onChangeName:ve,exnameList:I,msg:"只能上传"+I.join("、")+"视频，不超过200M，推荐尺寸1280*720",ref_key:"upVideo",ref:ne},null,8,["modelValue","msg"])])),_:1}),U(f,{label:"名 称",prop:"source_name"},{default:w((()=>[U(d,{modelValue:P(ge).source_name,"onUpdate:modelValue":t[9]||(t[9]=e=>P(ge).source_name=e),placeholder:"请输入视频名"},null,8,["modelValue"])])),_:1}),U(f,{label:"封面图",required:""},{default:w((()=>[te.value?(x(),E(s,{key:0,max:1,onUpOneSuccess:ie,onError:ce,onLook:me,exnameList:j,msg:"只能上传"+j.join("、")+"图片，不超过2M",ref_key:"upload",ref:re},null,8,["msg"])):F("",!0)])),_:1}),M("div",se,[U(r,{onClick:ke},{default:w((()=>[oe])),_:1}),re.value?(x(),E(r,{key:0,type:"primary",onClick:be,disabled:!re.value.imgs.length||!P(ge).source_oldName},{default:w((()=>[ue])),_:1},8,["disabled"])):F("",!0)])])),_:1},8,["model","rules"])),[[V,de.value]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-b08d98ba"]]);export{te as default};
