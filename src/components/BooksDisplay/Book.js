import React,{useState,useEffect} from 'react';
import Card from '../Card/Card';
import { getProducts } from '../helper/coreapicalls';
import CommonBase from '../CommonBase/CommonBase';

const Book =()=>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setProducts(data);
          }
        });
      };

    
      useEffect(() => {
        loadAllProduct();
      }, []);


    return(
      <CommonBase>
        <div className='container-fluid mt-5'>
          <div className='row  mx-auto justify-content-around' style={{padding:'0px 100px'}}>
          {products.map((product,index)=>{
              return (
                  <div  key={index}  className='col' style={{margin:'1px'}}>
                  <Card product={product} />
                  </div>
              )
            })}
            </div>
        </div>
      </CommonBase>
        )
}

export default Book