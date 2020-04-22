import React,{useState,useEffect} from 'react'
import { Button} from 'reactstrap';
import CommonBase from '../CommonBase/CommonBase';
import { createProducts } from '../helper/coreapicalls';
import { isAutheticated } from '../../auth/helper';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 80px auto;
`;


const AddProduct= () => {


        const [values, setValues] = useState({
            name:'Simulation',
            description: "a book on matalab and simulation",
            price: "201",
            photo:'',
            error:'',
            loading: false,
            createdProduct: "",
            getaRedirect: false, 
            formData:''
        })
            
        const { user, token } = isAutheticated();

        const {
            name,
            description,
            price,
            loading,
            formData,
            error
        } =values;
                    
        
        const handleChange = name => event => {
            const value = name === "    " ? event.target.files[0] : event.target.value;
            formData.set(name, value);
            setValues({ ...values, [name]: value ,formData:formData });
        };

        useEffect(() => {
            setValues({...values,formData:new FormData( )})
          }, [])
        
          
        const onSubmit = event => {
            event.preventDefault();
            setValues({ ...values, error: "", loading: true });
            createProducts(user._id, token, formData).then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error,loading:false });
            } else {
               setValues({
                    ...values,
                    name: "Simulation",
                    description: "a book on matalab and simulation",
                    price: "201",
                    photo: "",
                    loading: false,
                    createdProduct: data.name
                 });
            }
            })
            .catch(err=>{
                setValues({ ...values, error:'Failed : ERR_CONNECTION_REFUSED ',loading:false, success: false });
              }
              );
        };

        const loadingSpinner = () => {
            if(loading){  
               return  <HashLoader
               css={override}
               size={100}
               color={"#5F0A8F"}
               loading={true}
             />}
         };
    
         const errorMessage = () => {
            return (
             <p className='alert alert-danger' style={{ display: error ? "" : "none" }}>
                    {error}
             </p>
            );
          };

        return (
        <CommonBase>
            <div className='container w-50 mt-5 border'>
            {loading ? loadingSpinner()  :  <form>
                {errorMessage()}
                <div className={`form-group`}>
                    <label htmlFor="book" className=''>Book Name</label>
                    <input 
                    onChange={handleChange('name')} 
                    value={name}
                    type="text" 
                    name="name"
                    className={`form-control`} 
                    id="book" 
                    />
                </div>
                <div className={`form-group`}>
                    <label htmlFor="description" className=''>Description of the book</label>
                    <textarea 
                    onChange={handleChange('description')} 
                    value={description}
                    className={`form-control `} 
                    name="description"
                    id="description" 
                    />
                </div>
                <div className={`form-group`}>
                    <label htmlFor="price" className='price'>Price</label>
                    <input 
                    onChange={handleChange('price')} 
                    value={price}
                    type="number" 
                    name="price"
                    className={`form-control `} 
                    id="price" 
                    />
                </div>
                <div className={`form-group`}>
                    <label htmlFor="price" className=''>Add a photo</label>
                    <input 
                    onChange={handleChange('photo')} 
                    type="file" 
                    name="photo"
                    className={`form-control`} 
                    id="price" 
                    />
                </div>
                <div className="form-group">
                <Button color="primary" onClick={onSubmit}>Sell</Button>{' '}
                </div>
            </form>   }  
        </div>
            </CommonBase>   
        )
    }
    export default AddProduct;