import React from 'react';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './user/Signin/Signin';
import Signup from './user/Signup/Signup';
import Books from './components/BooksDisplay/Book';
import AddProduct from './components/AddProduct/AddProduct';
import PrivateRoute from './auth/helper/PrivateRoute';
import Account from './user/Account/Account';
import MyProducts from './user/MyProducts/MyProducts';


const Routes=()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/books' component={Books} />
        {/* <PrivateRoute exact path='/user/product' component={AddProduct} /> */}
        <PrivateRoute exact path='/account' component={Account} />
        <PrivateRoute exact path='/addproduct' component={AddProduct} />
        <PrivateRoute exact path='/myproducts' component={MyProducts} />
        </BrowserRouter>
    )
}

export default Routes
