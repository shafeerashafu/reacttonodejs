import axios from "axios";

const backendUrl = import.meta.env
                ?import.meta.env.VITE_BE_URL //localhost
                :process.env.VITE_BE_URL; //cloud

//creating a axios instance
const backendInstance = axios.create({
    baseURL: backendUrl,
    timeout: 10000,
});

//creating a user
const createUser=async(userData)=>{
    const response=await backendInstance.post("/",{
        ...userData
    });
    return response.data;
}

//getting all user
const getAlluser=async()=>{
    const response=await backendInstance.get("/");
    return response.data;
}

export {createUser,getAlluser};