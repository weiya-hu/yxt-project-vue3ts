import{M as a}from"./MyEmpty.8f0ec31f.js";import{_ as e}from"./CompanyTable.7d9d858b.js";import{T as s}from"./TopBtns.b5dbe755.js";import{F as l,r as t,f as o,R as u,G as n,H as d,X as c,u as r,ax as i,a6 as v}from"./vue.5acda677.js";import{_ as f,g as p,z as m,c as y}from"./index.1db2fe58.js";const b={class:"specific_data_details_page"};var _=f(l({setup(l){const f=i().query.id,_=t([]),g=t(1),j=t(0),h=t(!1),x=()=>{z()},z=()=>{h.value=!0,m({current:g.value,size:50,id:f}).then((a=>{1==a.status&&(j.value=a.body.total,_.value=a.body.records),h.value=!1})).catch((()=>{h.value=!1}))};z();const I=t(),L=t(),R=o((()=>L.value&&!L.value.selIdList.length)),T=async()=>{I.value.setLoading(!0);const a=await y({list:L.value.selIdList});I.value.close(a.message),L.value.clear()};return(l,t)=>{const o=v("loading");return u((n(),d("div",b,[c(s,{total:j.value,syncbtn:"",onSync:T,ref_key:"topBtnRef",ref:I,"sync-api":r(p),"sync-disabled":r(R),class:"topbtns"},null,8,["total","sync-api","sync-disabled"]),c(e,{data:_.value,ref_key:"tableRef",ref:L},null,8,["data"]),c(a,{total:j.value,size:50,modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=a=>g.value=a),onChange:x},null,8,["total","modelValue"])])),[[o,h.value]])}}}),[["__scopeId","data-v-f8947ca8"]]);export{_ as default};
