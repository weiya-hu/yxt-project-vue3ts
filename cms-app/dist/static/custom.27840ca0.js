import{b as s,p as e}from"./index.9bfce773.js";const a=s=>{let e="";switch(s){case 2:e="images";break;case 3:e="posters";break;case 4:e="videos";break;default:e="articles"}return e},c=(e,c)=>s("cms",`/cms/${a(c)}/diy.page`,e),i=(s,c)=>e("cms",`/cms/${a(c)}/diy.in`,s,!0),m=(s,c)=>e("cms",`/cms/${a(c)}/diy.del`,s,!0),t=(e,c)=>s("cms",`/cms/${a(c)}/diy/detail.get`,e);export{c as a,m as b,t as c,i as d};