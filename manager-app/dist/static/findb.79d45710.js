import{g as s,p as a,a as e}from"./request.10479ac9.js";const d=a=>s(1,"/dmp/business/demand/condition.page",a),p=a=>s(1,"/dmp/business/demand/detail.page",a),o=s=>a(1,"/dmp/business/demand/pass.do",s,!0),m=s=>a(1,"/dmp/business/demand/reject.do",s,!0),n=a=>s(1,"/dmp/channel/condition.page",a),t=a=>s(1,"/dmp/channel/detail.page",a),l=s=>a(1,"/dmp/channel/pass.do",s,!0),i=s=>a(1,"/dmp/channel/reject.do",s,!0),r=a=>s(1,"/dmp/item/condition.page",a),c=a=>s(1,"/dmp/item/detail.page",a),u=a=>s(1,"/dmp/overseas/purchase/condition.page",a),g=a=>s(1,"/dmp/overseas/purchase/detail.page",a),v=s=>a(1,"/dmp/overseas/pass.do",s,!0),b=s=>a(1,"/dmp/overseas/reject.do",s,!0),h=a=>s(1,"/dmp/overseas/supply/condition.page",a),y=a=>s(1,"/dmp/overseas/supply/detail.page",a),w=(s,a)=>{const d={business:"/dmp/business/template/download.do",customer:"/dmp/customer/template/download.do",channel:"/dmp/channel/template/download.do",item:"/dmp/item/template/download.do",overseas:"/dmp/overseas/template/download.do"},p=a?{type:a}:{};return()=>e(1,d[s],"blob",p)},j=()=>s(1,"/dmp/business/company/type.list"),f=()=>s(1,"/dmp/overseas/country.list"),q=s=>a(1,"/dmp/business/upload.do",s,!0),x=s=>a(1,"/dmp/channel/upload.do",s,!0),k=s=>a(1,"/dmp/item/upload.do",s,!0),z=s=>a(1,"/dmp/overseas/purchase/upload.do",s,!0),A=s=>a(1,"/dmp/overseas/supply/upload.do",s,!0);export{o as a,d as b,m as c,q as d,j as e,p as f,n as g,l as h,i,x as j,t as k,r as l,k as m,c as n,f as o,u as p,v as q,b as r,z as s,w as t,g as u,h as v,A as w,y as x};