import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddProduct= () => {

    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    
      const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    
      const handleChange=()=>{
            console.log("Hello")
    };
    console.log('outside return')
 
    return (
        <div>
        <Button color="danger" onClick={toggle}>CLICK ME</Button>
        <Modal isOpen={modal} toggle={toggle} className=''>
          <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
          <ModalBody>
          <form>
           
            <div className={`form-group`}>
                <label htmlFor="password" className=''>Password*</label>
                <input 
                onChange={handleChange('')} 
                type="password" 
                className={`form-control`} 
                id="password" 
                placeholder="Enter your password" 
                />
            </div>
            <div className={`form-group`}>
                <label htmlFor="details" className=''>Enter some details about youself</label>
                <input 
                onChange={handleChange('')} 
                type="text" 
                className={`form-control `} 
                id="details" 
                placeholder="Something about yourself" 
                />
            </div>
            <div className={`form-group`}>
                <label htmlFor="phone" className=''>Phone no</label>
                <input 
                onChange={handleChange('')} 
                type="number" 
                className={`form-control `} 
                id="phone" 
                placeholder="Enter you phone number" 
                />
            </div>
            <div className="form-group">
            </div>
            <Button color="primary" onClick={()=>handleChange()}>Do Something</Button>{' '}
        </form>     
               </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
}
export default AddProduct;