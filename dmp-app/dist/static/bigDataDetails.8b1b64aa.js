import{F as a}from"./FindNumber.8ae033dd.js";import{M as e}from"./MyEmpty.3acbd4a9.js";import{_ as t}from"./UserTable.94d5fcd7.js";import{t as l}from"./findC.292d59f2.js";import{F as o,r as s,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as n}from"./index.4847e6ad.js";const i={class:"bigdata_details_c"};var v=n(o({setup(o){const n=s(),v=s(0),c=s(1),f=m(),p=()=>{l({size:10,current:c.value,did:f.query.id}).then((a=>{1==a.status&&(v.value=a.body.total,n.value=a.body.records)}))};p();const b=()=>{p()},j=s([]),_=a=>{j.value=a};return(l,o)=>(d(),r("div",i,[u(a,{total:v.value},null,8,["total"]),u(t,{data:n.value,onSelect:_},null,8,["data"]),u(e,{total:v.value,modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=a=>c.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-97a4f7a6"]]);export{v as default};
