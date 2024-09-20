import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../media/css/Nav.css'

// Import your page components
import Home from './home';
import Admin from './Admin'
import ViewCrimeRecord from './ViewCrimeRecords';
import RegisterCrime from './RegisterCrime';
import State from './State'
import Userr from './Userr'

const Nav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState('close');
    const toggleNav = () => {
        if (isNavExpanded === 'close') {
            setIsNavExpanded('navbaropen');
        }
        else {
            setIsNavExpanded('close');
        }
    };
    return (
        <>
            <Router>
                <div id='nav'>
                    <div className="logo">
                        <button onClick={toggleNav}>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </button>
                        <nav className={isNavExpanded} onClick={toggleNav}>
                            
                            <div className="nav-links" >
                                <Link to="/">Home</Link>
                                <Link to="/Admin">Admin</Link>
                                <Link to="/Userr">User</Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="/Userr" element={<Userr />} />

                    <Route path="/view-crime-records" element={<ViewCrimeRecord />} />
                    <Route path="/register-crime" element={<RegisterCrime />} />
                    <Route path="/state/:state" element={<State />} />
                    </Routes>
            </Router >
        </>
    )
};

export default Nav;
