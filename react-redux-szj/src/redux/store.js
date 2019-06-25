import {createStore, applyMiddleware} from "redux"
import {counter} from "./reducers"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))//applyMiddleware中间件 异步
)
export default store