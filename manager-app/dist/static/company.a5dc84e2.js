var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{M as i}from"./Mypage.53af444b.js";import{M as p}from"./MyEmpty.8e216a46.js";import{i as d}from"./users.4d9fc8d6.js";import{m as n}from"./index.46ed79dd.js";import{b as u,s as c}from"./index.6c11e008.js";import{G as m,u as y,g as b,o as f,H as v,a as w,w as j,I as g,a2 as h,C as _,a1 as O,a0 as x,c as k,b as C}from"./vue.73bee448.js";import"./index.aefc30ce.js";import"./tinymce.5416ef76.js";import"./empty.f131d8fb.js";import"./request.65081ce8.js";import"./login.857dc837.js";const P={class:"company_page"},z=g("div",{class:"ftitle"},"企业管理",-1),M={class:"mytable"},H={class:"fcs"},E=O("详细信息"),I={key:0,class:"line"},U=O("认证审核"),$=m((q=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))l.call(a,t)&&o(e,t,a[t]);return e})({},{name:"Company"}),a(q,t({setup(e){const a=n(),t=y((()=>a.state.addressHash)),s=y((()=>a.state.typeHash)),r=b([]),l=b(1),o=b(20),m=b(0),$=async()=>{const e=await d({size:o.value,current:l.value});1==e.status&&(r.value=e.body.records,m.value=e.body.total)};return $(),(e,a)=>{const d=C("el-table-column"),n=C("el-link"),y=C("el-table"),b=C("el-card");return f(),v("div",P,[z,w(b,{class:"mycard",header:"企业列表"},{default:j((()=>[g("div",M,[w(y,{data:r.value,border:"",draggable:""},{empty:j((()=>[w(p)])),default:j((()=>[w(d,{prop:"company_name",label:"企业名称",width:"200"}),w(d,{prop:"industry_id",label:"所属行业"},{default:j((({row:e})=>[g("div",null,h(_(u)(e.industry_id.split(","),_(s),"last")),1)])),_:1}),w(d,{label:"注册地"},{default:j((({row:e})=>[g("div",null,h(_(u)(_(c)(e.province,e.city,e.district),_(t))),1)])),_:1}),w(d,{prop:"legal_person",label:"联系人",width:"100"}),w(d,{prop:"contact",label:"联系电话",width:"120px"}),w(d,{property:"user_name",label:"认证用户",width:"150"}),w(d,{property:"user_mobile",label:"认证用户电话",width:"120px"}),w(d,{property:"status",label:"认证状态",width:"100px"},{default:j((({row:e})=>[O(h(2==e.status?"认证中":3==e.status?"认证通过":"认证失败"),1)])),_:1}),w(d,{label:"操作",fixed:"right",width:"200"},{default:j((({row:a})=>[g("div",H,[w(n,{type:"primary",onClick:t=>e.$router.push("companydetails?id="+a.id)},{default:j((()=>[E])),_:2},1032,["onClick"]),2==a.status?(f(),v("span",I)):x("",!0),2==a.status?(f(),k(n,{key:1,type:"primary",onClick:t=>e.$router.push("companyreview?id="+a.id)},{default:j((()=>[U])),_:2},1032,["onClick"])):x("",!0)])])),_:1})])),_:1},8,["data"])]),w(i,{total:m.value,page:l.value,"onUpdate:page":a[0]||(a[0]=e=>l.value=e),onChange:$,size:o.value,"onUpdate:size":a[1]||(a[1]=e=>o.value=e)},null,8,["total","page","size"])])),_:1})])}}}))));var q;export{$ as default};