import React from "react";
import background from "../images/topwrapper-background.png";
import {useAuth} from "../contexts/AuthContext";

const TopWrapper = () => {
    const {screenSize} = useAuth();
    return (
        <div className="topwrapper container-fluid has-bg-img">
            {/* <img
                src={background}
                alt="computer engineering background"
                className="img-fluid bg-img"
            /> */}
            <div className="d-flex flex-column justify-content-center topwrapper_div">
                <h1 className="topwrapper_text m-0">Computer Engineering</h1>
                <p className="m-0" >142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default TopWrapper;