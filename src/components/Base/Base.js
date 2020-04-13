import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import styles from './Base.module.css';

const Base =({children})=>{
    return(
    <div className={styles.main}>
    <Menu />
      <div className=''>{children}</div>
  </div>
    )
}

export default Base;
