var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{M as u,a as d}from"./MyDataUpUser.3a6f8460.js";import{_ as i}from"./MyPage.092a21a7.js";import{M as p}from"./MyDialog.3dd8c671.js";import{M as n}from"./MyEmpty.5007fa64.js";import{a as c,b as m}from"./custom.c3a7e27c.js";import{a as y}from"./index.d0f073cb.js";import{y as v,r as f,z as b,A as w,B as _,_ as h,T as j,U as g,S as k,G as V,a8 as C,X as M,Y as O,a4 as S,ab as U}from"./vue.92f8d02a.js";import"./date.23847c74.js";import"./MyUpload.6a53f221.js";const P={class:"custom_video"},x={class:"top-button fsc"},z=O("  创建  "),D={class:"flexr"},I=O("同步SCRM"),E=O("同步CMS"),A=O("同步DSP系统"),B={class:"mytable"},G={class:"fcs"},R=O("删除"),T={key:1,class:"line"},X=O("驳回原因"),Y=O("查看"),$={key:4},q=v((F=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&r(e,t,a[t]);return e})({},{name:"个性化内容库-视频库"}),a(F,t({setup(e){const a=f([{type:"select",width:100,prop:"select"},{type:"text",lable:"需求ID",prop:"id",width:150},{type:"text",lable:"标题",prop:"title",width:200},{type:"text",lable:"描述",prop:"detail",width:220},{type:"date",lable:"创建日期",prop:"create_time",width:100},{type:"status",lable:"状态",prop:"status",width:100}]),t=f(!1),l=f(!1),s=f(0),o=f(1),r=f([]),y=async()=>{l.value=!0;const e=await c({size:10,current:o.value},4);l.value=!1,1==e.status&&(s.value=e.body.total,r.value=e.body.records)};y();const v=()=>{t.value=!1,y()},O=f(""),q=f(!1),F=()=>{m({id:O.value},4).then((e=>{1==e.status&&(y(),q.value=!1)}))},H=f(!1),J=f("");return(e,c)=>{const m=S("el-button"),f=S("el-link"),K=S("el-table-column"),L=S("el-table"),N=U("loading");return b(),w("div",P,[_("div",x,[h(m,{size:"large",type:"primary",class:"up-user fcc",onClick:c[0]||(c[0]=e=>t.value=!0)},{default:j((()=>[z])),_:1}),_("div",D,[h(m,{size:"large"},{default:j((()=>[I])),_:1}),h(m,{size:"large"},{default:j((()=>[E])),_:1}),h(m,{size:"large"},{default:j((()=>[A])),_:1})])]),_("div",B,[g((b(),k(L,{data:r.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:j((()=>[h(n)])),default:j((()=>[(b(!0),w(V,null,C(a.value,((e,a)=>(b(),k(d,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),h(K,{width:"150"},{default:j((({row:a})=>[_("div",G,[2!=a.status?(b(),k(f,{key:0,type:"primary",onClick:e=>{return t=a.id,O.value=t,void(q.value=!0);var t}},{default:j((()=>[R])),_:2},1032,["onClick"])):M("",!0),1!=a.status&&2!=a.status?(b(),w("div",T)):M("",!0),3==a.status?(b(),k(f,{key:2,type:"primary",onClick:e=>{J.value=a.fail_reason,H.value=!0}},{default:j((()=>[X])),_:2},1032,["onClick"])):M("",!0),4==a.status?(b(),k(f,{key:3,type:"primary",onClick:t=>e.$router.push("/custom/videoDetails?id="+a.id)},{default:j((()=>[Y])),_:2},1032,["onClick"])):M("",!0),2==a.status?(b(),w("div",$,"---")):M("",!0)])])),_:1})])),_:1},8,["data"])),[[N,l.value]])]),h(p,{modelValue:H.value,"onUpdate:modelValue":c[1]||(c[1]=e=>H.value=e),msg:J.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),h(p,{modelValue:q.value,"onUpdate:modelValue":c[2]||(c[2]=e=>q.value=e),msg:"确认删除这条数据吗?",onSure:F},null,8,["modelValue"]),h(i,{total:s.value,modelValue:o.value,"onUpdate:modelValue":c[3]||(c[3]=e=>o.value=e),onChange:y},null,8,["total","modelValue"]),h(u,{modelValue:t.value,"onUpdate:modelValue":c[4]||(c[4]=e=>t.value=e),onSubmitSuccess:v,type:4},null,8,["modelValue"])])}}}))));var F,H=y(q,[["__scopeId","data-v-0295ed90"]]);export{H as default};
