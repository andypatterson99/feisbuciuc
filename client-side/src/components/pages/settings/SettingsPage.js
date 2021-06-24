import React from 'react';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
import UserCard from './UserCard';
import { editUser } from '../../../actions';

class SettingsPage extends React.Component {

    render(){
        console.log(this.props.setIsLoggedIn)
        return(
            <div>
                <Navbar />
                <UserCard currentUser = {this.props.user} logout={ this.props.logout }  />
                <Footer />
            </div>
        )
    }
}

export default SettingsPage;