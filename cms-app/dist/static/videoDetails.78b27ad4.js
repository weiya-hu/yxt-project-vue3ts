import{d as e,i as a,o as l,t,a as s,w as o,v as u,V as d,u as r,U as i,av as c,aw as m,az as v,b as n}from"./vue.ca737a59.js";import{f as p}from"./date.23847c74.js";import{c as f}from"./custom.4cacfcab.js";import{k as y}from"./myWork.09539945.js";import{M as _}from"./MyEmpty.fe54fee2.js";import{M as b}from"./MyDialog.77763852.js";import{a as w}from"./index.45367786.js";const h=e=>(c("data-v-8e2eb7c8"),e=e(),m(),e),j={class:"video_details"},k=i("个性化内容库"),V=i("视频库"),M=i("视频详情"),C={class:"mytable"},g=["src"],x={class:"fcs"},D=i("删除"),U=h((()=>u("div",{class:"line"},null,-1))),I=i("查看"),q=["src"];var z=w(e({setup(e){const i=v().query.id,c=a([]),m=async()=>{const e=await f({id:i},4);1==e.status&&(c.value=e.body)};m();const w=a(""),h=a(!1),z=()=>{y({id:w.value}).then((e=>{1==e.status&&(m(),h.value=!1)}))},E=a(!1),S=a("");return(e,a)=>{const i=n("el-breadcrumb-item"),m=n("el-breadcrumb"),v=n("el-table-column"),f=n("el-link"),y=n("el-table"),W=n("el-dialog");return l(),t("div",j,[s(m,{separator:"/"},{default:o((()=>[s(i,{to:{path:"/custom"}},{default:o((()=>[k])),_:1}),s(i,{to:{path:"/custom/video"}},{default:o((()=>[V])),_:1}),s(i,null,{default:o((()=>[M])),_:1})])),_:1}),u("div",C,[s(y,{data:c.value,style:{width:"100%"}},{empty:o((()=>[s(_)])),default:o((()=>[s(v,{type:"selection",width:"50"}),s(v,{property:"id",label:"ID"}),s(v,{property:"video_url",label:"视频"},{default:o((({row:e})=>[u("video",{src:e.video_url,alt:"",class:"imgitem"},null,8,g)])),_:1}),s(v,{property:"create_time",label:"创建日期"},{default:o((({row:e})=>[u("div",null,d(r(p)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),s(v,{label:"操作",width:"150"},{default:o((({row:e})=>[u("div",x,[s(f,{type:"primary",onClick:a=>{return l=e.id,w.value=l,void(h.value=!0);var l}},{default:o((()=>[D])),_:2},1032,["onClick"]),U,s(f,{type:"primary",onClick:a=>{return l=e.video_url,S.value=l,void(E.value=!0);var l}},{default:o((()=>[I])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])]),s(b,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),msg:"确认删除这条数据吗?",onSure:z},null,8,["modelValue"]),s(W,{modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value=e),title:"查看视频",fullscreen:"",onClose:a[2]||(a[2]=e=>S.value=""),"custom-class":"videobox"},{default:o((()=>[u("video",{src:S.value,controls:"",class:"show_video"},null,8,q)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-8e2eb7c8"]]);export{z as default};
