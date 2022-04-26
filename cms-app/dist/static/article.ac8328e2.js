var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as u}from"./date.23847c74.js";import{M as i}from"./MyEmpty.2d578cc3.js";import{_ as d}from"./MyPage.b41c257e.js";import{M as c}from"./MyDialog.b44ba7dc.js";import{T as n}from"./TopBtns.ff99d37e.js";import{a as m,b as v}from"./myWork.ab3a9734.js";import{a as p}from"./index.45b86954.js";import{d as y,i as b,o as f,t as k,a as h,v as w,w as _,c as C,U as j,V as g,S as x,u as V,L as O,av as M,aw as D,b as N}from"./vue.ca737a59.js";const P=e=>(M("data-v-4c79ea11"),e=e(),D(),e),W={class:"m_article"},A={class:"mytable"},I=["src","onClick"],S=["onClick"],U={class:"fcs"},$={class:"staus"},E={class:"fcs"},T=j("删除"),z=P((()=>w("div",{class:"line"},null,-1))),B=j("编辑"),L=j("查看"),q=j("拒绝原因"),F=y((G=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&o(e,l,a[l]);return e})({},{name:"我的作品库-软文"}),a(G,l({setup(e){const a=b(1),l=b(0),t=b([]),s=async()=>{const e=await m({size:10,current:a.value});1==e.status&&(t.value=e.body.records,l.value=e.body.total)};s();const r=()=>{s()},o=b([]),p=e=>{o.value=e},y=e=>{const a=b();switch(Number(e)){case 2:a.value={text:"待审核",className:"cyellow"};break;case 3:a.value={text:"已通过",className:"cdf"};break;case 4:a.value={text:"已拒绝",className:"cred"};break;default:a.value={text:"草稿",className:"cbbb"}}return a.value},M=b(""),D=b(!1),P=()=>{v({id:M.value}).then((e=>{1==e.status&&(s(),D.value=!1)}))},F=b(!1),G=b(""),H=b([]),J=b(!1),K=b(0);return(e,s)=>{const o=N("el-table-column"),m=N("el-link"),v=N("el-table"),b=N("el-image-viewer");return f(),k("div",W,[h(n,{onAdd:s[0]||(s[0]=a=>e.$router.push("/myWork/articleAdd"))}),w("div",A,[h(v,{data:t.value,style:{width:"100%"},onSelectionChange:p},{empty:_((()=>[h(i)])),default:_((()=>[h(o,{type:"selection",width:"50"}),h(o,{property:"id",label:"ID",width:"230"}),h(o,{property:"thumb_url",label:"封面图片",width:"160"},{default:_((({row:e})=>[w("img",{src:e.thumb_url,alt:"",class:"firstimg lookhover",onClick:a=>(e=>{let a=[];t.value.forEach((e=>{a.push(e.thumb_url)})),H.value=a,K.value=H.value.findIndex((a=>a==e)),J.value=!0})(e.thumb_url)},null,8,I)])),_:1}),h(o,{property:"title",label:"标题"},{default:_((({row:a})=>[4!=a.status?(f(),C(m,{key:0,type:"primary",onClick:l=>e.$router.push(1==a.status?"/myWork/articleAdd?id="+a.id:"/myWork/articleDetails?id="+a.id)},{default:_((()=>[j(g(a.title),1)])),_:2},1032,["onClick"])):x("",!0),4==a.status?(f(),k("span",{key:1,onClick:e=>{G.value=a.fail_reason,F.value=!0}},g(a.title),9,S)):x("",!0)])),_:1}),h(o,{property:"create_time",label:"创建日期",width:"200"},{default:_((({row:e})=>[w("div",null,g(V(u)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),h(o,{property:"status",label:"状态",width:"180"},{default:_((({row:e})=>[w("div",U,[w("div",{class:O(["dot",y(e.status).className])},null,2),w("div",$,g(y(e.status).text),1)])])),_:1}),h(o,{label:"操作",width:"150"},{default:_((({row:a})=>[w("div",E,[h(m,{type:"primary",onClick:e=>{return l=a.id,M.value=l,void(D.value=!0);var l}},{default:_((()=>[T])),_:2},1032,["onClick"]),z,1==a.status?(f(),C(m,{key:0,type:"primary",onClick:l=>e.$router.push("/myWork/articleAdd?id="+a.id)},{default:_((()=>[B])),_:2},1032,["onClick"])):x("",!0),2==a.status||3==a.status?(f(),C(m,{key:1,type:"primary",onClick:l=>e.$router.push("/myWork/articleDetails?id="+a.id)},{default:_((()=>[L])),_:2},1032,["onClick"])):x("",!0),4==a.status?(f(),C(m,{key:2,type:"primary",onClick:e=>{G.value=a.fail_reason,F.value=!0}},{default:_((()=>[q])),_:2},1032,["onClick"])):x("",!0)])])),_:1})])),_:1},8,["data"])]),h(d,{total:l.value,modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onChange:r},null,8,["total","modelValue"]),h(c,{modelValue:D.value,"onUpdate:modelValue":s[2]||(s[2]=e=>D.value=e),msg:"确认删除这条数据吗?",onSure:P},null,8,["modelValue"]),h(c,{modelValue:F.value,"onUpdate:modelValue":s[3]||(s[3]=e=>F.value=e),msg:G.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),J.value?(f(),C(b,{key:0,onClose:s[4]||(s[4]=e=>J.value=!1),"url-list":H.value,"initial-index":K.value},null,8,["url-list","initial-index"])):x("",!0)])}}}))));var G,H=p(F,[["__scopeId","data-v-4c79ea11"]]);export{H as default};
