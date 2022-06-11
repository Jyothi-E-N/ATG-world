import React from "react";
import whole from "../images/whole.jpg";
import search from "../images/baseline-search.png";
import dropdown from "../images/baseline-dropdown.png";
import userProfile from "../images/user-profile.png";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
    const { loggedIn , signUp, setSignUp} = useAuth();
    return (
        <div id="header" className="bg-white header navbar navbar-expand-lg d-flex flex-row align-items-center justify-content-around">
            <img src={whole} className="img-fluid" alt="computer engineering" />
            <div className="search_box justify-content-center d-flex flex-column align-items-center ">
                <div className="input-group d-flex flex-row justify-content-around align-items-center px-3">
                    <span className="input-group-addon">
                        <img src={search} alt="search-icon" />
                    </span>
                    <input
                        id="group"
                        type="text"
                        className="form-control search_field outline-0 border-0"
                        name="groupSearch"
                        placeholder="Search for your favorite groups in ATG"
                    />
                </div>
            </div>
            {!loggedIn && (
                <h6 className="acc_dropdown mb-0" onClick={()=>setSignUp(true)}>
                    Create account.{" "}
                    <span style={{ color: "#2F6CE5" }}>
                        It’s free!
                        <img src={dropdown} alt="dropdown" />
                    </span>
                </h6>
            )}
            {loggedIn && (
                <div
                    className="profile dropdown d-flex flex-row justify-content-between align-items-center hoverable"
                >
                    <img
                        src={userProfile}
                        className="img-fluid logo"
                        alt="user profile"
                    />
                    <h6 className="user_name text-center mb-0">
                        Siddharth Goyal
                    </h6>
                    <img src={dropdown} alt="dropdown" />
                </div>
            )}
        </div>
    );
};

export default Header;
