import{a as e}from"./index.ac187171.js";import{y as a,a4 as l,z as t,A as s,S as o,T as d,B as c,u,_ as i,i as m,Z as f,av as p,aw as n,Y as r}from"./vue.92f8d02a.js";const y=e=>(p("data-v-278c70c6"),e=e(),n(),e),V={class:"my_dialog"},v=y((()=>c("div",{class:"fcc kf_title"},"联系客服",-1))),_={class:"fcc fc"},k=["src"],g=y((()=>c("div",{class:"tip"},"请扫描上方二维码，联系客服人员",-1))),C={class:"fcc"},b=r("我知道了"),w={class:"fcc msg"},x={key:0,class:"fcc"},h=r("取消"),j=r("确认"),B={key:1,class:"fcc"},U=r("我知道了");var z=e(a({props:{modelValue:{type:Boolean},title:{default:"提示"},msg:{default:""},type:{default:""},btn:{default:2}},emits:["update:modelValue","sure"],setup(e,{emit:a}){const p=()=>{a("update:modelValue",!1)},n=()=>{a("sure")};return(a,r)=>{const y=l("el-button"),z=l("el-dialog");return t(),s("div",V,["kf"==e.type?(t(),o(z,{key:0,modelValue:e.modelValue,"onUpdate:modelValue":r[0]||(r[0]=e=>m(modelValue)?modelValue.value=e:null),width:"280px",onClose:p,"show-close":!1,"custom-class":"kf_dialog"},{title:d((()=>[v])),default:d((()=>[c("div",_,[c("img",{src:u("/static/kf_code.d5aa67b2.png"),alt:""},null,8,k),g])])),footer:d((()=>[c("div",C,[i(y,{type:"primary",onClick:p},{default:d((()=>[b])),_:1})])])),_:1},8,["modelValue"])):(t(),o(z,{key:1,modelValue:e.modelValue,"onUpdate:modelValue":r[1]||(r[1]=e=>m(modelValue)?modelValue.value=e:null),title:e.title,width:"400px",onClose:p},{footer:d((()=>[2==e.btn?(t(),s("span",x,[i(y,{onClick:p},{default:d((()=>[h])),_:1}),i(y,{type:"primary",onClick:n},{default:d((()=>[j])),_:1})])):(t(),s("div",B,[i(y,{type:"primary",onClick:p},{default:d((()=>[U])),_:1})]))])),default:d((()=>[c("div",w,f(e.msg),1)])),_:1},8,["modelValue","title"]))])}}}),[["__scopeId","data-v-278c70c6"]]);export{z as M};