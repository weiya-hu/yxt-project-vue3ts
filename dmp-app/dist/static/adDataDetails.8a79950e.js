import{F as a}from"./FindNumber.697fe88b.js";import{_ as e}from"./MyPage.eca92ca4.js";import{_ as t}from"./UserTable.91d4d753.js";import{i as o}from"./findC.ebbdab13.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as i}from"./index.0a59edad.js";import"./MyEmpty.62621b2b.js";const n={class:"addata_details_c"};var v=i(s({setup(s){const i=l(),v=l(0),c=l(1),p=m(),f=()=>{o({size:10,current:c.value,did:p.query.id}).then((a=>{1==a.status&&(v.value=a.body.total,i.value=a.body.records)}))};f();const b=()=>{f()},j=l([]),_=a=>{j.value=a};return(o,s)=>(d(),r("div",n,[u(a,{total:v.value},null,8,["total"]),u(t,{data:i.value,onSelect:_},null,8,["data"]),u(e,{total:v.value,modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=a=>c.value=a),onChange:b},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-faf685d4"]]);export{v as default};
