import{G as l,u as a,g as e,j as s,o as i,H as t,a as o,w as n,I as r,a2 as c,c as u,C as d,a0 as p,P as m,aa as v,a6 as f,a1 as _,aw as k,ax as y,az as b,b as g}from"./vue.73bee448.js";import{l as h,c as x,a as C}from"./index.aeb80721.js";import{_ as j,e as B,i as w,z,f as V,p as I}from"./index.2ae254bd.js";import{g as U,p as q}from"./request.b31e1908.js";import{e as H}from"./empty.f131d8fb.js";import{m as P}from"./index.4593ca48.js";import{p as A}from"./pointer.96b19835.js";import"./login.f44d1550.js";const G=l=>(k("data-v-33690306"),l=l(),y(),l),M={class:"banner_page_component"},N={class:"fsc f1"},S=_("使用中"),D={class:"color999"},E=_("查看效果"),F={class:"imgs_list flex"},J={class:"imgbox"},K=["src"],L=["onClick"],O=["onClick"],Q={class:"imginfo"},R={class:"imgname els"},T={class:"imglink fcs"},W={class:"fcc"},X={class:"fsc imgicon"},Y={class:"fcs"},Z=G((()=>r("span",null,"0",-1))),$=["onClick"],ll=["src"],al=G((()=>r("div",null,"可用空位",-1))),el={key:0,class:"poolbox"},sl=["src"],il={key:1,class:"fc fcc"},tl=G((()=>r("div",{class:"file_name"},"点击添加",-1))),ol={class:"fcs btns fjend mt20"},nl=_("取消"),rl=_("提交");var cl=j(l({setup(l){const k=P(),y=a((()=>k.state.yxtUrl)),j={BannerIndex:{type:1,url:""},BannerProduct:{type:2,url:"/product.html"},BannerSales:{type:3,url:"/sales.html"},BannerVipdata:{type:4,url:"/vipdata.html"},BannerAttract:{type:5,url:"/attract.html"},BannerMember:{type:6,url:"/member.html"},BannerHelp:{type:7,url:"/help.html"},BannerNavigation:{type:8,url:"/navigation.html"}}[b().name],G=e([]),cl=async()=>{const{status:l,body:a}=await(e={section_type:j.type},U(1,"/manage/banner.list",e));var e;1==l&&(G.value=a)};cl();const ul=e(!1),dl=s({link:""}),pl=()=>{dl.link="",vl.value={},ul.value=!1},ml=async(l,a)=>{const{status:e}=await(s={id:a||vl.value.id,section_type:j.type,status:l,link_url:dl.link},q(1,"/manage/banner/up.do",s,!0));var s;1==e&&(pl(),cl())},vl=e({});return B.on("sel_banner",(l=>{vl.value=l})),(l,a)=>{const e=g("el-icon"),s=g("el-link"),k=g("el-card"),b=g("el-form-item"),B=g("el-input"),U=g("el-button"),q=g("el-form"),P=g("el-dialog");return i(),t("div",M,[o(k,{class:"mycard"},{header:n((()=>[r("div",N,[r("div",null,[S,r("span",D,"（"+c(G.value.length)+"）",1)]),G.value.length?(i(),u(s,{key:0,type:"primary",target:"_blank",href:"//"+d(y).offical+d(j).url},{default:n((()=>[E,o(e,null,{default:n((()=>[o(d(w))])),_:1})])),_:1},8,["href"])):p("",!0)])])),default:n((()=>[r("div",F,[(i(!0),t(m,null,v(G.value,((l,a)=>(i(),t("div",{class:"imgs_item",key:a},[r("div",J,[r("img",{src:l.cover_url||l.source_url,alt:""},null,8,K),r("div",{class:"lookicon fcc lookhover",onClick:l=>(l=>{const a=G.value.map((l=>l.cover_url||l.source_url));C(a,l)})(a)},[o(e,{size:"20px"},{default:n((()=>[o(d(z))])),_:1})],8,L),2==l.source_type?(i(),t("div",{key:0,class:"videoicon fcc lookhover",onClick:a=>d(h)(l.source_url)},[o(e,{size:"40px"},{default:n((()=>[o(d(V))])),_:1})],8,O)):p("",!0)]),r("div",Q,[r("div",R,c(l.banner_name),1),r("div",T,[r("span",W,c(l.link_url?"链接：":"无链接"),1),l.link_url?(i(),u(s,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:n((()=>[_(c(l.link_url),1)])),_:2},1032,["href"])):p("",!0)]),r("div",X,[r("div",Y,[o(e,{size:"14px"},{default:n((()=>[o(d(A))])),_:1}),Z]),r("div",{onClick:a=>ml(0,l.material_id),class:"chover dfcolor"},"下架",8,$)])])])))),128)),(i(!0),t(m,null,v(5-G.value.length,(l=>(i(),t("div",{class:"imgs_item emptybox fc fcc",onClick:a[0]||(a[0]=l=>ul.value=!0),key:l},[r("img",{src:d(H),alt:""},null,8,ll),al])))),128))])])),_:1}),o(P,{modelValue:ul.value,"onUpdate:modelValue":a[6]||(a[6]=l=>ul.value=l),title:"新增banner",width:"380px",onClose:pl},{default:n((()=>[o(q,{model:d(dl)},{default:n((()=>[o(b,{label:"选择素材",required:"","label-width":"90px"},{default:n((()=>[r("div",{class:"sel_pool fcc",onClick:a[3]||(a[3]=l=>d(x)("sel_banner"))},[vl.value.id?(i(),t("div",el,[r("img",{src:vl.value.cover_url||vl.value.source_url,alt:""},null,8,sl),r("div",{class:"lookicon fcc lookhover",onClick:a[1]||(a[1]=f((l=>d(C)([vl.value.cover_url||vl.value.source_url],0)),["stop"]))},[o(e,{size:"14px"},{default:n((()=>[o(d(z))])),_:1})]),2==vl.value.source_type?(i(),t("div",{key:0,class:"videoicon fcc lookhover",onClick:a[2]||(a[2]=f((l=>d(h)(vl.value.source_url)),["stop"]))},[o(e,{size:"20px"},{default:n((()=>[o(d(V))])),_:1})])):p("",!0)])):(i(),t("div",il,[o(e,null,{default:n((()=>[o(d(I))])),_:1}),tl]))])])),_:1}),o(b,{label:"添加链接",prop:"link","label-width":"90px"},{default:n((()=>[o(B,{modelValue:d(dl).link,"onUpdate:modelValue":a[4]||(a[4]=l=>d(dl).link=l),placeholder:"请输入链接"},null,8,["modelValue"])])),_:1}),r("div",ol,[o(U,{onClick:pl},{default:n((()=>[nl])),_:1}),o(U,{type:"primary",onClick:a[5]||(a[5]=l=>ml(1)),disabled:!vl.value.id},{default:n((()=>[rl])),_:1},8,["disabled"])])])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-33690306"]]);export{cl as default};
