var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,d=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{D as o}from"./DetailsHeader.dc89d7cd.js";import{a as i,c,e as m}from"./system.6d9b699b.js";import{q as u,f as n,_ as p,o as f,t as b,v,a as y,w as g,u as _,F as h,a2 as j,U as w,av as k,b as O,c as V}from"./vue.89ed3d48.js";import{m as x}from"./index.5003068f.js";import{t as q}from"./index.eaa6bc8d.js";import"./index.fdca730b.js";import"./request.aa9790cc.js";import"./login.6de82fdd.js";const P={class:"addstaff_page"},U={class:"fsc"},C=w("确认添加"),D={class:"flex mt20"},K=v("div",{class:"fcs"},"基本信息",-1),E={class:"fcc mt20"},F=v("div",{class:"fcs"},"权限",-1),H={class:"mt20"},z=u({setup(e){const u=n([]);(async()=>{const e=await i();1==e.status&&(u.value=e.body)})();const w=p({name:"",mobile:"",dept_id:""}),z=p({name:[{required:!0,message:"请输入姓名！",trigger:"blur"},{min:1,max:12,message:"姓名长度须在1~12个字符！",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号！",trigger:"blur"},{validator:(e,a,l)=>{q.test(a)?l():l(new Error("请输入正确的手机号码!"))},trigger:"blur"}],dept_id:[{required:!0,message:"请选择部门!",trigger:"blur"}]}),I=n(),L={children:"children",label:"name"},R=n(),S=n([]);(async()=>{const e=await c();S.value=e.body})();const A=x(),B=k(),G=()=>{I.value.validate((async e=>{if(e){const e=R.value.getCheckedKeys(),c=R.value.getHalfCheckedKeys(),u=e.concat(c),n=await m((o=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&d(e,l,a[l]);if(r)for(var l of r(a))t.call(a,l)&&d(e,l,a[l]);return e})({},w),i={permission_ids:u},a(o,l(i))));1==n.status&&(A.setKeepList([]),B.back())}var o,i}))};return(e,a)=>{const l=O("el-button"),r=O("el-input"),s=O("el-form-item"),t=O("el-option"),d=O("el-select"),i=O("el-form"),c=O("el-card"),m=O("el-tree");return f(),b("div",P,[v("div",U,[y(o),y(l,{type:"primary",onClick:G,size:"large"},{default:g((()=>[C])),_:1})]),v("div",D,[y(c,{class:"mycard mr20 f1",style:{height:"100%"}},{header:g((()=>[K])),default:g((()=>[v("div",E,[y(i,{model:_(w),rules:_(z),ref_key:"addFormRef",ref:I},{default:g((()=>[y(s,{label:"姓 名：",prop:"name"},{default:g((()=>[y(r,{modelValue:_(w).name,"onUpdate:modelValue":a[0]||(a[0]=e=>_(w).name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),y(s,{label:"手机号：",prop:"mobile"},{default:g((()=>[y(r,{modelValue:_(w).mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>_(w).mobile=e),placeholder:"请输入电话"},null,8,["modelValue"])])),_:1}),y(s,{label:"部 门：",prop:"dept_id"},{default:g((()=>[y(d,{modelValue:_(w).dept_id,"onUpdate:modelValue":a[2]||(a[2]=e=>_(w).dept_id=e),placeholder:"请选择部门"},{default:g((()=>[(f(!0),b(h,null,j(u.value,((e,a)=>(f(),V(t,{label:e.dept_name,value:e.id,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1}),y(c,{class:"mycard f1"},{header:g((()=>[F])),default:g((()=>[v("div",H,[y(m,{data:S.value,props:L,"node-key":"permission_id","show-checkbox":"",ref_key:"lvtree",ref:R},null,8,["data"])])])),_:1})])])}}});export{z as default};