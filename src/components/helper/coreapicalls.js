import { API } from "../../backend";

export const getProducts = () => {
    return fetch(`/api/products`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  

export const createProducts = (_id,token,formData) => {
    formData.append('upload',_id);
    return fetch(`/api/product/create/${_id}`, { 
      method: "POST",
      headers:{
        Accept: "application/json",
      Authorization:`Bearer ${token}`
      },
      body:formData
     })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  

