import{_ as e}from"./index.4a788974.js";import{G as a,u as t,b as s,o as p,H as n,a as u,C as o,k as r}from"./vue.73bee448.js";const g={class:"mypage"};var l=e(a({props:{page:null,total:{default:0},size:{default:10},hideSizes:{type:Boolean,default:!1}},emits:["update:page","change","update:size"],setup(e,{emit:a}){const l=e,i=t({get:()=>l.page,set:e=>{a("update:page",e)}}),d=t({get:()=>l.size,set:e=>{a("update:size",e)}}),c=e=>{a("update:page",e),a("change")},z=e=>{a("update:size",e),a("change")};return(a,t)=>{const l=s("el-pagination");return p(),n("div",g,[u(l,{background:"",layout:e.hideSizes?"total, prev, pager, next, jumper":"total, sizes, prev, pager, next, jumper",total:e.total,"pager-count":9,currentPage:o(i),"onUpdate:currentPage":t[0]||(t[0]=e=>r(i)?i.value=e:null),"page-size":o(d),"onUpdate:page-size":t[1]||(t[1]=e=>r(d)?d.value=e:null),onCurrentChange:c,onSizeChange:z,"page-sizes":[10,20,30]},null,8,["layout","total","currentPage","page-size"])])}}}),[["__scopeId","data-v-f5fe9b94"]]);export{l as M};
