import{T as e}from"./TopBtns.f162de6f.js";import{a,M as l}from"./MyEmpty.201b711b.js";import{m as t,n as s,o,p as r,_ as i}from"./index.585b2ef6.js";import{F as n,f as u,r as d,O as p,G as c,H as v,X as y,Q as f,I as m,W as b,u as h,L as _,ax as g,a6 as w,R as L}from"./vue.5acda677.js";import{g as x,s as j}from"./findC.f5d5610c.js";const H=["innerHTML"],I=n({props:{data:null,oheight:{default:126}},emits:["select"],setup(e,{expose:l,emit:i}){const n=t(),g=u((()=>n.state.typeHash)),w=u((()=>n.state.addressHash)),L=d([]),x=e=>{L.value=e.map((e=>e.id))},j=d();return l({selIdList:L,clear:()=>{L.value=[],j.value.clearSelection()}}),(l,t)=>{const i=p("el-table-column"),n=p("el-table");return c(),v("div",{class:"mytable user_table",style:_({height:`calc( 100% - ${e.oheight}px )`})},[y(n,{data:e.data,style:{width:"100%"},height:"100%",onSelectionChange:x,ref_key:"tableRef",ref:j},{empty:f((()=>[y(a)])),default:f((()=>[y(i,{type:"selection",width:"50"}),y(i,{property:"name",label:"姓名"}),y(i,{property:"sex",label:"性别"},{default:f((e=>[m("div",null,b(1==e.row.sex?"男":"女"),1)])),_:1}),y(i,{property:"mobiles",label:"联系方式"},{default:f((e=>[m("div",{innerHTML:e.row.mobiles},null,8,H)])),_:1}),y(i,{property:"email",label:"邮箱"}),y(i,{property:"type",label:"从事行业"},{default:f((e=>[m("div",null,b(h(s)(e.row.industry_id.split(","),h(g),"last")),1)])),_:1}),y(i,{label:"地区"},{default:f((e=>[m("div",null,b(h(s)(h(o)(e.row.province,e.row.city,e.row.district),h(w))),1)])),_:1}),y(i,{property:"source",label:"来源"},{default:f((e=>[m("div",null,b(h(r)(e.row.source)),1)])),_:1})])),_:1},8,["data"])],4)}}});const M={class:"user_data_details"};var R=i(n({props:{getListApi:null},setup(a){const t=a,s=d([]),o=d(0),r=d(1),i=d(!1),n=g(),p=()=>{i.value=!0,t.getListApi({size:50,current:r.value,did:n.query.id}).then((e=>{1==e.status&&(o.value=e.body.total,s.value=e.body.records),i.value=!1})).catch((()=>{i.value=!1}))};p();const f=()=>{p()},m=d(),b=d(),_=u((()=>b.value&&!b.value.selIdList.length)),H=async()=>{m.value.setLoading(!0);const e=await j({list:b.value.selIdList});m.value.close(e.message),b.value.clear()};return(a,t)=>{const n=w("loading");return L((c(),v("div",M,[y(e,{total:o.value,syncbtn:"",onSync:H,ref_key:"topBtnRef",ref:m,"sync-api":h(x),"sync-disabled":h(_),class:"topbtns"},null,8,["total","sync-api","sync-disabled"]),y(I,{data:s.value,ref_key:"tableRef",ref:b},null,8,["data"]),y(l,{total:o.value,size:50,modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),onChange:f},null,8,["total","modelValue"])])),[[n,i.value]])}}}),[["__scopeId","data-v-306440de"]]);export{R as K};
