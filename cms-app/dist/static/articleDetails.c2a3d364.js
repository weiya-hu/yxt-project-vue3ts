import{d as a,i as t,o as s,t as e,a as r,w as o,u as i,U as d,V as l,v as c,az as n,b as u}from"./vue.ca737a59.js";import{c as m}from"./myWork.5537892c.js";import{c as p}from"./custom.add716e0.js";import{a as v}from"./index.eda3de22.js";const f={class:"article_details"},b=d("软文"),_=d("软文详情"),y={class:"content"},j={class:"title"},h=["innerHTML"];var k=v(a({setup(a){const v=n(),k=v.meta.father.split("/")[1],w=v.query.id,W=t({title:"",content:""});return(async()=>{const a="myWork"==k?await m({id:w}):await p({id:w},1);1==a.status&&(W.value=a.body)})(),(a,t)=>{const n=u("el-breadcrumb-item"),m=u("el-breadcrumb");return s(),e("div",f,[r(m,{separator:"/"},{default:o((()=>[r(n,{to:{path:"/"+i(k)}},{default:o((()=>[d(l("myWork"==i(k)?"我的作品库":"个性化内容库"),1)])),_:1},8,["to"]),r(n,{to:{path:"/"+i(k)+"/article"}},{default:o((()=>[b])),_:1},8,["to"]),r(n,null,{default:o((()=>[_])),_:1})])),_:1}),c("div",y,[c("div",j,l(W.value.title),1),c("div",{innerHTML:W.value.content},null,8,h)])])}}}),[["__scopeId","data-v-6b34672a"]]);export{k as default};
