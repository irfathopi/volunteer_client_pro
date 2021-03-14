import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img className ="navbar__logo" src={logo} alt=""/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active navbarItem__padding">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item navbarItem__padding">
                        <a class="nav-link" href="#">Donation</a>
                    </li>

                    <li class="nav-item navbarItem__padding">
                        <a class="nav-link" href="#">Evants</a>
                    </li>

                    <li class="nav-item navbarItem__padding">
                        <a class="nav-link" href="#">Blog</a>
                    </li>

                    <li class="nav-item navbarItem__padding">
                        <button type="button" class="btn btn-primary">Register</button>
                    </li>

                    <li class="nav-item navbarItem__padding">
                        <Link to = "/admin"><button type="button" class="btn btn-dark">Admin</button></Link>
                    </li>
                    
                    
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;