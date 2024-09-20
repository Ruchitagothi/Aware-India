import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Ensure animate.css is imported
import axios from 'axios';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to handle if user is authenticated
    const [error, setError] = useState(null);

    // Handle login submission
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/Account/login/', {
                username,
                password
            });

            if (response.data.is_staff) {
                setIsAuthenticated(true); // If the user is a staff, grant access
                setError(null); // Clear error if login is successful
            } else {
                setError("You don't have permission to access the admin panel."); // If not staff
            }
        } catch (err) {
            setError("Invalid username or password."); // Handle errors
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px', maxWidth: '1000px' }}>
            {/* Enhanced Header */}
            <h1
                className="mb-4 text-center animate__animated animate__bounceInDown"
                style={{
                    fontSize: '2.5rem', // Larger font size
                    background: 'linear-gradient(90deg, #00C9FF, #92FE9D)', // Gradient text
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)', // Light shadow for depth
                    fontWeight: 'bold',
                    letterSpacing: '2px', // Spacing between letters for style
                }}
            >
                Welcome to the Admin Panel
            </h1>

            {!isAuthenticated ? (
                // Show login form if not authenticated
                <div className="card shadow p-4 animate__animated animate__fadeIn" style={{ borderRadius: '10px' }}>
                    <form onSubmit={handleLogin}>
                    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="form-group mb-4">
                <label className="form-label">Username:</label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                   
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group mb-4">
                <label className="form-label">Password:</label>
                <input
                    type="password"
                    className="form-control form-control-lg"
                  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
        </div>
    </div>
</div>
                        <br></br>
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg w-100 animate__animated animate__pulse "
                        >
                            Login
                        </button>
                        {error && (
                            <p
                                className="text-danger mt-3"
                                style={{ fontWeight: 'bold' }}
                            >
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            ) : (
                // Show crime records and register buttons if authenticated
                <div className="row justify-content-center animate__animated animate__fadeIn">
                    <div className="col-md-8 d-flex justify-content-around">
                        <Link
                            to="/view-crime-records"
                            className="btn btn-primary btn-lg"
                            style={{ padding: '10px 20px', fontSize: '20px' }}
                        >
                            View Records
                        </Link>
                        <Link
                            to="/register-crime"
                            className="btn btn-success btn-lg"
                            style={{ padding: '10px 20px', fontSize: '20px' }}
                        >
                            Register Report
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;