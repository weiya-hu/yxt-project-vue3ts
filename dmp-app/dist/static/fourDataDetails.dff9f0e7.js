import{F as a}from"./FindNumber.2b33aeaf.js";import{_ as e}from"./MyPage.eca92ca4.js";import{_ as t}from"./UserTable.84d5ed39.js";import{y as o}from"./findC.200686ba.js";import{F as s,r as l,G as d,H as r,X as u,ax as m}from"./vue.5acda677.js";import{_ as n}from"./index.8e773d39.js";import"./MyEmpty.17c4d8dd.js";const i={class:"fourdata_details_c"};var c=n(s({setup(s){const n=l(),c=l(0),v=l(1),p=m(),f=()=>{o({size:10,current:v.value,did:p.query.id}).then((a=>{1==a.status&&(c.value=a.body.total,n.value=a.body.records)}))};f();const j=()=>{f()},y=l([]),_=a=>{y.value=a};return(o,s)=>(d(),r("div",i,[u(a,{total:c.value},null,8,["total"]),u(t,{data:n.value,onSelect:_},null,8,["data"]),u(e,{total:c.value,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),onChange:j},null,8,["total","modelValue"])]))}}),[["__scopeId","data-v-d4ec2886"]]);export{c as default};