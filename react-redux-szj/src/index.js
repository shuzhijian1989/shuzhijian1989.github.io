import React from 'react';
import ReactDOM from 'react-dom';
// import App from './connect';
import store from "./reduxs/store"
import BasicRoute from './routers/Router'
// function render () {
//     ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render)

import {Provider} from "react-redux"
ReactDOM.render((
    <Provider store={store}>
        {/* <App/>  */}
        <BasicRoute/>
    </Provider>  
), document.getElementById('root'));