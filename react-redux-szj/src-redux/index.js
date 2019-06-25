import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from "./redux/store"

function render () {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
render()
store.subscribe(render)

// import {Provider} from "react-redux"
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>  
// ), document.getElementById('root');