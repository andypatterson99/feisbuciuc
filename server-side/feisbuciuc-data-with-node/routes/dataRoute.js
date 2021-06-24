const _ = require("lodash");

const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { response } = require("express");
const { db } = require("../models/users");








router.get("/user/:id/:postId", async(req, res) => {
    await User.find({_id: req.params.id}).then(user => 
       {
        console.log(user)
        const posts = Object.values((Object.values(user)[0].posts));
        return _.filter(posts, post => post._id == req.params.postId )
        })
    .then(post => {res.send(post) 
        console.log(post)});
})



router.get("/user/:id", async(req, res) => {
    await User.find({_id: req.params.id}).then(user => res.send(user))
})

router.get("/users", async(req, res) => {
    await User.find({}).then(user => res.json(user))
})


router.post("/users", async (req, res) =>{
    const newUser = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        profilePic: req.body.profilePic,
        posts: []
    });
    // const newUser = new User(req.body)
    try {
        await newUser.save();
        res.send(newUser);
    }catch(err){
        res.status(500).send(err);
    }
})


router.patch("/user/:id/:postId", async (req,res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, {
            $pull: {
                posts: { _id: req.params.postId }
            }
        }, { new: true });
    }catch{
        console.log("Error. Data not found.")
    }
})
    
// POST CREATOR
router.patch("/createPost/:id", async (req, res) => {
    try {
        const updatedUser = await User.findById({ _id: req.params.id });
        updatedUser.posts.push({
            postTitle: req.body.postTitle,
            postImg: req.body.postImg,
            postDate: new Date().toLocaleDateString()
        })
        const res = await updatedUser.save();    
    }catch(err){
        res.status(404).send("Not found");
    }
})

router.patch("/post/:id/:postId", async (req, res) => {
    try{
        User.findById(req.params.id, (err, user) => {
            const posts = user.posts;
            for( i=0; i<posts.length; i++ ){
                if(posts[i]._id == req.params.postId ){
                    posts[i].postTitle = req.body.postTitle;
                    posts[i].postImg = req.body.postImg;
                    posts[i].postDate = new Date().toLocaleDateString();

                    user.save((err) => {
                        if(err) console.log("Error saving")
                        console.log("Post updated")
                    })
                }
            }
        } )
        

    }catch(err){
        res.status(505).send("Bad gateway");   
    }
})

// UPDATE USER
router.patch("/user/:id", async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id },
            {
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword,
                profilePic: req.body.profilePic, 
            }, { new: true });        
        console.log("EDIT USER", req.body)
    }catch(err){
        res.status(404).send("Not found");
    }
})

router.post("/users", async (req, res) => {

    const newUser = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        profilePic: req.body.profilePic,
        posts: []
    })
    await newUser.save();
    localStorage.setItem("token", newUser._id);
})



router.delete("/user/:id", async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).res.send("User not Found");
        }
    }catch(err){}
})


module.exports = router;