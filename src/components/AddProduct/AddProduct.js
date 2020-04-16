import React,{useState} from 'react'
import { Button} from 'reactstrap';
import CommonBase from '../CommonBase/CommonBase';

const AddProduct= () => {


      const handleChange=()=>{
            console.log("Hello")
    };
    console.log('outside return')
 
    return (
      <CommonBase>
          <div className='container w-50 mt-5 border'>
          <form>
            <div className={`form-group`}>
                <label htmlFor="book" className=''>Book Name</label>
                <input 
                onChange={handleChange('')} 
                type="text" 
                className={`form-control`} 
                id="book" 
                />
            </div>
            <div className={`form-group`}>
                <label htmlFor="description" className=''>Description of the book</label>
                <textarea 
                onChange={handleChange('')} 
                type="text" 
                className={`form-control `} 
                id="description" 
                />
            </div>
            <div className={`form-group`}>
                <label htmlFor="price" className=''>Price</label>
                <input 
                onChange={handleChange('')} 
                type="number" 
                className={`form-control `} 
                id="price" 
                />
            </div>
            <div className="form-group">
            <Button color="primary" onClick={()=>handleChange()}>Do Something</Button>{' '}
            </div>
        </form>     
      </div>
        </CommonBase>   
    )
}
export default AddProduct;