var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{D as d}from"./DetailsHeader.66b6fe33.js";import{a as i,c,e as m}from"./system.c99267cc.js";import{G as u,g as n,j as p,o as f,H as b,I as v,a as y,w as g,C as _,P as j,aa as h,a1 as w,av as k,b as O,c as V}from"./vue.73bee448.js";import{m as x}from"./index.c106f6b7.js";import{t as P}from"./index.71ace796.js";import"./index.43fc5bae.js";import"./request.10479ac9.js";import"./login.093db1df.js";const q={class:"addstaff_page"},C={class:"fsc"},D=w("确认添加"),H={class:"flex mt20"},K=v("div",{class:"fcs"},"基本信息",-1),U={class:"fcc mt20"},E=v("div",{class:"fcs"},"权限",-1),I={class:"mt20"},z=u({setup(e){const u=n([]);(async()=>{const e=await i();1==e.status&&(u.value=e.body)})();const w=p({name:"",mobile:"",dept_id:""}),z=p({name:[{required:!0,message:"请输入姓名！",trigger:"blur"},{min:1,max:12,message:"姓名长度须在1~12个字符！",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号！",trigger:"blur"},{validator:(e,a,l)=>{P.test(a)?l():l(new Error("请输入正确的手机号码!"))},trigger:"blur"}],dept_id:[{required:!0,message:"请选择部门!",trigger:"blur"}]}),F=n(),G={children:"children",label:"name"},L=n(),R=n([]);(async()=>{const e=await c();R.value=e.body})();const S=x(),A=k(),B=()=>{F.value.validate((async e=>{if(e){const e=L.value.getCheckedKeys(),c=L.value.getHalfCheckedKeys(),u=e.concat(c),n=await m((d=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(r)for(var l of r(a))t.call(a,l)&&o(e,l,a[l]);return e})({},w),i={permission_ids:u},a(d,l(i))));1==n.status&&(S.setKeepList([]),A.back())}var d,i}))};return(e,a)=>{const l=O("el-button"),r=O("el-input"),s=O("el-form-item"),t=O("el-option"),o=O("el-select"),i=O("el-form"),c=O("el-card"),m=O("el-tree");return f(),b("div",q,[v("div",C,[y(d),y(l,{type:"primary",onClick:B,size:"large"},{default:g((()=>[D])),_:1})]),v("div",H,[y(c,{class:"mycard mr20 f1",style:{height:"100%"}},{header:g((()=>[K])),default:g((()=>[v("div",U,[y(i,{model:_(w),rules:_(z),ref_key:"addFormRef",ref:F},{default:g((()=>[y(s,{label:"姓 名：",prop:"name"},{default:g((()=>[y(r,{modelValue:_(w).name,"onUpdate:modelValue":a[0]||(a[0]=e=>_(w).name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),y(s,{label:"手机号：",prop:"mobile"},{default:g((()=>[y(r,{modelValue:_(w).mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>_(w).mobile=e),placeholder:"请输入电话"},null,8,["modelValue"])])),_:1}),y(s,{label:"部 门：",prop:"dept_id"},{default:g((()=>[y(o,{modelValue:_(w).dept_id,"onUpdate:modelValue":a[2]||(a[2]=e=>_(w).dept_id=e),placeholder:"请选择部门"},{default:g((()=>[(f(!0),b(j,null,h(u.value,((e,a)=>(f(),V(t,{label:e.dept_name,value:e.id,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1}),y(c,{class:"mycard f1"},{header:g((()=>[E])),default:g((()=>[v("div",I,[y(m,{data:R.value,props:G,"node-key":"permission_id","show-checkbox":"",ref_key:"lvtree",ref:L},null,8,["data"])])])),_:1})])])}}});export{z as default};
