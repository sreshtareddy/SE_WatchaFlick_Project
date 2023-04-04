import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import NavBarSimple from '../Customers/NavBarSimple.js';
import {Container, Row, Col, Form, FormGroup} from 'react-bootstrap'; 
import { Navigate } from "react-router-dom";
import CustomerHome from '../Customers/CustomerHome.js'
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Login.css";
import { FaGoogle } from 'react-icons/fa';
import { Button } from '../Common/Button';
import "@fontsource/inter"

const Login = () => {

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [userName, setUserName] = useState("");

  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPwd(event.target.value);
  };


  const clientId = '973282407747-5e4l7ut9st7c6aqace5d1avdjcjp8o3s.apps.googleusercontent.com';

  const onSuccess = async (res) => {
    console.log(res)
    try {
      const google_response = await axios.post('http://localhost:3000/api/users/google_login', {
        idToken: res.tokenObj.id_token
      });
      console.log("Login Success! User:", res.profileObj);
      console.log(google_response);
    } catch (error) {
      console.log("Login Failed! res=", error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Got in the server");
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        emailormobile: user, password: pwd
      });
      setSuccess(true);
      setUserName(response.data.user.first_name)
      console.log(userName)
    } catch (error) {
      setErrMsg(error.response.data);
      console.log(error.response.data);

    }
  };

  async function responseFacebook(response) {
    try {
      const facebook_response = await axios.post('/api/users/facebook_login', {
        access_token: response.accessToken
      });
      console.log(facebook_response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {/* <NavCustomerBar/> */}
    
    <main className='c-lg-main'>
      {success ? (
        <>
        <Navigate replace to="/customerMainHome"/>
         <h1>Welcome, {userName}!</h1>
        </>
      ) : (
        <>
       <NavBarSimple/>
       <div className="card-wrapper">
    <div className="card">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text"  className="field" placeholder="Enter email" 
                  id="username"
                  autoComplete="off"
                  onChange={handleUsernameChange}
                  value={user}
                  required />
        
        <label htmlFor="password">Password</label>
        <input type="password" className="field" placeholder="Enter password" 
        type="password"
        id="password"
        onChange={handlePasswordChange}
        value={pwd}
        
        required />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button
                className="btn secondary__btn auth__btn"
                buttonstyle='btn--outline'
                buttonsize='btn--large'
                onClick={handleSubmit} 
              >
                Login
              </Button>
              </div>
      </Form>
      <p >Don't have an account? <Link to='/register'> Create</Link></p>
            <FormGroup>
              <div className='btn secondary__btn auth__btn'>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                ></GoogleLogin>
               
                <FacebookLogin
                  appId="1829736540733671"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                />
              </div>
            </FormGroup>
    </div>
  </div>

       </>
      )}
    </main>
    </>
  )
  
}

export default Login
