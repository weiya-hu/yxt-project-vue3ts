import{F as a}from"./FindNumber.70bc6ca9.js";import{_ as e}from"./MyPage.eca92ca4.js";import{_ as t}from"./UserTable.159c0098.js";import{G as s}from"./findC.2a3ebf1d.js";import{F as o,r as l,G as r,H as d,X as u,ax as m}from"./vue.5acda677.js";import{_ as c}from"./index.9da98f44.js";import"./MyEmpty.0b7254fc.js";const n={class:"msgdata_details_c"};var i=c(o({setup(o){const c=l(),i=l(0),v=l(1),f=m(),p=()=>{s({size:10,current:v.value,did:f.query.id}).then((a=>{1==a.status&&(i.value=a.body.total,c.value=a.body.records)}))};p();const b=()=>{p()},j=l([]),_=a=>{j.value=a};return(s,o)=>(r(),d("div",n,[u(a,{total:i.value},null,8,["total"]),u(t,{data:c.value,onSelect:_},null,8,["data"]),u(e,{total:i.value,modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=a=>v.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-2358cf08"]]);export{i as default};
