import React from 'react';
import './Works.css';
import bg from '../../../images/pexels-fauxels-3184296.jpg';

const Works = () => {
    return (
        <div>
            <img  className = "bd__img" src={bg} alt=""/>
            <div className="heading">

                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <nav class="navbar navbar-light d-flex justify-content-center">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
                </nav>

            </div>
        </div>
    );
};

export default Works;