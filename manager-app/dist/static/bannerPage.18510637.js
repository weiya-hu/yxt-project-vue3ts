import{G as l,u as a,g as e,j as s,o as t,H as n,a as r,w as i,I as o,a2 as c,c as u,C as d,a0 as m,P as p,aa as v,a6 as f,a1 as _,aw as k,ax as y,az as b,b as h}from"./vue.73bee448.js";import{l as g,c as x,a as C}from"./index.eef2ec07.js";import{_ as B,e as j,i as w,z,f as V,p as I}from"./index.7462c988.js";import{g as U,p as q}from"./request.031adcd7.js";import{e as H}from"./empty.f131d8fb.js";import{m as P}from"./index.64b2c7d4.js";import{p as A}from"./pointer.f67025e7.js";import"./login.a3184624.js";const D=l=>(k("data-v-a31ad656"),l=l(),y(),l),G={class:"banner_page_component"},M={class:"fsc f1"},N=_("使用中"),R={class:"color999"},S=_("查看效果"),E={class:"imgs_list flex"},F={class:"imgbox"},J=["src"],K=["onClick"],L=["onClick"],O={class:"imginfo"},Q={class:"imgname els"},T={class:"imglink fcs"},W={class:"fcc"},X={class:"fsc imgicon"},Y={class:"fcs"},Z=D((()=>o("span",null,"0",-1))),$=["onClick"],ll=["src"],al=D((()=>o("div",null,"可用空位",-1))),el={key:0,class:"poolbox"},sl=["src"],tl={key:1,class:"fc fcc"},nl=D((()=>o("div",{class:"file_name"},"点击添加",-1))),rl={class:"fcs btns fjend mt20"},il=_("取消"),ol=_("提交");var cl=B(l({setup(l){const k=P(),y=a((()=>k.state.yxtUrl)),B={BannerIndex:{type:1,url:""},BannerProduct:{type:2,url:"/product.html"},BannerSales:{type:3,url:"/sales.html"},BannerVipdata:{type:4,url:"/vipdata.html"},BannerAttract:{type:5,url:"/attract.html"},BannerMember:{type:6,url:"/member.html"},BannerHelp:{type:7,url:"/help.html"},BannerNavigation:{type:8,url:"/navigation.html"},BannerCms:{type:9,url:"/cms_intro.html"},BannerDmp:{type:10,url:"/dmp_intro.html"},BannerRobot:{type:11,url:"/marketing.html"}}[b().name],D=e([]),cl=async()=>{const{status:l,body:a}=await(e={section_type:B.type},U(1,"/manage/banner.list",e));var e;1==l&&(D.value=a)};cl();const ul=e(!1),dl=s({link:""}),ml=()=>{dl.link="",vl.value={},ul.value=!1},pl=async(l,a)=>{const{status:e}=await(s={id:a||vl.value.id,section_type:B.type,status:l,link_url:dl.link},q(1,"/manage/banner/up.do",s,!0));var s;1==e&&(ml(),cl())},vl=e({});return j.on("sel_banner",(l=>{vl.value=l})),(l,a)=>{const e=h("el-icon"),s=h("el-link"),k=h("el-card"),b=h("el-form-item"),j=h("el-input"),U=h("el-button"),q=h("el-form"),P=h("el-dialog");return t(),n("div",G,[r(k,{class:"mycard"},{header:i((()=>[o("div",M,[o("div",null,[N,o("span",R,"（"+c(D.value.length)+"）",1)]),D.value.length?(t(),u(s,{key:0,type:"primary",target:"_blank",href:"//"+d(y).offical+d(B).url},{default:i((()=>[S,r(e,null,{default:i((()=>[r(d(w))])),_:1})])),_:1},8,["href"])):m("",!0)])])),default:i((()=>[o("div",E,[(t(!0),n(p,null,v(D.value,((l,a)=>(t(),n("div",{class:"imgs_item",key:a},[o("div",F,[o("img",{src:l.cover_url||l.source_url,alt:""},null,8,J),o("div",{class:"lookicon fcc lookhover",onClick:l=>(l=>{const a=D.value.map((l=>l.cover_url||l.source_url));C(a,l)})(a)},[r(e,{size:"20px"},{default:i((()=>[r(d(z))])),_:1})],8,K),2==l.source_type?(t(),n("div",{key:0,class:"videoicon fcc lookhover",onClick:a=>d(g)(l.source_url)},[r(e,{size:"40px"},{default:i((()=>[r(d(V))])),_:1})],8,L)):m("",!0)]),o("div",O,[o("div",Q,c(l.banner_name),1),o("div",T,[o("span",W,c(l.link_url?"链接：":"无链接"),1),l.link_url?(t(),u(s,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:i((()=>[_(c(l.link_url),1)])),_:2},1032,["href"])):m("",!0)]),o("div",X,[o("div",Y,[r(e,{size:"14px"},{default:i((()=>[r(d(A))])),_:1}),Z]),o("div",{onClick:a=>pl(0,l.material_id),class:"chover dfcolor"},"下架",8,$)])])])))),128)),(t(!0),n(p,null,v(5-D.value.length,(l=>(t(),n("div",{class:"imgs_item emptybox fc fcc",onClick:a[0]||(a[0]=l=>ul.value=!0),key:l},[o("img",{src:d(H),alt:""},null,8,ll),al])))),128))])])),_:1}),r(P,{modelValue:ul.value,"onUpdate:modelValue":a[6]||(a[6]=l=>ul.value=l),title:"新增banner",width:"380px",onClose:ml},{default:i((()=>[r(q,{model:d(dl)},{default:i((()=>[r(b,{label:"选择素材",required:"","label-width":"90px"},{default:i((()=>[o("div",{class:"sel_pool fcc",onClick:a[3]||(a[3]=l=>d(x)("sel_banner"))},[vl.value.id?(t(),n("div",el,[o("img",{src:vl.value.cover_url||vl.value.source_url,alt:""},null,8,sl),o("div",{class:"lookicon fcc lookhover",onClick:a[1]||(a[1]=f((l=>d(C)([vl.value.cover_url||vl.value.source_url],0)),["stop"]))},[r(e,{size:"14px"},{default:i((()=>[r(d(z))])),_:1})]),2==vl.value.source_type?(t(),n("div",{key:0,class:"videoicon fcc lookhover",onClick:a[2]||(a[2]=f((l=>d(g)(vl.value.source_url)),["stop"]))},[r(e,{size:"20px"},{default:i((()=>[r(d(V))])),_:1})])):m("",!0)])):(t(),n("div",tl,[r(e,null,{default:i((()=>[r(d(I))])),_:1}),nl]))])])),_:1}),r(b,{label:"添加链接",prop:"link","label-width":"90px"},{default:i((()=>[r(j,{modelValue:d(dl).link,"onUpdate:modelValue":a[4]||(a[4]=l=>d(dl).link=l),placeholder:"请输入链接"},null,8,["modelValue"])])),_:1}),o("div",rl,[r(U,{onClick:ml},{default:i((()=>[il])),_:1}),r(U,{type:"primary",onClick:a[5]||(a[5]=l=>pl(1)),disabled:!vl.value.id},{default:i((()=>[ol])),_:1},8,["disabled"])])])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-a31ad656"]]);export{cl as default};
