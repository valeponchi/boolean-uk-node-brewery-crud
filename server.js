const express = require("express");
const morgan = require("morgan");

// this is the server
const app = express();

// Resources 
const breweriesRouter = require("./resources/breweries/routes")

// Middlewares
app.use(morgan("dev"));
app.use(express.json()) //parse JSON body from the requests

// Breweries Routes
app.use('/breweries', breweriesRouter)

app.get("*", (req, res) => { 
  res.status(404).json({ msg: "Can't find that!"})
})





// Listen for incoming requests

app.listen(4000, () => {
  console.log("I'm running!!");
});
