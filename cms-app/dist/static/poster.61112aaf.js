var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{M as u,a as p}from"./MyDataUpUser.e9448bba.js";import{_ as d}from"./MyPage.b41c257e.js";import{M as i}from"./MyDialog.1193d6ca.js";import{M as c}from"./MyEmpty.2bbdaf2d.js";import{a as n,b as m}from"./custom.8e7dc6a9.js";import{a as y}from"./index.9e9da242.js";import{d as v,i as b,o as f,t as w,v as h,a as j,w as _,Q as g,c as k,F as V,a2 as C,S as M,U as O,b as S,a5 as U}from"./vue.ca737a59.js";import"./date.23847c74.js";import"./MyUpload.5a767479.js";const P={class:"custom_poster"},x={class:"top-button fsc"},D=O("  创建  "),z={class:"flexr"},I=O("同步SCRM"),E=O("同步CMS"),F=O("同步DSP系统"),Q={class:"mytable"},R={class:"fcs"},$=O("删除"),q={key:1,class:"line"},A=O("驳回原因"),B=O("查看"),G={key:4},H=v((J=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&r(e,t,a[t]);return e})({},{name:"个性化内容库-海报库"}),a(J,t({setup(e){const a=b([{type:"select",width:100,prop:"select"},{type:"text",lable:"需求ID",prop:"id",width:150},{type:"text",lable:"标题",prop:"title",width:200},{type:"text",lable:"描述",prop:"detail",width:220},{type:"date",lable:"创建日期",prop:"create_time",width:100},{type:"status",lable:"状态",prop:"status",width:100}]),t=b(!1),l=b(!1),s=b(0),o=b(1),r=b([]),y=async()=>{l.value=!0;const e=await n({size:10,current:o.value},3);l.value=!1,1==e.status&&(s.value=e.body.total,r.value=e.body.records)};y();const v=()=>{t.value=!1,y()},O=b(""),H=b(!1),J=()=>{m({id:O.value},3).then((e=>{1==e.status&&(y(),H.value=!1)}))},K=b(!1),L=b("");return(e,n)=>{const m=S("el-button"),b=S("el-link"),N=S("el-table-column"),T=S("el-table"),W=U("loading");return f(),w("div",P,[h("div",x,[j(m,{size:"large",type:"primary",class:"up-user fcc",onClick:n[0]||(n[0]=e=>t.value=!0)},{default:_((()=>[D])),_:1}),h("div",z,[j(m,{size:"large"},{default:_((()=>[I])),_:1}),j(m,{size:"large"},{default:_((()=>[E])),_:1}),j(m,{size:"large"},{default:_((()=>[F])),_:1})])]),h("div",Q,[g((f(),k(T,{data:r.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:_((()=>[j(c)])),default:_((()=>[(f(!0),w(V,null,C(a.value,((e,a)=>(f(),k(p,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),j(N,{width:"150"},{default:_((({row:a})=>[h("div",R,[2!=a.status?(f(),k(b,{key:0,type:"primary",onClick:e=>{return t=a.id,O.value=t,void(H.value=!0);var t}},{default:_((()=>[$])),_:2},1032,["onClick"])):M("",!0),1!=a.status&&2!=a.status?(f(),w("div",q)):M("",!0),3==a.status?(f(),k(b,{key:2,type:"primary",onClick:e=>{L.value=a.fail_reason,K.value=!0}},{default:_((()=>[A])),_:2},1032,["onClick"])):M("",!0),4==a.status?(f(),k(b,{key:3,type:"primary",onClick:t=>e.$router.push("/custom/posterDetails?id="+a.id)},{default:_((()=>[B])),_:2},1032,["onClick"])):M("",!0),2==a.status?(f(),w("div",G,"---")):M("",!0)])])),_:1})])),_:1},8,["data"])),[[W,l.value]])]),j(i,{modelValue:K.value,"onUpdate:modelValue":n[1]||(n[1]=e=>K.value=e),msg:L.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),j(i,{modelValue:H.value,"onUpdate:modelValue":n[2]||(n[2]=e=>H.value=e),msg:"确认删除这条数据吗?",onSure:J},null,8,["modelValue"]),j(d,{total:s.value,modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=e=>o.value=e),onChange:y},null,8,["total","modelValue"]),j(u,{modelValue:t.value,"onUpdate:modelValue":n[4]||(n[4]=e=>t.value=e),onSubmitSuccess:v,type:3},null,8,["modelValue"])])}}}))));var J,K=y(H,[["__scopeId","data-v-a895436c"]]);export{K as default};
