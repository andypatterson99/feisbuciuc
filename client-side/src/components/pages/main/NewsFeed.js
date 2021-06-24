import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
// import { createPost, fetchUsers } from '../../../actions';
import PostForm from './PostForm';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';

import "./PostCard.css";
import axios from 'axios';


const NewsFeed = ( { user, users }) => {
    const [ showPostCreator, setShowPostCreator ] = useState(false);
    
    const togglePostCreator = () =>{
        document.querySelector("#PostModal").style.display = "none"
        setShowPostCreator(!showPostCreator)
    }
    const dispatch = useDispatch();

    const onSubmit = (formValues) => {
        if(formValues.postTitle != ''){
            const postedOn = new Date().toLocaleDateString();
            console.log("NEW POST", {...formValues, postedOn})
            // dispatch(createPost({...formValues, authorId: user.userId, authorName: user.userName, postDate: postedOn, profilePic: user.profilePic }));
            axios.patch(`http://localhost:3001/createPost/${user._id}`, { ...formValues, action: "CREATE_POST" })
            togglePostCreator();
            setTimeout(() => window.location.reload() , 100);
        }
    }

    const deletePost = (postId) => {
        axios.patch(`http://localhost:3001/user/${user._id}/${postId}`).then(data => data.data.data)
        window.location.reload();
    }

    useEffect(() => {
        
    }, [users]);

    if(_.isEmpty(user)){
        return <div></div>
    }
  

    return (
        <div className="d-flex justify-content-center">
            <div key={user.userName} id="NewsFeed" className="w-50 p-5 ">
                <div className="card p-4">
                    <form>
                        <div className="row border-bottom pb-2 mb-2">
                            <div className="avatar ml-2 btn-lg">
                                <img style={{ width: "75px", height: "75px" }} id="avatar" src={user.profilePic}></img>
                            </div>
                            <input onClick = { togglePostCreator } className="form-control mt-4 w-75 supForm" placeholder={`What's on your mind, ${ user.userName.split(" ")[0] } ?`}/>
                        </div>
                        {/* <Link to='/' className="m-1 btn btn-primary">Post</Link> */}
                        <div className="row d-flex justify-content-end w-100 px-5">
                            <Link to='/' onClick = { togglePostCreator } className="m-1 btn btn-primary w-25 mx-5">Create a Post</Link>
                        </div>
                    </form>

                </div>
                <PostCard  
                    currentUser = { user } 
                    users = { users }
                    deletePost = { deletePost }    
                />            
                <div id="PostModal">
                    <PostForm
                        user = { user } 
                        posts = { users }
                        togglePostCreator = { togglePostCreator } 
                        showPostCreator = { showPostCreator }
                        onSubmit = { onSubmit } 
                    />
                </div>
                
            </div>
        </div>
    )
}


export default NewsFeed;