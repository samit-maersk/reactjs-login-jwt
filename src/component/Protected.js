import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()

    if(!localStorage.getItem('token')) {
        return <Navigate to="/login" state={{from: location}} />
    }
    //logic to check for 401, 403 and navigate based on that
    return children;
}

export default Protected