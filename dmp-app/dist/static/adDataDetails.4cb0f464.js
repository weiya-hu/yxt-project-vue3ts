import{F as a}from"./FindNumber.7caf06b7.js";import{_ as e}from"./MyEmpty.b964169c.js";import{_ as t}from"./UserTable.8e95155c.js";import{i as l}from"./findC.ea3a2a54.js";import{F as o,r as s,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as n}from"./index.486f2fa0.js";const i={class:"addata_details_c"};var c=n(o({setup(o){const n=s(),c=s(0),f=s(1),v=m(),p=()=>{l({size:10,current:f.value,did:v.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,n.value=a.body.records)}))};p();const _=()=>{p()},b=s([]),j=a=>{b.value=a};return(l,o)=>(d(),r("div",i,[u(a,{total:c.value},null,8,["total"]),u(t,{data:n.value,onSelect:j},null,8,["data"]),u(e,{total:c.value,modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=a=>f.value=a),onChange:_},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-faf685d4"]]);export{c as default};
