import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
const Menu =()=>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return(
    <div className=' p-2'>
       <nav className="navbar navbar-expand-lg ">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className={`nav-link px-4 ${styles.link}`}  href="#">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className={`nav-link px-4 ${styles.link}`}  href="#">Books</Link>
                </li>
               </ul>
                <form className="form-inline">
                <Link className={`nav-link mr-2 ${styles.button}`} to='signup'>Signup</Link>
                <Link className={`nav-link ${styles.button}`} to="/signin">Signin</Link>
                </form>
        </nav>
    </div>
    )
}

export default Menu;
