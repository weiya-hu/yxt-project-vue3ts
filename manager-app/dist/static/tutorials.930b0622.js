import{G as l,g as a,j as e,o as s,H as i,a as o,w as c,I as t,a2 as d,P as u,aa as v,c as n,C as r,a6 as f,a1 as p,aw as m,ax as _,b as k,a0 as y}from"./vue.73bee448.js";import{_ as g,e as b,z as h,f as C,p as x}from"./index.2ae254bd.js";import{a as w,l as z,c as j}from"./index.aeb80721.js";import{g as V,a as M,b as U,d as q,s as F}from"./service.793fd7e4.js";import{M as I}from"./Mypage.e0572b95.js";import{M as D}from"./MyEmpty.4bf64012.js";import{M as E}from"./MyDialog.6c30b2a5.js";import{p as G}from"./pointer.96b19835.js";import{c as H}from"./collection-tag.5c6877c9.js";import"./request.b31e1908.js";import"./empty.f131d8fb.js";const P=l=>(m("data-v-6fdaa6f2"),l=l(),_(),l),R={class:"tutorials_page"},S=p(" 首页展示"),A={class:"color999"},B={key:0,class:"imgs_list flex"},J={class:"imgbox"},K=["src"],L=["onClick"],N=["onClick"],O={class:"imginfo"},Q={class:"imgname els"},T={class:"imglink fcs"},W={class:"fcc"},X={class:"fsc imgicon"},Y={class:"fcs"},Z=P((()=>t("span",null,"0",-1))),$=["onClick"],ll={class:"fsc f1"},al=p("所有教程"),el={class:"color999"},sl=p("+ 添加"),il={key:0,class:"imgs_list flex fww"},ol={class:"imgbox"},cl=["src"],tl={key:0,class:"is_top_show fcc"},dl=P((()=>t("div",null,"展示中",-1))),ul=["onClick"],vl=["onClick"],nl={class:"imginfo"},rl={class:"imgname els"},fl={class:"imglink fcs"},pl={class:"fcc"},ml={class:"fsc imgicon"},_l={class:"fcs"},kl=P((()=>t("span",null,"0",-1))),yl={class:"fcs"},gl=["onClick"],bl=["onClick"],hl={key:0,class:"poolbox"},Cl=["src"],xl={key:1,class:"fc fcc"},wl=P((()=>t("div",{class:"file_name"},"点击添加",-1))),zl={class:"fcs btns fjend mt20"},jl=p("取消"),Vl=p("提交");var Ml=g(l({setup(l){const m=a([]),_=async()=>{const{status:l,body:a}=await V({status:1});1==l&&(m.value=a)};_();const g=a(1),P=a(20),Ml=a(0),Ul=a([]),ql=async()=>{const{status:l,body:a}=await M({size:P.value,current:g.value});1==l&&(Ml.value=a.total,Ul.value=a.records)};ql();const Fl=(l,a=!1)=>{const e=a?m.value.map((l=>l.cover_url)):Ul.value.map((l=>l.cover_url));w(e,l)},Il=()=>{Pl.value.resetFields(),Rl.value={},Dl.value=!1},Dl=a(!1),El=[{value:1,label:"分类一"},{value:2,label:"分类二"},{value:3,label:"分类三"},{value:4,label:"分类四"},{value:5,label:"分类五"}],Gl=e({video_type:[{required:!0,message:"请选择分类！",trigger:"change"}]}),Hl=e({link:"",video_type:""}),Pl=a(),Rl=a({});b.on("sel_tutorials",(l=>{Rl.value=l}));const Sl=()=>{Pl.value.validate((async l=>{if(l){const{status:l}=await U({id:Rl.value.id,link_url:Hl.link,video_type:Hl.video_type});1==l&&(Il(),ql())}}))},Al=async(l,a)=>{const{status:e}=await F({id:a||Rl.value.id,status:l});1==e&&(ql(),_())},Bl=a(!1),Jl=a(""),Kl=async()=>{const{status:l}=await q({id:Jl.value});1==l&&(ql(),_(),Bl.value=!1)};return(l,a)=>{const e=k("el-icon"),_=k("el-link"),b=k("el-card"),V=k("el-button"),M=k("el-form-item"),U=k("el-option"),q=k("el-select"),F=k("el-input"),Ll=k("el-form"),Nl=k("el-dialog");return s(),i("div",R,[o(b,{class:"mycard"},{header:c((()=>[t("div",null,[S,t("span",A,"（"+d(m.value.length)+"）",1)])])),default:c((()=>[m.value.length?(s(),i("div",B,[(s(!0),i(u,null,v(m.value,((l,a)=>(s(),i("div",{class:"imgs_item",key:l.id},[t("div",J,[t("img",{src:l.cover_url,alt:""},null,8,K),t("div",{class:"lookicon fcc lookhover",onClick:l=>Fl(a,!0)},[o(e,{size:"20px"},{default:c((()=>[o(r(h))])),_:1})],8,L),t("div",{class:"videoicon fcc lookhover",onClick:a=>r(z)(l.video_url)},[o(e,{size:"40px"},{default:c((()=>[o(r(C))])),_:1})],8,N)]),t("div",O,[t("div",Q,d(l.video_name),1),t("div",T,[t("span",W,d(l.link_url?"链接：":"无链接"),1),l.link_url?(s(),n(_,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:c((()=>[p(d(l.link_url),1)])),_:2},1032,["href"])):y("",!0)]),t("div",X,[t("div",Y,[o(e,{size:"14px"},{default:c((()=>[o(r(G))])),_:1}),Z]),t("div",{onClick:a=>Al(0,l.id),class:"chover dfcolor"},"下架",8,$)])])])))),128))])):(s(),n(D,{key:1}))])),_:1}),o(b,{class:"mycard mt20"},{header:c((()=>[t("div",ll,[t("div",null,[al,t("span",el,"（"+d(Ml.value)+"）",1)]),o(V,{type:"primary",onClick:a[0]||(a[0]=l=>Dl.value=!0)},{default:c((()=>[sl])),_:1})])])),default:c((()=>[Ul.value.length?(s(),i("div",il,[(s(!0),i(u,null,v(Ul.value,((l,a)=>(s(),i("div",{class:"imgs_item mb20",key:l.id},[t("div",ol,[t("img",{src:l.cover_url,alt:""},null,8,cl),1==l.status?(s(),i("div",tl,[o(e,{size:"14px"},{default:c((()=>[o(r(H))])),_:1}),dl])):y("",!0),t("div",{class:"lookicon fcc lookhover",onClick:l=>Fl(a)},[o(e,{size:"20px"},{default:c((()=>[o(r(h))])),_:1})],8,ul),t("div",{class:"videoicon fcc lookhover",onClick:a=>r(z)(l.video_url)},[o(e,{size:"40px"},{default:c((()=>[o(r(C))])),_:1})],8,vl)]),t("div",nl,[t("div",rl,d(l.video_name),1),t("div",fl,[t("span",pl,d(l.link_url?"链接：":"无链接"),1),l.link_url?(s(),n(_,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:c((()=>[p(d(l.link_url),1)])),_:2},1032,["href"])):y("",!0)]),t("div",ml,[t("div",_l,[o(e,{size:"14px"},{default:c((()=>[o(r(G))])),_:1}),kl]),t("div",yl,[0==l.status?(s(),i("div",{key:0,onClick:a=>{return e=l.id,Jl.value=e,void(Bl.value=!0);var e},class:"chover dfcolor mr20"},"删除",8,gl)):y("",!0),t("div",{onClick:a=>Al(1==l.status?0:1,l.id),class:"chover dfcolor"},d(1==l.status?"下架":"上架"),9,bl)])])])])))),128))])):(s(),n(D,{key:1})),o(I,{total:Ml.value,page:g.value,"onUpdate:page":a[1]||(a[1]=l=>g.value=l),onChange:ql,size:P.value,"onUpdate:size":a[2]||(a[2]=l=>P.value=l)},null,8,["total","page","size"])])),_:1}),o(E,{modelValue:Bl.value,"onUpdate:modelValue":a[3]||(a[3]=l=>Bl.value=l),msg:"确认删除此视频?",onSure:Kl},null,8,["modelValue"]),o(Nl,{modelValue:Dl.value,"onUpdate:modelValue":a[9]||(a[9]=l=>Dl.value=l),title:"添加视频",width:"380px",onClose:Il},{default:c((()=>[o(Ll,{model:r(Hl),rules:r(Gl),ref_key:"addFormRef",ref:Pl},{default:c((()=>[o(M,{label:"选择视频",required:"","label-width":"90px"},{default:c((()=>[t("div",{class:"sel_pool fcc",onClick:a[6]||(a[6]=l=>r(j)("sel_tutorials",2,!0))},[Rl.value.id?(s(),i("div",hl,[t("img",{src:Rl.value.cover_url,alt:""},null,8,Cl),t("div",{class:"lookicon fcc lookhover",onClick:a[4]||(a[4]=f((l=>r(w)([Rl.value.cover_url],0)),["stop"]))},[o(e,{size:"14px"},{default:c((()=>[o(r(h))])),_:1})]),t("div",{class:"videoicon fcc lookhover",onClick:a[5]||(a[5]=f((l=>r(z)(Rl.value.video_url)),["stop"]))},[o(e,{size:"20px"},{default:c((()=>[o(r(C))])),_:1})])])):(s(),i("div",xl,[o(e,null,{default:c((()=>[o(r(x))])),_:1}),wl]))])])),_:1}),o(M,{label:"视频分类",prop:"video_type","label-width":"90px"},{default:c((()=>[o(q,{modelValue:r(Hl).video_type,"onUpdate:modelValue":a[7]||(a[7]=l=>r(Hl).video_type=l),placeholder:"请选择视频分类",class:"f1"},{default:c((()=>[(s(),i(u,null,v(El,(l=>o(U,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),o(M,{label:"添加链接",prop:"link","label-width":"90px"},{default:c((()=>[o(F,{modelValue:r(Hl).link,"onUpdate:modelValue":a[8]||(a[8]=l=>r(Hl).link=l),placeholder:"请输入链接"},null,8,["modelValue"])])),_:1}),t("div",zl,[o(V,{onClick:Il},{default:c((()=>[jl])),_:1}),o(V,{type:"primary",onClick:Sl,disabled:!Rl.value.id},{default:c((()=>[Vl])),_:1},8,["disabled"])])])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-6fdaa6f2"]]);export{Ml as default};
