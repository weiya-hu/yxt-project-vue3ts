interface ajax {
  data: any
  getData: Function
  isLoading?: boolean
  isError?: boolean
}

/**
 * @name 接口返回数据类型
*/
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

/**
 * @name 分页类型
*/
interface PageParams {
  size:number,
  current:number,
  source?:number,
  [propName: string]: any
}

/**
 * @name 资源库类型
*/
interface KzPool {
  source_url:string,
  source_name:string,
  source_type:number|string,
  id:string|number,
  cover_url?:string,
  [propName: string]: any
}

/**
 * @name 添加文章类型类型
*/
interface IArticleForm {
  title:string,
  article_type:string|number,
  text:string,
  thumb_url?:string,
  [propName: string]: any
}