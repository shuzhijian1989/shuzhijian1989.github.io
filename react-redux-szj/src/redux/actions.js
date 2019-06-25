import {INCREMENT, DECREMENT} from './action-types'

export const incrementCreactor = (number) => ({type: INCREMENT, data: number})

export const decrementCreactor = (number) => ({type: DECREMENT, data: number})
//异步action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(incrementCreactor(number))
        },1000)
    }
}