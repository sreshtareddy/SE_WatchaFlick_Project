import React, { useState } from 'react';
import "@fontsource/inter";
import axios from "axios"
import "./Register.css"
import { Button } from '../Common/Button';
import { Navigate } from 'react-router-dom';

function Register() {

    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    const [credentials, setCredentials] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        password2: undefined,
        mobile: undefined
    });

    const [isValidPwd, setIsValidPwd] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidConfirmPwd, setIsValidConfPwd] = useState(true)
    const [err, setErrMsg] = useState("")
    const [regSuccess, setRegSuccess] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/users/register", { first_name: credentials.firstName, last_name: credentials.lastName, password: credentials.password, email: credentials.email, password2: credentials.password2, mobile: credentials.mobile }).then(response => { setRegSuccess(true); }).catch(error => { if (error.response.status !== 200) { setErrMsg(error.response.data); } });
        console.log(err[Object.keys(err)[0]]);
        setTimeout(() => { setErrMsg("") }, 3000);
    }

    const handleInputChange = e => {
        const id = e.target.id;
        if (id === "firstName") {
            setCredentials({ firstName: e.target.value, lastName: credentials.lastName, email: credentials.email, password: credentials.password, password2: credentials.password2, mobile: credentials.mobile });
        }
        if (id === "lastName") {
            setCredentials({ firstName: credentials.firstName, lastName: e.target.value, email: credentials.email, password: credentials.password, password2: credentials.password2, mobile: credentials.mobile });
        }
        if (id === "email") {
            const eml = EMAIL_REGEX.test(e.target.value)
            if (eml || e.target.value === "") {
                setCredentials({ firstName: credentials.firstName, lastName: credentials.lastName, email: e.target.value, password: credentials.password, password2: credentials.password2, mobile: credentials.mobile });
                setIsValidEmail(true);
            }
            else {
                setIsValidEmail(false);
            }

        }
        if (id === "password") {
            const pwd = PASSWORD_REGEX.test(e.target.value)
            if (pwd || e.target.value === "") {
                setCredentials({ firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, password: e.target.value, password2: credentials.password2, mobile: credentials.mobile });
                setIsValidPwd(true);
            }
            else {

                setIsValidPwd(false)
            }
        }
        if (id === "confirmPassword") {
            if (e.target.value === credentials.password || e.target.value === "") {
                setCredentials({ firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, password: credentials.password, password2: e.target.value, mobile: credentials.mobile });
                setIsValidConfPwd(true);
            }
            else {
                setIsValidConfPwd(false);
            }

        }
        if (id === "mobile") {
            setCredentials({ firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, password: credentials.password, password2: credentials.password2, mobile: e.target.value });
        }
    };

    return (
        <section className='reg-section'>
            <main className='reg-main'>
                {
                    regSuccess ? (
                        <Navigate to="../login"></Navigate>
                    ) : (
                        <p></p>
                    )
                }
                <p className={err[Object.keys(err)[0]] ? 'errorMsg' : "offscreen"}>{err[Object.keys(err)[0]]}</p>
                <form className='reg-form'>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="firstname">FIRST NAME:</label>
                        <input className='reg-input' type="text" placeholder="First Name" required id="firstName" onChange={(e) => { handleInputChange(e) }} />
                    </div>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="lastname">LAST NAME:</label>
                        <input className='reg-input' type="text" placeholder="Last Name" required id="lastName" onChange={(e) => { handleInputChange(e) }} />
                    </div>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="email">EMAIL:</label>
                        <input className='reg-input' type="email" placeholder="Enter Email" required id="email" onChange={(e) => { handleInputChange(e) }} />
                    </div>
                    <p id="errNote" className={isValidEmail ? "offscreen" : "instructions"}>
                        INVALID EMAIL!!!
                    </p>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="password">PASSWORD:</label>
                        <input className='reg-input' type="password" placeholder="Enter Password" required id="password" onChange={(e) => { handleInputChange(e) }} onFocus={(e) => { handleInputChange(e) }} />
                    </div>
                    <p id="errNote" className={isValidPwd ? "offscreen" : "instructions"}>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
                        <input className='reg-input' type="password" placeholder="Confirm Password" required id="confirmPassword" onChange={(e) => { handleInputChange(e) }} onFocus={(e) => { handleInputChange(e) }} />
                    </div>
                    <p id="errNote" className={isValidConfirmPwd ? "offscreen" : "instructions"}>
                        PASSWORDS DON'T MATCH!!!
                    </p>
                    <div className='reg-formElement'>
                        <label className='reg-label' htmlFor="mobile">MOBILE NUMBER:</label>
                        <input className='reg-input' type="text" placeholder="Enter Mobile" required id="mobile" onChange={(e) => { handleInputChange(e) }} />
                    </div>
                    <br></br>
                    <div className='reg-formElement'>
                        <Button className='reg-input' type="submit" required id="reg-submit" onClick={handleClick}><p>SUBMIT</p></Button>
                    </div>

                    <div className='reg-formElement'>
                        <Button url="../login"><p>ALREADY HAVE AN ACCOUNT?</p></Button>
                    </div>

                    

                </form>
            </main>
        </section>
    );
}

export default Register