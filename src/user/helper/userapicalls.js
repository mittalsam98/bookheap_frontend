import { API } from "../../backend"

export const getUser =(_id,token)=>{
return fetch(`${API}/user/${_id}`, { 
        method: "GET",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
}