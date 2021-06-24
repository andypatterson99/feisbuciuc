import React, { useState } from 'react';
import history from '../../../history';
import axios from 'axios';

const UserCard = ({ currentUser, logout }) => {

    const [ username, setUsername ] = useState(currentUser.userName)
    const [ email, setEmail ] = useState(currentUser.userEmail)
    const [ password, setPassword ] = useState(currentUser.userPassword)
    const [ profilePic, setProfilePic ] = useState(currentUser.profilePic)

    const editUser = (e) =>{
        
        e.preventDefault();
        axios.patch(`http://localhost:3001/user/${localStorage.getItem("token")}`, { 
            userName: username,
            userEmail: email,
            userPassword: password,
            profilePic: profilePic,
    })
        setTimeout(() => window.location.reload() , 100);
        history.push('/');

    }

    const unsign = () => {
        window.localStorage.clear();
        history.push('/');
        logout();
        window.location.reload();
    }

    return (
        <div className="card mx-auto my-5 p-5 d-flex w-50">
            <form onSubmit={editUser}>
                <div>
                <img id="avatar" src={currentUser.profilePic}></img>
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input onChange={ (e) => setUsername(e.target.value) } type="text" className="form-control" value={username}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={ (e) => setEmail(e.target.value) } type="text" className="form-control" value={email}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={ (e) => setPassword(e.target.value) } type="text" className="form-control" value={password} />
                </div>
                <div className="form-group">
                    <label htmlFor="postImg" className="form-label">URL:</label>
                    <div className="input-group">
                        <span className="input-group-text">#</span>
                        <input onChange={ (e) => setProfilePic(e.target.value) } name="profilePic" type="text" className="form-control" id="profilePic" value={profilePic} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-1">Save</button>
                <button onClick={unsign} className="btn btn-danger m-1">Logout</button>
            </form>
        </div>
    )
}

export default UserCard;