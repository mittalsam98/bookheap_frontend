import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './user/Signin/Signin';
import Signup from './user/Signup/Signup';
import Books from './components/BooksDisplay/Book';
import AddProduct from './components/AddProduct/AddProduct';

const Routes=()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/user/product' component={AddProduct} />
        </BrowserRouter>
    )
}

export default Routes
