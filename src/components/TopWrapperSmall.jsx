import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import arrow_back from "../images/sm_arrow_back.png";

const TopWrapperSmall =()=>{
    const {signUp,setLoggedIn, signIn, loggedIn, setSignUp, setSignIn} = useAuth();

    return (
        <div className="tw_small container-fluid">
            <div className="tw_small_div d-flex flex-column justify-content-center">
                <h1 className="m-0">Computer Engineering</h1>
                <p className="m-0">142,765 Computer Engineers follow this</p>
            </div>
            <div className="sm_header d-flex flex-row justify-content-between align-items-center">
                <img src={arrow_back} className="sm_arrow_back img-fluid" />
                {!loggedIn && (
                    <button className="btn btn-default sm_join_group" onClick={()=>setSignUp(true)}>
                        Join Group
                    </button>
                )}
                {loggedIn && (
                    <button className="btn btn-default sm_join_group" onClick={()=>setLoggedIn(false)}>
                        Leave Group
                    </button>
                )}
            </div>
        </div>
    );
}

export default TopWrapperSmall;