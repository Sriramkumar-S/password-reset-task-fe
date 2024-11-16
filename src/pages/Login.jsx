import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userLoginAPI } from '../api';

function Login() {
    const isAuthenticated = Boolean(localStorage.getItem("user"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login with:', { email, password });
        try {
            const response = await userLoginAPI({ email, password });
            alert(response.msg);
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/posts");
          } catch (e) {
            console.log("error", e);
            alert(e.message);
          }
    };

    if (isAuthenticated) {
        return <Navigate to="/posts" />;
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="mt-3 text-center">
                <p>
                    Don&apos;t have an account? <Link to="/register">Register</Link>
                </p>
            </div>
            <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    );
}

export default Login;
