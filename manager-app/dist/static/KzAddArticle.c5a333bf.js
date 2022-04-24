import{q as e,f as l,b as a,a6 as t,Q as u,o as s,c as r,w as o,a as d,v as i,t as c,u as m,S as n,a2 as v,F as p,Z as g,aw as b,ax as f,U as y}from"./vue.89ed3d48.js";import{_ as A}from"./Edit.8fc5be14.js";import{i as _}from"./login.6de82fdd.js";import{e as h}from"./index.eaa6bc8d.js";import{_ as x}from"./index.fdca730b.js";const E=e=>(b("data-v-0e38c804"),e=e(),f(),e),V=E((()=>i("div",{class:"form_title"},"上传封面",-1))),w={class:"img_upbox flex"},B={class:"upbox fcc"},G=["src"],S={key:1,class:"fc fcc title_text"},Q=["src"],k=E((()=>i("div",{class:"fcc"},[
y("将文件拖到此处，或"),
i("span",null,"点击上传")],-1))),U=E((()=>i("div",{class:"img_tip flex"},"仅支持 JPG、PNG 、JPEG等图片格式，大小不超过2M",-1))),j=E((()=>i("div",{class:"form_title"},"标题",-1))),J={key:0,class:"form_title mt20"},P={key:2,class:"form_title mt20"},C={key:3,class:"fcs",style:{"margin-bottom":"4px"}},N=y("原创"),H=y("非原创"),I=E((()=>i("div",{class:"form_title"},"正文内容",-1)));var L=x(e({props:{needimg:{type:Boolean,default:!1},needtype:{type:Boolean,default:!1},needsource:{default:0},types:{default:()=>[{value:1,label:"分类一"},{value:2,label:"分类二"},{value:3,label:"分类三"},{value:4,label:"分类四"},{value:5,label:"分类五"}]}},emits:["success"],setup(e,{expose:b,emit:f}){const y=e,x=l(0),E=l({thumb_url:"",title:"",article_type:"",text:"",creator:"",source_url:""}),L=l(),z=l("none"),F={thumb_url:[{validator:(e,l,a)=>{if(y.needimg)switch(z.value){case"size":a(new Error("请添加大小不超过2M的图片"));break;case"type":a(new Error("请添加 .JPG、.PNG 、.JPEG 格式的图片"));break;case"none":a(new Error("请添加文章封面图片"));break;default:a()}else a()},trigger:"change"}],title:[{required:!0,message:"请输入文章标题（5 ~ 30个字）",trigger:"blur"},{min:5,max:30,message:"长度需要在 5 ~ 30 字之间",trigger:"blur"}],article_type:[{required:y.needtype,message:"请选择文章分类",trigger:"change"}],text:[{required:!0,message:"请输入文章内容",trigger:"blur"}],creator:[{validator:(e,l,a)=>{!x.value||1!=y.needsource||l?a():a(new Error("请输入来源"))},trigger:"blur"}]},R=l(),q=l(),K=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],W=l(""),T=(e,l)=>{e.name&&(W.value=e.name.substring(e.name.lastIndexOf(".")),K.indexOf(W.value)<0?(z.value="type",L.value.validateField("thumb_url",(()=>null))):e.size&&e.size/1024/1024>2?(z.value="size",L.value.validateField("thumb_url",(()=>null))):(z.value="",q.value=e.url,L.value.clearValidate("thumb_url")))},M=e=>{R.value.clearFiles(),R.value.handleStart(e[0])},X=async(e,l)=>{q.value="",Z()},O=(e,l,a)=>{q.value="",E.value.thumb_url="",R.value.clearFiles(),ee.value=!1,h("封面图片上传失败")},Z=async()=>{ee.value=!1,f("success",E.value)},Y=l(""),D=l({}),$=l(),ee=l(!1);return b({submit:async()=>{ee.value=!0,L.value.validate((async e=>{if(!e)return ee.value=!1,!1;await $.value.upImages(),$.value.clearImgs(),q.value&&y.needimg?_({site:"official_img"}).then((e=>{1==e.status?(Y.value=e.body.host,D.value={key:e.body.dir+"/"+e.body.uuid+W.value,OSSAccessKeyId:e.body.accessid,success_action_status:200,policy:e.body.policy,signature:e.body.signature},E.value.thumb_url=e.body.host+"/"+e.body.dir+"/"+e.body.uuid+W.value,R.value.submit()):(ee.value=!1,h("上传参数获取失败"))})):Z()}))},setForm:e=>{E.value=e}}),(l,b)=>{const f=a("el-upload"),y=a("el-form-item"),_=a("el-card"),h=a("el-input"),z=a("el-option"),K=a("el-select"),W=a("el-radio"),Z=a("el-form"),le=t("loading");return u((s(),r(Z,{ref_key:"aFormRef",ref:L,model:E.value,rules:F,size:"large",onSubmit:b[7]||(b[7]=g((()=>{}),["prevent"])),class:"add_article_form"},{default:o((()=>[e.needimg?(s(),r(_,{key:0,class:"mycard mt16"},{default:o((()=>[V,d(y,{prop:"thumb_url",style:{"margin-bottom":"4px"}},{default:o((()=>[i("div",w,[d(f,{drag:"",action:Y.value,"auto-upload":!1,limit:1,multiple:!1,"show-file-list":!1,data:D.value,"list-type":"picture","on-change":T,"on-exceed":M,"on-success":X,"on-error":O,accept:".jpg,.png,.jpeg,.JPG,.PNG,.JPEG",ref_key:"upload",ref:R,class:"flex"},{default:o((()=>[i("div",B,[q.value||E.value.thumb_url?(s(),c("img",{key:0,src:q.value||E.value.thumb_url,class:"title_img",alt:""},null,8,G)):(s(),c("div",S,[i("img",{src:m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwBJREFUWEftll1LclEQhUdLy0SxsgxTCtLKL8JEA8Vu+t3dJAgKKSmWEgSloaKWiN+Wxpo4or54ztEu3hsHusjce56ZWbN2itFoNKL/GIoVwKoDi3ag0WhQqVSier1OvV6P5buxsUEGg4EODg5Ir9cvJGnZIux2u5TNZqlardLa2hon3Nzc5GSdToeBhsMhGY1GOj8/H/9NikYWAKpOJpOEjT05OSGz2cwQk/H9/U2FQoFeXl5IqVSS1+uV1Q1JAFQXi8W4zbhUqHpeZe12m2EHgwFdXV2RRqMRbYIkwP39PbVaLb4MEHJCgNbpdOTz+ZYH+Pj4oEQiQW63mwW2SGAc0Mzl5SXt7OzMPSragcfHRwJEKBQihUKxSH4WZCQSob29PXI6nfIBcLBWq7Gq39/faX9/X/QCMapUKsUFHB4e8tbs7u6yQCdjqgNImslkeK3wRcz8+PiYL1gm8vk8vb29sV+gMAjS5XIxjBBjgM/PT1YvEp+envLMZ2lnIb6+vvij9fV1UT4kLxaL9Pz8zCDYpu3tbT7DANjhaDRKuDAQCJBWq5UsGF3ChiCgdKl1w/ewTfF4nIGDwSB7CQNg1k9PT2S32+no6Eh2crgjAt4gF+L19ZU74XA4eLQMkE6nqVwuUzgcltx1oXK4otB6YRSA2NraEi0AesB2mEwm8ng8vwBoJQR4c3MjengyOZLlcjn+/tnZ2dQ4pCBub29ZA/CIqQ5cX1+TWq2eCwGRNptNbjeS4HcERAULhmlhc/x+/9w7+v0+3d3dTXcA64Jq8IpZLJa5h5FcpVKNxzQJgENoL37EnmTBIdE1q9X62wE8HNgCBDxf6sERCGcBpNQL0eJhQ2ALUMzYByqVCj08PHB1UChcS8p+5QJAsHBXbBo6dHFxwRY99gGBHBDwf3QEWsCcsas2m43wss2GGAAsGCsHj4E+MHtUjHdBSP4PAD7ASmEl4YwAQfwFAOeRGKrH6s26puT/A2JzlTsCsTv+BABHQ8BBl40/ASybdPLcCmDVgR8tWQW/cdmyIAAAAABJRU5ErkJggg=="),alt:""},null,8,Q),k]))])])),_:1},8,["action","data"]),U])])),_:1})])),_:1})):n("",!0),d(_,{class:"mycard mt16"},{default:o((()=>[j,d(y,{prop:"title",style:{"margin-bottom":"4px"}},{default:o((()=>[d(h,{modelValue:E.value.title,"onUpdate:modelValue":b[0]||(b[0]=e=>E.value.title=e),placeholder:"请输入文章标题（5 ~ 30个字）"},null,8,["modelValue"])])),_:1}),e.needtype?(s(),c("div",J,"分类")):n("",!0),e.needtype?(s(),r(y,{key:1,prop:"article_type",style:{"margin-bottom":"4px"}},{default:o((()=>[d(K,{modelValue:E.value.article_type,"onUpdate:modelValue":b[1]||(b[1]=e=>E.value.article_type=e),placeholder:"请选择文章分类"},{default:o((()=>[(s(!0),c(p,null,v(e.types,(e=>(s(),r(z,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):n("",!0),e.needsource?(s(),c("div",P,"来源")):n("",!0),e.needsource?(s(),c("div",C,[d(W,{modelValue:x.value,"onUpdate:modelValue":b[2]||(b[2]=e=>x.value=e),label:0},{default:o((()=>[N])),_:1},8,["modelValue"]),d(W,{modelValue:x.value,"onUpdate:modelValue":b[3]||(b[3]=e=>x.value=e),label:1},{default:o((()=>[H])),_:1},8,["modelValue"]),1==e.needsource?(s(),r(y,{key:0,prop:"creator",style:{"margin-bottom":"0px"}},{default:o((()=>[1==x.value?(s(),r(h,{key:0,modelValue:E.value.creator,"onUpdate:modelValue":b[4]||(b[4]=e=>E.value.creator=e),placeholder:"请输入来源",style:{width:"220px"}},null,8,["modelValue"])):n("",!0)])),_:1})):n("",!0),1==x.value&&1==e.needsource?(s(),r(h,{key:1,modelValue:E.value.source_url,"onUpdate:modelValue":b[5]||(b[5]=e=>E.value.source_url=e),placeholder:"请输入原文链接（选填）",class:"ml20 f1"},null,8,["modelValue"])):n("",!0)])):n("",!0)])),_:1}),d(_,{class:"mycard mt16"},{default:o((()=>[I,d(y,{prop:"text",style:{"margin-bottom":"4px"}},{default:o((()=>[d(A,{modelValue:E.value.text,"onUpdate:modelValue":b[6]||(b[6]=e=>E.value.text=e),ref_key:"editRef",ref:$},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model"])),[[le,ee.value]])}}}),[["__scopeId","data-v-0e38c804"]]);export{L as K};
