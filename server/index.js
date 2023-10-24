
//const controller = require('./server/controller');
const path = require("path")
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
//app.set('',);

//app.get('/', (req, res) => { 
 //   res.render('index');
//});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

//app.use('/', controller);

const { getCompliment, getFortune, getNumber, addGoal, getQuoteOfTheDay} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/number", getNumber);
app.post("/api/goals", addGoal);
app.get("/api/quote", getQuoteOfTheDay);
app.listen(4000, () => {
  console.log("app running on 4000")
  });
  