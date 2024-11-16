import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUserAPI } from '../api';

function Register() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log('Register with:', { name, email, password, confirmPassword });
        if (userData.password !== userData.confirmPassword) {
            console.log(userData);
            alert("Passwords do not match");
            return;
        }
        try {
            delete userData.confirmPassword;
            const resp = await createUserAPI(userData);
            alert(resp?.msg || "User Creation Success");
            navigate("/login");
        } catch (e) {
            alert("Something Went Wrong, Please try again later");
            console.log("Error", e);
        }
    };

    return (
        <div className="col-md-6 offset-md-3">
            <h1 className="text-center">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name={'name'}
                        value={userData.name}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name={'email'}
                        value={userData.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name={'password'}
                        value={userData.password}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name={'confirmPassword'}
                        value={userData.confirmPassword}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            <div className="mt-3 text-center">
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
