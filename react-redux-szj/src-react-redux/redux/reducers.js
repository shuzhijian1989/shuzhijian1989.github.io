import {INCREMENT, DECREMENT} from './action-types'
export function counter(state=0, action) {
    console.log(state, action.type)
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}