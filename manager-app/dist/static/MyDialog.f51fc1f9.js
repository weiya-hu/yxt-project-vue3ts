import{_ as e}from"./index.4a788974.js";import{G as a,u as t,b as s,o as l,c as o,ab as d,w as c,H as i,I as u,C as f,a2 as p,a as m,k as r,aw as y,ax as n,a1 as k}from"./vue.73bee448.js";const v=e=>(y("data-v-63ae2f70"),e=e(),n(),e),_=v((()=>u("div",{class:"fcc kf_title"},"联系客服",-1))),g={key:0,class:"fcc fc"},V=["src"],b=v((()=>u("div",{class:"tip"},"请扫描上方二维码，联系客服人员",-1))),w={key:1,class:"fcc msg"},C={key:0,class:"fcc"},x=k("我知道了"),h={key:1},j={key:0,class:"fcc"},I=k("取消"),B=k("确认"),G={key:1,class:"fcc"},H=k("我知道了");var M=e(a({props:{modelValue:{type:Boolean},title:{default:"提示"},msg:{default:""},type:{default:""},btn:{default:2}},emits:["update:modelValue","sure"],setup(e,{emit:a}){const y=e,n=t({get:()=>y.modelValue,set:e=>{a("update:modelValue",e)}}),k=()=>{a("update:modelValue",!1)},v=()=>{a("sure")};return(a,t)=>{const y=s("el-button"),M=s("el-dialog");return l(),o(M,{modelValue:f(n),"onUpdate:modelValue":t[0]||(t[0]=e=>r(n)?n.value=e:null),title:e.title,width:"kf"==e.type?"280px":"400px",onClose:k,"show-close":"kf"!=e.type,"custom-class":"kf"==e.type?"kf_dialog my_dialog":"my_dialog"},d({default:c((()=>["kf"==e.type?(l(),i("div",g,[u("img",{src:f("/static/kf_code.d5aa67b2.png"),alt:""},null,8,V),b])):(l(),i("div",w,p(e.msg),1))])),footer:c((()=>["kf"==e.type?(l(),i("div",C,[m(y,{type:"primary",onClick:k},{default:c((()=>[x])),_:1})])):(l(),i("div",h,[2==e.btn?(l(),i("div",j,[m(y,{onClick:k},{default:c((()=>[I])),_:1}),m(y,{type:"primary",onClick:v},{default:c((()=>[B])),_:1})])):(l(),i("div",G,[m(y,{type:"primary",onClick:k},{default:c((()=>[H])),_:1})]))]))])),_:2},["kf"==e.type?{name:"title",fn:c((()=>[_]))}:void 0]),1032,["modelValue","title","width","show-close","custom-class"])}}}),[["__scopeId","data-v-63ae2f70"]]);export{M};
