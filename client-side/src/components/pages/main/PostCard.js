import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash';
import axios from 'axios';

import './PostCard.css';


class PostCard extends React.Component {
    state = { postId: "", likes: {} };
    
    componentDidUpdate = () => {
       if(this.state.postId != ""){
            this.props.deletePost(this.state.postId);
            console.log("Render: Post ID", this.state.postId)
       }
    }
    // likeToggle = () => {
    //     axios.patch(`http://localhost:3001/likeStatus/${this.state}`)
    // }
    
    renderList() {
        return _.map(_.reverse(this.props.users), user => _.map(_.reverse(user.posts), post =>{
            const control = this.props.currentUser._id !== user._id ? "d-none" : "";

                if(post.postImg)
                {                
                    return (
                        <div key={post._id} className="my-4 border-top card px-2">
                            <div className="row postHead">
                                <div className="avatar ml-2 btn-lg">
                                <img id="avatar" src={user.profilePic}></img>
                                </div>
                                <div className="col-lg-10 col-md-5 col-sm-auto author mt-2 ml-0">
                                    <h5 className="mb-0">{user.userName}</h5>
                                    <span className="text-muted small m-0 p-0">{post.postDate}</span>
                                </div>
                                <div className={`dropdown mt-3 ${control}`}>
                                    <button className="btn btn-outline-secondary border-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>
                                            <Link to={{ 
                                                pathname:"/post",
                                                state:{
                                                    currentPost: post
                                                } 
                                            }} 
                                            className="dropdown-item text-center text-light w-75 mx-auto p-2 mb-2 bg-primary" type="button"
                                            >
                                            Edit
                                        </Link ></li>
                                        <li>
                                            <button className="dropdown-item text-center text-light w-75 mx-auto p-2  bg-danger" type="button"
                                            onClick={() => this.setState({ postId: post._id }) }
                                            >
                                            Delete
                                        </button></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="postDescription m-2">
                                <h4>{post.postTitle}</h4>
                            </div>
                            <div className="postImage bg-light py-1 d-flex">
                                <img 
                                src={post.postImg} 
                                className="img-fluid mx-auto"
                                style={{height:"auto", width:"725px" }}
                                alt=""
                                />
                            </div>
                            <div className="postAction border-top mt-3 py-2 px-5">
                                <div className="row mx-auto d-flex px-5 mt-2">
                                    <div className="col-4 border p-0">
                                        <button  className="btn btn-light px-5 w-100">Like</button>
                                    </div>
                                    <div className="col-4 border p-0">
                                        <button className="btn btn-light px-5 w-100">Comment</button>
                                    </div>
                                    <div className="col-4 border p-0">
                                        <button className="btn btn-light px-5 w-100">Share</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );  
                }
                if(!post.postImg){
                    return (
                        <div key={post._id} className="my-4 border-top card px-2">
                            <div className="row postHead">
                                <div className="avatar ml-2 btn-lg">
                                    <img id="avatar" src={user.profilePic}></img>
                                </div>
                                <div className="author mt-2 ml-0 col-10">
                                    <h5 className="mb-0">{user.userName}</h5>
                                    <span className="text-muted small m-0 p-0">{post.postDate}</span>
                                </div>
                                <div className={`dropdown mt-3 ${control}`}>
                                    <button className="btn btn-outline-secondary border-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>
                                            <button className="dropdown-item text-center text-light w-75 mx-auto p-2 mb-2 bg-primary" type="button"
                                            >
                                            Edit
                                        </button></li>
                                        <li>
                                            <button className="dropdown-item text-center text-light w-75 mx-auto p-2  bg-danger" type="button"
                                            onClick={() => this.setState({ postId: post._id }) }
                                            >
                                            Delete
                                        </button></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="postDescription-noimg m-2">
                                <h3>{post.postTitle}</h3>
                            </div>
                            <div className="postAction border-top mt-3 py-2 px-5">
                                <div className="row mx-auto d-flex px-5 mt-2">
                                    <div className="col-4 border p-0">
                                        <button className="btn btn-light px-5 w-100">Like</button>
                                    </div>
                                    <div className="col-4 border p-0">
                                        <button className="btn btn-light px-5 w-100">Comment</button>
                                    </div>
                                    <div className="col-4 border p-0">
                                        <button className="btn btn-light px-5 w-100">Share</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );   
                }
        }))
    }

    render() {
        
        return (
            <div>{this.renderList()}</div>
        )
    }
}



export default PostCard;