import{F as a}from"./FindNumber.7e4c21e3.js";import{_ as e}from"./MyPage.108e5d13.js";import{_ as t}from"./UserTable.842aef5f.js";import{i as o}from"./findC.16c42dc2.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.d2637ff6.js";import{_ as i}from"./index.0c9b2458.js";import"./MyEmpty.ccd2530f.js";const n={class:"addata_details_c"};var c=i(s({setup(s){const i=l(),c=l(0),f=l(1),v=m(),p=()=>{o({size:10,current:f.value,did:v.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,i.value=a.body.records)}))};p();const j=()=>{p()},_=l([]),y=a=>{_.value=a};return(o,s)=>(d(),r("div",n,[u(a,{total:c.value},null,8,["total"]),u(t,{data:i.value,onSelect:y},null,8,["data"]),u(e,{total:c.value,modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=a=>f.value=a),onChange:j},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-faf685d4"]]);export{c as default};
