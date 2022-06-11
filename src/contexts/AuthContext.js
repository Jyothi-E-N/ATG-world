import React,{ useContext, useEffect, useState} from 'react';

const AuthContext = React.createContext();

export const useAuth = ()=>useContext(AuthContext);
export const AuthProvider=({children})=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [screenSize, setScreenSize] = useState(null);

    const value = {loggedIn, setLoggedIn, signUp, setSignUp, signIn, setSignIn,screenSize};

    useEffect(() => {
        const handleSize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleSize);
        handleSize();

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}