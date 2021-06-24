import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{

    return (
        <div className="card-footer text-muted mt-5 d-flex justify-content-center">
            <div className="row justify-content-between">
                <div className="col-4">
                    <Link to='/'>Home</Link>
                </div>
                <div className="col-4">
                    <Link to='/'>Market</Link>
                </div>
                <div className="col-4">
                    <Link to='/settings'>Settings</Link>
                </div>
            </div>
        </div>
    )

}

export default Footer;