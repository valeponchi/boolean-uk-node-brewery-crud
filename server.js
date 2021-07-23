const express = require('express')
const morgan = require('morgan')

// this is the server
const app = express()

// Resources
const breweriesRouter = require('./src/resources/breweries/routes')
const toursRouter = require('./src/resources/tours/routes')

// Middlewares
app.use(morgan('dev'))

app.use(express.json()) //parse JSON body from the requests
//gives the ability to understand JSON

// Breweries Routes
app.use('/breweries', breweriesRouter)
app.use('/tours', toursRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: "Can't find that!" })
})

// Listen for incoming requests

app.listen(4000, () => {
	console.log("I'm running!!")
})
