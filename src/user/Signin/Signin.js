import React,{useState} from 'react';
import styles from './Signin.module.css';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'; //FaEyeSlash
import {Link,Redirect} from 'react-router-dom';
import {signin,authenticate,isAutheticated} from '../../auth/helper/index';


const Signin=()=>{
    const [values, setValues] = useState({
        email:'mittalsam98@gmail.com',
        password:'123456',
        error:'',
        loading:false,
        success:false,
        didRedirect:false
    });

    const {  email, password,loading, error,didRedirect, success } = values;
    
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]: event.target.value });
     };
 
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            setValues({...values, email: "",password: "",loading:true,error:'',success:'true'})
            const data= await signin({email,password});
            console.log(data);
            authenticate(data,() => {
                setValues({
                  ...values,
                  didRedirect: true
                });
            })
        } catch(error){
            setValues({ ...values, error: error.response.error,loading:false, success: false });
        }
    }

    const errorMessage = () => {
        return (
         <p className='alert alert-danger' style={{ display: error ? "" : "none" }}>
                {error}
         </p>
        );
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
        <div className={`container w-25 ${styles.main}`}>
            <h2 className={styles.welcome}>Welcome Back</h2>
        <div className={styles.title}>
                Sign In
        </div>
        <form>
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
        </form>  
        </div>
        </>
    )   
}

export default Signin;