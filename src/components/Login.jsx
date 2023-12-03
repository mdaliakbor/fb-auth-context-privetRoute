import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const { login } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                console.log("Login: ", loggedUser)
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Do not have account, Register</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;