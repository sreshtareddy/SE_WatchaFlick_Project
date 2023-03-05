import React, {useState, useRef} from 'react';
import validator from "validator";
import './style.css'
import axios from "axios"

function Register() {

    const [credentials, setCredentials] = useState({
        firstName:undefined,
        lastName:undefined,
        email:undefined,
        password:undefined,
        password2:undefined,
        mobile:undefined
    });

    const [err, setErrMsg] = useState(null)

    const handleClick = e =>{
        e.preventDefault();
        console.log(credentials)

        axios.post("http://localhost:3000/api/users/register", {first_name:credentials.firstName, last_name:credentials.lastName, password:credentials.password, email:credentials.email, password2:credentials.password2, mobile:credentials.mobile}) .then(response => {setErrMsg(null);}).catch(error => {if (error.response.status != 200) {setErrMsg('Bad request:', error.response.data);}});
    }

    return(
        <div id='regForm'>
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="username">FIRST NAME:</label><br></br>
                    <input type="text" placeholder="First Name" required id="firstName" onChange={(e) =>{setCredentials({firstName:e.target.value, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile})}}/>
                </div>
                <div>
                    <label htmlFor="username">LAST NAME:</label><br></br>
                    <input type="text" placeholder="Last Name" required id="lastName" onChange={(e) =>{setCredentials({firstName:credentials.firstName, lastName:e.target.value, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile})}}/>
                </div>
                <div>
                    <label htmlFor="username">EMAIL:</label><br></br>
                    <input type="email" placeholder="Enter Email" required id="email" onChange={(e) =>{setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:e.target.value, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile})}}/>
                </div>
                <div>
                    <label htmlFor="username">PASSWORD:</label><br></br>
                    <input type="password" placeholder="Enter Password" required id="password" title="Number with max 3 decimals" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" onChange={(e) =>{setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:e.target.value, password2:credentials.password2, mobile:credentials.mobile})}}/>
                </div>
                <div>
                    <label htmlFor="username">CONFIRM PASSWORD:</label><br></br>
                    <input type="password" placeholder="Confirm Password" required id="confirmPassword" pattern={credentials.password} onChange={(e) =>{setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:e.target.value, mobile:credentials.mobile})}}/>
                </div>
                <div>
                    <label htmlFor="username">MOBILE NUMBER:</label><br></br>
                    <input type="text" placeholder="Enter Mobile" required id="mobileNumber" onChange={(e) =>{setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:e.target.value})}}/>
                </div>
                <br></br>
                <div>
                    <input type="submit" required id="submit"></input>
                </div>
                
            </form>
        </div>
    );     
}

export default Register