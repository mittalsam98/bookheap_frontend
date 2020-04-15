import React,{useState,useEffect} from 'react';
import Menu from '../Menu/Menu';
import styles from './Book.module.css';
import Card from '../Card/Card';
import { getProducts } from '../helper/coreapicalls';
import AddProduct from '../AddProduct/AddProduct';
import Dashboard from '../../user/Dashboard/Dashboard';

const Book =()=>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    const loadAllProduct = () => {
        getProducts().then(data => {
          if (data.error) {
            setError(data.error);
          } else {
              console.log(data)
            setProducts(data);
          }
        });
      };
    
      useEffect(() => {
        loadAllProduct();
      }, []);
    return(
        <div>
            <div style={{height:'50px',marginLeft:'20px',marginTop:'20px'}}>
                <div className='row'>
                  <div className="col-md-7">
                  <input  placeholder='search by name'/>
                  </div>
                  <div className="col-md-5 w-25 rounded-circle text-dark">
                   <Dashboard />
                  </div>
                </div>
            </div>
            <div className={styles.nav}>
                <Menu />
            </div>
            <div className='container mt-4'>
              <AddProduct />
                <div className="row justify-content-around">
                    {products.map((product,index)=>(
                        <Card product={product} />
                    ))}
                </div>
            </div>
        </div>
        )
}

export default Book