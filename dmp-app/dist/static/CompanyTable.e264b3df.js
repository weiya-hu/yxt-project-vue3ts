import{m as e,k as t,n as a,o as l}from"./index.0a59edad.js";import{M as r}from"./MyEmpty.62621b2b.js";import{F as s,f as d,r as o,O as p,G as i,H as n,X as c,Q as y,I as u,W as w,u as b,V as f}from"./vue.5acda677.js";const h={class:"mytable company_table"},_={style:{width:"100px"}},m={class:"els2"},v={style:{width:"200px"}},k={class:"els2"},x={style:{width:"200px"}},j={class:"els2"},H=s({props:{data:Array},setup(s){const H=e(),g=d((()=>H.state.typeHash)),M=d((()=>H.state.addressHash)),A=o([]),C=e=>{A.value=e};return(e,d)=>{const o=p("el-table-column"),H=p("el-tooltip"),A=p("el-link"),E=p("el-table");return i(),n("div",h,[c(E,{data:s.data,style:{width:"100%"},onSelectionChange:C},{empty:y((()=>[c(r)])),default:y((()=>[c(o,{type:"selection",width:"50"}),c(o,{type:"index",label:"序号",width:"60"}),c(o,{property:"name",label:"企业名称"}),c(o,{property:"contact",label:"联系人",width:"80"}),c(o,{property:"mobiles",label:"联系方式",width:"110"}),c(o,{property:"telephone",label:"固定电话",width:"120"}),c(o,{property:"industry_id",label:"行业分类",width:"100"},{default:y((e=>[u("div",null,w(b(t)(e.row.industry_id,b(g),"last")),1)])),_:1}),c(o,{property:"city",label:"地区",width:"120"},{default:y((e=>[c(H,{effect:"dark",placement:"top"},{content:y((()=>[u("div",_,w(b(t)(b(a)(e.row.province,e.row.city,e.row.district),b(M))),1)])),default:y((()=>[u("div",m,w(b(t)(b(a)(e.row.province,e.row.city,e.row.district),b(M))),1)])),_:2},1024)])),_:1}),c(o,{property:"address",label:"详细地址"},{default:y((e=>[c(H,{effect:"dark",placement:"top"},{content:y((()=>[u("div",v,w(e.row.address),1)])),default:y((()=>[u("div",k,w(e.row.address),1)])),_:2},1024)])),_:1}),c(o,{property:"code",label:"统一社会信用代码",width:"165"}),c(o,{property:"url",label:"企业官网"},{default:y((e=>[c(A,{type:"primary",target:"_blank",href:"//"+e.row.url},{default:y((()=>[f(w(e.row.url),1)])),_:2},1032,["href"])])),_:1}),c(o,{property:"business_scope",label:"经营范围",width:"200"},{default:y((e=>[c(H,{effect:"dark",placement:"top"},{content:y((()=>[u("div",x,w(e.row.business_scope),1)])),default:y((()=>[u("div",j,w(e.row.business_scope),1)])),_:2},1024)])),_:1}),c(o,{property:"source",label:"来源",width:"100"},{default:y((e=>[u("div",null,w(b(l)(e.row.source)),1)])),_:1})])),_:1},8,["data"])])}}});export{H as _};
