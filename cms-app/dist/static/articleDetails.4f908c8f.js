import{d as a,i as t,o as s,t as e,a as r,w as o,u as i,U as l,V as c,v as d,az as n,b as u}from"./vue.ca737a59.js";import{c as m}from"./myWork.358dcf4f.js";import{c as f}from"./custom.27840ca0.js";import{a as p}from"./index.9bfce773.js";const v={class:"article_details"},b=l("软文"),_=l("软文详情"),y={class:"content"},j={class:"title"},h=["innerHTML"];var k=p(a({setup(a){const p=n(),k=p.meta.father.split("/")[1],w=p.query.id,W=t({title:"",content:""});return(async()=>{const a="myWork"==k?await m({id:w}):await f({id:w},1);1==a.status&&(W.value=a.body)})(),(a,t)=>{const n=u("el-breadcrumb-item"),m=u("el-breadcrumb");return s(),e("div",v,[r(m,{separator:"/"},{default:o((()=>[r(n,{to:{path:"/"+i(k)}},{default:o((()=>[l(c("myWork"==i(k)?"我的作品库":"个性化内容库"),1)])),_:1},8,["to"]),r(n,{to:{path:"/"+i(k)+"/article"}},{default:o((()=>[b])),_:1},8,["to"]),r(n,null,{default:o((()=>[_])),_:1})])),_:1}),d("div",y,[d("div",j,c(W.value.title),1),d("div",{innerHTML:W.value.content},null,8,h)])])}}}),[["__scopeId","data-v-6b34672a"]]);export{k as default};
