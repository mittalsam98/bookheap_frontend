import React from 'react';
import {Link} from 'react-router-dom';
import Base from '../Base/Base';
import styles from './Home.module.css'; // Import css modules stylesheet as styles
import Book from '../../assest/bstack.png'
const Home =()=>{
    return(
        <Base >
      <div className='container '>
            <div className="row">
                <div className="col-sm">
                   <h1 className={styles.h1}>
                       Welcome to online bookstore
                   </h1>
                   <h3 className={styles.h2}> Buy all books in low prices</h3>
                   <p></p>
                </div>
                <div className="col-sm text-right">
                <img className='mt-4 ml-5' src={Book} width={400} height={600} />
                </div>  
            </div>
       </div>
      </Base>
      
    )
}

export default Home