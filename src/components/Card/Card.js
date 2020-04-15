import React from 'react';
import Menu from '../Menu/Menu';
import styles from './Card.module.css';
import {isAutheticated} from '../../auth/helper/index' 
import { MdFavoriteBorder } from 'react-icons/md';

const Card =({product})=>{
    return( 
        <div className={`card ${styles.card}`} style={{width:'17rem',height:''}} >
        <div className={styles.innerimg}>  <img className="card-img-top" src='https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Card image cap" /></div>
        <div className={`card-body ${styles.cardbody}`}>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            {isAutheticated() && 
            (
                <>
            <div className='row justify-content-between'>
            <div className='ml-2 font-weight-bold'> 
                 <p>Price : Rs.{product.price}</p>
            </div>
            <div className='mr-3 font-weight-bold'>
                <MdFavoriteBorder />
            </div>    
             </div>
              <div className='row justify-content-between '>
              <div className='ml-2 font-weight-bold'> 
                <p>Owner: {product.upload.name}</p>
              </div>
              <div className='mr-3 font-weight-bold'>
              <p>Contact: {product.upload.phoneNo}</p>
              </div>    
               </div>
               </>
             )}
        </div>
        </div>

        )
}

export default Card