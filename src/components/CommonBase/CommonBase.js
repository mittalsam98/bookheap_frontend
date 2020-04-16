import React,{useState,useEffect} from 'react';
import Menu from '../Menu/Menu';
import styles from './CommonBase.module.css';
import Dashboard from '../../user/Dashboard/Dashboard';
import {isAutheticated} from '../../auth/helper/index' 
import {Link} from 'react-router-dom';
const CommonBase =({children})=>{
    return(
        <div>
            <div className='container-fluid' style={{height:'50px',marginTop:'20px'}}>
                <div className='row pr-5 justify-content-center'>
                    <div className="col-10">
                        <input  placeholder='search by name'/>
                    </div>
                  
                 {  (isAutheticated() && (
                     <div className="col-2">
                     <div className="row" >                 
                        <div className="col-6">
                        <Link className={`${styles.button}`} to="/addproduct">Sell</Link>
                        </div>
                        <div className="col-6 rounded-circle text-dark text-right">
                            <Dashboard />
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className={styles.nav}>
                <Menu />
            </div>
       <div>
            {children}
       </div>
        </div>
        )
}

export default CommonBase;