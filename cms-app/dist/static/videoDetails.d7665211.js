import{y as a,r as e,z as l,A as t,_ as s,T as o,B as d,Z as r,u,Y as i,av as c,aw as m,az as v,a4 as n}from"./vue.92f8d02a.js";import{f as p}from"./date.23847c74.js";import{c as f}from"./custom.c7f6d559.js";import{k as y}from"./myWork.090a1413.js";import{M as _}from"./MyEmpty.6a76a222.js";import{M as b}from"./MyDialog.21c6d2aa.js";import{a as w}from"./index.f8e08015.js";const h=a=>(c("data-v-8e2eb7c8"),a=a(),m(),a),j={class:"video_details"},k=i("个性化内容库"),M=i("视频库"),V=i("视频详情"),C={class:"mytable"},g=["src"],x={class:"fcs"},D=i("删除"),z=h((()=>d("div",{class:"line"},null,-1))),I=i("查看"),U=["src"];var q=w(a({setup(a){const i=v().query.id,c=e([]),m=async()=>{const a=await f({id:i},4);1==a.status&&(c.value=a.body)};m();const w=e(""),h=e(!1),q=()=>{y({id:w.value}).then((a=>{1==a.status&&(m(),h.value=!1)}))},A=e(!1),B=e("");return(a,e)=>{const i=n("el-breadcrumb-item"),m=n("el-breadcrumb"),v=n("el-table-column"),f=n("el-link"),y=n("el-table"),E=n("el-dialog");return l(),t("div",j,[s(m,{separator:"/"},{default:o((()=>[s(i,{to:{path:"/custom"}},{default:o((()=>[k])),_:1}),s(i,{to:{path:"/custom/video"}},{default:o((()=>[M])),_:1}),s(i,null,{default:o((()=>[V])),_:1})])),_:1}),d("div",C,[s(y,{data:c.value,style:{width:"100%"}},{empty:o((()=>[s(_)])),default:o((()=>[s(v,{type:"selection",width:"50"}),s(v,{property:"id",label:"ID"}),s(v,{property:"video_url",label:"视频"},{default:o((({row:a})=>[d("video",{src:a.video_url,alt:"",class:"imgitem"},null,8,g)])),_:1}),s(v,{property:"create_time",label:"创建日期"},{default:o((({row:a})=>[d("div",null,r(u(p)(new Date(a.create_time),"yyyy-MM-dd")),1)])),_:1}),s(v,{label:"操作",width:"150"},{default:o((({row:a})=>[d("div",x,[s(f,{type:"primary",onClick:e=>{return l=a.id,w.value=l,void(h.value=!0);var l}},{default:o((()=>[D])),_:2},1032,["onClick"]),z,s(f,{type:"primary",onClick:e=>{return l=a.video_url,B.value=l,void(A.value=!0);var l}},{default:o((()=>[I])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])]),s(b,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=a=>h.value=a),msg:"确认删除这条数据吗?",onSure:q},null,8,["modelValue"]),s(E,{modelValue:A.value,"onUpdate:modelValue":e[1]||(e[1]=a=>A.value=a),title:"查看视频",fullscreen:"",onClose:e[2]||(e[2]=a=>B.value=""),"custom-class":"videobox"},{default:o((()=>[d("video",{src:B.value,controls:"",class:"show_video"},null,8,U)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-8e2eb7c8"]]);export{q as default};
