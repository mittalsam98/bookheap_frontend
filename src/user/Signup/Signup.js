import React,{useState} from 'react';
import styles from './Signup.module.css';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Signup=()=>{
    const [values, setValue] = useState({
        name:'',
        email:'',
        phoneNo:'',
        error:''
    })
    return(
        <>
       <div className={styles.icons} >
            <div className='float-left d-inline'>
                <Link to='/' className={`${styles.icon}`} ><FaRegArrowAltCircleLeft /></Link>
            </div>
            <div className='float-right mr-5'>
                <span  className={`${styles.span}`}>Already have account</span>
                <Link to='/signin'  className='d-inline-block'><button className={`btn ${styles.buttontop}`}  type='submit'>Signin</button></Link>
            </div>       
        </div>
        <div className={`container w-25 ${styles.main}`}>
        <div className={styles.title}>
                Sign Up
        </div>
        <form>
            <small id="emailHelp" className="mb-4 form-text text-muted text-center">We'll never share your info with anyone else.</small>
            <div className={`form-group ${styles.item}`}>
                <label for="name">Name</label>
                <input type="email" className={`form-control ${styles.item}`} id="name" aria-describedby="emailHelp" placeholder="Enter your name" />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label for="email">Email address</label>
                <input type="email" className={`form-control ${styles.item}`} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label for="password">Password</label>
                <input type="password" className={`form-control ${styles.item}`} id="password" placeholder="Password" />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label for="phone">Phone no</label>
                <input type="email" className={`form-control  ${styles.item}`} id="phone" aria-describedby="emailHelp" placeholder="Enter you phone number" />
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

export default Signup;