import React,{useState} from 'react';
import styles from './Signup.module.css';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {signup} from '../../auth/helper/index';

const Signup=()=>{
    const [values, setValues] = useState({
        name:'Sachin',
        email:'mittalsam98@gmail.com',
        phoneNo:'9050949461',
        password:'123456',
        userinfo:'a dev',
        error:'',
        loading:false,
        success:false
    });

    const { name, email, password,userinfo,phoneNo, error, success } = values;

    const handleChange=name=>event=>{
       setValues({...values,error:false,[name]: event.target.value });
    };

    const onSubmit=event=>{
        event.preventDefault();
        setValues({ ...values, error: false })
        signup({ name, email, password,phoneNo,userinfo})
        .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error,loading:true, success: false });
            } else {
              setValues({
                ...values,
                name: "",
                email: "",
                password: "",
                error: "",
                userinfo:'',
                phoneNo:'',
                loading:false,
                success: true
              })
            }
          })
          .catch(console.log("Error in signup"));
    };

    const errorMessage = () => {
        return (
         <p className='alert alert-danger' style={{ display: error ? "" : "none" }}>
                {error}
         </p>
        );
      };

      const successMessage=()=>{
         return(
             <p className='alert alert-success' style={{ display: success ? "" : "none" }}>Account successfully created.  <Link to='/signin'> Click here to login </Link></p>
         )
      }

    return(
        <>
       <div className={styles.icons} >
            <div className='float-left d-inline'>
                <Link to='/' className={`${styles.icon}`} ><FaRegArrowAltCircleLeft /></Link>
            </div>
            <div className={`float-right mr-5 ${styles.spanParent}`}>
                <span  className={`${styles.span}`}>Already have account</span>
                <Link to='/signin'  className='d-inline-block'><button className={`btn ${styles.buttontop}`}  type='submit'>Signin</button></Link>
            </div>       
        </div>
        <div className={`container  ${styles.main}`}>
        <div className={styles.title}>
                Sign Up
        </div>
        <form>
            <small id="emailHelp" className="mb-4 form-text text-muted text-center">We'll never share your info with anyone else.</small>
            {errorMessage()}
            {successMessage()}
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="name" className={styles.label}>Name*</label>
                <input 
                onChange={handleChange("name")} 
                type="text" 
                className={`form-control ${styles.item}`} 
                id="name"
                value={name}  
                placeholder="Enter your name" 
                />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="email" className={styles.label}>Email address*</label>
                <input 
                type="email" 
                className={`form-control ${styles.item}`} 
                id="email" 
                onChange={handleChange("email")}
                value={email}  
                placeholder="Enter your email"
                 />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="password" className={styles.label}>Password*</label>
                <input 
                onChange={handleChange('password')} 
                type="password" 
                className={`form-control ${styles.item}`} 
                value={password}  
                id="password" 
                placeholder="Enter your password" 
                />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="details" className={styles.label}>Enter some details about youself</label>
                <input 
                onChange={handleChange('userinfo')} 
                type="text" 
                className={`form-control  ${styles.item}`} 
                id="details" 
                value={userinfo}  
                placeholder="Something about yourself" 
                />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="phone" className={styles.label}>Phone no</label>
                <input 
                onChange={handleChange('phoneNo')} 
                type="number" 
                className={`form-control  ${styles.item}`} 
                value={phoneNo}  
                id="phone" 
                placeholder="Enter you phone number" 
                />
            </div>
            <div className="form-group">
            <button onClick={onSubmit} className={`btn ${styles.button}`} >Submit</button>
            </div>
        </form>  
        </div>
        </>
  )   
}

export default Signup;