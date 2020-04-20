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

export const addFavourite =(_id,productId,token)=>{
return fetch(`${API}/addfavorites/${_id}/${productId}`, { 
        method: "POST",
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



export const deleteFavourites =(_id,productId,token)=>{
    console.log(productId,token,_id)
return fetch(`${API}/favorites/${_id}/${productId}`, { 
        method: "GET",
        headers:{
            Accept: "application/json",
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
}



export const getFavourite =(_id,token)=>{
return fetch(`${API}/favorites/${_id}`, { 
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