import React, {useState} from 'react';
import validator from "validator";
import './style.css'
import "@fontsource/inter";
import axios from "axios"

function Register() {
    
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    const [credentials, setCredentials] = useState({
        firstName:undefined,
        lastName:undefined,
        email:undefined,
        password:undefined,
        password2:undefined,
        mobile:undefined
    });

    const [isValidPwd, setIsValidPwd] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidConfirmPwd, setIsValidConfPwd] = useState(true)
    const [err, setErrMsg] = useState("")

    const handleClick = e =>{
        e.preventDefault();
        

        axios.post("http://localhost:3000/api/users/register", {first_name:credentials.firstName, last_name:credentials.lastName, password:credentials.password, email:credentials.email, password2:credentials.password2, mobile:credentials.mobile}) .then(response => {setErrMsg(null);}).catch(error => {if (error.response.status != 200) {setErrMsg(error.response.data);}});

        console.log(err)
    }

    const handleInputChange = e => {
        const id = e.target.id;
        
        if (id === "firstName") {
            setCredentials({firstName:e.target.value, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile});
        }
        if (id === "lastName") {
            setCredentials({firstName:credentials.firstName, lastName:e.target.value, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile});
        }
        if (id === "email") {
            const eml = EMAIL_REGEX.test(e.target.value)
            if (eml || e.target.value == ""){
                setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:e.target.value, password:credentials.password, password2:credentials.password2, mobile:credentials.mobile});
                setIsValidEmail(true);
            }
            else{
                setIsValidEmail(false);
            }
            
        }
        if (id === "password") {
            const pwd = PASSWORD_REGEX.test(e.target.value)
            if (pwd || e.target.value === ""){
                setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:e.target.value, password2:credentials.password2, mobile:credentials.mobile});
                setIsValidPwd(true);
            }
            else{
                
                setIsValidPwd(false)
            }   
        }
        if (id === "confirmPassword") {
            if (e.target.value === credentials.password || e.target.value === "" ){
                setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:e.target.value, mobile:credentials.mobile});
                setIsValidConfPwd(true);
            }
            else{
                setIsValidConfPwd(false);
            }
            
        }
        if (id === "mobile") {
            setCredentials({firstName:credentials.firstName, lastName:credentials.lastName, email:credentials.email, password:credentials.password, password2:credentials.password2, mobile:e.target.value});
        }
    };

    return(
        <div id='regForm'>
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="firstname">FIRST NAME:</label><br></br>
                    <input type="text" placeholder="First Name" required id="firstName" onChange={(e) =>{handleInputChange(e)}}/>
                </div>
                <div>
                    <label htmlFor="lastname">LAST NAME:</label><br></br>
                    <input type="text" placeholder="Last Name" required id="lastName" onChange={(e) =>{handleInputChange(e)}}/>
                </div>
                <div>
                    <label htmlFor="email">EMAIL:</label><br></br>
                    <input type="email" placeholder="Enter Email" required id="email" onChange={(e) =>{handleInputChange(e)}}/>
                </div>
                <p id="pwdnote" className={isValidEmail ? "offscreen" : "instructions"}>
                    INVALID EMAIL!!!
                </p>
                <div>
                    <label htmlFor="password">PASSWORD:</label><br></br>
                    <input type="password" placeholder="Enter Password" required id="password" onChange={(e) =>{handleInputChange(e)}} onFocus={(e) =>{handleInputChange(e)}}/>
                </div>
                <p id="pwdnote" className={isValidPwd ? "offscreen" : "instructions"}>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
                <div>
                    <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label><br></br>
                    <input type="password" placeholder="Confirm Password" required id="confirmPassword" onChange={(e) =>{handleInputChange(e)}} onFocus={(e) =>{handleInputChange(e)}}/>
                </div>
                <p id="pwdnote" className={isValidConfirmPwd ? "offscreen" : "instructions"}>
                    PASSWORDS DON'T MATCH!!!
                </p>
                <div>
                    <label htmlFor="mobile">MOBILE NUMBER:</label><br></br>
                    <input type="text" placeholder="Enter Mobile" required id="mobile" onChange={(e) =>{handleInputChange(e)}}/>
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