var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e},u=(e,l)=>a(e,t(l));import{s as p}from"./Search.43a44bd4.js";import{M as d}from"./MyPage.2c8a4bc7.js";import{M as c}from"./MyDataTable.34484506.js";import{M as m}from"./MyDialog.d8f2932e.js";import{M as n}from"./MyEmpty.8e216a46.js";import{R as y}from"./Refuse.c4dd5bb9.js";import{a as b,b as v,c as f}from"./custom.cf7f2d0a.js";import{_}from"./index.aefc30ce.js";import{G as j,g as w,j as h,o as k,H as g,a as C,w as x,C as O,k as V,_ as M,c as P,P as z,aa as U,I as D,a0 as I,a1 as S,b as R,ae as T}from"./vue.73bee448.js";import"./date.23847c74.js";import"./index.6c11e008.js";import"./index.46ed79dd.js";import"./login.857dc837.js";import"./request.65081ce8.js";import"./findb.c1031062.js";import"./empty.f131d8fb.js";import"./tinymce.5416ef76.js";const E={class:"mytable"},N={class:"fcs"},$=S("编辑"),q=S("驳回原因"),A=S("详情"),G={key:3},H=S("下载附件"),B=S("通过"),F=S("驳回");var J=_(j(u(i({},{name:"CustomArticle"}),{setup(e){const a=w([{type:"text",lable:"需求ID",prop:"id",width:120},{type:"text",lable:"账户名",prop:"user_name",width:120},{type:"text",lable:"客户名称",prop:"company_name",width:180},{type:"text",lable:"标题",prop:"title",width:150},{type:"text-tooltip",lable:"描述",prop:"detail",width:120},{type:"date",lable:"创建日期",prop:"create_time",width:110},{type:"status",lable:"状态",prop:"status",width:100}]),t=w(!1),l=w(0),s=w(10),r=w(1),o=w([]),_=w(!1),j=w(""),S=h({userName:"",status:"",create_time:""}),J=()=>{S.userName="",S.status="",S.create_time="",X()},K=e=>{r.value=1,X()},L=w(!1),Q=w(),W=async e=>{const a={id:Q.value,fail_reason:e,status:4},{status:t,body:l}=await v(a);t&&(L.value=!1,X())},X=async()=>{t.value=!0;const e=await f(u(i({size:s.value,current:r.value},S),{startTime:S.create_time?S.create_time[0]:null,endTime:S.create_time?S.create_time[1]:null}));t.value=!1,1==e.status&&(l.value=e.body.total,o.value=e.body.records)};return X(),(e,i)=>{const u=R("el-option"),v=R("el-link"),f=R("el-table-column"),w=R("el-table"),h=R("el-card"),Y=T("loading");return k(),g("div",E,[C(p,{modelValue:O(S),"onUpdate:modelValue":i[0]||(i[0]=e=>V(S)?S.value=e:S=e),onSearch:K,onReset:J},{default:x((()=>[C(u,{label:"全部",value:"null"}),C(u,{label:"待处理",value:"1"}),C(u,{label:"已受理",value:"2"}),C(u,{label:"被驳回",value:"3"}),C(u,{label:"已完成",value:"4"})])),_:1},8,["modelValue"]),C(h,{class:"mycard mt20"},{default:x((()=>[M((k(),P(w,{data:o.value,border:"",style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:x((()=>[C(n)])),default:x((()=>[(k(!0),g(z,null,U(a.value,((e,a)=>(k(),P(c,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),C(f,{width:"150",label:"操作"},{default:x((({row:a})=>[D("div",N,[2==a.status?(k(),P(v,{key:0,type:"primary",onClick:t=>e.$router.push("/cms/customedit?id="+a.id)},{default:x((()=>[$])),_:2},1032,["onClick"])):I("",!0),3==a.status?(k(),P(v,{key:1,type:"primary",onClick:e=>{j.value=a.fail_reason,_.value=!0}},{default:x((()=>[q])),_:2},1032,["onClick"])):I("",!0),4==a.status?(k(),P(v,{key:2,type:"primary",onClick:t=>e.$router.push("/cms/customdet?id="+a.id)},{default:x((()=>[A])),_:2},1032,["onClick"])):I("",!0),1==a.status?(k(),g("div",G,[a.attach_url?(k(),P(v,{key:0,type:"primary",class:"fcss",href:a.attach_url,"down-load":"附件.zip"},{default:x((()=>[H])),_:2},1032,["href"])):I("",!0),C(v,{type:"primary",class:"fcss",onClick:e=>(async e=>{await b({id:e}),X()})(a.id)},{default:x((()=>[B])),_:2},1032,["onClick"]),C(v,{type:"primary",onClick:e=>{return t=a.id,L.value=!0,void(Q.value=t);var t}},{default:x((()=>[F])),_:2},1032,["onClick"])])):I("",!0)])])),_:1})])),_:1},8,["data"])),[[Y,t.value]]),C(d,{page:r.value,"onUpdate:page":i[1]||(i[1]=e=>r.value=e),size:s.value,"onUpdate:size":i[2]||(i[2]=e=>s.value=e),total:l.value,onChange:X},null,8,["page","size","total"])])),_:1}),C(m,{modelValue:_.value,"onUpdate:modelValue":i[3]||(i[3]=e=>_.value=e),msg:j.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),C(y,{modelValue:L.value,"onUpdate:modelValue":i[4]||(i[4]=e=>L.value=e),onSuccess:W},null,8,["modelValue"])])}}})),[["__scopeId","data-v-9192bc80"]]);export{J as default};