import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
    Header,
    TopWrapper,
    AllPosts,
    Article,
    Event,
    Education,
    NavBar,
    CreateAccount,
    SignIn,
    TopWrapperSmall,
} from "./components";
import { useAuth } from "./contexts/AuthContext";

const App = () => {
    const { loggedIn, signUp, signIn, screenSize } = useAuth();
    console.log(loggedIn, signUp, signIn);

    const changeBodyStyle = () => {
        var header = document.getElementById("header");
        console.log("signUp "+signUp);
        if (signUp || signIn) {
            document.body.style.overflow = "hidden";

            // header.style["position"] = "absolute";
            // header.style["width"] = "100%";
            // header.style["top"] = 0;
            // header.style["left"] = 0;
        } else {
            document.body.style.overflowY = "scroll";
            // header.style["position"] = "sticky";
        }
    };

    useEffect(()=>{
        changeBodyStyle();
    },[signIn, signUp]);

    return (
        <div className="d-flex flex-column justify-content-center">
            {screenSize >= 800 && <Header />}
            {screenSize >= 800 ? <TopWrapper /> : <TopWrapperSmall />}

            <div className="d-flex w-100 flex-column container-fluid justify-content-center align-items-center sm_posts_div">
                {screenSize > 800 && (
                    <div>
                        <NavBar />
                        <hr className="break_line mb-3" />
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<AllPosts />}></Route>
                    <Route path="/article" element={<Article />}></Route>
                    <Route path="/event" element={<Event />}></Route>
                    <Route path="/education" element={<Education />}></Route>
                </Routes>
            </div>

            {signUp && (
                <div className="signup">
                    <CreateAccount />
                </div>
            )}

            {signIn && (
                <div className="signin">
                    <SignIn />
                </div>
            )}
        </div>
    );
};

export default App;
