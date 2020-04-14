import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './user/Signin/Signin';
import Signup from './user/Signup/Signup';
import Books from './components/BooksDisplay/Book';

const Routes=()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/books' component={Books} />
        </BrowserRouter>
    )
}

export default Routes
