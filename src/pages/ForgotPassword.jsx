import { useState } from 'react';
import { forgotPasswordAPI } from '../api';
import { useNavigate } from 'react-router-dom';



function ForgotPassword() {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        console.log('Forgot password for:', email);
        const user = await forgotPasswordAPI(email);
        alert("Reset password link sent to your email address.");
    };

    return (
        <div className="col-md-6 offset-md-3">
            <h1 className="text-center">Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
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
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
