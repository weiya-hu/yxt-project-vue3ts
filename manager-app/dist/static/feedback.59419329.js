import{t as a,u as e,v as l,w as t}from"./service.38df9cc3.js";import{M as s}from"./MyEmpty.72a1acd1.js";import{M as d}from"./MyDialog.50f39301.js";import{M as o}from"./MyPage.512ed0c7.js";import{q as u,f as n,o as r,t as c,a as i,w as m,v as p,a3 as v,U as f,V as y,L as b,b as _}from"./vue.89ed3d48.js";import"./request.aa9790cc.js";import"./index.fdca730b.js";import"./empty.f131d8fb.js";const g={class:"feedback_page"},w=p("div",null,"反馈列表",-1),j={class:"mytable"},k={class:"fcs"},M={class:"fcs"},z=f("修改状态"),C=f("已处理"),U=f("未处理"),V=p("div",{class:"line"},null,-1),h=f("删除"),q=u({setup(u){const q=n([]);(async()=>{const{status:e,body:l}=await a();1==e&&(q.value=l)})();const x=n([]),D=n(1),E=n(20),L=n(0),P=async()=>{const{status:a,body:l}=await e({size:E.value,current:D.value});1==a&&(L.value=l.total,x.value=l.records)};P();const S=async a=>{const{status:e}=await l({id:a[1],status:a[0]});1==e&&P()},A=n(""),B=n(!1),F=async()=>{1==(await t({id:A.value})).status&&(B.value=!1,P())};return(a,e)=>{const l=_("el-table-column"),t=_("el-link"),u=_("el-dropdown-item"),n=_("el-dropdown-menu"),G=_("el-dropdown"),H=_("el-table"),I=_("el-card");return r(),c("div",g,[i(I,{class:"mycard"},{header:m((()=>[w])),default:m((()=>[p("div",j,[i(H,{data:x.value,border:"",draggable:""},{empty:m((()=>[i(s)])),default:m((()=>[i(l,{label:"类型"},v({_:2},[q.value.length?{name:"default",fn:m((({row:a})=>[f(y(q.value.find((e=>e.id==a.feedback_type)).feedback_type),1)]))}:void 0]),1024),i(l,{prop:"content",label:"反馈内容"}),i(l,{prop:"mobile",label:"联系电话"}),i(l,{prop:"status",label:"处理状态"},{default:m((({row:a})=>[p("div",k,[p("div",{class:b(["status_dot",1==a.status?"sdot_g":"sdot_r"])},null,2),p("div",null,y(1==a.status?"已处理":"未处理"),1)])])),_:1}),i(l,{label:"操作"},{default:m((({row:a})=>[p("div",M,[i(G,{trigger:"click",onCommand:S},{dropdown:m((()=>[i(n,null,{default:m((()=>[i(u,{command:[1,a.id]},{default:m((()=>[C])),_:2},1032,["command"]),i(u,{command:[0,a.id]},{default:m((()=>[U])),_:2},1032,["command"])])),_:2},1024)])),default:m((()=>[i(t,{type:"primary"},{default:m((()=>[z])),_:1})])),_:2},1024),V,i(t,{type:"primary",onClick:e=>{return l=a.id,A.value=l,void(B.value=!0);var l}},{default:m((()=>[h])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])]),i(o,{total:L.value,page:D.value,"onUpdate:page":e[0]||(e[0]=a=>D.value=a),onChange:P,size:E.value,"onUpdate:size":e[1]||(e[1]=a=>E.value=a)},null,8,["total","page","size"])])),_:1}),i(d,{modelValue:B.value,"onUpdate:modelValue":e[2]||(e[2]=a=>B.value=a),msg:"此反馈记录删除后无法撤回，请谨慎删除！",onSure:F},null,8,["modelValue"])])}}});export{q as default};