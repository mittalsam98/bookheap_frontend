import React, { useEffect,useState } from 'react'
import CommonBase from '../../components/CommonBase/CommonBase';
import { isAutheticated } from '../../auth/helper';
import { getUser } from '../helper/userapicalls';
import styles from './Account.module.css'
const Account = () => {
    const [fetchedUser, setFetchedUser] = useState({})
    const {user,token} =isAutheticated();
    const {_id} =user;
    const {name,lastname,email,phoneNo}=fetchedUser;

 
    
    const nameFirstLetter=()=>{
        if(name!= null){
            return name.substring(0,1).toUpperCase() ;
        }
    }
    
    useEffect(() => {
        const fetchuser=(_id,token)=>{
            getUser(_id,token)
            .then(data=>{
                setFetchedUser(data);
            }).catch(err=>{
                console.log(err)
            })
        }
        fetchuser(_id,token);
    }, [])

    return (
       <CommonBase>
           <div className="container mt-5">
            <div>
                <h1>Account</h1>
            </div>
            <hr className="my-4" />
            <div className='container  mt-5'>
                <div className='row'> 
                    <h1 className={`bg-success rounded-circle p-3 mr-5 ${styles.firstletter}`}>{nameFirstLetter()}</h1>
                    <h2 className='text-uppercase'>{`${name} ${lastname?lastname:''}`} </h2>
                </div>
                <hr className="my-4" />
            </div>
            <div className="jumbotron border container mt-5 bg-light">
                <p className='text-uppercase' >Account Name</p>
                <h1 className="lead">{name}</h1>               
                     <hr className="my-4" />         
                <p className='text-uppercase' >Email</p>
                <p className="lead">{email}</p>
                    <hr className="my-4" />            
                <p className='text-uppercase'>Contact No </p>
                <p className="lead">{phoneNo}</p>
                    {/* <hr className="my-4" /> */}
                </div>
            </div>
       </CommonBase>
    )
}

export default Account; 
