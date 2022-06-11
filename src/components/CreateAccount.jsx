import React from "react";
import facebook from "../images/facebook-logo.png";
import google from "../images/google-logo.png";
import illustration from "../images/atg_illustration.png";
import cancel from "../images/baseline-cancel.png";
import { useAuth } from "../contexts/AuthContext";
import sm_cancel from "../images/sm_cancel.png";

const CreateAccount = () => {
    const {signUp,loggedIn,screenSize, setLoggedIn, signIn, setSignUp, setSignIn} = useAuth();

    return (
        <div className="signUp_div d-flex flex-column">
            {screenSize > 800 && (
                <img
                    src={cancel}
                    className="signup_cancel"
                    onClick={() => setSignUp(false)}
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
            
            <div className="signup_formDiv d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center titleDiv">
                    <h4 className="signup_title mb-0">Create Account</h4>{screenSize <= 800 ? (
                        <img
                            src={sm_cancel}
                            className="signup_cancel"
                            onClick={() => setSignUp(false)}
                        />
                    ):(
                        <h6
                            className="acc_dropdown mb-0 signin_text"
                            onClick={() => {
                                setSignUp(false);
                                setSignIn(true);
                            }}
                        >
                            Already have an account?
                            <span style={{ color: "#2F6CE5" }}>Sign In</span>
                        </h6>
                    )}
                    
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <form
                        className="d-flex flex-column justify-content-bottom signup_form"
                        onSubmit={() => {
                            setSignIn(false);
                            setSignUp(false);
                            setLoggedIn(true);
                        }}
                    >
                        <div className="d-flex flex-row">
                            <input
                                id="firstName"
                                type="text"
                                className="form-control input_field firstname"
                                name="firstName"
                                placeholder="First Name"
                            />
                            <input
                                id="lastName"
                                type="text"
                                className="form-control input_field lastname"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>
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
                            className="form-control input_field rounded-0"
                            name="password"
                            placeholder="Password"
                        />
                        <input
                            id="confirmPassword"
                            type="text"
                            className="form-control input_field confirm_pass"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            style={{ marginBottom: "19px" }}
                        />
                        {/* create account button */}
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                                className="btn btn-default btn-block create_acc"
                                style={{ marginBottom: "24px" }}
                            >
                                Create Account
                            </button>
                            {screenSize <= 800 && <p onClick={()=>{setSignUp(false);setSignIn(true)}}>or, Sign In</p>}
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
                        <button className=" btn btn-default signUp_google btn-block">
                            {" "}
                            <img
                                className="google_logo signup_icon"
                                src={google}
                            />
                            Sign up with Google
                        </button>
                        {screenSize<=800 &&(
                            <div className="signup_terms_div"
                             style={{marginTop: "22px"}}>
                                <p className="signup_terms_text mb-0 text-center">
                                    By signing up, you agree to our Terms &
                                    conditions, Privacy policy
                                </p>
                            </div>
                        )}
                        
                    </form>
                    {screenSize > 800 && (
                        <div className="signup_illustration d-flex flex-column justify-content-between">
                            <img
                                src={illustration}
                                className="img-fluid illustration_img"
                            />
                            <div className="signup_terms_div">
                                <p className="signup_terms_text mb-0">
                                    By signing up, you agree to our Terms &
                                    conditions, Privacy policy
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;