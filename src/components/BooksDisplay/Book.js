import React,{useState,useEffect} from 'react';
import Card from '../Card/Card';
import { getProducts } from '../helper/coreapicalls';
import CommonBase from '../CommonBase/CommonBase';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 80px auto;
`;

const Book =()=>{

    const [products, setProducts] = useState([]);
    // const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadAllProduct = () => {
      setLoading(true);
        getProducts().then(data => {
          if (data.error) {
            setLoading(true);
            // setError(data.error);
          } else {
            setLoading(false);
            setProducts(data);
          }
        });
      };

    
      useEffect(() => {
        loadAllProduct();
      }, []);

      const loadingSpinner = () => {
        if(loading){  
           return  <HashLoader
           css={override}
           size={100}
           color={"#5F0A8F"}
           loading={true}
         />}
     };

    return(
      <CommonBase>
      {loading ? loadingSpinner: (  <div className='container-fluid mt-5'>
          <div className='row  mx-auto justify-content-around' style={{padding:'0px 100px'}}>
          {products.length ? products.map((product,index)=>{
              return (
                  <div  key={index} className='m-3'  style={{margin:'1px'}}>
                  <Card product={product} />
                  </div>
              )
            }) : <h1 className="p-5">No books to show :)</h1>}
            </div>
        </div>)}
      </CommonBase>
        )
}

export default Book