import {INCREMENT, DECREMENT} from './action-types'

export const incrementCreactor = (number) => (
    {type: INCREMENT, data: number}
)
export const decrementCreactor = (number) => (
    {type: DECREMENT, data: number}
)