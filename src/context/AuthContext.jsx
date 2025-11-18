import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

const dummyUser = {
    email: "admin@gmail.com",
    password: "admin"
}


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loginState, setLoginState] = useState(false);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    
    function SignIn(userData){
        if(userData.email === dummyUser.email && userData.password === dummyUser.password){
            setLoginState(true);
            setUser(userData);
            navigate('/dashboard');
        }
        else{
            setError(true)
            const timeError = setTimeout(() => {
                setError(null);
            }, 3000);
            return () => clearTimeout(timeError);
        }
    }

    function SignOut(){
        console.log("Cerrando sesion...");
        setUser(null);
        setLoginState(false);
        navigate('/');
    }

    return(
        <AuthContext.Provider value={{user,loginState,SignIn,SignOut,error}}>
            {children}
        </AuthContext.Provider>
    )}