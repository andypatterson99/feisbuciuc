import React from 'react';

import { Field, reduxForm } from 'redux-form';
import "./Modal.css";


class PostForm extends React.Component {
    state = { postDescription: "", postImg: "" };

    render(){

        if(!this.props.showPostCreator)
            return null
        
        document.querySelector("#PostModal").style.display = "inline";


        return (
            <div className = "PostForm">
                
                <div className="row">
                    <div className="col-10 text-center font-weight-bold mb-3">Create a Post</div>
                        <div className="col-2">
                            <button
                            className="btn btn-secondary"
                            onClick={ this.props.togglePostCreator } >
                            X
                            </button>
                        </div>
                </div>

                <div className="row border-top p-3">
                    <div className="avatar ml-2 btn-lg">
                        <img id="avatar" src={this.props.user.profilePic}></img>
                    </div>
                    <p className="h5 p-3">{this.props.user.userName}</p>
                </div>

                <div className="row pt-1">
                    <form onSubmit={ this.props.handleSubmit } className="col-11">
                        <div className="form-group">
                            <label htmlFor="postTitle">Description: </label>
                            <Field component="input" name="postTitle" className="form-control" 
                            value={ this.postDescription } id="postTitle" type="text" placeholder="Title" 
                            onChange={(e) => this.setState({ postDescription: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postImg" className="form-label">URL:</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light" id="basic-addon3"><img style={{width: "25px"}} src="data:image/png;base64,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"></img></span>
                                <Field component="input" name="postImg" className="form-control"
                                value={ this.postImg } id="postImg" type="text"
                                onChange={(e) => this.setState({ postImg: e.target.value })}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-5">Post</button>
                        
                    </form>

                    
                </div>
            </div>

        )
    }
}

export default reduxForm({
    form: "postForm"
})(PostForm);