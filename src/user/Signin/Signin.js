import React,{useState} from 'react';
import styles from './Signin.module.css';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'; //FaEyeSlash
import {Link,Redirect} from 'react-router-dom';
import {signin,authenticate,isAutheticated} from '../../auth/helper/index';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 80px auto;
`;

const Signin=()=>{
    const [values, setValues] = useState({
        email:'',
        password:'',
        error:'',
        loading:false,
        success:false,
        didRedirect:false
    });

    const {  email, password, error,didRedirect,loading } = values;
    
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]: event.target.value });
     };
 
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            setValues({...values, email: "",password: "",loading:true,error:'',success:'true'})
            const data= await signin({email,password});
            authenticate(data,() => {
                setValues({
                  ...values,
                  loading:false,
                  didRedirect: true
                });
            })
        } catch(e){
            if(e.response === undefined || !e.response){
            setValues({ ...values,error: 'Failed:ERR_CONNECTION_REFUSED' ,loading:false, success: false });
            return 
            }
            setValues({ ...values,error:  e.response.error ? e.response.error : 'Failed:ERR_CONNECTION_REFUSED' ,loading:false, success: false });
        }
    }

    const errorMessage = () => {
        return (
         <p className='alert alert-danger' style={{ display: error ? "" : "none" }}>
                {error}
         </p>
        );
      };

      const loadingSpinner = () => {
         if(loading){  
            return  <HashLoader
            css={override}
            size={100}
            color={"#5F0A8F"}
            loading={true}
          />}
      };

      const performRedirect = () => {
        //TODO: do a redirect here
        if (didRedirect) {
            return <Redirect to="/" />;
        }
        if (isAutheticated()) {
          return <Redirect to="/" />;
        }
      };
      

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
        <div className={`container ${styles.main}`}>
            <h2 className={styles.welcome}>Welcome Back</h2>
        <div className={styles.title}>
                Sign In
        </div>
      {loading ? loadingSpinner()  :  <form>
            {performRedirect()}
            {errorMessage()}
            <div className={`form-group  ${styles.item}`}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                 type="email" 
                 className={`form-control ${styles.item}`} 
                 onChange={handleChange("email")}
                 value={email}  
                 id="exampleInputEmail1"  
                 placeholder="Enter email" 
                 />
            </div>
            <div className={`form-group ${styles.item}`}>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                className={`form-control ${styles.item}`} 
                onChange={handleChange("password")}
                value={password}  
                id="exampleInputPassword1" 
                placeholder="Password" />
            </div>
            <div className="form-group">
            <button className={`btn ${styles.button}`} onClick={onSubmit}>Submit</button>
            </div>
        </form>  }
        </div>
        </>
    )   
}

export default Signin;