import{f as a}from"./date.23847c74.js";import{M as e,_ as t}from"./MyEmpty.a02eeaa3.js";import{l}from"./findC.1a564399.js";import{F as r,f as s,r as o,G as d,H as u,I as n,X as i,Q as p,W as m,u as c,ax as y,O as v}from"./vue.5acda677.js";import{m as _,j as b,k as f}from"./index.d66d1016.js";const w={class:"addata_details_c"},h={class:"mytable"},g=r({setup(r){const g=_(),j=s((()=>g.state.addressHash)),M=o([]),x=y(),C=o(1),V=o(0),k=()=>{l({did:x.query.id,size:10,current:C.value}).then((a=>{1==a.status&&(M.value=a.body.records,V.value=a.body.total)}))};k();const z=o([]),H=a=>{z.value=a};return(l,r)=>{const s=v("el-table-column"),o=v("el-avatar"),y=v("el-table");return d(),u("div",w,[n("div",h,[i(y,{data:M.value,style:{width:"100%"},onSelectionChange:H},{empty:p((()=>[i(e)])),default:p((()=>[i(s,{type:"selection",width:"50"}),i(s,{property:"wechat_id",label:"好友微信号"}),i(s,{property:"avatar_url",label:"头像"},{default:p((a=>[i(o,{size:42,src:a.row.avatar_url},null,8,["src"])])),_:1}),i(s,{property:"nick_name",label:"昵称"}),i(s,{property:"gender",label:"性别"},{default:p((a=>[n("div",null,m(0==a.row.gender?"未知":1==a.row.gender?"男":"女"),1)])),_:1}),i(s,{property:"phone_number",label:"联系方式"}),i(s,{property:"address",label:"地区"},{default:p((a=>[n("div",null,m(c(b)(c(f)(a.row.province,a.row.city,a.row.district),c(j))),1)])),_:1}),i(s,{property:"signature",label:"个性签名"}),i(s,{property:"create_time",label:"创建时间"},{default:p((e=>[n("div",null,m(c(a)(new Date(e.row.create_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),i(t,{total:V.value,modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=a=>C.value=a),onChange:k},null,8,["total","modelValue"])])}}});export{g as default};
