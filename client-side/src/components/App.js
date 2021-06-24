import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import MainApp from './pages/main/MainApp';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Edit from '../components/pages/editPost/Edit'
import { connect, useDispatch } from 'react-redux';
import history from '../history';

import SettingsPage from './pages/settings/SettingsPage';
import _ from 'lodash';
import axios from 'axios';


const App = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();

    const UserStatus =  localStorage.getItem("isTrue") === "true"? MainApp : Login;


    const getUsers = async () => {
        await axios.get("http://localhost:3001/users")
        .then(response => {
            const data = {...response.data};

            setUsers(data);
        })
        .catch(() => {
            alert("error receiving data")
        })    
    }

    useEffect(() => {
        if(_.isEmpty(users)){
            getUsers();
        }
        if(_.isEmpty(users) === false &&_.isEmpty(currentUser) === true && localStorage.getItem("isTrue") === "true"){
            login();
        }  
        console.log(currentUser)          
    }, [users, currentUser])

    const login = () => {
            let item =  _.find(users, { _id: localStorage.getItem("token") } );
            setCurrentUser(item)
    }


    const logout = () => {
        setIsLoggedIn(false);
    }
 


    const setUserToken = (token) => {
            localStorage.setItem("token", token);
            login();
            setIsLoggedIn(true);
    }


    



    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact 
                    render = {(props) => ( 
                        <UserStatus key={users} login = { setUserToken } users={ users } user ={ currentUser } /> 
                    )}
                />
                <Route path="/post" exact 
                    render = {(props) => (
                        <Edit user = { currentUser } />
                    )}
                />
                <Route path="/register" exact component={Register} />
                <Route path="/settings" exact 
                 render = {(props) => (
                        <SettingsPage user = { currentUser } logout = { logout } />
                 )} />
            </Switch>
        </Router>
    )
}


export default App;