import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import CustomerHome from './Components/Customers/CustomerHome';
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/customerHome' element={<CustomerHome/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />  
        </Routes>
      </Router>
    </>
  );
}

export default App;