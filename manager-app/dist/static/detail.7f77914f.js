import{G as a,g as s,o as t,H as e,a as i,I as l,a2 as n,C as d,X as u,a0 as c,c as o,w as r,a1 as m,az as v,b as y}from"./vue.73bee448.js";import{D as b}from"./DetailsHeader.3aa57709.js";import{M as p}from"./MyDialog.0b6de626.js";import{f}from"./date.23847c74.js";import{e as w,n as _,a as k,f as g,b as h,g as j,c as M,h as C}from"./website.b31c0e29.js";import{_ as D}from"./index.f86653d0.js";import"./request.64bd2e3c.js";const H={class:"article_details"},x={class:"content"},V={class:"title"},q={class:"nav-tips"},I={key:0,class:"ss"},L={class:"btns"},T=m("上线"),$=m("下线"),z=m("编辑"),B=m("删除"),E=["innerHTML"];var G=D(a({setup(a){const m=v(),D=m.meta.father.split("/")[3],G=m.query.id,N=s({title:"",content:"",create_time:0,type_name:"",readed:0,status:0}),S=async()=>{const a="dynamic"==D?await w({id:G}):await _({id:G});1==a.status&&(N.value=a.body)};S(),s([]);const U=async()=>{1==("dynamic"==D?await k({id:G}):await g({id:G})).status&&S()},X=async()=>{1==("dynamic"==D?await h({id:G}):await j({id:G})).status&&S()},A=s(!1),F=async()=>{1==("dynamic"==D?await M({id:G}):await C({id:G})).status&&(A.value=!1,window.location.href="dynamic"==D?"/website/inform/dynamic":"/website/inform/notice")};return(a,s)=>{const m=y("el-button"),v=y("el-card");return t(),e("div",H,[i(b),l("div",x,[l("div",V,n(N.value.title),1),l("div",q,[l("span",null,"分类："+n(N.value.type_name),1),l("span",null,"查看量："+n(N.value.readed),1),l("span",null,n(d(f)(new Date(Number(N.value.create_time)),"yyyy-MM-dd hh:mm:ss")),1),0!=N.value.status?(t(),e("div",I,[l("div",{class:"point",style:u(1==N.value.status?"background: #E40000;":"background:#24BD13;")},null,4),l("span",null,n(2==N.value.status?"在线":"离线"),1)])):c("",!0),l("div",L,[1==N.value.status?(t(),o(m,{key:0,class:"bdc_btn",onClick:U},{default:r((()=>[T])),_:1})):c("",!0),2==N.value.status?(t(),o(m,{key:1,class:"bdc_btn",onClick:X},{default:r((()=>[$])),_:1})):c("",!0),1==N.value.status||0==N.value.status?(t(),o(m,{key:2,class:"bdc_btn",onClick:s[0]||(s[0]=s=>"dynamic"===d(D)?a.$router.push("/website/inform/dynamic/dynamicadd?id="+d(G)):a.$router.push("/website/inform/notice/noticeadd?id="+d(G)))},{default:r((()=>[z])),_:1})):c("",!0),1==N.value.status||0==N.value.status?(t(),o(m,{key:3,class:"bdc_btn",onClick:s[1]||(s[1]=a=>(d(G),void(A.value=!0)))},{default:r((()=>[B])),_:1})):c("",!0)])]),i(v,null,{default:r((()=>[l("div",{class:"txt",innerHTML:N.value.content},null,8,E)])),_:1}),i(p,{modelValue:A.value,"onUpdate:modelValue":s[2]||(s[2]=a=>A.value=a),msg:"dynamic"==d(D)?"此动态删除后无法撤回，请谨慎删除！":"此通知删除后无法撤回，请谨慎删除！",onSure:F},null,8,["modelValue","msg"])])])}}}),[["__scopeId","data-v-e0ded324"]]);export{G as default};
