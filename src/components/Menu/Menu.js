import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import styles from './Menu.module.css';
import {signout,isAutheticated} from '../../auth/helper/index'

const Menu =({history})=>{
  
    return(
    <div className=' p-2'>
       <nav className="navbar navbar-expand-lg ">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className={`nav-link px-3 ${styles.link}`}  to='/'>Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className={`nav-link px-3 ${styles.link}`} to='/books' >Books</Link>
                </li>
               </ul>
                <form className="form-inline">
                    {!isAutheticated() && (
                        <React.Fragment>
                          <Link className={`nav-link mr-2 ${history.location.pathname==='/'?styles.buttons:styles.buttonsignup}`} to='signup'>Signup</Link>
                          <Link className={`nav-link ${history.location.pathname==='/'?styles.buttons:styles.buttonsignup}`} to="/signin">Signin</Link>
                        </React.Fragment>
                    )}

                    {isAutheticated() && (
                        <Link to='/' className={`nav-link mr-2 ${history.location.pathname==='/'?styles.buttonsignout:styles.button}`}  
                            onClick={() => {
                            signout(() => {
                              history.push("/");
                            });
                          }}>Signout</Link>
                    )}
                </form>
        </nav>
    </div>
    )
}

export default withRouter(Menu);
