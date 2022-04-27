var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&r(e,t,a[t]);return e},p=(e,l)=>a(e,t(l));import{s as d}from"./Search.26ac40a5.js";import{M as u}from"./MyPage.512ed0c7.js";import{M as c}from"./MyDataTable.c0452b38.js";import{M as n}from"./MyDialog.50f39301.js";import{M as m}from"./MyEmpty.72a1acd1.js";import{a as y,b,c as f,d as v}from"./custom.27effc65.js";import{_ as w,a as _,E as h}from"./index.fdca730b.js";import{q as j,f as k,_ as g,o as C,t as x,a as O,w as M,u as P,I as V,Q as D,c as T,F as U,a2 as z,v as I,S,U as E,b as q,a6 as B}from"./vue.89ed3d48.js";import"./date.23847c74.js";import"./index.eaa6bc8d.js";import"./index.5003068f.js";import"./login.6de82fdd.js";import"./request.aa9790cc.js";import"./empty.f131d8fb.js";const N={class:"mytable"},$={class:"fcs"},F=E("编辑"),Q=E("驳回原因"),R=E("详情"),A={key:3},G=E("下载附件"),H=E("通过"),J=E("驳回");var K=w(j(p(i({},{name:"个性化内容库-软文"}),{setup(e,{expose:a}){const t=k([{type:"text",lable:"需求ID",prop:"id",width:120},{type:"text",lable:"账户名",prop:"user_name",width:120},{type:"text",lable:"客户名称",prop:"company_name",width:180},{type:"text",lable:"标题",prop:"title",width:150},{type:"text",lable:"描述",prop:"detail",width:120},{type:"date",lable:"创建日期",prop:"create_time",width:110},{type:"status",lable:"状态",prop:"status",width:100}]),l=k(!1),s=k(0),o=k(10),r=k(1),w=k([]),j=k(!1),E=k(""),K=g({userName:"",status:"",create_time:""}),L=()=>{K.userName="",K.status="",K.create_time="",Y()},W=e=>{r.value=1,Y()},X=async e=>{const a=await f({id:e});1==a.status&&(window.location.href=a.body.attach_url)};a({getData:X});const Y=async()=>{l.value=!0;const e=await v(p(i({size:o.value,current:r.value},K),{startTime:K.create_time[0],endTime:K.create_time[1]}));l.value=!1,1==e.status&&(s.value=e.body.total,w.value=e.body.records)};return Y(),(e,a)=>{const i=q("el-option"),p=q("el-link"),f=q("el-table-column"),v=q("el-table"),k=q("el-card"),g=B("loading");return C(),x("div",N,[O(d,{onSearch:W,modelValue:P(K),"onUpdate:modelValue":a[0]||(a[0]=e=>V(K)?K.value=e:K=e),onReset:L},{default:M((()=>[O(i,{label:"待处理",value:"1"}),O(i,{label:"已受理",value:"2"}),O(i,{label:"被驳回",value:"3"}),O(i,{label:"已完成",value:"4"})])),_:1},8,["modelValue"]),O(k,{class:"mycard mt20"},{default:M((()=>[D((C(),T(v,{data:w.value,border:"",style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:M((()=>[O(m)])),default:M((()=>[(C(!0),x(U,null,z(t.value,((e,a)=>(C(),T(c,{key:a,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),O(f,{width:"150",label:"操作"},{default:M((({row:a})=>[I("div",$,[2==a.status?(C(),T(p,{key:0,type:"primary",onClick:t=>e.$router.push("/cms/customedit?id="+a.id)},{default:M((()=>[F])),_:2},1032,["onClick"])):S("",!0),3==a.status?(C(),T(p,{key:1,type:"primary",onClick:e=>{E.value=a.fail_reason,j.value=!0}},{default:M((()=>[Q])),_:2},1032,["onClick"])):S("",!0),4==a.status?(C(),T(p,{key:2,type:"primary",onClick:t=>e.$router.push("/cms/customdet?id="+a.id)},{default:M((()=>[R])),_:2},1032,["onClick"])):S("",!0),1==a.status?(C(),x("div",A,[O(p,{type:"primary",class:"fcss",onClick:e=>X(a.id)},{default:M((()=>[G])),_:2},1032,["onClick"]),O(p,{type:"primary",class:"fcss",onClick:e=>(async e=>{await y({id:e}),Y()})(a.id)},{default:M((()=>[H])),_:2},1032,["onClick"]),O(p,{type:"primary",onClick:e=>{return t=a.id,void _.prompt("驳回原因","提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async({value:e})=>{await b({fail_reason:e,id:t}),Y()})).catch((()=>{h({type:"info",message:"取消驳回"})}));var t}},{default:M((()=>[J])),_:2},1032,["onClick"])])):S("",!0)])])),_:1})])),_:1},8,["data"])),[[g,l.value]]),O(u,{total:s.value,page:r.value,"onUpdate:page":a[1]||(a[1]=e=>r.value=e),onChange:Y,size:o.value,"onUpdate:size":a[2]||(a[2]=e=>o.value=e)},null,8,["total","page","size"])])),_:1}),O(n,{modelValue:j.value,"onUpdate:modelValue":a[3]||(a[3]=e=>j.value=e),msg:E.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"])])}}})),[["__scopeId","data-v-24408cdb"]]);export{K as default};