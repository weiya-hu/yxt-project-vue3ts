import{_ as a}from"./MyPage.eca92ca4.js";import{C as e}from"./CompanyTable.9b71438f.js";import{F as s}from"./FindNumber.2b33aeaf.js";import{F as t,r as l,G as o,H as d,I as r,X as u,Q as i,V as c,ax as n,O as m}from"./vue.5acda677.js";import{_ as p,v}from"./index.8e773d39.js";import"./MyEmpty.17c4d8dd.js";const f={class:"specific_data_details_page"},_={class:"topbtns fsc"},b={class:"rt fcs"},y=c("同步SCRM"),g=c("同步CMS"),j=c("同步DSP系统");var C=p(t({setup(t){const c=n().query.id,p=l([]),C=l(1),z=l(0),M=()=>{V()},V=()=>{v({current:C.value,size:10,id:c}).then((a=>{1==a.status&&(z.value=a.body.total,p.value=a.body.records)}))};return V(),(t,l)=>{const c=m("el-button");return o(),d("div",f,[r("div",_,[u(s,{class:"lt",total:z.value},null,8,["total"]),r("div",b,[u(c,{size:"large"},{default:i((()=>[y])),_:1}),u(c,{size:"large"},{default:i((()=>[g])),_:1}),u(c,{size:"large"},{default:i((()=>[j])),_:1})])]),u(e,{data:p.value},null,8,["data"]),u(a,{total:z.value,modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=a=>C.value=a),onChange:M},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-412aa91e"]]);export{C as default};
