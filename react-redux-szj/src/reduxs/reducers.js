import {INCREMENT, DECREMENT} from "./action-types"
const datas = []
export function counter(state = datas, action){
  switch (action.type) {
    case INCREMENT:
      return [action.data, ...state]
    case DECREMENT:
      return state.filter((item, i)=> i !== action.data)
    default: 
      return state
  }
}