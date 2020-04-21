import React from 'react';
import Menu from '../Menu/Menu';
import styles from './CommonBase.module.css';
import Dashboard from '../../user/Dashboard/Dashboard';
import {isAutheticated} from '../../auth/helper/index' 
import {Link} from 'react-router-dom';
const CommonBase =({children})=>{
    return(
        <div>
            <div className={`container-fluid ${styles.main}`}>
                <div  className={`row align-items-center ${styles}`}>
                    <div className="col-1">
                    </div>
                    <div className="col-8">
                        <input className={styles.input} placeholder='search by name'/>
                    </div>
                    {/* <div className='col-1'></div> */}
                  
                 {  (isAutheticated() && (
                        <div className={`col-1 rounded-circle text-dark text-right ${styles.dash}`} >
                            <Dashboard />
                        </div>
                       
                    ))}
                 {  (isAutheticated() && (
                        <div className="col-2">
                        <Link className={`${styles.button}`} to="/addproduct">Sell</Link>
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