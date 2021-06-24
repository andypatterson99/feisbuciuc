const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

const dataRoute = require('../routes/dataRoute')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dbAndrei:dbParola@internlate.jj5yf.mongodb.net/feisbuciucDB', {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})  


app.use("/", dataRoute)

// app.get("/users",async (req, res) => {
//   const users = await User.find({});
//   res.send(JSON.stringify(users))
// }) 



app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});