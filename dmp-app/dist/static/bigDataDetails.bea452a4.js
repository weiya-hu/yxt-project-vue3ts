import{F as a}from"./FindNumber.2b297d23.js";import{_ as e}from"./MyPage.eca92ca4.js";import{_ as t}from"./UserTable.703de5eb.js";import{t as o}from"./findC.e5b2a671.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as i}from"./index.cacabfff.js";import"./MyEmpty.c6e7def4.js";const n={class:"bigdata_details_c"};var c=i(s({setup(s){const i=l(),c=l(0),f=l(1),v=m(),p=()=>{o({size:10,current:f.value,did:v.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,i.value=a.body.records)}))};p();const b=()=>{p()},j=l([]),_=a=>{j.value=a};return(o,s)=>(d(),r("div",n,[u(a,{total:c.value},null,8,["total"]),u(t,{data:i.value,onSelect:_},null,8,["data"]),u(e,{total:c.value,modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=a=>f.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-97a4f7a6"]]);export{c as default};
