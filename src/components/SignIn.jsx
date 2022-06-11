import React from 'react';
import facebook from "../images/facebook-logo.png";
import google from "../images/google-logo.png";
import illustration from "../images/atg_illustration.png";
import cancel from "../images/baseline-cancel.png";
import { useAuth } from "../contexts/AuthContext";
import sm_cancel from "../images/sm_cancel.png";

const SignIn = () => {
    const { loggedIn, setLoggedIn, screenSize,signUp, signIn, setSignUp, setSignIn } = useAuth();

    return (
        <div className="signIn_div d-flex flex-column">
            {screenSize>800 && (
                <img
                    src={cancel}
                    className="signup_cancel"
                    onClick={()=>setSignIn(false)}
                />
            )}
            {screenSize>800 && (
                <div className="signup_paraDiv d-flex align-items-center justify-content-center">
                    <p className="signup_para mb-0">
                        Let's learn, share & inspire each other with our passion for
                        computer engineering. Sign up now 🤘🏼
                    </p>
                </div>
            )}
            
            <div className="signin_formDiv d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center titleDiv">
                    {(screenSize>800)?(<h4 className="signup_title mb-0">Sign In</h4>):(<h4 className="signup_title mb-0">Welcome Back,</h4>)}
                    
                    {screenSize>800 ? (
                        <h6 className="acc_dropdown mb-0 signin_text" onClick={()=>{setSignIn(false); setSignUp(true)}}>
                            Don’t have an account yet?
                            <span style={{ color: "#2F6CE5" }}>
                                Create new for free!
                            </span>
                        </h6>
                    ):(
                        <img
                            src={sm_cancel}
                            className="signup_cancel"
                            onClick={() => setSignIn(false)}
                        />
                    )}
                    
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <form className="d-flex flex-column justify-content-bottom signin_form" onSubmit={()=>{setSignIn(false); setSignUp(false); setLoggedIn(true)}}>
                        <input
                            id="email"
                            type="email"
                            className="form-control input_field rounded-0"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            id="password"
                            type="text"
                            className="form-control input_field rounded-0 signin_pass"
                            name="password"
                            placeholder="Password"
                        />
                        {/* create account button */}
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                                className="btn btn-default btn-block create_acc"
                                style={{ marginBottom: "24px" }}
                            >
                                Sign In
                            </button>
                            {screenSize <= 800 && (<p onClick={()=>{setSignIn(false); setSignUp(true)}}>or, Create Account</p>)}
                        </div>
                        {/* sign up with facebook */}
                        <button
                            className="btn btn-default btn-block signUp_facebook"
                            style={{ marginBottom: "8px" }}
                        >
                            <img
                                className="facebook_logo signup_icon"
                                src={facebook}
                            />
                            Sign up with Facebook
                        </button>
                        {/* Sign up with google */}
                        <button className=" btn btn-default signIn_google btn-block">
                            {" "}
                            <img
                                className="google_logo signup_icon"
                                src={google}
                            />
                            Sign up with Google
                        </button>
                        <p className="forgot_pass text-center">Forgot Password?</p>
                    </form>
                    {screenSize>800 && (
                        <div className="signup_illustration d-flex flex-column justify-content-between">
                            <img
                                src={illustration}
                                className="img-fluid illustration_img"
                            />
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default SignIn