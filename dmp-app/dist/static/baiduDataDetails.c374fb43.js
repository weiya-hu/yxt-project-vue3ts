import{F as a}from"./FindNumber.7caf06b7.js";import{_ as e}from"./MyEmpty.b964169c.js";import{_ as t}from"./UserTable.8e95155c.js";import{p as l}from"./findC.ea3a2a54.js";import{F as o,r as s,G as r,H as u,X as d,ax as m}from"./vue.5acda677.js";import{_ as n}from"./index.486f2fa0.js";const i={class:"baidudata_details_c"};var c=n(o({setup(o){const n=s(),c=s(0),f=s(1),v=m(),p=()=>{l({size:10,current:f.value,did:v.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,n.value=a.body.records)}))};p();const b=()=>{p()},_=s([]),j=a=>{_.value=a};return(l,o)=>(r(),u("div",i,[d(a,{total:c.value},null,8,["total"]),d(t,{data:n.value,onSelect:j},null,8,["data"]),d(e,{total:c.value,modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=a=>f.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-46bef8f4"]]);export{c as default};
