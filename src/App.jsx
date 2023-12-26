

import './App.css'
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Privatepage from './Pages/Privatepage.jsx';



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Privatepage page={<Home onlyListing/>}/>} /> 
          {/* <Route index element={<Home onlyListing/>}/> */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
