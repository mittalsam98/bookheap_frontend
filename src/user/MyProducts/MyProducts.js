import React,{useState,useEffect} from 'react'
import CommonBase from '../../components/CommonBase/CommonBase';
import { getFavourite } from '../helper/userapicalls';
import { isAutheticated } from '../../auth/helper';
import Card from '../../components/Card/Card';

const AddProduct= () => {
    const [favourites, setFavourites] = useState([])

    const {user,token} = isAutheticated();

    const loadAllFavourites = () => {
        getFavourite(user._id,token).then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log("hwloo",data)
            setFavourites(data);
          }
        });
      };

    
      useEffect(() => {
        loadAllFavourites();
      }, []);


            return (
        <CommonBase>
            <div className='container-fluid mt-5'>
            <div className='row  mx-auto justify-content-around' style={{padding:'0px 100px'}}>
            {favourites.map((favourite,index)=>{
                return (
                    <div  key={index}  className='col' style={{margin:'1px'}}>
                      {console.log(favourite)}
                    <Card product={favourite} />
                    </div>
                )
                })}
                </div>
            </div>
        </CommonBase>   
        )
    }
    export default AddProduct;