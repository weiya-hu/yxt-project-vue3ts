interface ajax {
  data: any
  getData: Function
  isLoading?: boolean
  isError?: boolean
}

interface res {
  status: number
  body: any
  errno?: number
  message?: string
}

interface Navitem {
  path:string,
  name:string,
  [propName: string]: any
}

type HeightSearchForm = {
  // mobile:number|string, //手机号 位运算
  // phone:number|string, //固定电话 位运算
  // email:number|string, //邮箱 位运算
  ctype:Array<number|string>, //企业类型 位运算
  industry_id:Array<number|string>,//行业分类ID 树状
  addr:Array<number|string>, //省市区 树状
  business_scope:string,//经营范围 输入

  // province:'',//省（区域码）
  // city:'',//市（区域码）
  // district:'',//区（区域码）
  contact:Array<number|string>,//联系方式  位运算
  // company_type:'',//企业类型  位运算
  // conditions_name:'',//	条件组名称 输入
}