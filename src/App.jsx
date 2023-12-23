

import './App.css'
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home onlyListing/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
