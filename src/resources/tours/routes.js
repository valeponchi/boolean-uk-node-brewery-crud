let tours = [
	{
		id: 1,
		breweryId: 9242,
		numberPeople: 2,
		date: '23/12/2021',
	},
	{
		id: 2,
		breweryId: 9090,
		numberPeople: 3,
		date: '22/10/2021',
	},
]

const express = require(`express`)
const toursRouter = express.Router()

// GET endpoint /tours
// GET endpoint /tours?tourDate="date"
toursRouter.get('/', (req, res) => {
	//what's after query is what comes after the ? in the url
	// "/breweries?tourDate"
	// const breweryTourDate = req.query.tourDate

	// if (breweryTourDate) {
	// 	const filteredTours = tours.filter(tour => tour.date === breweryTourDate)

	// 	const response = filteredTours.length
	// 		? filteredTours
	// 		: "Can't find the tours you are looking for.."

	// 	res.json({ tour: response })
	// } else {
	res.json({ tours: tours })
	// }
})

// // GET endpoint /brewery/:id
toursRouter.get('/:id', (req, res) => {
	const tourId = Number(req.params.id)
	const tour = tours.find(tour => tour.id === tourId)

	if (tour) {
		res.json({ tour })
	} else {
		res.json({ msg: "Can't find the tour you are looking for.." })
	}
})

module.exports = toursRouter
