import {INCREMENT, DECREMENT} from './action-types'
//接受组件传的类型及值  再进reducers数据状态跟新
export const increment = (number) => (
    {type: INCREMENT, data: number}
)
export const decrement = (obj) => (
    {type: DECREMENT, data: obj}
)