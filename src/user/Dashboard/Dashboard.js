import React,{useState} from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import styles from './Dashboard.module.css'

 const Dashboard=()=> {
    const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button  className={styles.header} id="Popover1" type="button">
       <span>D</span>
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverBody style={{width:'120px'}}>
         <Link to='account' className={styles.linktext}> Account </Link>
        </PopoverBody>
        <PopoverBody>
          <Link to='signout' className={styles.linktext}> Signout </Link>
        </PopoverBody>
      </Popover>
    </div>
  );
}
export default Dashboard