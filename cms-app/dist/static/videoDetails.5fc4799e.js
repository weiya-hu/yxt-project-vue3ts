import{d as a,i as e,o as l,t,a as s,w as o,v as d,V as u,u as r,U as i,av as c,aw as m,az as v,b as n}from"./vue.ca737a59.js";import{f as p}from"./date.23847c74.js";import{c as f}from"./custom.27840ca0.js";import{m as y}from"./myWork.358dcf4f.js";import{M as _}from"./MyEmpty.9beb67d1.js";import{M as b}from"./MyDialog.3360d171.js";import{a as w}from"./index.9bfce773.js";const h=a=>(c("data-v-23f619de"),a=a(),m(),a),j={class:"video_details"},V=i("个性化内容库"),k=i("视频库"),M=i("视频详情"),C={class:"mytable"},g=["src"],x={class:"fcs"},D=i("删除"),U=h((()=>d("div",{class:"line"},null,-1))),I=i("查看"),q=["src"];var z=w(a({setup(a){const i=v().query.id,c=e([]),m=async()=>{const a=await f({id:i},4);1==a.status&&(c.value=[a.body])};m();const w=e(""),h=e(!1),z=()=>{y({id:w.value}).then((a=>{1==a.status&&(m(),h.value=!1)}))},E=e(!1),S=e("");return(a,e)=>{const i=n("el-breadcrumb-item"),m=n("el-breadcrumb"),v=n("el-table-column"),f=n("el-link"),y=n("el-table"),W=n("el-dialog");return l(),t("div",j,[s(m,{separator:"/"},{default:o((()=>[s(i,{to:{path:"/custom"}},{default:o((()=>[V])),_:1}),s(i,{to:{path:"/custom/video"}},{default:o((()=>[k])),_:1}),s(i,null,{default:o((()=>[M])),_:1})])),_:1}),d("div",C,[s(y,{data:c.value,style:{width:"100%"}},{empty:o((()=>[s(_)])),default:o((()=>[s(v,{type:"selection",width:"50"}),s(v,{property:"id",label:"ID"}),s(v,{property:"video_url",label:"视频"},{default:o((({row:a})=>[d("video",{src:a.video_url,alt:"",class:"imgitem"},null,8,g)])),_:1}),s(v,{property:"create_time",label:"创建日期"},{default:o((({row:a})=>[d("div",null,u(r(p)(new Date(a.create_time),"yyyy-MM-dd")),1)])),_:1}),s(v,{label:"操作",width:"150"},{default:o((({row:a})=>[d("div",x,[s(f,{type:"primary",onClick:e=>{return l=a.id,w.value=l,void(h.value=!0);var l}},{default:o((()=>[D])),_:2},1032,["onClick"]),U,s(f,{type:"primary",onClick:e=>{return l=a.video_url,S.value=l,void(E.value=!0);var l}},{default:o((()=>[I])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])]),s(b,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=a=>h.value=a),msg:"确认删除这条数据吗?",onSure:z},null,8,["modelValue"]),s(W,{modelValue:E.value,"onUpdate:modelValue":e[1]||(e[1]=a=>E.value=a),title:"查看视频",fullscreen:"",onClose:e[2]||(e[2]=a=>S.value=""),"custom-class":"videobox"},{default:o((()=>[d("video",{src:S.value,controls:"",class:"show_video"},null,8,q)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-23f619de"]]);export{z as default};
