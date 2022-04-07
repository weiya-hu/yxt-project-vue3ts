import{M as e}from"./MyDataTable.bb5862af.js";import{M as a,_ as l}from"./MyEmpty.a02eeaa3.js";import{_ as t}from"./MyCascader.365bb42e.js";import{F as r,r as u,a as d,G as o,H as s,I as i,X as p,Q as n,i as c,R as m,u as y,P as v,Y as f,a7 as b,U as g,V as h,av as _,O as w,a6 as k}from"./vue.5acda677.js";import{c as V,a as x,b as C}from"./seekPathPro.7b5b1fdf.js";import{M as F}from"./MyUpload.6505d5d8.js";import{_ as q,E as M,e as T}from"./index.d66d1016.js";import"./date.23847c74.js";const j={class:"up2b"},U={class:"top-button fsc"},z=h("添加需求"),P={class:"flexr"},E=h("同步SCRM"),D=h("同步CMS"),S=h("同步DSP系统"),B={class:"mytable"},I={class:"operate-button-pre"},R=["onClick"],G=["onClick"],H=["onClick"],O={key:3},Q={class:"flexr"},X=h("取消"),Y=h("确认");var A=q(r({setup(r){let h=u(0),q=u(1),A=_(),J=u(!1),K=u(!1),L=u(!1);const N=u(),W=u();let Z=u({industryType:[],country:[],name:"",desc:"",updateFile:""}),$=u(),ee=u([]),ae=u([{type:"select",prop:"select",width:100},{type:"text",lable:"ID",prop:"id",width:100},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:120},{type:"city_id",lable:"地区",prop:"city",width:150},{type:"text",lable:"渠道名称",prop:"group_name",width:150},{type:"text-tooltip",lable:"渠道描述",prop:"group_desc",width:220},{type:"date",lable:"创建日期",prop:"create_time",width:110},{type:"status_do",lable:"状态",prop:"status",width:100}]);const le=d({industryType:[{required:!0,message:"请选择行业分类",trigger:"blur"}],country:[{required:!0,message:"请选择地区",trigger:"blur"}],name:[{required:!0,message:"请输入渠道名称",trigger:"change"},{required:!0,message:"请输入渠道名称",trigger:"blur"}],desc:[{required:!0,message:"请输入渠道描述",trigger:"change"},{required:!0,message:"请输入渠道描述",trigger:"blur"}],updateFile:[{validator:(e,a,l)=>{switch($.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]}),te=async()=>{J.value=!0;let e={current:q.value,type:1,size:10};const{status:a,body:l}=await V(e);J.value=!1,a&&(h.value=l.total,ee.value=l.records)};te();const re=()=>{N.value.validate((e=>{if(!e)return!1;K.value=!0,Z.value.updateFile?W.value.submit():oe()}))},ue=e=>{e?($.value=e,Z.value.updateFile="",N.value.validateField("updateFile",(()=>null))):($.value="",N.value.clearValidate("updateFile"))},de=e=>{Z.value.updateFile="",$.value="none",W.value.clear(),K.value=!1,T("上传失败")},oe=e=>{C({attachment:e||"",group_desc:Z.value.desc,group_name:Z.value.name,type:1,province:Z.value.country[0],city:Z.value.country[1],district:Z.value.country[2],industry_id:Z.value.industryType.join(",")}).then((e=>{e.status?(L.value=!1,N.value.resetFields(),q.value=1,te()):(Z.value.updateFile="",W.value.clear()),K.value=!1})).catch((()=>{K.value=!1,de()}))};return(r,u)=>{const d=w("el-button"),_=w("el-table-column"),V=w("el-table"),C=w("el-form-item"),T=w("el-input"),$=w("el-form"),se=w("el-dialog"),ie=k("loading");return o(),s("div",j,[i("div",U,[p(d,{size:"large",type:"primary",class:"up-user fcc",onClick:u[0]||(u[0]=e=>c(L)?L.value=!0:L=!0)},{default:n((()=>[z])),_:1}),i("div",P,[p(d,{size:"large"},{default:n((()=>[E])),_:1}),p(d,{size:"large"},{default:n((()=>[D])),_:1}),p(d,{size:"large"},{default:n((()=>[S])),_:1})])]),i("div",B,[m((o(),v(V,{data:y(ee),size:"large","row-class-name":"my-data-table-row"},{empty:n((()=>[p(a)])),default:n((()=>[(o(!0),s(f,null,b(y(ae),((a,l)=>(o(),v(e,{key:l,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128)),p(_,{fixed:"right",property:"operate",label:"操作","min-width":"100"},{default:n((({row:e})=>[i("div",I,[3===e.status?(o(),s("div",{key:0,class:"operate-button marginr",onClick:a=>(e=>{A.push({path:"/seekPathPro/seekPathDetail",query:{id:e.id}})})(e)},"查看",8,R)):g("",!0),1!==e.status?(o(),s("div",{key:1,class:"operate-button marginr",onClick:a=>(e=>{M.confirm("是否确认删除?","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((async()=>{let a={id:e.id};const{status:l}=await x(a);l&&te()}))})(e)},"删除",8,G)):g("",!0),2===e.status?(o(),s("div",{key:2,class:"operate-button",onClick:a=>(e=>{M.alert(e.fail_reason||"暂没有驳回原因，请联系管理员","驳回原因",{confirmButtonText:"确认"})})(e)},"驳回原因",8,H)):g("",!0),1===e.status?(o(),s("div",O,"---")):g("",!0)])])),_:1})])),_:1},8,["data"])),[[ie,y(J)]])]),i("div",null,[y(h)?(o(),v(l,{key:0,total:y(h),modelValue:y(q),"onUpdate:modelValue":u[1]||(u[1]=e=>c(q)?q.value=e:q=e),onChange:te},null,8,["total","modelValue"])):g("",!0)]),p(se,{modelValue:y(L),"onUpdate:modelValue":u[8]||(u[8]=e=>c(L)?L.value=e:L=e),width:500,draggable:"",title:"添加需求","close-on-click-modal":!1},{footer:n((()=>[i("div",Q,[p(d,{type:"primary",onClick:u[7]||(u[7]=e=>c(L)?L.value=!1:L=!1)},{default:n((()=>[X])),_:1}),p(d,{type:"primary",onClick:re},{default:n((()=>[Y])),_:1})])])),default:n((()=>[i("div",null,[m((o(),v($,{model:y(Z),ref_key:"formRef",ref:N,rules:y(le)},{default:n((()=>[p(C,{label:"行业分类",required:"",prop:"industryType"},{default:n((()=>[p(t,{type:"type",modelValue:y(Z).industryType,"onUpdate:modelValue":u[2]||(u[2]=e=>y(Z).industryType=e)},null,8,["modelValue"])])),_:1}),p(C,{label:"地区",required:"",prop:"country"},{default:n((()=>[p(t,{type:"country",modelValue:y(Z).country,"onUpdate:modelValue":u[3]||(u[3]=e=>y(Z).country=e)},null,8,["modelValue"])])),_:1}),p(C,{label:"渠道名称",required:"",prop:"name"},{default:n((()=>[p(T,{placeholder:"请输入渠道名称",modelValue:y(Z).name,"onUpdate:modelValue":u[4]||(u[4]=e=>y(Z).name=e),clearable:""},null,8,["modelValue"])])),_:1}),p(C,{label:"渠道描述",required:"",prop:"desc"},{default:n((()=>[p(T,{type:"textarea",maxlength:"150","show-word-limit":"",class:"input-textarea",placeholder:"请对寻找的渠道进行简要的描述（比如找分销代理，商业服务，经销贸易等）",modelValue:y(Z).desc,"onUpdate:modelValue":u[5]||(u[5]=e=>y(Z).desc=e)},null,8,["modelValue"])])),_:1}),p(C,{label:"上传附件",prop:"updateFile"},{default:n((()=>[p(F,{modelValue:y(Z).updateFile,"onUpdate:modelValue":u[6]||(u[6]=e=>y(Z).updateFile=e),onChange:ue,onError:de,onSuccess:oe,ref_key:"upload",ref:W},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[ie,y(K)]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-124883dc"]]);export{A as default};
