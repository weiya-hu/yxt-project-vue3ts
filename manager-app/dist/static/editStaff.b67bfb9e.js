import{D as e}from"./DetailsHeader.7f53a82d.js";import{G as a,g as s,o as t,H as i,I as r,a as l,w as c,a2 as d,a1 as n,aw as o,ax as u,az as f,av as m,b as v}from"./vue.73bee448.js";import{c as p,f as h,h as b}from"./system.24f7cfc2.js";import{m as y}from"./index.64b2c7d4.js";import{_}from"./index.7462c988.js";import"./request.031adcd7.js";import"./login.a3184624.js";import"./index.eef2ec07.js";const j=e=>(o("data-v-69adf357"),e=e(),u(),e),k={class:"editstaff_page"},x={class:"fsc"},w=n("确认修改"),g={class:"flex"},C={class:"lt"},E=j((()=>r("div",{class:"fw600 pl20"},"修改对象",-1))),H={class:"fsc mt20 bgceee"},I={class:"rt f1 ml20"},K=j((()=>r("div",{class:"fw600 mb20 pt20"},"修改权限",-1)));var q=_(a({setup(a){const n=y(),o=f(),u=m(),_=o.query.id,j={children:"children",label:"name"},q=s(),z=s([]);(async()=>{const e=await p();z.value=e.body,N()})();const D=s({dept_name:[],name:"",per_list:[]}),N=async()=>{if(!_)return;const e=await h({id:_});D.value=e.body;const a=s([]);D.value.per_list.forEach((e=>{z.value.forEach((s=>{s.children.forEach((s=>{s.children?s.children.forEach((s=>{s.permission_id==e&&a.value.push(Number(e))})):s.permission_id==e&&a.value.push(Number(e))}))}))})),q.value.setCheckedKeys(a.value)},G=async()=>{if(!_)return;const e=q.value.getCheckedKeys(),a=q.value.getHalfCheckedKeys(),s=e.concat(a);if(1==(await b({buid:_,list:s})).status){if(n.state.userInfo.buid==_)return void n.setUserLv().then((e=>{-1!=e.indexOf("24")?u.back():u.replace("/index")}));u.back()}};return(a,s)=>{const n=v("el-button"),o=v("el-tree"),u=v("el-card");return t(),i("div",k,[r("div",x,[l(e),l(n,{type:"primary",onClick:G,size:"large"},{default:c((()=>[w])),_:1})]),l(u,{class:"mt20"},{default:c((()=>[r("div",g,[r("div",C,[E,r("div",H,[r("div",null,d(D.value.name),1),r("span",null,d(D.value.dept_name.join()),1)])]),r("div",I,[K,l(o,{data:z.value,props:j,"node-key":"permission_id","show-checkbox":"",ref_key:"lvtree",ref:q},null,8,["data"])])])])),_:1})])}}}),[["__scopeId","data-v-69adf357"]]);export{q as default};
