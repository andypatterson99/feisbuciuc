import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid bg-primary">
            <div className="row py-2">
                <div className="logo col-4 d-flex justify-content-center">
                    <Link to='/' className="btn bg-primary border-0">
                        <h3 className="text-light">Feisbuciuc</h3>
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <Link to="/" className="btn btn-primary p-3">
                    <i className="fas fa-home"></i>
                    </Link>
                    <Link to="/" className="btn btn-primary p-3">
                    <i className="fas fa-user-friends"></i>
                    </Link>
                    <Link to="/" className="btn btn-primary p-3">
                    <i className="fas fa-users"></i>
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <Link to="/" className="btn btn-primary p-3">
                        <i className="fab fa-facebook-messenger"></i>
                    </Link>
                    <Link to="/settings" className="btn btn-primary p-3">
                        <i className="fas fa-user-circle"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;