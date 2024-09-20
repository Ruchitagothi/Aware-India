import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Ensure you have Animate.css installed
import axios from 'axios';


const Login = ({ onSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Replace with actual login API call
            await axios.post('http://127.0.0.1:8000/Account/login/', { username, password });
            alert('Login successful');
            onSuccess(); // Notify parent component
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm border-light animate__animated animate__fadeIn">
                        <h3 className="mb-4 text-center">Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
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
                            <button
                                onClick={() => navigate('/')}
                                className="btn btn-secondary w-100"
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
