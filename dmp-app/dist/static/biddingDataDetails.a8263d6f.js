import{F as a}from"./FindNumber.f7d449c0.js";import{_ as e}from"./MyPage.29df61fa.js";import{_ as t}from"./UserTable.afd510b7.js";import{C as o}from"./findC.a40b8476.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.2fa59680.js";import{_ as i}from"./index.e956d55f.js";import"./MyEmpty.06d8b729.js";const n={class:"biddingdata_details_c"};var f=i(s({setup(s){const i=l(),f=l(0),v=l(1),p=m(),c=()=>{o({size:10,current:v.value,did:p.query.id}).then((a=>{1==a.status&&(f.value=a.body.total,i.value=a.body.records)}))};c();const b=()=>{c()},j=l([]),_=a=>{j.value=a};return(o,s)=>(d(),r("div",n,[u(a,{total:f.value},null,8,["total"]),u(t,{data:i.value,onSelect:_},null,8,["data"]),u(e,{total:f.value,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-b3e9afa6"]]);export{f as default};
