import React from 'react';
import styles from './Card.module.css';
import {isAutheticated} from '../../auth/helper/index' 
import { MdFavoriteBorder } from 'react-icons/md';

const Card =({product})=>{
    return( 
        <div className={`card ${styles.card}`} style={{width:'17rem',height:''}} >
        <div className={styles.innerimg}>  <img className="card-img-top" src='https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Card image cap" /></div>
        <div className={`card-body ${styles.cardbody}`}>
            <h6 className="card-title">{product.name}</h6>
            <p className="card-text">{product.description.substr(0,30)}</p>
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
                        <hr />
                    <div className='row justify-content-between '>
                        <div className={`ml-2 ${styles.details}`}> 
                            <p>Owner: {product.upload.name}</p>
                        </div>
                        <div className={`ml-2 ${styles.details}`}>
                        <p>Email: {product.upload.email}</p>
                        </div>    
                        <div className={`ml-2 ${styles.details}`}>
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