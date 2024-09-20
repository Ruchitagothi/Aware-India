
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import '../media/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Userr() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [StateName, setStateName] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = async () => {
            try {
                await axios.get('http://127.0.0.1:8000/Account/');
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            }
        };
        checkAuth();
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLogin(false); // Hide login form after success
    };

    const handleLogoutSuccess = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="main">
            {!isLoggedIn ? (
                <div>
                    {!showSignup && !showLogin && (
                          <div className="d-flex justify-content-center align-items-center min-vh-100">
                          <div className="text-center animate__animated animate__fadeIn">
                              <button
                                  onClick={() => setShowSignup(true)}
                                  className="btn btn-primary btn-lg m-2 animate__animated animate__pulse"
                              >
                                  Signup
                              </button>
                              <button
                                  onClick={() => setShowLogin(true)}
                                  className="btn btn-secondary btn-lg m-2 animate__animated animate__pulse"
                              >
                                  Login
                              </button>
                          </div>
                      </div>
                    )}
                    {showSignup && <Signup onSuccess={handleLoginSuccess} />}
                    {showLogin && <Login onSuccess={handleLoginSuccess} />}
                </div>
            ) : (
                <div>
                    <Logout onLogout={handleLogoutSuccess} />
                    <div className="header-container">
                        <input
                            type="text"
                            name='search'
                            onChange={(e) => setStateName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
                            placeholder="Search your state or city"
                            className="search-bar"
                        />
                        <button className="search-button" onClick={() => navigate(`/state/${StateName}`)}>Search</button>
                        {/* Display additional information here if needed */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Userr;

