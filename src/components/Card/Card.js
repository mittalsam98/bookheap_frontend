import React,{useState} from 'react';
import styles from './Card.module.css';
import {isAutheticated} from '../../auth/helper/index' 
import { MdFavorite,MdDelete } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { addFavourite, deleteFavourites } from '../../user/helper/userapicalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card =({product ,history,refreshForUpload})=>{

    const [favColor, setFavColor] = useState();
    const {user,token} =isAutheticated();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const addFavouriteHandler =()=>{
        addFavourite(user._id,product._id,token)
        .then(data => {

            if (data.error) {
                setError(data.error);
                toast.error(data.error, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });  
                    return
            }else{
                setFavColor(styles.favIconRed);
            }
          })
          .catch(err=>console.log(err))
    }


    const deleteFavouriteHandler =()=>{
        deleteFavourites(user._id,product._id,token)
        .then(data => {
            if (data.error) {
                setError(data.error);
               return;
            }
            else{
                refreshForUpload()
                setSuccess(true);
                console.log(data)
                // setFavColor(styles.favIconRed);
                toast.success(data.msg, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });  
            }
          })
    }

    return( 
        <div className={`card ${styles.card}`} style={{width:'17rem',height:''}} >
           
        <div className={styles.innerimg}>  <img className="card-img-top" src='https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" /></div>
        <div className={`card-body ${styles.cardbody}`}>
            <h6 className="card-title">{product.name}</h6>
            <p className="card-text">{product.description.substr(0,30)}</p>
            {isAutheticated() && 
            (
                <React.Fragment>
                    <div className='row  justify-content-around'>
                        <div className='ml-3 font-weight-bold'> 
                            <p>Price : Rs.{product.price}</p>
                        </div>
                        <div className='mr-3 font-weight-bold'>
                        {history.location.pathname==='/books'?
                            <MdFavorite className={`${favColor}`} onClick={()=>{addFavouriteHandler(product.id)}}  />:  <MdDelete className={`${favColor}`} onClick={()=>{deleteFavouriteHandler(product._id)}}/> }
                        </div>    
                    </div>
                        <hr />
                    <div className='row justify-content-between '>
                        <div className={`ml-3 ${styles.details}`}> 
                            <p>Seller: {product.upload.name}</p>
                        </div>
                        <div className={`ml-3 ${styles.details}`}>
                            <p>Email: {product.upload.email}</p>
                        </div>    
                        <div className={`ml-3 ${styles.details}`}>
                        <p>Contact: {product.upload.phoneNo}</p>
                        </div>    
                    </div>
                </React.Fragment>
             )}
        </div>
        { error && <ToastContainer/>}
        {success && <ToastContainer />}
        </div>

        )
}

export default withRouter(Card)