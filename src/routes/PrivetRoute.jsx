import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        <progress className="progress w-56"></progress>
        // alert("loading")
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivetRoute;