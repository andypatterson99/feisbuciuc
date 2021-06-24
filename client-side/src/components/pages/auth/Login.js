import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import crowd from '../../assets/crowd.jpg';


class Login extends React.Component {
    state = { email: '', password: '', users: '' }

    componentDidMount = () => {
        this.setState({ users: this.props.users })
        console.log("Hey", this.props.users)
    }
    

    onFormSubmit = async (e) => {
        e.preventDefault();
            _.map(this.props.users, (user) =>{
            if(user.userEmail === this.state.email && user.userPassword === this.state.password){
                // this.props.authStatus(token);
                const token = user._id;
                localStorage.setItem("isTrue", "true")
                this.props.login(token);
            }
            console.log("Invalid user")
        })
             
    }





    render(){
        return(
            <div className="container p-5">
                 <div className="card">
                    <div className="row pl-5">
                        <form onSubmit={this.onFormSubmit} className="col-4 p-5">
                                <div className="form-group">
                                    <label htmlFor="email">Email Adress</label>
                                    <input onChange={ (e) => this.setState({email: e.target.value}) } value={ this.email } type="text" className="form-control" id="InputEmail"/>
                                    <small className="form-text text-muted">Eg. example@gmail.com</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={ (e) => this.setState({password: e.target.value}) } value={ this.password } type="password" className="form-control" id="InputPassword"/>
                                </div>
                                <button to="/home" type="submit" className="btn btn-primary">Login</button>
                                <Link to="/register" className="btn btn-muted">New Here? Register</Link>
                        </form>
                        <div className="col-8">
                            <img src={crowd} className="img-fluid" alt="" />
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Login;