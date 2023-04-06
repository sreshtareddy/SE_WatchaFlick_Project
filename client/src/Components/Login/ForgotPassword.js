import { useState, useEffect } from "react";
import { Button } from "../Common/Button";
import { Navigate } from "react-router";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [otpSuccess, setOTPSuccess] = useState(false);

    const handleEmailSubmission = () => {
        //send email to api
        //fetch response
        //setEmailSuccess true if valid 
        setEmailSuccess(true);
    };

    const handleOTPSubmission = () => {
        //send otp to api
        //fetch respose
        //send back to login after success
        setOTPSuccess(true);
        console.log(otp);
    };


    return (
        <>
        {!otpSuccess?
        (
            <section className="fp-main">
                {
                    !emailSuccess ?
                        (
                            <div className="fp-main-item">
                                <form className="fp-form">
                                    <div className="fp-form-item">
                                        <label className="fp-form-label">ENTER YOUR EMAIL/MOBILE NUMBER:</label>
                                        <input className="fp-form-input" type="email" required onChange={event => setEmail(event.target.value)}>
                                        </input>
                                    </div>
                                    <div className='reg-formElement'>
                                        <Button className='reg-input' type="submit" required id="reg-submit" onClick={handleEmailSubmission}><p>SUBMIT</p></Button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="fp-main-item">
                                <form className="fp-form">
                                    <div className="fp-form-item">
                                        <label className="fp-form-label">ENTER YOUR CODE:</label>
                                        <input className="fp-form-input" type="number" required onChange={event => setOTP(event.target.value)}>
                                        </input>
                                    </div>
                                    <div className='reg-formElement'>
                                        <Button className='reg-input' type="submit" required id="reg-submit" onClick={handleOTPSubmission}><p>SUBMIT</p></Button>
                                    </div>
                                </form>
                            </div>
                        )}
            </section>
        ):(
            <Navigate to="../login"></Navigate>
        )}
            
        </>
    )
}

export default ForgotPassword;