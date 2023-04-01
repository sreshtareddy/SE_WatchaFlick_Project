import {React, useEffect} from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import CustomerHome from './Components/Customers/CustomerHome';
import { gapi } from "gapi-script";

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/inter";

const clientId = "973282407747-5e4l7ut9st7c6aqace5d1avdjcjp8o3s.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });


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