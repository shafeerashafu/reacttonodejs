
import { useState } from 'react';
import './App.css'
import UserForm from './UserForm';
import { createUser,getAlluser } from './crudapi';
import { useEffect } from 'react';
import UserList from './UserList';


function App() {
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
       <UserForm createNewuser={createNewuser}/>
       <UserList users={data}/>
        </div>
    </>
  )
}

export default App;
