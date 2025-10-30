import { Navigate,Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


export const ProtectedRouter = () => {
    const {loginState} = useContext(AuthContext);

    return(
        loginState ? <Outlet/> : <Navigate to="/loginPage"/>
    )
}