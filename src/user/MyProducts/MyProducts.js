import React,{useState,useEffect} from 'react'
import CommonBase from '../../components/CommonBase/CommonBase';
import { getFavourite } from '../helper/userapicalls';
import { isAutheticated } from '../../auth/helper';
import Card from '../../components/Card/Card';

const AddProduct= () => {
    const [favourites, setFavourites] = useState([])
    // const [error, setError] = useState('');
    const [trueVal, setTrueVal] = useState(false)
    const {user,token} = isAutheticated();


    useEffect(() => {
      const loadAllFavourites = () => {
          getFavourite(user._id,token).then(data => {
            if (data.error) {
            } else {
              setFavourites(data);
            }
          });
        };
        loadAllFavourites();
      }, [trueVal]);

      const refreshForUpload=()=>{
        setTrueVal(!trueVal)
      }

            return (
        <CommonBase>
            <div className='container-fluid mt-5'>
            <div className='row  mx-auto justify-content-around' style={{padding:'0px 100px'}}>
            {favourites.length ? favourites.map((favourite,index)=>{
                return (
                    <div  key={index}  className='col' style={{margin:'1px'}}>
                    <Card product={favourite} refreshForUpload={refreshForUpload} />
                    </div>
                )
                }) : <h1 className="p-5">No books to show in your favourite list...</h1>}
                </div>
            </div>
        </CommonBase>   
        )
    }
    export default AddProduct;