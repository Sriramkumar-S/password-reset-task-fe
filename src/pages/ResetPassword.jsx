import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { checkPasswordAPI, resetPasswordAPI } from '../api';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [params] = useSearchParams();

    const [loading, setLoading] = useState(false);


    const checkPassword = async () => {
        const response = await checkPasswordAPI(params.get("token"));
        alert(response.msg);
    };

    useEffect(() => {
        setLoading(true);

        checkPassword();

        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const response = await resetPasswordAPI(params.get("token"), newPassword);
        alert('Password reset successfully');

        console.log('Password reset successfully');
        alert('Password has been reset successfully!');
        navigate('/login');
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <h2 className="text-center">Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
        </div>
    );
}

export default ResetPassword;
