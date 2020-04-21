import React,{useState,useEffect} from 'react'
import CommonBase from '../../components/CommonBase/CommonBase';
import { getFavourite } from '../helper/userapicalls';
import { isAutheticated } from '../../auth/helper';
import Card from '../../components/Card/Card';
// import { ToastContainer, toast } from 'react-toastify';

const AddProduct= () => {
    const [favourites, setFavourites] = useState([])
    // const [error, setError] = useState('');
    const [trueVal, setTrueVal] = useState(false)
    const {user,token} = isAutheticated();

    console.log("fdsaf",trueVal);

    useEffect(() => {
      const loadAllFavourites = () => {
          getFavourite(user._id,token).then(data => {
            console.log("Fdas",data);
            if (data.error) {
              
            } else {
              setFavourites(data);
            }
          });
        };
        loadAllFavourites();
      }, [trueVal]);

      console.log("fadsfas",favourites)

            return (
        <CommonBase>
            <div className='container-fluid mt-5'>
            <div className='row  mx-auto justify-content-around' style={{padding:'0px 100px'}}>
              {console.log("hell")}
            {favourites.map((favourite,index)=>{
              {console.log("hesssll")}
                return (
                    <div  key={index}  className='col' style={{margin:'1px'}}>
                    <Card product={favourite} setTrueVal={setTrueVal} />
                    </div>
                )
                })}
                </div>
            </div>
        </CommonBase>   
        )
    }
    export default AddProduct;