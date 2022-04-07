import{M as e}from"./MyDataTable.bb5862af.js";import{M as a,_ as l}from"./MyEmpty.a02eeaa3.js";import{_ as t}from"./MyCascader.365bb42e.js";import{F as r,r as u,a as d,G as s,H as o,I as i,X as n,Q as p,R as c,u as m,P as y,Y as v,a7 as b,U as f,i as g,V as _,av as h,O as w,a6 as k}from"./vue.5acda677.js";import{_ as V,m as x,A as C,E as F,B as q,e as M,C as T}from"./index.d66d1016.js";import{M as U}from"./MyUpload.6505d5d8.js";import"./date.23847c74.js";const j={class:"up2b"},z={class:"top-button fsc"},E=_("添加需求"),B={class:"flexr"},D=_("同步SCRM"),S=_("同步CMS"),I=_("同步DSP系统"),R={class:"mytable"},A={class:"operate-button-pre"},P=["onClick"],G=["onClick"],H=["onClick"],L={key:3},O={class:"flexr"},Q=_("取消"),X=_("确认");var Y=V(r({setup(r){const _=x();let V=u(0),Y=u(1),J=h(),K=u(!1),N=u(!1),W=u(!1);const Z=u(),$=u(),ee=u();let ae=u({industryType:[],country:"",name:"",desc:"",updateFile:""}),le=u(),te=u([]),re=u([{type:"select",prop:"select",width:100},{type:"text",lable:"ID",prop:"id",width:100},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:120},{type:"country",lable:"地区",prop:"country_id",width:100},{type:"text",lable:"采购商品",prop:"product_name",width:150},{type:"text-tooltip",lable:"描述",prop:"demand_desc",width:220},{type:"date",lable:"创建日期",prop:"create_time",width:110},{type:"status_do",lable:"状态",prop:"status",width:100}]);const ue=d({industryType:[{required:!0,message:"请选择行业分类",trigger:"blur"}],country:[{required:!0,message:"请选择地区",trigger:"blur"},{required:!0,message:"请选择地区",trigger:"change"}],name:[{required:!0,message:"请输入采购商品",trigger:"change"},{required:!0,message:"请输入采购商品",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"change"},{required:!0,message:"请输入描述",trigger:"blur"}],updateFile:[{validator:(e,a,l)=>{switch(le.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]}),de=async()=>{K.value=!0;let e={current:Y.value,type:2,size:10};const{status:a,body:l}=await C(e);K.value=!1,a&&(V.value=l.total,te.value=l.records)};de();const se=()=>{W.value=!0,ee.value=_.state.countryList},oe=()=>{Z.value.validate((e=>{if(!e)return!1;N.value=!0,ae.value.updateFile?$.value.submit():pe()}))},ie=e=>{e?(le.value=e,ae.value.updateFile="",Z.value.validateField("updateFile",(()=>null))):(le.value="",Z.value.clearValidate("updateFile"))},ne=e=>{ae.value.updateFile="",le.value="none",$.value.clear(),N.value=!1,M("上传失败")},pe=e=>{T({attachment:e||"",demand_desc:ae.value.desc,product_name:ae.value.name,type:2,country_id:ae.value.country,industry_id:ae.value.industryType.join(",")}).then((e=>{e.status?(W.value=!1,Z.value.resetFields(),Y.value=1,de()):(ae.value.updateFile="",$.value.clear()),N.value=!1})).catch((()=>{N.value=!1,ne()}))};return(r,u)=>{const d=w("el-button"),_=w("el-table-column"),h=w("el-table"),x=w("el-form-item"),C=w("el-option"),M=w("el-select"),T=w("el-input"),le=w("el-form"),ce=w("el-dialog"),me=k("loading");return s(),o("div",j,[i("div",z,[n(d,{size:"large",type:"primary",class:"up-user fcc",onClick:se},{default:p((()=>[E])),_:1}),i("div",B,[n(d,{size:"large"},{default:p((()=>[D])),_:1}),n(d,{size:"large"},{default:p((()=>[S])),_:1}),n(d,{size:"large"},{default:p((()=>[I])),_:1})])]),i("div",R,[c((s(),y(h,{data:m(te),size:"large","row-class-name":"my-data-table-row"},{empty:p((()=>[n(a)])),default:p((()=>[(s(!0),o(v,null,b(m(re),((a,l)=>(s(),y(e,{key:l,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128)),n(_,{fixed:"right",property:"operate",label:"操作","min-width":"100"},{default:p((({row:e})=>[i("div",A,[3===e.status?(s(),o("div",{key:0,class:"operate-button marginr",onClick:a=>(e=>{J.push({path:"/seekAbroad/supplierDetail",query:{id:e.id}})})(e)},"查看",8,P)):f("",!0),1!==e.status?(s(),o("div",{key:1,class:"operate-button marginr",onClick:a=>(e=>{F.confirm("是否确认删除?","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((async()=>{let a={id:e.id};const{status:l}=await q(a);l&&de()}))})(e)},"删除",8,G)):f("",!0),2===e.status?(s(),o("div",{key:2,class:"operate-button",onClick:a=>(e=>{F.alert(e.fail_reason||"暂没有驳回原因，请联系管理员","驳回原因",{confirmButtonText:"确认"})})(e)},"驳回原因",8,H)):f("",!0),1===e.status?(s(),o("div",L,"---")):f("",!0)])])),_:1})])),_:1},8,["data"])),[[me,m(K)]])]),i("div",null,[m(V)?(s(),y(l,{key:0,total:m(V),modelValue:m(Y),"onUpdate:modelValue":u[0]||(u[0]=e=>g(Y)?Y.value=e:Y=e),onChange:de},null,8,["total","modelValue"])):f("",!0)]),n(ce,{modelValue:m(W),"onUpdate:modelValue":u[7]||(u[7]=e=>g(W)?W.value=e:W=e),width:500,draggable:"",title:"添加需求","close-on-click-modal":!1},{footer:p((()=>[i("div",O,[n(d,{type:"primary",onClick:u[6]||(u[6]=e=>g(W)?W.value=!1:W=!1)},{default:p((()=>[Q])),_:1}),n(d,{type:"primary",onClick:oe},{default:p((()=>[X])),_:1})])])),default:p((()=>[i("div",null,[c((s(),y(le,{model:m(ae),ref_key:"formRef",ref:Z,rules:m(ue)},{default:p((()=>[n(x,{label:"行业分类",required:"",prop:"industryType"},{default:p((()=>[n(t,{type:"type",modelValue:m(ae).industryType,"onUpdate:modelValue":u[1]||(u[1]=e=>m(ae).industryType=e)},null,8,["modelValue"])])),_:1}),n(x,{label:"地区",prop:"country"},{default:p((()=>[n(M,{modelValue:m(ae).country,"onUpdate:modelValue":u[2]||(u[2]=e=>m(ae).country=e),class:"m-2",placeholder:"请选择地区",size:"large",clearable:""},{default:p((()=>[(s(!0),o(v,null,b(ee.value,(e=>(s(),y(C,{key:e.code,label:e.country_name,value:e.code},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(x,{label:"采购商品",required:"",prop:"name"},{default:p((()=>[n(T,{placeholder:"请输入产品名称",modelValue:m(ae).name,"onUpdate:modelValue":u[3]||(u[3]=e=>m(ae).name=e),clearable:""},null,8,["modelValue"])])),_:1}),n(x,{label:"描述",required:"",prop:"desc"},{default:p((()=>[n(T,{type:"textarea",maxlength:"150","show-word-limit":"",class:"input-textarea",placeholder:"可简要描述对寻找地区的采购服务商的要求。",modelValue:m(ae).desc,"onUpdate:modelValue":u[4]||(u[4]=e=>m(ae).desc=e)},null,8,["modelValue"])])),_:1}),n(x,{label:"上传附件",prop:"updateFile"},{default:p((()=>[n(U,{modelValue:m(ae).updateFile,"onUpdate:modelValue":u[5]||(u[5]=e=>m(ae).updateFile=e),onChange:ie,onError:ne,onSuccess:pe,ref_key:"upload",ref:$},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[me,m(N)]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-5af43ce4"]]);export{Y as default};
