import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './user/Signin/Signin';
import Signup from './user/Signup/Signup';

const Routes=()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        </BrowserRouter>
    )
}

export default Routes
