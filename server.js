const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient



app.use(bodyParser.urlencoded({ extended: true }))
app.use( bodyParser.json() );
app.use("/node_modules", express.static('node_modules'));
app.use(express.static(__dirname + '/static'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log(req.body)
        console.log('saved to database')
        res.redirect('/')
    })
})

var db
MongoClient.connect('mongodb://127.0.0.1/db', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
        console.log('listening on 3000')
        
    })
})



