import{a}from"./index.a9a07da3.js";import{d as e,b as l,o as t,t as s,c as o,w as d,v as c,u,a as i,H as m,V as f,av as p,aw as n,U as r}from"./vue.ca737a59.js";const V=a=>(p("data-v-278c70c6"),a=a(),n(),a),v={class:"my_dialog"},y=V((()=>c("div",{class:"fcc kf_title"},"联系客服",-1))),k={class:"fcc fc"},_=["src"],g=V((()=>c("div",{class:"tip"},"请扫描上方二维码，联系客服人员",-1))),C={class:"fcc"},b=r("我知道了"),w={class:"fcc msg"},x={key:0,class:"fcc"},h=r("取消"),U=r("确认"),j={key:1,class:"fcc"},B=r("我知道了");var H=a(e({props:{modelValue:{type:Boolean},title:{default:"提示"},msg:{default:""},type:{default:""},btn:{default:2}},emits:["update:modelValue","sure"],setup(a,{emit:e}){const p=()=>{e("update:modelValue",!1)},n=()=>{e("sure")};return(e,r)=>{const V=l("el-button"),H=l("el-dialog");return t(),s("div",v,["kf"==a.type?(t(),o(H,{key:0,modelValue:a.modelValue,"onUpdate:modelValue":r[0]||(r[0]=a=>m(modelValue)?modelValue.value=a:null),width:"280px",onClose:p,"show-close":!1,"custom-class":"kf_dialog"},{title:d((()=>[y])),default:d((()=>[c("div",k,[c("img",{src:u("/static/kf_code.d5aa67b2.png"),alt:""},null,8,_),g])])),footer:d((()=>[c("div",C,[i(V,{type:"primary",onClick:p},{default:d((()=>[b])),_:1})])])),_:1},8,["modelValue"])):(t(),o(H,{key:1,modelValue:a.modelValue,"onUpdate:modelValue":r[1]||(r[1]=a=>m(modelValue)?modelValue.value=a:null),title:a.title,width:"400px",onClose:p},{footer:d((()=>[2==a.btn?(t(),s("span",x,[i(V,{onClick:p},{default:d((()=>[h])),_:1}),i(V,{type:"primary",onClick:n},{default:d((()=>[U])),_:1})])):(t(),s("div",j,[i(V,{type:"primary",onClick:p},{default:d((()=>[B])),_:1})]))])),default:d((()=>[c("div",w,f(a.msg),1)])),_:1},8,["modelValue","title"]))])}}}),[["__scopeId","data-v-278c70c6"]]);export{H as M};
