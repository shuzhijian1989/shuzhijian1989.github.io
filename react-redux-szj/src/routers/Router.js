import React from 'react';
import {HashRouter,BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/home';
import Detail from '../components/detail';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;