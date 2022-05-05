import{F as e,G as a,H as l,I as s,r as t,a as d,O as o,X as n,Q as c,u,a9 as i,U as r,Y as p,a7 as v,W as m,K as f,P as _,V as h,$ as y,R as b,S as g,at as k,au as C}from"./vue.5acda677.js";import{a as V,_ as w,d as x,f as E,h as U,i as H,j,e as N,k as R}from"./index.03fefcec.js";import{_ as T}from"./MyCascader.b6334ed3.js";const L=e({name:"CloseBold"}),z={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},B=[s("path",{fill:"currentColor",d:"M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z"},null,-1)];var F=V(L,[["render",function(e,s,t,d,o,n){return a(),l("svg",z,B)}]]);const K=e=>(k("data-v-09ecfe6c"),e=e(),C(),e),S={class:"search_components"},I={class:"search_main fc"},M={class:"iptbox fsc"},q={class:"his_search fcs els"},G=K((()=>s("div",null,"历史搜索：",-1))),O=["onClick"],P={class:"topitems fcs"},Q={class:"contact_mode fcs"},W={class:"fcs btns"},X=h("查询条件"),Y=h("保存条件"),$=h("重置条件"),A={class:"fcs"},D={class:"fsc ditems"},J={class:"dname els"},Z={class:"dbtns fcs"},ee=["onClick"],ae=K((()=>s("div",{class:"dline"},null,-1))),le=K((()=>s("div",null,"选择",-1))),se={key:1,class:"empty_drop"},te={class:"now_condition fcs"},de=K((()=>s("div",{class:"fs0"},"筛选条件：",-1))),oe={class:"list flex"},ne={class:"flex fjend"},ce=h("取消"),ue=h("确认");var ie=w(e({props:{words:null,hasHeight:{type:Boolean,default:!1},placeholder:null},emits:["heightSearch","search"],setup(e,{emit:k}){const C=e,V=t(!1),w=t([]),L=t([]);C.hasHeight&&x().then((e=>{1==e.status&&(w.value=e.body.c_type,L.value=e.body.contact)}));const z=d({ctype:[],industry_id:[],addr:[],business_scope:"",contact:[]}),B=t(),K=e=>{e&&e.resetFields()},ie=()=>{ye.value="条件组",K(B.value),we.business_scope="",we.industry_id="",we.addr="",we.contact="",we.ctype="",Ue.value=!1},re=t(!1),pe=d({title:""}),ve=t(),me=d({title:[{required:!0,message:"请输入条件组名称",trigger:"change"}]}),fe=()=>{re.value=!1,pe.title="",K(ve.value)},_e=()=>{let e={},a=0,l=0;z.ctype.forEach((e=>{a|=Number(e)})),z.contact.forEach((e=>{l|=Number(e)}));let s=z.industry_id.join(",");return e={province:Number(z.addr[0])||"",city:Number(z.addr[1])||"",district:Number(z.addr[2])||"",business_scope:z.business_scope,industry_id:s,contact:l,company_type:a,conditions_name:pe.title},e},he=()=>{H(_e()).then((e=>{1==e.status&&(ye.value=pe.title,re.value=!1,ge())}))},ye=t("条件组"),be=t([]),ge=async()=>{const e=await j({current:1,size:10});1==e.status&&(be.value=e.body)};C.hasHeight&&ge();const ke=t(),Ce=e=>{ie(),ye.value=e.conditions_name,L.value.forEach((a=>{e.contact&a.value&&z.contact.push(a.value)}));[e.province,e.city,e.district].forEach((e=>{e&&z.addr.push(Number(e))})),z.industry_id=e.industry_id.split(","),z.business_scope=e.business_scope,w.value.forEach((a=>{e.company_type&a.value&&z.ctype.push(a.value)})),He()},Ve={business_scope:"经营范围",industry_id:"行业分类",addr:"省份地区",contact:"联系方式",ctype:"企业类型"},we=d({business_scope:"",industry_id:"",addr:"",contact:"",ctype:""}),xe=t(""),Ee=()=>{xe.value.trim().length<1||xe.value.trim().length>36?N("输入长度须在 1 ~ 36 之间"):k("search",xe.value.trim())},Ue=t(!1),He=()=>{we.business_scope=z.business_scope;let e="",a="";z.contact.forEach((a=>{var l;e+=(null==(l=L.value.find((e=>e.value==a)))?void 0:l.name)+"，"})),we.contact=e.substring(0,e.length-1),z.ctype.forEach((e=>{var l;a+=(null==(l=w.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),we.ctype=a.substring(0,a.length-1),we.industry_id=Re.value.getText(z.industry_id),we.addr=Ne.value.getText(z.addr),Ue.value=!0},je=e=>{switch(e){case"contact":let a="";z.contact.forEach((e=>{var l;a+=(null==(l=L.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),we.contact=a.substring(0,a.length-1);break;case"ctype":let l="";z.ctype.forEach((e=>{var a;l+=(null==(a=w.value.find((a=>a.value==e)))?void 0:a.name)+"，"})),we.ctype=l.substring(0,l.length-1);break;case"industry_id":we.industry_id=Re.value.getText(z.industry_id);break;case"addr":we.addr=Ne.value.getText(z.addr);break;default:we[e]=z[e]}Ue.value=!0},Ne=t(),Re=t(),Te=()=>{k("heightSearch",_e())};return(t,d)=>{const k=o("el-icon"),C=o("el-input"),x=o("el-form-item"),H=o("el-checkbox"),j=o("el-checkbox-group"),N=o("el-button"),K=o("el-dropdown-item"),_e=o("el-dropdown-menu"),ge=o("el-dropdown"),He=o("el-form"),Le=o("el-tag"),ze=o("el-dialog");return a(),l("div",S,[s("div",I,[s("div",M,[n(C,{modelValue:xe.value,"onUpdate:modelValue":d[0]||(d[0]=e=>xe.value=e),placeholder:e.placeholder,onKeyup:i(Ee,["enter"])},{prefix:c((()=>[n(k,{class:"searchicon"},{default:c((()=>[n(u(E))])),_:1})])),suffix:c((()=>[s("div",{class:"searchbtn",onClick:Ee},"查询一下")])),_:1},8,["modelValue","placeholder","onKeyup"]),e.hasHeight?(a(),l("div",{key:0,class:"heisearch",onClick:d[1]||(d[1]=e=>V.value=!0)},"高级查询")):r("",!0)]),s("div",q,[G,(a(!0),l(p,null,v(e.words,(e=>(a(),l("span",{key:e.id,onClick:a=>{xe.value=e.keyword,Ee()}},m(e.keyword),9,O)))),128))])]),e.hasHeight?(a(),l("div",{key:0,class:f(["height_searchbox",{height_searchbox_show:V.value,height_condition_show:Ue.value}])},[n(k,{onClick:d[2]||(d[2]=e=>{V.value=!1,Ue.value=!1}),class:"closebtn rotate",size:"18px"},{default:c((()=>[n(u(F))])),_:1}),n(He,{class:"myform",ref_key:"formRef",ref:B,model:u(z)},{default:c((()=>[s("div",P,[n(x,{label:"经营范围",prop:"business_scope"},{default:c((()=>[n(C,{modelValue:u(z).business_scope,"onUpdate:modelValue":d[3]||(d[3]=e=>u(z).business_scope=e),placeholder:"请输入经营范围",maxlength:"36",onChange:d[4]||(d[4]=e=>je("business_scope"))},null,8,["modelValue"])])),_:1}),n(x,{label:"行业分类",prop:"industry_id"},{default:c((()=>[n(T,{modelValue:u(z).industry_id,"onUpdate:modelValue":d[5]||(d[5]=e=>u(z).industry_id=e),type:"type",ref_key:"typeCRef",ref:Re,onChange:d[6]||(d[6]=e=>je("industry_id"))},null,8,["modelValue"])])),_:1}),n(x,{label:"省份地区",prop:"addr"},{default:c((()=>[n(T,{modelValue:u(z).addr,"onUpdate:modelValue":d[7]||(d[7]=e=>u(z).addr=e),type:"address",ref_key:"addrCRef",ref:Ne,onChange:d[8]||(d[8]=e=>je("addr"))},null,8,["modelValue"])])),_:1})]),s("div",Q,[n(x,{label:"联系方式",prop:"contact"},{default:c((()=>[n(j,{modelValue:u(z).contact,"onUpdate:modelValue":d[9]||(d[9]=e=>u(z).contact=e),onChange:d[10]||(d[10]=e=>je("contact"))},{default:c((()=>[(a(!0),l(p,null,v(L.value,(e=>(a(),_(H,{label:e.value,key:e.id},{default:c((()=>[h(m(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})]),n(x,{label:"企业类型",prop:"ctype"},{default:c((()=>[n(j,{modelValue:u(z).ctype,"onUpdate:modelValue":d[11]||(d[11]=e=>u(z).ctype=e),onChange:d[12]||(d[12]=e=>je("ctype"))},{default:c((()=>[(a(!0),l(p,null,v(w.value,(e=>(a(),_(H,{label:e.value,key:e.id},{default:c((()=>[h(m(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),s("div",W,[n(N,{type:"primary",onClick:Te},{default:c((()=>[X])),_:1}),n(N,{onClick:d[13]||(d[13]=e=>re.value=!0)},{default:c((()=>[Y])),_:1}),n(N,{onClick:ie},{default:c((()=>[$])),_:1}),n(ge,{onCommand:Ce,ref_key:"dropRef",ref:ke},{dropdown:c((()=>[be.value.length?(a(),_(_e,{key:0},{default:c((()=>[(a(!0),l(p,null,v(be.value,((e,l)=>(a(),_(K,{command:e,key:e.id},{default:c((()=>[s("div",D,[s("div",J,m(e.conditions_name),1),s("div",Z,[s("div",{onClick:y((a=>((e,a)=>{R({id:e.id}).then((l=>{1==l.status&&(be.value.splice(a,1),ke.value.handleClose(),e.conditions_name==ye.value&&(ye.value="条件组"))}))})(e,l)),["stop"])},"删除",8,ee),ae,le])])])),_:2},1032,["command"])))),128))])),_:1})):(a(),l("div",se,"暂无数据"))])),default:c((()=>[s("div",A,[s("div",null,m(ye.value),1),n(k,{class:"right_icon"},{default:c((()=>[n(u(U))])),_:1})])])),_:1},512)])])),_:1},8,["model"]),b(s("div",te,[de,s("div",oe,[(a(!0),l(p,null,v(u(we),((e,s)=>(a(),l(p,null,[e?(a(),_(Le,{key:s,closable:"",class:"mytag",onClose:e=>(e=>{we[e]="","business_scope"==e?z.business_scope="":z[e]=[]})(s)},{default:c((()=>[h(m(Ve[s])+"："+m(e),1)])),_:2},1032,["onClose"])):r("",!0)],64)))),256))])],512),[[g,Ue.value]])],2)):r("",!0),e.hasHeight?(a(),_(ze,{key:1,modelValue:re.value,"onUpdate:modelValue":d[15]||(d[15]=e=>re.value=e),title:"新建筛选",width:"500px",onClose:fe},{footer:c((()=>[s("span",ne,[n(N,{onClick:fe},{default:c((()=>[ce])),_:1}),n(N,{type:"primary",disabled:!u(pe).title,onClick:he},{default:c((()=>[ue])),_:1},8,["disabled"])])])),default:c((()=>[n(He,{class:"myform no_margin",model:u(pe),rules:u(me),ref_key:"addFormRef",ref:ve},{default:c((()=>[n(x,{label:"条件组名称",prop:"title"},{default:c((()=>[n(C,{modelValue:u(pe).title,"onUpdate:modelValue":d[14]||(d[14]=e=>u(pe).title=e),placeholder:"请输入条件组名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])):r("",!0)])}}}),[["__scopeId","data-v-09ecfe6c"]]);export{ie as T};
