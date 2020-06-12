import React from 'react'
import {  UncontrolledPopover,PopoverHeader } from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import styles from './Dashboard.module.css'
import { isAutheticated,signout } from '../../auth/helper';

 const Dashboard=({history})=> {
    const {user} =isAutheticated();

    const nameFirstLetter=()=>{
      if(user!= null){
          return user.name.substring(0,1).toUpperCase() ;
      }
  }


  return (
    <div>
      <div  className={styles.header} id="PopoverLegacy" type="button">
    <div className={styles.d}>{nameFirstLetter()}</div>
      </div>
      <UncontrolledPopover  trigger="legacy" placement="bottom" target="PopoverLegacy" >
        <PopoverHeader style={{width:'180px'}}>
         <Link to='/account' className={styles.linktext}> Account </Link>
        </PopoverHeader>
        <PopoverHeader>
          <Link to='/' className={styles.linktext} 
           onClick={() => {
            signout(() => {
              history.push("/");
            });
          }}
          > Signout </Link>
        </PopoverHeader>
        <PopoverHeader>
          <Link to='/myproducts' className={styles.linktext}> My Products
           </Link>
        </PopoverHeader>
      </UncontrolledPopover>
    </div>
  );
}
export default withRouter(Dashboard)