import React,{useState} from 'react'
import { Button, UncontrolledPopover,PopoverHeader, PopoverBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import styles from './Dashboard.module.css'

 const Dashboard=()=> {
    const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <div  className={styles.header} id="PopoverLegacy" type="button">
       <div className={styles.d}>D</div>
      </div>
      <UncontrolledPopover  trigger="legacy" placement="bottom" target="PopoverLegacy" >
        <PopoverHeader style={{width:'180px'}}>
         <Link to='/account' className={styles.linktext}> Account </Link>
        </PopoverHeader>
        <PopoverHeader>
          <Link to='/signout' className={styles.linktext}> Signout </Link>
        </PopoverHeader>
        <PopoverHeader>
          <Link to='/myproducts' className={styles.linktext}> My Products
           </Link>
        </PopoverHeader>
      </UncontrolledPopover>
    </div>
  );
}
export default Dashboard