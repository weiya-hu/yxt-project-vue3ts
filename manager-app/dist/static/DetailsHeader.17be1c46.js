import{G as a,az as t,g as e,b as s,o as l,H as r,I as h,a as c,w as p,P as u,aa as o,c as d,a1 as n,a2 as i,C as m,aw as v,ax as f}from"./vue.73bee448.js";import{_ as b,h as _}from"./index.83d90a4b.js";const x={class:"details_header"},g={class:"fcs breadcrumb"},j=(a=>(v("data-v-6c070812"),a=a(),f(),a))((()=>h("div",null,"当前位置：",-1)));var k=b(a({setup(a){const v=t(),f="/"+v.path.split("/")[1],b=e([]);for(let t=0;t<v.matched.length;t++){const a=v.matched[t];a.path!=f?a.path!=v.path||b.value.push(a):(b.value.push(a),a.children.forEach((a=>{if(a.path==v.meta.father&&"/index"!=a.path&&b.value.push(a),a.children){f+"/"+v.path.split("/")[2]==a.path&&(b.value.push(a),a.children.forEach((a=>{a.path==v.meta.father&&b.value.push(a)})))}})))}return(a,t)=>{const e=s("el-breadcrumb-item"),v=s("el-breadcrumb"),f=s("el-page-header");return l(),r("div",x,[h("div",g,[j,c(v,{separator:"/"},{default:p((()=>[(l(!0),r(u,null,o(b.value,(a=>(l(),d(e,{to:{path:a.path}},{default:p((()=>[n(i(a.meta.title),1)])),_:2},1032,["to"])))),256))])),_:1})]),c(f,{icon:m(_),content:a.$route.meta.title,onBack:t[0]||(t[0]=t=>a.$router.back()),class:"dh_title"},null,8,["icon","content"])])}}}),[["__scopeId","data-v-6c070812"]]);export{k as D};