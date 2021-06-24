import React, { useState } from 'react';
import NewsFeed from './NewsFeed';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
import _ from 'lodash';


const MainApp  = ({user, users}) => {
    const [ currentUser , setCurrentUser ] = useState({user});

        if(_.isEmpty(currentUser)){
            return <div></div>
        }
        return (
            <div key={currentUser}>
                <Navbar />
                <NewsFeed user = { user } users = { users } />
                <Footer />
            </div>
        )
}


export default MainApp;