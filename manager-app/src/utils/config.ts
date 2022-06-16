import nav4_i from '@/assets/images/nav/nav4.png'
import nav5_i from '@/assets/images/nav/nav5.png'

/**
 * 产品配置
*/
export const KzProduct = {
  1:{
    name: 'cms',
    class: 'pro_cms',
    img: nav5_i,
  },
  2:{
    name: 'dmp',
    class: 'pro_dmp',
    img: nav4_i
  },
}

export function getKzProduct(key: number) {
  const obj = { class: '', img: '' }
  try {
    if(KzProduct[key as keyof typeof KzProduct]){
      return KzProduct[key as keyof typeof KzProduct]
    }
  } catch (error) {
    return obj
  }
  return obj
}