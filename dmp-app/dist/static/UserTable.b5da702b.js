import{M as e}from"./MyEmpty.adda1bd0.js";import{m as a,k as t,n as s,o as l}from"./index.c7567bfe.js";import{F as r,f as o,O as d,G as p,H as i,X as n,Q as u,I as y,W as c,u as m}from"./vue.5acda677.js";const b={class:"mytable user_table"},f=r({props:{data:Array},emits:["select"],setup(r,{emit:f}){const w=a(),_=o((()=>w.state.typeHash)),v=o((()=>w.state.addressHash)),h=e=>{f("select",e)};return(a,o)=>{const f=d("el-table-column"),w=d("el-table");return p(),i("div",b,[n(w,{data:r.data,style:{width:"100%"},onSelectionChange:h},{empty:u((()=>[n(e)])),default:u((()=>[n(f,{type:"selection",width:"50"}),n(f,{property:"name",label:"姓名"}),n(f,{property:"sex",label:"性别"},{default:u((e=>[y("div",null,c(1==e.row.sex?"男":"女"),1)])),_:1}),n(f,{property:"mobiles",label:"联系方式"}),n(f,{property:"email",label:"邮箱"}),n(f,{property:"type",label:"从事行业"},{default:u((e=>[y("div",null,c(m(t)(e.row.industry_id.split(","),m(_),"last")),1)])),_:1}),n(f,{label:"地区"},{default:u((e=>[y("div",null,c(m(t)(m(s)(e.row.province,e.row.city,e.row.district),m(v))),1)])),_:1}),n(f,{property:"source",label:"来源"},{default:u((e=>[y("div",null,c(m(l)(e.row.source)),1)])),_:1})])),_:1},8,["data"])])}}});export{f as _};
