var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,i=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&r(e,l,a[l]);return e},o=(e,t)=>a(e,l(t));import{q as d,f as c,o as n,t as m,a as v,v as p,w as f,Q as b,u as g,Z as _,U as y,aw as h,ax as j,az as P,av as w,b as k,a6 as x}from"./vue.89ed3d48.js";import{D as G}from"./DetailsHeader.a6f50e8f.js";import{_ as O}from"./Edit.f721bdef.js";import{t as z,a as E}from"./tp.fd3f5364.js";import{e as J}from"./index.3b31d7d7.js";import{i as V}from"./login.ed01525e.js";import{e as I,k as q,j as F}from"./custom.3686d705.js";import{m as S}from"./index.f47187aa.js";import{_ as N}from"./index.547c0c45.js";import"./request.356cbcf4.js";const C=e=>(h("data-v-116ffa7a"),e=e(),j(),e),D={class:"article_add"},K={class:"addform"},U={class:"fjend btns"},L=y(" 返回 "),M=y(" 保存 "),R=y(" 完成 "),A={class:"form_content"},H={class:"tip fcs"},Q=["src"],Z=C((()=>p("span",null,"请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。",-1))),$={class:"upload fcs"},B={class:"upbox fcc"},T=["src"],W=["src"],X=C((()=>p("div",{class:"img_tip flex"},"仅支持 JPG、PNG 、JPEG等图片格式，大小不超过2M",-1)));var Y=N(d({setup(e){const a=c("top"),l=S(),t=P(),s=w(),u=t.query.id;u&&I({id:u}).then((e=>{r.value=e.body,e.body.thumb_url&&(y.value="")}));const r=c({thumb_url:"",title:"",content:"",status:1}),d=c(),y=c("none"),h={thumb_url:[{validator:(e,a,l)=>{switch(y.value){case"size":l(new Error("请添加大小不超过2M的图片"));break;case"type":l(new Error("请添加 .JPG、.PNG 、.JPEG 格式的图片"));break;case"none":l(new Error("请添加文章封面图片"));break;default:l()}},trigger:"change"}],title:[{required:!0,message:"请输入文章标题（5~30个字）",trigger:"blur"},{min:5,max:30,message:"长度需要在 5 ~ 30 字之间",trigger:"blur"}],content:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},j=c(!1),N=c(),C=c(),Y=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],ee=c(""),ae=(e,a)=>{ee.value=e.name.substring(e.name.lastIndexOf(".")),Y.indexOf(ee.value)<0?(y.value="type",d.value.validateField("thumb_url",(()=>null))):e.size&&e.size/1024/1024>2?(y.value="size",d.value.validateField("thumb_url",(()=>null))):(y.value="",C.value=e.url,d.value.clearValidate("thumb_url"))},le=e=>{N.value.clearFiles(),N.value.handleStart(e[0])},te=(e,a)=>{C.value="",ue()},se=(e,a,l)=>{C.value="",r.value.thumb_url="",N.value.clearFiles(),J("封面图片上传失败")},ue=async()=>{if(1==r.value.status){1==(await q(o(i({},r.value),{order_id:u}))).status&&(l.setKeepList([]),s.replace("/cms/custom/article"))}else{1==(await F(o(i({},r.value),{order_id:u}))).status&&(l.setKeepList([]),s.replace("/cms/custom/article"))}j.value=!1},re=c(""),ie=c({}),oe=c(),de=async e=>{r.value.status=e,d.value.validate((async e=>{if(!e)return!1;j.value=!0,await oe.value.upImages(),oe.value.clearImgs(),C.value?V({site:"official_img"}).then((e=>{1==e.status?(re.value=e.body.host,ie.value={key:e.body.dir+"/"+e.body.uuid+ee.value,OSSAccessKeyId:e.body.accessid,success_action_status:200,policy:e.body.policy,signature:e.body.signature},r.value.thumb_url=e.body.host+"/"+e.body.dir+"/"+e.body.uuid+ee.value,N.value.submit()):J("上传参数获取失败")})):ue()}))};return(e,l)=>{const t=k("el-button"),s=k("el-upload"),u=k("el-form-item"),i=k("el-card"),o=k("el-input"),c=k("el-form"),y=x("loading");return n(),m("div",D,[v(G),p("div",K,[p("div",U,[v(t,{size:"large",onClick:l[0]||(l[0]=a=>e.$router.push("/cms/custom"))},{default:f((()=>[L])),_:1}),v(t,{size:"large",onClick:l[1]||(l[1]=e=>de(1))},{default:f((()=>[M])),_:1}),v(t,{size:"large",type:"primary",onClick:l[2]||(l[2]=e=>de(2)),disabled:!r.value.title.length},{default:f((()=>[R])),_:1},8,["disabled"])]),b((n(),m("div",A,[p("div",H,[p("img",{src:g(z),alt:""},null,8,Q),Z]),v(c,{ref_key:"aFormRef",ref:d,model:r.value,rules:h,size:"large",onSubmit:l[5]||(l[5]=_((()=>{}),["prevent"])),"label-position":a.value},{default:f((()=>[v(i,null,{default:f((()=>[v(u,{label:"上传封面",prop:"thumb_url"},{default:f((()=>[p("div",$,[v(s,{action:re.value,"auto-upload":!1,limit:1,multiple:!1,"show-file-list":!1,data:ie.value,"list-type":"picture","on-change":ae,"on-exceed":le,"on-success":te,"on-error":se,accept:".jpg,.png,.jpeg,.JPG,.PNG,.JPEG",ref_key:"upload",ref:N,class:"flex"},{default:f((()=>[p("div",B,[C.value||r.value.thumb_url?(n(),m("img",{key:0,src:C.value||r.value.thumb_url,class:"title_img",alt:""},null,8,T)):(n(),m("img",{key:1,src:g(E),alt:""},null,8,W))])])),_:1},8,["action","data"]),X])])),_:1})])),_:1}),v(i,{class:"mt20"},{default:f((()=>[v(u,{label:"文章标题",prop:"title"},{default:f((()=>[v(o,{modelValue:r.value.title,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value.title=e),placeholder:"请输入文章标题（5~30个字）"},null,8,["modelValue"])])),_:1})])),_:1}),v(i,{class:"mt20"},{default:f((()=>[v(u,{label:"文章内容",prop:"content"},{default:f((()=>[v(O,{modelValue:r.value.content,"onUpdate:modelValue":l[4]||(l[4]=e=>r.value.content=e),ref_key:"editRef",ref:oe},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model","label-position"])])),[[y,j.value]])])])}}}),[["__scopeId","data-v-116ffa7a"]]);export{Y as default};
