import axios from "axios";

const backendUrl = import.meta.env
                ?import.meta.env.VITE_BE_URL //localhost
                :process.env.VITE_BE_URL; //cloud

//creating a axios instance
const backendInstance = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL : backendUrl,
    timeout: 10000,
});

//creating a user
const createUser=async(userData)=>{
    const response=await backendInstance.post("/users",{
        ...userData
    });
    return response.data;
}

//getting all user
const getAlluser=async()=>{
    const response=await backendInstance.get("/users");
    return response.data;
}



//Authentication method

//creating a user for registering
const registerUser = async (userData) => {
    const response = await backendInstance.post("/register", {
      ...userData,
    });
    return response.data;
};

//when the user needs to login
const loginUser = async (loginData) => {
    try {
      const response = await backendInstance.post("/login", {
        ...loginData,
      });
      return { ...response.data };
    } catch (err) {
      console.log(err);
      return { msg: "Login failed", code: 0 };
    }
  };

export {createUser,getAlluser,registerUser,loginUser};