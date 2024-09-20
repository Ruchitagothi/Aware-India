// Logout.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Logout = ({ onLogout }) => {
    
    const handleLogout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/Account/logout/');
            alert('Logout successful');
            onLogout(); // Notify parent component
        } catch (error) {
            alert('Logout failed');
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
