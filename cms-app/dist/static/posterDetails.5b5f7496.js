import{d as a,i as e,o as l,t,a as s,w as u,v as r,V as d,u as i,c as o,S as m,U as n,av as c,aw as v,az as p,b as f}from"./vue.ca737a59.js";import{f as y}from"./date.23847c74.js";import{c as b}from"./custom.bb194fef.js";import{j as _}from"./myWork.5e88c8f2.js";import{M as h}from"./MyEmpty.83ad9d36.js";import{M as w}from"./MyDialog.7048d621.js";import{a as j}from"./index.70dd7e24.js";const k=a=>(c("data-v-3044fbdf"),a=a(),v(),a),M={class:"poster_details"},g=n("个性化内容库"),x=n("海报库"),C=n("海报详情"),V={class:"mytable"},D=["src"],I={class:"fcs"},E=n("删除"),S=k((()=>r("div",{class:"line"},null,-1))),U=n("查看");var q=j(a({setup(a){const n=p().query.id,c=e([]),v=async()=>{const a=await b({id:n},3);1==a.status&&(c.value=a.body)};v();const j=e(""),k=e(!1),q=()=>{_({id:j.value}).then((a=>{1==a.status&&(v(),k.value=!1)}))},z=e([]),W=e(!1),A=e(0);return(a,e)=>{const n=f("el-breadcrumb-item"),v=f("el-breadcrumb"),p=f("el-table-column"),b=f("el-link"),_=f("el-table"),B=f("el-image-viewer");return l(),t("div",M,[s(v,{separator:"/"},{default:u((()=>[s(n,{to:{path:"/custom"}},{default:u((()=>[g])),_:1}),s(n,{to:{path:"/custom/poster"}},{default:u((()=>[x])),_:1}),s(n,null,{default:u((()=>[C])),_:1})])),_:1}),r("div",V,[s(_,{data:c.value,style:{width:"100%"}},{empty:u((()=>[s(h)])),default:u((()=>[s(p,{type:"selection",width:"50"}),s(p,{property:"id",label:"ID"}),s(p,{property:"thumb_url",label:"海报"},{default:u((({row:a})=>[r("img",{src:a.thumb_url,alt:"",class:"imgitem"},null,8,D)])),_:1}),s(p,{property:"create_time",label:"创建日期"},{default:u((({row:a})=>[r("div",null,d(i(y)(new Date(a.create_time),"yyyy-MM-dd")),1)])),_:1}),s(p,{label:"操作",width:"150"},{default:u((({row:a})=>[r("div",I,[s(b,{type:"primary",onClick:e=>{return l=a.id,j.value=l,void(k.value=!0);var l}},{default:u((()=>[E])),_:2},1032,["onClick"]),S,s(b,{type:"primary",onClick:e=>(a=>{let e=[];c.value.forEach((a=>{e.push(a.thumb_url)})),z.value=e,A.value=z.value.findIndex((e=>e==a)),W.value=!0})(a.thumb_url)},{default:u((()=>[U])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])]),W.value?(l(),o(B,{key:0,onClose:e[0]||(e[0]=a=>W.value=!1),"url-list":z.value,"initial-index":A.value},null,8,["url-list","initial-index"])):m("",!0),s(w,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=a=>k.value=a),msg:"确认删除这条数据吗?",onSure:q},null,8,["modelValue"])])}}}),[["__scopeId","data-v-3044fbdf"]]);export{q as default};