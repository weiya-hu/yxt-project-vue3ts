import{_ as e}from"./index.43fc5bae.js";import{G as a,b as t,o as s,H as p,a as n,k as o}from"./vue.73bee448.js";const r={class:"mypage"};var u=e(a({props:{page:null,total:{default:0},size:{default:10},hideSizes:{type:Boolean,default:!1}},emits:["update:page","change","update:size"],setup(e,{emit:a}){const u=e=>{a("update:page",e),a("change")},g=e=>{a("update:size",e),a("change")};return(a,i)=>{const l=t("el-pagination");return s(),p("div",r,[n(l,{background:"",layout:e.hideSizes?"total, prev, pager, next, jumper":"total, sizes, prev, pager, next, jumper",total:e.total,"pager-count":9,currentPage:e.page,"onUpdate:currentPage":i[0]||(i[0]=e=>o(page)?page.value=e:null),"page-size":e.size,"onUpdate:page-size":i[1]||(i[1]=e=>o(size)?size.value=e:null),onCurrentChange:u,onSizeChange:g,"page-sizes":[10,20,30]},null,8,["layout","total","currentPage","page-size"])])}}}),[["__scopeId","data-v-d9d61848"]]);export{u as M};