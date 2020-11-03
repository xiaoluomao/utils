import axios from './fetch'

export function getCnodeList(params) {
    return axios({
        url: '/topics',
        method: 'GET',
        params
    })
}


export default {
    getCnodeList
}

// ES6模块化语法：

// 使用 export 抛出，必须使用 import { } from '' 进行引入。
// 使用 export default {} 抛出，必须 import xx from '' 进入引入。
// 在同一个模块中，有且最多只能有 export default，可以没有
// 在同一个模块中，export 可以有多少，数量不限
