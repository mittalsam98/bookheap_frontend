import React from 'react';
import styles from './Signin.module.css';
import { FaRegArrowAltCircleLeft,FaEyeSlash } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Signin=()=>{

    return(
        <>
        <div className={styles.icons} >
            <div className='float-left d-inline'>
                <Link to='/' className={`${styles.icon}`} ><FaRegArrowAltCircleLeft /></Link>
            </div>
            <div className='float-right mr-5'>
              <span  className={`${styles.span}`}>Don't have account </span>
                <Link to='/signup' className='d-inline-block'><button className={`btn ${styles.buttontop}`}  type='submit'>Signup Now</button></Link>
            </div>       
        </div>
        <div className={`container w-25 ${styles.main}`}>
            <h2 className={styles.welcome}>Welcome Back</h2>
        <div className={styles.title}>
                Sign In
        </div>
        <form>
            <div className={`form-group  ${styles.item}`}>
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className={`form-control ${styles.item}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className={`form-control ${styles.item}`} id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
            <button className={`btn ${styles.button}`}  type='submit'>Submit</button>
            </div>
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
        </form>  
        </div>
        </>
    )   
}

export default Signin;