import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { Button } from "../Common/Button";
import "./Login.css";
import "@fontsource/inter"

const Login = () => {


  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

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
      console.log(response.data);
    } catch (error) {
      setErrMsg(error.response.data);
      console.log(errMsg);
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
    <main className='c-lg-main'>
      {success ? (
        <section className='c-lg-main-item'>
          <h1>You are logged in!</h1>
          <a className='c-lg-link-item' href="/">Go to Home</a>
        </section>
      ) : (
        <section className='c-lg-main-item'>
          <p>{errMsg}</p>
          <form className='c-lg-form' onSubmit={handleSubmit}>
            <div className='c-lg-form-item'>
              <label className='c-lg-label' htmlFor="username">EMAIL/MOBILE:</label>
              <input
                className='c-lg-input'
                type="text"
                id="username"
                autoComplete="off"
                onChange={handleUsernameChange}
                value={user}
                required
              />
            </div>
            <div className='c-lg-form-item'>
              <label className='c-lg-label' htmlFor="password">PASSWORD:</label>
              <input
                className='c-lg-input'
                type="password"
                id="password"
                onChange={handlePasswordChange}
                value={pwd}
                required
              />
            </div>
            <div className='c-lg-form-item'>

              <Button type='button'
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>
            </div>
          </form>

          <div className='c-lg-nac'>
            <p className='c-lg-nac-item'>
              Need an Account?
            </p>
            <div className='c-lg-nac-item'>
              <Button type='button'
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                url="../register"
              >
                SIGN UP
              </Button>
            </div>
          </div>
          

          <div className='c-lg-tp-buttons'>
            <p>LOGIN WITH GOOGLE: </p>
            <div className='c-lg-auth-button'>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
            <p>LOGIN WITH FB: </p>
            <div className='c-lg-auth-button'>
              <FacebookLogin
                appId="1829736540733671"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default Login
