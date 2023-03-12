import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function ProtectedRoute(){
  const {user} = useContext(UserContext)
  return user ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectedRoute