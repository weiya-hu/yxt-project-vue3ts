var l=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(a,e,s)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;import{G as u,g as c,j as d,o as r,H as n,a as v,w as p,W as f,_ as m,$ as _,I as y,a1 as k,a2 as b,C as g,c as h,a0 as C,P as w,aa as x,a6 as j,aw as z,ax as V,b as O}from"./vue.73bee448.js";import{j as U,k as P,l as M,m as q,n as S,o as $,p as D,q as I,r as E,t as F}from"./service.229fce95.js";import{M as N}from"./MyEmpty.ce239837.js";import{M as G}from"./MyPage.2279dcbd.js";import{M as H}from"./MyDialog.0b6de626.js";import{f as R}from"./date.23847c74.js";import{_ as W,e as A,z as B,f as J,p as K}from"./index.f86653d0.js";import{a as L,l as Q,c as T}from"./index.10b470b5.js";import{p as X}from"./pointer.02454b78.js";import{c as Y}from"./collection-tag.9e715ddf.js";import"./request.64bd2e3c.js";import"./empty.f131d8fb.js";const Z=l=>(z("data-v-2aae75d2"),l=l(),V(),l),ll={class:"school_page"},al=k("文章"),el=k("视频"),sl=Z((()=>y("div",{class:"long_line"},null,-1))),tl={class:"fsc mycard"},il=Z((()=>y("div",{class:"el-card__header"},"文章列表",-1))),ol=k("添加"),ul={class:"mytable"},cl={class:"fcs"},dl={class:"fcs"},rl=k("查看"),nl={key:1,class:"line"},vl={key:3,class:"line"},pl=k("编辑"),fl={key:5,class:"line"},ml=k("删除"),_l={class:"mycard"},yl={class:"el-card__header",style:{height:"32px"}},kl=k("首页展示"),bl={class:"color999"},gl={key:0,class:"imgs_list flex"},hl={class:"imgbox"},Cl=["src"],wl=["onClick"],xl=["onClick"],jl={class:"imginfo"},zl={class:"imgname els"},Vl={class:"imglink fcs"},Ol={class:"fcc"},Ul={class:"fsc imgicon"},Pl={class:"fcs"},Ml=Z((()=>y("span",null,"0",-1))),ql=["onClick"],Sl={class:"fsc f1"},$l=k("所有视频"),Dl={class:"color999"},Il=k("+ 添加"),El={key:0,class:"imgs_list flex fww"},Fl={class:"imgbox"},Nl=["src"],Gl={key:0,class:"is_top_show fcc"},Hl=Z((()=>y("div",null,"展示中",-1))),Rl=["onClick"],Wl=["onClick"],Al={class:"imginfo"},Bl={class:"imgname els"},Jl={class:"imglink fcs"},Kl={class:"fcc"},Ll={class:"fsc imgicon"},Ql={class:"fcs"},Tl=Z((()=>y("span",null,"0",-1))),Xl={class:"fcs"},Yl=["onClick"],Zl=["onClick"],la={key:0,class:"poolbox"},aa=["src"],ea={key:1,class:"fc fcc"},sa=Z((()=>y("div",{class:"file_name"},"点击添加",-1))),ta={class:"fcs btns fjend mt20"},ia=k("取消"),oa=k("提交"),ua=u((ca=((l,a)=>{for(var e in a||(a={}))t.call(a,e)&&o(l,e,a[e]);if(s)for(var e of s(a))i.call(a,e)&&o(l,e,a[e]);return l})({},{name:"School"}),a(ca,e({setup(l){const a=c(1),e=c({});(async()=>{const{status:l,body:a}=await U();1==l&&(e.value=a,u())})();const s=c([]),t=c(1),i=c(20),o=c(0),u=async()=>{const l=await P({size:i.value,current:t.value});1==l.status&&(s.value=l.body.records,o.value=l.body.total)},z=c(""),V=c(!1),W=async()=>{1==(await q({id:z.value})).status&&(V.value=!1,u())},Z=c([]);(async()=>{const{status:l,body:a}=await S();if(1==l){for(const[l,e]of Object.entries(a))Z.value.push({value:Number(l),label:e});ca(),pa()}})();const ua=c([]),ca=async()=>{const{status:l,body:a}=await $({status:1});1==l&&(ua.value=a)},da=c(1),ra=c(20),na=c(0),va=c([]),pa=async()=>{const{status:l,body:a}=await D({size:ra.value,current:da.value});1==l&&(na.value=a.total,va.value=a.records)},fa=(l,a=!1)=>{const e=a?ua.value.map((l=>l.cover_url)):va.value.map((l=>l.cover_url));L(e,l)},ma=()=>{ba.value.resetFields(),ga.value={},_a.value=!1},_a=c(!1),ya=d({video_type:[{required:!0,message:"请选择分类！",trigger:"change"}]}),ka=d({link:"",video_type:""}),ba=c(),ga=c({});A.on("sel_school",(l=>{ga.value=l}));const ha=()=>{ba.value.validate((async l=>{if(l){const{status:l}=await I({id:ga.value.id,link_url:ka.link,video_type:ka.video_type});1==l&&(ma(),pa())}}))},Ca=async(l,a)=>{const{status:e}=await F({id:a||ga.value.id,status:l});1==e&&(pa(),ca())},wa=c(!1),xa=c(""),ja=async()=>{const{status:l}=await E({id:xa.value});1==l&&(pa(),ca(),wa.value=!1)};return(l,c)=>{const d=O("el-button"),U=O("el-button-group"),P=O("el-table-column"),q=O("el-link"),S=O("el-table"),$=O("el-icon"),D=O("el-card"),I=O("el-form-item"),E=O("el-option"),F=O("el-select"),A=O("el-input"),ca=O("el-form"),za=O("el-dialog");return r(),n("div",ll,[v(D,null,{default:p((()=>[v(U,{class:"btn_tab"},{default:p((()=>[v(d,{class:f(1==a.value&&"btn_tab_active"),onClick:c[0]||(c[0]=l=>a.value=1)},{default:p((()=>[al])),_:1},8,["class"]),v(d,{class:f(2==a.value&&"btn_tab_active"),onClick:c[1]||(c[1]=l=>a.value=2)},{default:p((()=>[el])),_:1},8,["class"])])),_:1}),sl,m(y("div",null,[y("div",tl,[il,v(d,{type:"primary",onClick:c[2]||(c[2]=a=>l.$router.push("addarticle"))},{default:p((()=>[ol])),_:1})]),y("div",ul,[v(S,{data:s.value,border:"",draggable:""},{empty:p((()=>[v(N)])),default:p((()=>[v(P,{prop:"title",label:"标题"}),v(P,{prop:"article_type",label:"分类"},{default:p((({row:l})=>[k(b(e.value[Number(l.article_type)]),1)])),_:1}),v(P,{prop:"create_time",label:"发布时间"},{default:p((({row:l})=>[k(b(g(R)(new Date(l.create_time))),1)])),_:1}),v(P,{prop:"hits",label:"查看量"}),v(P,{prop:"status",label:"状态"},{default:p((({row:l})=>[y("div",cl,[y("div",{class:f(["status_dot",1==l.status?"sdot_b":2==l.status?"sdot_r":"sdot_g"])},null,2),y("div",null,b(1==l.status?"草稿":2==l.status?"离线":"在线"),1)])])),_:1}),v(P,{label:"操作",fixed:"right",width:"240"},{default:p((({row:a})=>[y("div",dl,[1!=a.status?(r(),h(q,{key:0,type:"primary",onClick:e=>l.$router.push("articledetails?id="+a.id)},{default:p((()=>[rl])),_:2},1032,["onClick"])):C("",!0),1!=a.status?(r(),n("div",nl)):C("",!0),1!=a.status?(r(),h(q,{key:2,type:"primary",onClick:l=>(async(l,a)=>{1==(await M({id:l,status:a})).status&&u()})(a.id,2==a.status?3:2)},{default:p((()=>[k(b(2==a.status?"上线":"下线"),1)])),_:2},1032,["onClick"])):C("",!0),2==a.status?(r(),n("div",vl)):C("",!0),3!=a.status?(r(),h(q,{key:4,type:"primary",onClick:e=>l.$router.push("addarticle?id="+a.id)},{default:p((()=>[pl])),_:2},1032,["onClick"])):C("",!0),3!=a.status?(r(),n("div",fl)):C("",!0),3!=a.status?(r(),h(q,{key:6,type:"primary",onClick:l=>{return e=a.id,z.value=e,void(V.value=!0);var e}},{default:p((()=>[ml])),_:2},1032,["onClick"])):C("",!0)])])),_:1})])),_:1},8,["data"])]),v(G,{total:o.value,page:t.value,"onUpdate:page":c[3]||(c[3]=l=>t.value=l),onChange:u,size:i.value,"onUpdate:size":c[4]||(c[4]=l=>i.value=l)},null,8,["total","page","size"])],512),[[_,1==a.value]]),v(H,{modelValue:V.value,"onUpdate:modelValue":c[5]||(c[5]=l=>V.value=l),msg:"此文章删除后无法撤回，请谨慎删除！",onSure:W},null,8,["modelValue"]),m(y("div",null,[y("div",_l,[y("div",yl,[kl,y("span",bl,"（"+b(ua.value.length)+"）",1)])]),ua.value.length?(r(),n("div",gl,[(r(!0),n(w,null,x(ua.value,((l,a)=>(r(),n("div",{class:"imgs_item",key:l.id},[y("div",hl,[y("img",{src:l.cover_url,alt:""},null,8,Cl),y("div",{class:"lookicon fcc lookhover",onClick:l=>fa(a,!0)},[v($,{size:"20px"},{default:p((()=>[v(g(B))])),_:1})],8,wl),y("div",{class:"videoicon fcc lookhover",onClick:a=>g(Q)(l.video_url)},[v($,{size:"40px"},{default:p((()=>[v(g(J))])),_:1})],8,xl)]),y("div",jl,[y("div",zl,b(l.video_name),1),y("div",Vl,[y("span",Ol,b(l.link_url?"链接：":"无链接"),1),l.link_url?(r(),h(q,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:p((()=>[k(b(l.link_url),1)])),_:2},1032,["href"])):C("",!0)]),y("div",Ul,[y("div",Pl,[v($,{size:"14px"},{default:p((()=>[v(g(X))])),_:1}),Ml]),y("div",{onClick:a=>Ca(0,l.id),class:"chover dfcolor"},"下架",8,ql)])])])))),128))])):(r(),h(N,{key:1}))],512),[[_,2==a.value]])])),_:1}),m(v(D,{class:"mycard mt20"},{header:p((()=>[y("div",Sl,[y("div",null,[$l,y("span",Dl,"（"+b(na.value)+"）",1)]),v(d,{type:"primary",onClick:c[6]||(c[6]=l=>_a.value=!0)},{default:p((()=>[Il])),_:1})])])),default:p((()=>[va.value.length?(r(),n("div",El,[(r(!0),n(w,null,x(va.value,((l,a)=>(r(),n("div",{class:"imgs_item mb20",key:l.id},[y("div",Fl,[y("img",{src:l.cover_url,alt:""},null,8,Nl),1==l.status?(r(),n("div",Gl,[v($,{size:"14px"},{default:p((()=>[v(g(Y))])),_:1}),Hl])):C("",!0),y("div",{class:"lookicon fcc lookhover",onClick:l=>fa(a)},[v($,{size:"20px"},{default:p((()=>[v(g(B))])),_:1})],8,Rl),y("div",{class:"videoicon fcc lookhover",onClick:a=>g(Q)(l.video_url)},[v($,{size:"40px"},{default:p((()=>[v(g(J))])),_:1})],8,Wl)]),y("div",Al,[y("div",Bl,b(l.video_name),1),y("div",Jl,[y("span",Kl,b(l.link_url?"链接：":"无链接"),1),l.link_url?(r(),h(q,{key:0,type:"primary",target:"_blank",href:"//"+l.link_url},{default:p((()=>[k(b(l.link_url),1)])),_:2},1032,["href"])):C("",!0)]),y("div",Ll,[y("div",Ql,[v($,{size:"14px"},{default:p((()=>[v(g(X))])),_:1}),Tl]),y("div",Xl,[0==l.status?(r(),n("div",{key:0,onClick:a=>{return e=l.id,xa.value=e,void(wa.value=!0);var e},class:"chover dfcolor mr20"},"删除",8,Yl)):C("",!0),y("div",{onClick:a=>Ca(1==l.status?0:1,l.id),class:"chover dfcolor"},b(1==l.status?"下架":"上架"),9,Zl)])])])])))),128))])):(r(),h(N,{key:1})),v(G,{total:na.value,page:da.value,"onUpdate:page":c[7]||(c[7]=l=>da.value=l),onChange:pa,size:ra.value,"onUpdate:size":c[8]||(c[8]=l=>ra.value=l)},null,8,["total","page","size"])])),_:1},512),[[_,2==a.value]]),v(H,{modelValue:wa.value,"onUpdate:modelValue":c[9]||(c[9]=l=>wa.value=l),msg:"确认删除此视频?",onSure:ja},null,8,["modelValue"]),v(za,{modelValue:_a.value,"onUpdate:modelValue":c[15]||(c[15]=l=>_a.value=l),title:"添加视频",width:"380px",onClose:ma},{default:p((()=>[v(ca,{model:g(ka),rules:g(ya),ref_key:"addFormRef",ref:ba},{default:p((()=>[v(I,{label:"选择视频",required:"","label-width":"90px"},{default:p((()=>[y("div",{class:"sel_pool fcc",onClick:c[12]||(c[12]=l=>g(T)("sel_school",2,!0))},[ga.value.id?(r(),n("div",la,[y("img",{src:ga.value.cover_url,alt:""},null,8,aa),y("div",{class:"lookicon fcc lookhover",onClick:c[10]||(c[10]=j((l=>g(L)([ga.value.cover_url],0)),["stop"]))},[v($,{size:"14px"},{default:p((()=>[v(g(B))])),_:1})]),y("div",{class:"videoicon fcc lookhover",onClick:c[11]||(c[11]=j((l=>g(Q)(ga.value.video_url)),["stop"]))},[v($,{size:"20px"},{default:p((()=>[v(g(J))])),_:1})])])):(r(),n("div",ea,[v($,null,{default:p((()=>[v(g(K))])),_:1}),sa]))])])),_:1}),v(I,{label:"视频分类",prop:"video_type","label-width":"90px"},{default:p((()=>[v(F,{modelValue:g(ka).video_type,"onUpdate:modelValue":c[13]||(c[13]=l=>g(ka).video_type=l),placeholder:"请选择视频分类",class:"f1"},{default:p((()=>[(r(!0),n(w,null,x(Z.value,(l=>(r(),h(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(I,{label:"添加链接",prop:"link","label-width":"90px"},{default:p((()=>[v(A,{modelValue:g(ka).link,"onUpdate:modelValue":c[14]||(c[14]=l=>g(ka).link=l),placeholder:"请输入链接"},null,8,["modelValue"])])),_:1}),y("div",ta,[v(d,{onClick:ma},{default:p((()=>[ia])),_:1}),v(d,{type:"primary",onClick:ha,disabled:!ga.value.id},{default:p((()=>[oa])),_:1},8,["disabled"])])])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}))));var ca,da=W(ua,[["__scopeId","data-v-2aae75d2"]]);export{da as default};