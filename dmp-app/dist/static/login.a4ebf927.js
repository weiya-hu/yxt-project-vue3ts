import{_ as e}from"./index.e956d55f.js";import{F as a,a as l,G as s,H as o,I as r,X as d,Q as u,u as t,V as c,O as p}from"./vue.2fa59680.js";const m={class:"login_page"},n={class:"loginbox"},i=c("登录");var f=e(a({setup(e){const a=l({acc:"",password:""}),c=l({acc:[{required:!0,message:"请输入用户名！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}]}),f=()=>{};return(e,l)=>{const g=p("el-input"),_=p("el-form-item"),V=p("el-button"),b=p("el-form");return s(),o("div",m,[r("div",n,[d(b,{model:t(a),"status-icon":"",rules:t(c),class:"demo-form-inline"},{default:u((()=>[d(_,{label:"用户名",prop:"acc"},{default:u((()=>[d(g,{modelValue:t(a).acc,"onUpdate:modelValue":l[0]||(l[0]=e=>t(a).acc=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),d(_,{label:"密 码",prop:"password"},{default:u((()=>[d(g,{modelValue:t(a).password,"onUpdate:modelValue":l[1]||(l[1]=e=>t(a).password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),d(_,null,{default:u((()=>[d(V,{type:"primary",onClick:f},{default:u((()=>[i])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}}),[["__scopeId","data-v-6c13066c"]]);export{f as default};
