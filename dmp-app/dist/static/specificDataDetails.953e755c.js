import{_ as a}from"./MyEmpty.b964169c.js";import{C as t}from"./CompanyTable.aee63277.js";import{T as e}from"./TopBtns.20c749f8.js";import{F as s,r as l,G as o,H as u,X as r,ax as d}from"./vue.5acda677.js";import{v as m}from"./index.486f2fa0.js";const n={class:"specific_data_details_page"},p=s({setup(s){const p=d().query.id,i=l([]),c=l(1),v=l(0),f=()=>{y()},y=()=>{m({current:c.value,size:10,id:p}).then((a=>{1==a.status&&(v.value=a.body.total,i.value=a.body.records)}))};return y(),(s,l)=>(o(),u("div",n,[r(e,{total:v.value,class:"topbtns"},null,8,["total"]),r(t,{data:i.value},null,8,["data"]),r(a,{total:v.value,modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),onChange:f},null,8,["total","modelValue"])]))}});export{p as default};