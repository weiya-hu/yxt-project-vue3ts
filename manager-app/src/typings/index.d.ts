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
