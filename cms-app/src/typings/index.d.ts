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

interface PageParams {
  size:number,
  current:number,
  source?:number,
  [propName: string]: any
}