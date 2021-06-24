import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends React.Component {


    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mt-0">
                        <Link className="btn" to='/'>
                            <h1 className="display-4 w-100 mb-5 mx-5 bg-primary rounded text-center p-2 py-3 text-light bold font-weight-bold">
                                <span className="bg-light text-primary px-2 mr-1 h-0 rounded">F</span>eisbuciuc
                            </h1>
                        </Link>
                        <form onSubmit={this.props.handleSubmit} className="needs-validation" noValidate>
                            <div className="form-group">
                                <label className="form-label" htmlFor="userName">User Name</label>
                                <Field component="input"name="userName" type="text" className="form-control" id="userName" required />
                                <div className="valid-feedback">Looking good</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email Adress</label>
                                <Field component="input"name="userEmail" type="text" className="form-control" id="userEmail" required />
                                <small className="form-text text-muted">Eg. example@gmail.com</small>
                                <div className="valid-feedback">Looking good</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">Password</label>
                                <Field component="input"name="userPassword" type="password" className="form-control" id="userPassword" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ConfirmPassword">Confirm Password</label>
                                <Field component="input"name="ConfirmPassword" type="password" className="form-control" id="ConfirmPassword" required />
                            </div>

                            <button type="submit" className="btn btn-primary d-flex">Register</button>
                            <Link to='/'>Already have an account?</Link>
                        </form>
                    </div>
                    <div className="col-6">
                        <h1 className="display-4">New Here? Join us.</h1>
                        <p className="display-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsum amet omnis quia quos repudiandae doloremque ab! Sint facere harum doloremque inventore, incidunt perspiciatis perferendis.</p>
                        <p className="display-6">Feisbuciuc values your privacy, and will never ever going to sell your data, like you know who..</p>
                    </div>
                </div>
    
            </div>
        )
    }
    
}

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);