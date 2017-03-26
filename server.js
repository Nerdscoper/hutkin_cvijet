console.log('runamo server')

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/home', (req, res) => {
    res.render('home.html')
})

app.post('/', (req, res) => {
    // uzmi text iz request
    //save text to DB
})

app.get('/users', (req, res) => {
    res.status(200).json({
        "id": 1177,
        "wins": 19,
        "statid": 1543,
        "losses": 6,
        "last_name": "McGee",
        "weight_class": "Welterweight",
        "title_holder": false,
        "draws": 0,
        "first_name": "Court",
        "fighter_status": "Active",
        "thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FCourt-McGee%252FCourt-McGee_1177_medium_thumbnail.jpg?-mw300-mh300-tc1"
    }, {
        "id": 453461,
        "wins": 12,
        "statid": 2274,
        "losses": 2,
        "last_name": "Holohan",
        "weight_class": "Flyweight",
        "title_holder": false,
        "draws": 1,
        "first_name": "Paddy",
        "fighter_status": "NotFighting",
        "thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FPatrick-Holohan%252FPatrick-Holohan_453461_medium_thumbnail.jpg?-mw300-mh300-tc1"
    })
})

app.listen(4000, () => console.log('runamo server na 4000'))