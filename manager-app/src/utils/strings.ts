/* eslint-disable */
export const toUpperCase = (str:string) => {
    return str[0] ? str.replace(str[0], str[0].toUpperCase()) : ''
}

export const toLowerCase = (str:string) => {
    return str[0] ? str.replace(str[0], str[0].toLowerCase()) : ''
}

// 驼峰转换下划线
export const toSQLLine = (str:string) => {
    if (str === 'ID') return 'ID'
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// 下划线转换驼峰
export const toHump = (name:string) => {
    return name.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}
