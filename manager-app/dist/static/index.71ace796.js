import{e as t,E as e,a as n}from"./index.43fc5bae.js";function o(t,e){n({showClose:!0,message:t,grouping:!0,type:"success",duration:"number"==typeof e?e:3e3})}function s(t,e){n({showClose:!0,message:t,grouping:!0,type:"error",duration:"number"==typeof e?e:3e3})}function r(t,e){n({showClose:!0,message:t,grouping:!0,type:"warning",duration:e||3e3})}function a(t){return e.confirm(t||"正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})}function c(t,e,n="name",o="children"){let s={};const r=(t,s)=>{for(let a=0;a<t.length;a++)s[t[a][e]]={[n]:t[a][n]},t[a][o]&&(s[t[a][e]][o]={},r(t[a][o],s[t[a][e]][o]))};return r(t,s),s}function i(t,e,n,o="name",s="children"){let r=[];const a=()=>{switch(n){case"arr":return r;case"last":return r[r.length-1]?r[r.length-1]:"";default:return r.join("，")}};let c=0;const i=e=>{r.push(e[o]),e[s]&&c<t.length&&(c++,i(e[s][t[c]]))};try{return e[t[c]]&&i(e[t[c]]),a()}catch(u){return a()}}function u(t,e,n){try{let o=[t.toString()];return e&&!n?o.push(e.toString()):e&&n&&(o.push(e.toString()),o.push(n.toString())),o}catch(o){return[t.toString()]}}function l(t){const e={1:"康州数智",2:"第三方数据",3:"号码段",4:"广告投放",5:"微信好友",6:"百度关键词",7:"大数据获客",8:"400获客",9:"竞价获客",10:"短信获客"};try{if(e[t])return e[t]}catch(n){return"---"}return"---"}const m=new RegExp(/^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/),f=/^[A-Za-z0-9]*$/;function g(e,n=0){t.emit("lookImage",{imgs:e,index:n})}function h(e){t.emit("lookVideo",e)}function d(e,n,o){t.emit("kzPoolShow",{callbackName:e,type:n,disabled:o})}function p(e){t.emit("kzPoolClear",e)}const w=(t,e)=>{fetch(t).then((t=>t.blob())).then((t=>{const n=document.createElement("a"),o=window.URL.createObjectURL(t);n.href=o,n.download=e||"未命名",n.click(),n.remove(),window.URL.revokeObjectURL(o)}))},x={0:{text:"---",className:""},1:{text:"待处理",className:"sdot_y"},2:{text:"已受理",className:"sdot_g"},3:{text:"被驳回",className:"sdot_r"},4:{text:"已完结",className:"sdot_b"}};function y(t){const e={text:"---",className:""};try{if(x[t])return x[t]}catch(n){return e}return e}export{g as a,i as b,d as c,y as d,s as e,l as f,c as g,p as h,w as i,a as k,h as l,o,f as p,u as s,m as t,r as w};