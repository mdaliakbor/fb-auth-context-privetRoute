import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <Link to="/" className="btn btn-ghost text-xl">Auth-Master</Link>
            <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            {
                user && <>
                    <Link to="/order" className="btn btn-ghost text-xl">Orders</Link>
                    <Link to="/user" className="btn btn-ghost text-xl">User</Link>
                </>
            }
            <Link to="/login" className="btn btn-ghost text-xl">Login</Link>
            <Link to="/register" className="btn btn-ghost text-xl">Register</Link>
            {user ? <>
                <span>{user.email}</span>
                <Link onClick={handleLogout} className="btn btn-ghost text-xl">Log Out</Link>
            </> :
                <Link to="/login" className="btn btn-ghost text-xl">Log In</Link>
            }
        </div>
    );
};

export default Header;