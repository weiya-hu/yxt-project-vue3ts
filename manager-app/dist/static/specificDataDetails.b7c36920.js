import{D as a}from"./DetailsHeader.945bd2c0.js";import{f as e}from"./findb.01b28395.js";import{M as t}from"./Mypage.ea751ae3.js";import{M as s}from"./MyDataTable.50aadf61.js";import{M as l}from"./MyEmpty.e7bf4449.js";import{G as p,g as i,o,H as d,a as r,I as m,_ as n,c as u,w as c,P as y,aa as b,a0 as f,az as v,b as w,ae as j}from"./vue.73bee448.js";import{_ as h}from"./index.e7872df1.js";import"./request.7878c8f3.js";import"./date.23847c74.js";import"./index.3ae96932.js";import"./index.e7a3094c.js";import"./login.df5d82cd.js";import"./empty.f131d8fb.js";import"./tinymce.5416ef76.js";const _={class:"specific_data_details_page"},x={class:"specific_data-content"},g={class:"mytable-data"},z={class:"flexr"};var M=h(p({setup(p){const h=i([{type:"num",lable:"序号",width:60},{type:"text",lable:"企业名称",prop:"name",width:130},{type:"text",lable:"联系人",prop:"contact",width:100},{type:"text",lable:"联系方式",prop:"mobiles",width:110},{type:"text",lable:"固定电话",prop:"telephone",width:110},{type:"industry_id",lable:"行业分类",prop:"industry_id",width:120},{type:"city_id",lable:"地区",prop:"city",width:130},{type:"text-tooltip",lable:"详细地址",prop:"address",width:130}]),M=v(),D=i(),k=i(1),q=i(10),H=i(!1),I=i([]),U=async()=>{H.value=!0;const a={current:k.value,size:q.value,id:M.query.id},{status:t,body:s}=await e(a);H.value=!1,t&&(I.value=s.records,D.value=s.total)};return U(),(e,p)=>{const i=w("el-table"),v=j("loading");return o(),d("div",_,[r(a),m("div",x,[m("div",g,[n((o(),u(i,{data:I.value,size:"small","row-class-name":"my-data-table-row",border:!0},{empty:c((()=>[r(l)])),default:c((()=>[(o(!0),d(y,null,b(h.value,((a,e)=>(o(),u(s,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128))])),_:1},8,["data"])),[[v,H.value]])]),m("div",z,[D.value?(o(),u(t,{key:0,size:q.value,"onUpdate:size":p[0]||(p[0]=a=>q.value=a),page:k.value,"onUpdate:page":p[1]||(p[1]=a=>k.value=a),total:D.value,onChange:U},null,8,["size","page","total"])):f("",!0)])])])}}}),[["__scopeId","data-v-51b0d51e"]]);export{M as default};