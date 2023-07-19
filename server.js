require("dotenv").config();
const express=require('express')
const app=express();
const port=process.env.PORT

function welcomeHandler(req, res) {
  res.status(200).send("Welcome to home");
}
function aboutUs(req, res) {
  res.status(200).send("Welcome to aboutUs");
}

app.get('/',welcomeHandler)
app.get('/aboutus',aboutUs)
app.listen(port, () => {
    console.log(`server port is ${port}`);
  });
