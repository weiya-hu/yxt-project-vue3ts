var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{F as u,f as s,r as p,a as i,G as n,H as v,X as c,I as m,Q as f,K as b,u as y,W as _,P as w,R as h,Y as g,a7 as V,V as j,av as C,O as k,a6 as O}from"./vue.5acda677.js";import{f as x}from"./date.23847c74.js";import{a as U,M as P}from"./MyEmpty.201b711b.js";import{_ as D}from"./MyCascader.f59deb4c.js";import{T as M}from"./TopBtns.f162de6f.js";import{_ as I,m as F,r as z,n as E,o as H,p as R}from"./index.585b2ef6.js";import{b as S,c as T,d as q}from"./findC.f5d5610c.js";const A={class:"teldata_page_c"},B={class:"mytable"},G={class:"fcs"},K=j("查看"),N={key:1},Q={class:"fcs fjend"},W=j("取消"),X=j("提交"),Y=u((J=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(t)for(var a of t(l))d.call(l,a)&&r(e,a,l[a]);return e})({},{name:"号码段获客C"}),l(J,a({setup(e){const l=F(),a=s((()=>l.state.addressHash)),t=C(),o=p(1),d=p(0),r=()=>{S({current:o.value,size:10}).then((e=>{1==e.status&&(u.value=e.body.records,d.value=e.body.total)}))};r();const u=p([]),I=p([]),Y=e=>{I.value=e},J=()=>{r()},L=p([]),Z=p({});T().then((e=>{Z.value=e.body}));const $=e=>{L.value=Z.value[e].segments},ee=p(!1),le=()=>{L.value=[],ee.value=!1,oe.value=!1,de.value.resetFields()},ae=p({people:"",desc:"",addr:[],operator:"",tels:[]}),te=i({people:[{required:!0,message:"请输入人群名称",trigger:"blur"}]}),oe=p(!1),de=p(),re=()=>{de.value.validate((e=>{if(!e)return!1;oe.value=!0,q({city:ae.value.addr[1]||0,district:ae.value.addr[2]||0,group_desc:ae.value.desc,group_name:ae.value.people,province:ae.value.addr[0]||0,segment:ae.value.tels.join()}).then((e=>{1==e.status&&(le(),r()),oe.value=!1}))}))};return(e,l)=>{const r=k("el-table-column"),s=k("el-link"),p=k("el-table"),i=k("el-input"),C=k("el-form-item"),I=k("el-radio"),F=k("el-radio-group"),S=k("el-option"),T=k("el-select"),q=k("el-button"),ue=k("el-form"),se=k("el-dialog"),pe=O("loading");return n(),v("div",A,[c(M,{onAdd:l[0]||(l[0]=e=>ee.value=!0)}),m("div",B,[c(p,{data:u.value,style:{width:"100%"},onSelectionChange:Y},{empty:f((()=>[c(U)])),default:f((()=>[c(r,{type:"selection",width:"50"}),c(r,{property:"id",label:"ID",width:"150"}),c(r,{property:"group_name",label:"人群名称",width:"170"}),c(r,{property:"group_desc",label:"人群描述"}),c(r,{property:"status",label:"状态",width:"160"},{default:f((e=>[m("div",G,[m("div",{class:b(["status_dot",y(z)(e.row.status).className])},null,2),m("div",null,_(y(z)(e.row.status).text),1)])])),_:1}),c(r,{label:"地区"},{default:f((e=>[m("div",null,_(y(E)(y(H)(e.row.province,e.row.city,e.row.district),y(a))),1)])),_:1}),c(r,{property:"count",label:"覆盖用户人数",width:"140"},{default:f((e=>[m("div",null,_(e.row.count),1)])),_:1}),c(r,{property:"create_time",label:"创建日期",width:"190"},{default:f((e=>[m("div",null,_(y(x)(new Date(e.row.create_time),"yyyy-MM-dd")),1)])),_:1}),c(r,{property:"source",label:"来源",width:"140"},{default:f((e=>[m("div",null,_(y(R)(e.row.source)),1)])),_:1}),c(r,{property:"source",label:"操作",width:"150",fixed:"right"},{default:f((e=>[4==e.row.status?(n(),w(s,{key:0,type:"primary",onClick:l=>{return a=e.row.id,void t.push("/findC/telDataDetails?id="+a);var a}},{default:f((()=>[K])),_:2},1032,["onClick"])):(n(),v("div",N,"---"))])),_:1})])),_:1},8,["data"])]),c(P,{total:d.value,modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),onChange:J},null,8,["total","modelValue"]),c(se,{modelValue:ee.value,"onUpdate:modelValue":l[7]||(l[7]=e=>ee.value=e),title:"新建数据",width:"500px",onClose:le},{default:f((()=>[h((n(),w(ue,{class:"myform",ref_key:"addFormRef",ref:de,model:ae.value,rules:y(te)},{default:f((()=>[c(C,{label:"人群名称",prop:"people"},{default:f((()=>[c(i,{modelValue:ae.value.people,"onUpdate:modelValue":l[2]||(l[2]=e=>ae.value.people=e),placeholder:"请输入人群名称"},null,8,["modelValue"])])),_:1}),c(C,{label:"选择地区",prop:"addr"},{default:f((()=>[c(D,{modelValue:ae.value.addr,"onUpdate:modelValue":l[3]||(l[3]=e=>ae.value.addr=e),type:"address"},null,8,["modelValue"])])),_:1}),c(C,{label:"人群描述",prop:"desc"},{default:f((()=>[c(i,{modelValue:ae.value.desc,"onUpdate:modelValue":l[4]||(l[4]=e=>ae.value.desc=e),placeholder:"可对人群进行简单的描述",type:"textarea",maxlength:"150","show-word-limit":"",rows:"4",resize:"none"},null,8,["modelValue"])])),_:1}),c(C,{label:"运营商",prop:"operator"},{default:f((()=>[c(F,{modelValue:ae.value.operator,"onUpdate:modelValue":l[5]||(l[5]=e=>ae.value.operator=e),onChange:$},{default:f((()=>[(n(!0),v(g,null,V(Z.value,(e=>(n(),w(I,{label:e.id,key:e.id},{default:f((()=>[j(_(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(C,{label:"号码段",prop:"tels"},{default:f((()=>[c(T,{modelValue:ae.value.tels,"onUpdate:modelValue":l[6]||(l[6]=e=>ae.value.tels=e),multiple:"",placeholder:"请选择号码段",class:"w100",disabled:0==L.value.length},{default:f((()=>[(n(!0),v(g,null,V(L.value,((e,l)=>(n(),w(S,{key:l,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),m("div",Q,[c(q,{onClick:le},{default:f((()=>[W])),_:1}),c(q,{type:"primary",onClick:re},{default:f((()=>[X])),_:1})])])),_:1},8,["model","rules"])),[[pe,oe.value]])])),_:1},8,["modelValue"])])}}}))));var J,L=I(Y,[["__scopeId","data-v-bebd0910"]]);export{L as default};
