import React from 'react';
import UserForm from './UserForm';
import { createUser,getAlluser } from './crudapi';
import { useState,useEffect } from 'react';
import UserList from './UserList';
import PropTypes from "prop-types";

const Home = ({onlyListing}) => {
    const [data,setData]=useState([]);

    const createNewuser = async (user)=>{
      const responseData=await createUser(user);
      setData([...data,responseData]);
    }
  
    const loadUserdata =async ()=>{
      const loadData=await getAlluser();
      setData(loadData);
    }
  
    useEffect(()=>{
      loadUserdata();
    },[]);
  return (
    <>
      <div>
       {!onlyListing && <UserForm createNewuser={createNewuser}/>}
       <UserList users={data}/>
        </div>
    </>
  )
}

Home.propTypes={
    onlyListing:PropTypes.bool
};

export default Home;