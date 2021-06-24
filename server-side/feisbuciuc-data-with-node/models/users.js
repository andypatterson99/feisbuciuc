const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: true,
    },
    userEmail: {
        type: String,
        // required: true,
    },
    userPassword: {
        type: String,
        // required: true,
    },
    profilePic: {
        type: String,
        // required: true
    },
    posts: [
            {
               postTitle: String,
               postImg: String,
               postDate: String 
            }
        ]
})

const User = mongoose.model('User', userSchema);

// const makeUser = async () => {
//     try{
//         await User.deleteMany({})
//     }catch {
//         console.log("no users")
//     }
//     const u1 = new User({
//         userName: "Pater Andrei",
//         userEmail: "test@email.com",
//         userPassword: "test123",
//         profilePic: "https://scontent.fomr1-1.fna.fbcdn.net/v/t1.6435-9/156683390_100241138806641_3798211445587999898_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R7tLRJVEdrwAX_1Mpsj&_nc_ht=scontent.fomr1-1.fna&oh=2139e2c8554e987f2bc5c082d5358dcf&oe=60E75BB0",
//     })
//     u1.posts.push({
//         postTitle: "Post from Mongo DB",
//         postImg: "https://scontent.fomr1-1.fna.fbcdn.net/v/t1.6435-9/122662685_3462859980428777_8335646716377140455_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=SyXB7ekUXW4AX94ShzW&_nc_ht=scontent.fomr1-1.fna&oh=99a4f2eb3ad9092162bbf137a8217458&oe=60E49321",
//         postDate: new Date().toLocaleDateString()
//     })
    
//     const u2 = new User({
//         userName: "Popescu Testulescu",
//         userEmail: "poptest@email.com",
//         userPassword: "test123",
//         profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     })
    // u2.posts.push({
    //     postTitle: "You need an objective, man",
    //     postImg: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    //     postDate: new Date().toLocaleDateString()
    // })
//     const res = await u1.save().then(async () => {
//         await u2.save();
//     } )
// }
// makeUser();

module.exports = User;
