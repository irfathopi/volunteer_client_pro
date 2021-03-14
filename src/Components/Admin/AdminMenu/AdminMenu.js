import React, { useState } from 'react';
import './AdminMenu.css';
import logo from '../../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import logo2 from '../../../logos/users-alt 1.png';
import logo3 from '../../../logos/plus 1.png';

const AdminMenu = () => {

    const [details, setDetails] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newDetails = { ...details };
        newDetails[e.target.title] = e.target.value;
        setDetails(newDetails);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        console.log(details);
        formData.append('file', file);
        formData.append('title', details.title);
        formData.append('date', details.date)


        fetch('http://localhost:5000/addVolunteer', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="section1">
            <div className="width__part">
                <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                <p className="discription">Add Event</p>
            </div>
            <div className="d-flex justify-content-start">
                <div className="height__part">
                    <img src={logo2} /><a href="">Volunteer register list</a>
                    <br />
                    <img src={logo3} /><a href="">Add Event</a>
                </div>


                <div className="form__box">
                    <div className="form ">



                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tital</label>
                                <input type="text" onChange={handleBlur} class="form-control" name="tital"  placeholder="Enter Title" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Select Date</label>
                                <input type="date" onChange={handleBlur} class="form-control" name="date" placeholder="Date" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Upload Picture</label>
                                <input type="file" onChange={handleFileChange} class="form-control" id="exampleInputPassword1" placeholder="picture" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>



                    </div>
                </div>
            </div>
        </section>
    )
};

export default AdminMenu;