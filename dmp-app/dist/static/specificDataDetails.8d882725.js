import{_ as a}from"./MyPage.eca92ca4.js";import{C as e}from"./CompanyTable.00eb7726.js";import{F as s}from"./FindNumber.4049c721.js";import{F as t,r as l,G as o,H as r,I as u,X as d,Q as i,V as c,ax as n,O as m}from"./vue.5acda677.js";import{_ as f,v as p}from"./index.48ec18bf.js";import"./MyEmpty.3b467f0f.js";const v={class:"specific_data_details_page"},_={class:"topbtns fsc"},b={class:"rt fcs"},y=c("同步SCRM"),g=c("同步CMS"),j=c("同步DSP系统");var C=f(t({setup(t){const c=n().query.id,f=l([]),C=l(1),z=l(0),M=()=>{V()},V=()=>{p({current:C.value,size:10,id:c}).then((a=>{1==a.status&&(z.value=a.body.total,f.value=a.body.records)}))};return V(),(t,l)=>{const c=m("el-button");return o(),r("div",v,[u("div",_,[d(s,{class:"lt",total:z.value},null,8,["total"]),u("div",b,[d(c,{size:"large"},{default:i((()=>[y])),_:1}),d(c,{size:"large"},{default:i((()=>[g])),_:1}),d(c,{size:"large"},{default:i((()=>[j])),_:1})])]),d(e,{data:f.value},null,8,["data"]),d(a,{total:z.value,modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=a=>C.value=a),onChange:M},null,8,["total","modelValue"])])}}}),[["__scopeId","data-v-412aa91e"]]);export{C as default};
