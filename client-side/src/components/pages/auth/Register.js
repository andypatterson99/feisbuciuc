

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { createAccount }  from '../../../actions';

import RegisterForm from './RegisterForm';
import history from '../../../history';

class Register extends React.Component  {
    onSubmit = (formValues) => {
        // console.log(formValues)
        console.log("New user", formValues)
        axios.post(`http://localhost:3001/users`, { ...formValues, profilePic: "https://cdn.pixabay.com/photo/2015/04/18/11/03/profile-728591__480.jpg" });
        
        setTimeout(() => history.push('/'), 100);
    }
    

    render(){
        return (
            <div>
                <RegisterForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};


export default connect(null, { createAccount })(Register);