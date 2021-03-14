import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import './Dashboard.css';
import Works from './Works/Works';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Works></Works>
        </div>
    );
};

export default Dashboard;