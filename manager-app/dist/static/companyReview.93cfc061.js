import{G as e,u as a,g as l,o as s,H as t,a as i,w as u,a1 as c,a2 as d,c as r,C as o,a0 as n,I as v,az as m,av as p,b as f}from"./vue.73bee448.js";import{D as _}from"./DetailsHeader.159e29ee.js";import{k as y,r as b,p as k}from"./users.4d9fc8d6.js";import{f as g}from"./date.23847c74.js";import{m as j}from"./index.46ed79dd.js";import{b as w,a as h}from"./index.6c11e008.js";import{_ as z}from"./index.aefc30ce.js";import"./request.65081ce8.js";import"./login.857dc837.js";import"./tinymce.5416ef76.js";const C={class:"companyreview_page"},x=["src"],D=["src"],H={key:0,class:"fcc mt20"},V=c(" 审核拒绝 "),q={class:"fcc mt20"},I=c(" 确定 "),K=c(" 取消 "),L=c(" 审核通过 ");var M=z(e({setup(e){const z=j(),M=a((()=>z.state.typeHash)),U=m(),G=p(),A=U.query.id,B=l({});(async()=>{const e=await y({cid:A});1==e.status&&(e.body.license=e.body.license.split(","),B.value=e.body)})();const E=l(!1),F=l(""),J=()=>{F.value="",E.value=!1},N=async()=>{1==(await b({cid:A,fail_reason:F.value})).status&&(z.setKeepList([]),G.back())},O=async()=>{1==(await k({id:A})).status&&(z.setKeepList([]),G.back())};return(e,a)=>{const l=f("el-descriptions-item"),m=f("el-link"),p=f("el-descriptions"),y=f("el-button"),b=f("el-input"),k=f("el-popover"),j=f("el-card");return s(),t("div",C,[i(_),i(j,{class:"card1 mt20"},{default:u((()=>[i(p,{column:1},{default:u((()=>[i(l,{label:"企业名称"},{default:u((()=>[c(d(B.value.name),1)])),_:1}),B.value.industry_id?(s(),r(l,{key:0,label:"所属行业"},{default:u((()=>[c(d(o(w)(B.value.industry_id.split(","),o(M))),1)])),_:1})):n("",!0),i(l,{label:"统一社会信用代码","label-class-name":"icode"},{default:u((()=>[c(d(B.value.code),1)])),_:1}),i(l,{label:"资质照片"},{default:u((()=>[B.value.license&&B.value.license[0]?(s(),t("img",{key:0,src:B.value.license[0],alt:"",class:"zzimg lookhover",onClick:a[0]||(a[0]=e=>o(h)(B.value.license,0))},null,8,x)):n("",!0),B.value.license&&B.value.license[1]?(s(),t("img",{key:1,src:B.value.license[1],alt:"",class:"zzimg lookhover ml20",onClick:a[1]||(a[1]=e=>o(h)(B.value.license,1))},null,8,D)):n("",!0)])),_:1}),B.value.left_time?(s(),r(l,{key:1,label:"证照有效期"},{default:u((()=>[c(d(4102415999e3==B.value.left_time?"永久":o(g)(new Date(B.value.left_time),"yyyy-MM-dd")),1)])),_:1})):n("",!0),i(l,{label:"联系人"},{default:u((()=>[c(d(B.value.legal_person),1)])),_:1}),i(l,{label:"联系电话"},{default:u((()=>[c(d(B.value.contact),1)])),_:1}),i(l,{label:"注册地址"},{default:u((()=>[c(d(B.value.address),1)])),_:1}),i(l,{label:"官网地址"},{default:u((()=>[i(m,{type:"primary",href:"//"+B.value.url,target:"_blank"},{default:u((()=>[c(d(B.value.url),1)])),_:1},8,["href"])])),_:1}),i(l,{label:"经营范围"},{default:u((()=>[c(d(B.value.business_scope),1)])),_:1})])),_:1}),2==B.value.status?(s(),t("div",H,[i(k,{placement:"top",width:400,trigger:"click",visible:E.value,"onUpdate:visible":a[4]||(a[4]=e=>E.value=e)},{reference:u((()=>[i(y,{type:"danger",size:"large",onClick:a[2]||(a[2]=e=>E.value=!0)},{default:u((()=>[V])),_:1})])),default:u((()=>[i(b,{modelValue:F.value,"onUpdate:modelValue":a[3]||(a[3]=e=>F.value=e),maxlength:"100",rows:"5",placeholder:"请输入拒绝原因","show-word-limit":"",type:"textarea"},null,8,["modelValue"]),v("div",q,[i(y,{type:"primary",disabled:!F.value,onClick:N},{default:u((()=>[I])),_:1},8,["disabled"]),i(y,{onClick:J},{default:u((()=>[K])),_:1})])])),_:1},8,["visible"]),i(y,{type:"primary",size:"large",onClick:O},{default:u((()=>[L])),_:1})])):n("",!0)])),_:1})])}}}),[["__scopeId","data-v-724b6f52"]]);export{M as default};
