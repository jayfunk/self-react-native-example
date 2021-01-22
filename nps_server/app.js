import express from 'express'
import bodyParser from 'body-parser'
import _ from 'lodash'

// initialize server on port 4000
const app = express()
const port = 4000

// add json body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// in-memory storage
let ratingEntries = []

// add a single rating
app.post('/add_rating', (req, res) => {
    const ratingData = req.body
    if (!ratingData || _.isEmpty(ratingData)) {
        console.log('No data submitted')
        res.status(400).json({message: 'No data submitted'})
    } else if (!_.isNumber(ratingData.rating) || ratingData.rating < 0 || ratingData.rating > 10) { 
        console.log('Invalid rating submitted')
        res.status(400).json({message: 'Invalid rating submitted'})
    } else {
        ratingEntries.push(ratingData)
        res.json({success: true})
    }
})

// get all saved ratings
app.get('/get_ratings', (req, res) => {
    res.json({ratings: ratingEntries})
})

// clear ratings
app.delete('/delete_ratings', (req, res) => {
    ratingEntries = []
    res.json({success: true})
})

// quick way to calculate nps score
app.get('/get_nps_score', (req, res) => {
    let detractors = 0
    let promoters = 0

    for (const entry of ratingEntries) {
        if (entry.rating < 7) {
            detractors++
        } else if (entry.rating > 8) {
            promoters++
        }
    }
    const total = ratingEntries.length
    const detractorsPercentage = !detractors ? detractors : (detractors / total) * 100
    const promotersPercentage = !promoters ? promoters : (promoters / total) * 100

    res.json({nps: (promotersPercentage - detractorsPercentage)})
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})