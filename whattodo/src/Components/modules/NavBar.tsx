import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

// interface taskProps {task: string};

const NavBar = () => {
    return (<nav className = "NavBar">
            <Link to="/dashboard">Dashboard</Link>
        </nav>)
}

export default NavBar;