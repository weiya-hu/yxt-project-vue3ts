import{u as a,M as e}from"./myData.462790df.js";import{_ as t}from"./MyPage.eca92ca4.js";import{M as l}from"./MyDataUpUser.19f9a69e.js";import{F as s,r as o,G as p,H as r,I as u,X as d,Q as i,i as c,R as n,u as m,P as y,Y as b,a7 as f,U as v,V as h,av as w,O as _,a6 as g}from"./vue.5acda677.js";import{M}from"./MyEmpty.0b7254fc.js";import{_ as j}from"./index.9da98f44.js";import"./date.23847c74.js";import"./MyUpload.e86f2ac1.js";const x={class:"up2b"},V={class:"top-button fsc"},z=h("上传客户"),D={class:"flexr"},U=h("同步SCRM"),k=h("同步CMS"),C=h("同步DSP系统"),S={class:"mytable"};var B=j(s({setup(s){let h=o(0),j=o(1),B=o(!1),I=w(),P=o(!1),R=o([]),q=o([{type:"select",width:100,prop:"select"},{type:"text",lable:"ID",prop:"id",width:150},{type:"text",lable:"人群名称",prop:"group_name",width:200},{type:"text",lable:"人群描述",prop:"group_desc",width:220},{type:"status",lable:"状态",prop:"status",width:100},{type:"text",lable:"用户数",prop:"count",width:100},{type:"date",lable:"创建日期",prop:"create_time",width:100},{type:"operateLook",lable:"操作",width:100,prop:"operate",operatButton:["查看"]}]);const E=async()=>{P.value=!0;let e={current:j.value,type:2,size:10};const{status:t,body:l}=await a(e);P.value=!1,t&&(h.value=l.total,R.value=l.records)};E();const F=(a,e)=>{I.push({path:"/myData/up2cDetails",query:{id:e.id}})},G=()=>{j.value=1,E()};return(a,s)=>{const o=_("el-button"),w=_("el-table"),I=g("loading");return p(),r("div",x,[u("div",V,[d(o,{size:"large",type:"primary",class:"up-user fcc",onClick:s[0]||(s[0]=a=>c(B)?B.value=!0:B=!0)},{default:i((()=>[z])),_:1}),u("div",D,[d(o,{size:"large"},{default:i((()=>[U])),_:1}),d(o,{size:"large"},{default:i((()=>[k])),_:1}),d(o,{size:"large"},{default:i((()=>[C])),_:1})])]),u("div",S,[n((p(),y(w,{data:m(R),size:"large","row-class-name":"my-data-table-row"},{empty:i((()=>[d(M)])),default:i((()=>[(p(!0),r(b,null,f(m(q),((a,t)=>(p(),y(e,{key:t,type:a.type,width:a.width,lable:a.lable,prop:a.prop,operatButton:a.operatButton,onClick:F},null,8,["type","width","lable","prop","operatButton"])))),128))])),_:1},8,["data"])),[[I,m(P)]])]),u("div",null,[m(h)?(p(),y(t,{key:0,total:m(h),modelValue:m(j),"onUpdate:modelValue":s[1]||(s[1]=a=>c(j)?j.value=a:j=a),onChange:E},null,8,["total","modelValue"])):v("",!0)]),d(l,{modelValue:m(B),"onUpdate:modelValue":s[2]||(s[2]=a=>c(B)?B.value=a:B=a),onSubmitSuccess:G},null,8,["modelValue"])])}}}),[["__scopeId","data-v-a77bc988"]]);export{B as default};
