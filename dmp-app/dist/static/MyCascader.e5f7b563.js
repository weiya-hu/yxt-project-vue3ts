import{m as e}from"./index.e956d55f.js";import{F as l,f as a,r as o,O as t,G as s,P as d,b as u,u as r}from"./vue.2fa59680.js";const p=l({props:{modelValue:null,type:{default:"type"}},emits:["update:modelValue"],setup(l,{expose:p,emit:n}){const m=e(),c=a((()=>m.state.typeList)),i=a((()=>m.state.addressList)),V={expandTrigger:"hover",checkStrictly:!0,value:"industry_id",label:"name"},f={expandTrigger:"hover",checkStrictly:!0,value:"code",label:"name"},y=e=>{n("update:modelValue",e)},h=o();return p({getText:()=>h.value.getCheckedNodes().length?h.value.getCheckedNodes()[0].text:""}),(e,a)=>{const o=t("el-cascader");return"type"==l.type?(s(),d(o,{key:0,modelValue:l.modelValue,"onUpdate:modelValue":a[0]||(a[0]=e=>u(modelValue)?modelValue.value=e:null),options:r(c),onChange:y,props:V,placeholder:"请选择行业",class:"w100",ref_key:"cRef",ref:h},null,8,["modelValue","options"])):(s(),d(o,{key:1,modelValue:l.modelValue,"onUpdate:modelValue":a[1]||(a[1]=e=>u(modelValue)?modelValue.value=e:null),options:r(i),onChange:y,props:f,placeholder:"请选择地区",class:"w100",ref_key:"cRef",ref:h},null,8,["modelValue","options"]))}}});export{p as _};
