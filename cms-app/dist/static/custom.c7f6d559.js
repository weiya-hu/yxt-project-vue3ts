import{g as s,p as e}from"./index.f8e08015.js";const a=s=>{let e="";switch(s){case 2:e="images";break;case 3:e="posters";break;case 4:e="videos";break;default:e="articles"}return e},i=(e,i)=>s(`/cms/${a(i)}/diy.page`,e),c=(s,i)=>e(`/cms/${a(i)}/diy.in`,s,!0),t=(s,i)=>e(`/cms/${a(i)}/diy.del`,s,!0),d=(e,i)=>s(`/cms/${a(i)}/diy/detail.get`,e);export{i as a,t as b,d as c,c as d};
