import{F as a}from"./FindNumber.1552fbab.js";import{_ as e}from"./MyPage.eca92ca4.js";import{_ as t}from"./UserTable.3234ea56.js";import{i as o}from"./findC.86c4ad00.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as i}from"./index.c9a88071.js";import"./MyEmpty.49b1be6e.js";const n={class:"addata_details_c"};var c=i(s({setup(s){const i=l(),c=l(0),v=l(1),p=m(),f=()=>{o({size:10,current:v.value,did:p.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,i.value=a.body.records)}))};f();const b=()=>{f()},j=l([]),_=a=>{j.value=a};return(o,s)=>(d(),r("div",n,[u(a,{total:c.value},null,8,["total"]),u(t,{data:i.value,onSelect:_},null,8,["data"]),u(e,{total:c.value,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-faf685d4"]]);export{c as default};
