import{q as e,D as a,f as l,o as s,t,a as i,w as d,U as u,V as r,c as o,u as c,S as n,v as f,az as p,av as v,b as m}from"./vue.89ed3d48.js";import{D as _}from"./DetailsHeader.a6f50e8f.js";import{f as b,r as y,p as k}from"./users.cdde8464.js";import{f as g}from"./date.23847c74.js";import{m as w}from"./index.f47187aa.js";import{b as j,a as h}from"./index.3b31d7d7.js";import{_ as x}from"./index.547c0c45.js";import"./request.356cbcf4.js";import"./login.ed01525e.js";const z={class:"companyreview_page"},C=["src"],D={key:0,class:"fcc mt20"},V=u(" 审核拒绝 "),q={class:"fcc mt20"},U=u(" 确定 "),H=u(" 取消 "),K=u(" 审核通过 ");var L=x(e({setup(e){const x=w(),L=a((()=>x.state.typeHash)),M=p(),I=v(),S=M.query.id,A=l({});(async()=>{const e=await b({cid:S});1==e.status&&(A.value=e.body)})();const B=l(!1),E=l(""),F=()=>{E.value="",B.value=!1},G=async()=>{1==(await y({cid:S,fail_reason:E.value})).status&&(x.setKeepList([]),I.back())},J=async()=>{1==(await k({id:S})).status&&(x.setKeepList([]),I.back())};return(e,a)=>{const l=m("el-descriptions-item"),p=m("el-link"),v=m("el-descriptions"),b=m("el-button"),y=m("el-input"),k=m("el-popover"),w=m("el-card");return s(),t("div",z,[i(_),i(w,{class:"card1 mt20"},{default:d((()=>[i(v,{column:1},{default:d((()=>[i(l,{label:"企业名称"},{default:d((()=>[u(r(A.value.name),1)])),_:1}),A.value.industry_id?(s(),o(l,{key:0,label:"所属行业"},{default:d((()=>[u(r(c(j)(A.value.industry_id.split(","),c(L))),1)])),_:1})):n("",!0),i(l,{label:"统一社会信用代码","label-class-name":"icode"},{default:d((()=>[u(r(A.value.code),1)])),_:1}),i(l,{label:"资质照片"},{default:d((()=>[f("img",{src:A.value.license,alt:"",class:"zzimg lookhover",onClick:a[0]||(a[0]=e=>c(h)([A.value.license],0))},null,8,C)])),_:1}),i(l,{label:"证照有效期"},{default:d((()=>[u(r(c(g)(new Date(A.value.left_time),"yyyy-MM-dd")),1)])),_:1}),i(l,{label:"联系人"},{default:d((()=>[u(r(A.value.legal_person),1)])),_:1}),i(l,{label:"联系电话"},{default:d((()=>[u(r(A.value.contact),1)])),_:1}),i(l,{label:"注册地址"},{default:d((()=>[u(r(A.value.address),1)])),_:1}),i(l,{label:"官网地址"},{default:d((()=>[i(p,{type:"primary",href:"//"+A.value.url,target:"_blank"},{default:d((()=>[u(r(A.value.url),1)])),_:1},8,["href"])])),_:1}),i(l,{label:"经营范围"},{default:d((()=>[u(r(A.value.business_scope),1)])),_:1})])),_:1}),2==A.value.status?(s(),t("div",D,[i(k,{placement:"top",width:400,trigger:"click",visible:B.value,"onUpdate:visible":a[3]||(a[3]=e=>B.value=e)},{reference:d((()=>[i(b,{type:"danger",size:"large",onClick:a[1]||(a[1]=e=>B.value=!0)},{default:d((()=>[V])),_:1})])),default:d((()=>[i(y,{modelValue:E.value,"onUpdate:modelValue":a[2]||(a[2]=e=>E.value=e),maxlength:"100",rows:"5",placeholder:"请输入拒绝原因","show-word-limit":"",type:"textarea"},null,8,["modelValue"]),f("div",q,[i(b,{type:"primary",disabled:!E.value,onClick:G},{default:d((()=>[U])),_:1},8,["disabled"]),i(b,{onClick:F},{default:d((()=>[H])),_:1})])])),_:1},8,["visible"]),i(b,{type:"primary",size:"large",onClick:J},{default:d((()=>[K])),_:1})])):n("",!0)])),_:1})])}}}),[["__scopeId","data-v-003c0046"]]);export{L as default};
