import{F as a}from"./FindNumber.8ae033dd.js";import{M as e}from"./MyEmpty.3acbd4a9.js";import{_ as t}from"./UserTable.94d5fcd7.js";import{C as d}from"./findC.292d59f2.js";import{F as l,r as o,G as s,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as n}from"./index.4847e6ad.js";const i={class:"biddingdata_details_c"};var v=n(l({setup(l){const n=o(),v=o(0),c=o(1),f=m(),p=()=>{d({size:10,current:c.value,did:f.query.id}).then((a=>{1==a.status&&(v.value=a.body.total,n.value=a.body.records)}))};p();const b=()=>{p()},j=o([]),_=a=>{j.value=a};return(d,l)=>(s(),r("div",i,[u(a,{total:v.value},null,8,["total"]),u(t,{data:n.value,onSelect:_},null,8,["data"]),u(e,{total:v.value,modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-b3e9afa6"]]);export{v as default};
