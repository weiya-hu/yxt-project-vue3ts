import{M as e}from"./Mypage.53af444b.js";import{M as a}from"./MyEmpty.8e216a46.js";import{M as l}from"./MyDialog.d8f2932e.js";import{M as o}from"./MediaUpload.2514cee4.js";import{h as s,e as u,a as t,k as d}from"./index.6c11e008.js";import{u as c,g as n,i,j as r}from"./system.f75f6534.js";import{_ as m,z as v,h as f}from"./index.aefc30ce.js";import{d as p,c as _}from"./download.48e8d045.js";import{e as g}from"./edit.894d58be.js";import{G as y,g as b,j as k,o as h,H as j,I as C,a as V,w as x,a2 as w,P as z,aa as M,c as U,_ as E,C as G,a0 as L,a1 as P,b as q,ae as F}from"./vue.73bee448.js";import"./empty.f131d8fb.js";import"./login.857dc837.js";import"./request.65081ce8.js";import"./tinymce.5416ef76.js";const I={class:"imagepool_page"},D={class:"fsc topbox"},H={class:"fcs"},J=P("搜索"),N={class:"fcs"},S={class:"total mr20"},A=P("+ 上传"),O={key:0,class:"imgs_list flex"},R=["onClick"],T=["src","onLoad"],W={class:"lookicon fcc"},B={class:"imginfo"},K={class:"imgname els"},Q={class:"imgsize"},X={class:"fcs fjend imgicon"},Y=["href"],Z={class:"fcs btns fjend mt20"},$=P("取消"),ee=P("提交"),ae={class:"fcs btns fjend mt20"},le=P("取消"),oe=P("提交");var se=m(y({setup(m){const y=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],P=b(!1),se=b(!1),ue=b(),te=e=>{re.source_name=e},de=async e=>{const a=await c({source_url:e,source_name:re.source_name,source_type:1});a&&1==a.status?(fe(),ke(),s(1)):se.value=!1},ce=e=>{u(e),se.value=!1},ne=(e,a)=>{t(e,a)},ie=b(),re=k({source_name:""}),me=k({source_name:[{required:!0,message:"请输入图片名称！",trigger:"blur"}]}),ve=()=>{ie.value.validateField("source_name",(e=>{e&&(se.value=!0,ue.value.submit(re.source_name))}))},fe=()=>{se.value=!1,ie.value.resetFields(),P.value=!1},pe=b({}),_e=b([]),ge=b(0),ye=b(1),be=b(""),ke=async()=>{const{body:e,status:a}=await n({size:10,current:ye.value,sourceType:1,sourceName:be.value});1==a&&(_e.value=e.records,ge.value=e.total)};ke();const he=()=>{ye.value=1,ke()},je=()=>{pe.value={},ke()},Ce=b(0),Ve=b(""),xe=b(!1),we=async()=>{const{status:e}=await i({id:Ce.value});1==e&&(_e.value.findIndex((e=>e.id==Ce.value)),xe.value=!1,ke(),s(1))},ze=b(!1),Me=async()=>{const{status:e}=await r({id:Ce.value,source_name:Ve.value});1==e&&(ze.value=!1,ke(),s(1))},Ue=e=>{se.value?d().then((()=>{e()})).catch((()=>{})):e()};return(s,d)=>{const c=q("el-input"),n=q("el-button"),i=q("el-icon"),r=q("el-tooltip"),m=q("el-dialog"),b=q("el-form-item"),k=q("el-form"),ke=F("loading");return h(),j("div",I,[C("div",D,[C("div",H,[V(c,{modelValue:be.value,"onUpdate:modelValue":d[0]||(d[0]=e=>be.value=e),placeholder:"输入图片名关键字搜索",clearable:""},null,8,["modelValue"]),V(n,{class:"ml20 bdc_btn",onClick:he},{default:x((()=>[J])),_:1})]),C("div",N,[C("div",S,"共"+w(ge.value)+"条",1),V(n,{type:"primary",onClick:d[1]||(d[1]=e=>P.value=!0)},{default:x((()=>[A])),_:1})])]),ge.value?(h(),j("div",O,[(h(!0),j(z,null,M(_e.value,((e,a)=>(h(),j("div",{class:"imgs_item",key:e.id},[C("div",{class:"imgbox lookhover",onClick:e=>(e=>{const a=_e.value.map((e=>e.source_url));t(a,e)})(a)},[C("img",{src:e.source_url,alt:"",onLoad:a=>((e,a)=>{const l=a.path[0];pe.value[e]=l.naturalWidth+"*"+l.naturalHeight})(e.id,a)},null,40,T),C("div",W,[V(i,{size:"20px"},{default:x((()=>[V(G(v))])),_:1})])],8,R),C("div",B,[C("div",K,w(e.source_name),1),C("div",Q,w(pe.value[e.id]),1),C("div",X,[V(r,{effect:"dark",content:"下载",placement:"bottom"},{default:x((()=>[C("a",{href:e.source_url,class:"fcc download_a"},[V(i,{class:"chover",size:"18px"},{default:x((()=>[V(G(p))])),_:1})],8,Y)])),_:2},1024),V(r,{effect:"dark",content:"复制链接",placement:"bottom"},{default:x((()=>[V(i,{class:"chover",size:"18px",onClick:a=>(e=>{const a=document.createElement("input");a.setAttribute("value",e),document.body.appendChild(a),a.select();try{document.execCommand("copy")&&document.body.removeChild(a)}catch{u("复制失败，请检查浏览器兼容")}})(e.source_url)},{default:x((()=>[V(G(_))])),_:2},1032,["onClick"])])),_:2},1024),V(r,{effect:"dark",content:"修改名称",placement:"bottom"},{default:x((()=>[V(i,{class:"chover",size:"18px",onClick:a=>{return l=e,Ce.value=l.id,Ve.value=l.source_name,void(ze.value=!0);var l}},{default:x((()=>[V(G(g))])),_:2},1032,["onClick"])])),_:2},1024),V(r,{effect:"dark",content:"删除",placement:"bottom"},{default:x((()=>[V(i,{class:"chover",size:"18px",onClick:a=>{return l=e,Ce.value=l.id,Ve.value=l.source_name,void(xe.value=!0);var l}},{default:x((()=>[V(G(f))])),_:2},1032,["onClick"])])),_:2},1024)])])])))),128))])):(h(),U(a,{key:1})),V(e,{page:ye.value,"onUpdate:page":d[2]||(d[2]=e=>ye.value=e),total:ge.value,onChange:je,"hide-sizes":!0},null,8,["page","total"]),V(l,{modelValue:xe.value,"onUpdate:modelValue":d[3]||(d[3]=e=>xe.value=e),msg:"确认删除图片 “ "+Ve.value+" ” ?",onSure:we},null,8,["modelValue","msg"]),V(m,{modelValue:ze.value,"onUpdate:modelValue":d[6]||(d[6]=e=>ze.value=e),title:"修改名称",width:"380px",onClose:d[7]||(d[7]=e=>Ve.value="")},{default:x((()=>[V(c,{modelValue:Ve.value,"onUpdate:modelValue":d[4]||(d[4]=e=>Ve.value=e),placeholder:"请输入图片名"},null,8,["modelValue"]),C("div",Z,[V(n,{onClick:d[5]||(d[5]=e=>ze.value=!1)},{default:x((()=>[$])),_:1}),V(n,{type:"primary",onClick:Me,disabled:!Ve.value},{default:x((()=>[ee])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),V(m,{modelValue:P.value,"onUpdate:modelValue":d[10]||(d[10]=e=>P.value=e),title:"上传图片",width:"380px",onClose:fe,"before-close":Ue},{default:x((()=>[E((h(),U(k,{model:G(re),rules:G(me),ref_key:"addFormRef",ref:ie},{default:x((()=>[V(b,{label:"图片",required:""},{default:x((()=>[P.value?(h(),U(o,{key:0,max:1,"need-download":"",onUpOneSuccess:de,onError:ce,onLook:ne,onChange:te,onDel:d[8]||(d[8]=e=>G(re).source_name=""),exnameList:y,msg:"只能上传"+y.join("、")+"图片，不超过2M",ref_key:"upload",ref:ue},null,8,["msg"])):L("",!0)])),_:1}),V(b,{label:"名称",prop:"source_name"},{default:x((()=>[V(c,{modelValue:G(re).source_name,"onUpdate:modelValue":d[9]||(d[9]=e=>G(re).source_name=e),placeholder:"请输入图片名"},null,8,["modelValue"])])),_:1}),C("div",ae,[V(n,{onClick:fe},{default:x((()=>[le])),_:1}),ue.value?(h(),U(n,{key:0,type:"primary",onClick:ve,disabled:!ue.value.imgs.length},{default:x((()=>[oe])),_:1},8,["disabled"])):L("",!0)])])),_:1},8,["model","rules"])),[[ke,se.value]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-24814a39"]]);export{se as default};
