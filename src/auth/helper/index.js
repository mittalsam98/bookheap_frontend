// import { API } from "../../backend";

export const signup= user =>{
    return fetch(`/api/signup`,{
        method:'POST',
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
     })
    .then(response => {
        return response.json();
      })
    .catch(err => console.log(err));
}

export const signin=async (user)=>{
    
    const response=await fetch(`/api/signin`,{
        method:'POST',
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
     })

     const json=await response.json();
     if(response.ok){
        return json;
    }
    
    const error=new Error(json.error);

    error.response=json;

    throw error ;
}


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };

  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };


  export const signout=(next)=>{
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`/api/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };