const { v4: uuidv4 } = require('uuid');
const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');
const http = require('http')


// app.use("/css", express.static(__dirname + '/css'));
// app.use("/js", express.static(__dirname + '/js'));
// app.use(express.static('css'))

app.use("/css", express.static('../css'));
// app.use("/js", express.static('/js'));
app.use("/js", express.static(__dirname + ''));


/**
 * Parse all form data. When we submit the form, it is going to parse form data to json object
 */
app.use(bodyParser.urlencoded({extended: false}))

/**
 * This is view engine
 * Template parsing
 * We are using EJS types
 */
app.set('view engine', 'pug')
// app.set('views','src/js/views');

app.get('/', function (req, res) {
  res.sendFile(path.resolve('../index.html'))
})

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sajjad'
})

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected....!')
})

// app.get('#search-results'/)

/**
 * Uncomment below code to push the data to DB
 */
app.post('/finalSubmit', function (req, res) {
  console.log('Submitting...!!!!')
  var sql = "insert into users values('"+req.body.companyName+"','"+req.body.region+"')"
  connection.query(sql, function (err) {
    if (err) throw err
    console.log("data saved!")
    // connection.end();
    // console.log("Connection ended!")
      // res.render('index', { title: 'Data Saved!!!', message: 'Data save success!'})
    // res.render('', {req: req.body});
    // res.redirect('/');//redirect to the page from where request came
    res.status(204).send();
  })
})

let data = "";
app.post('/submitSearch', function (req, res) {
  console.log('Submitting Search..!!!')
  var sql = "Select * from users;"
  connection.query(sql, function (err, result) {
    if (err) throw err
    data = result;
    console.log(data)
    // connection.end();
    // console.log("Connection ended!")
      // res.render('index', { title: 'Data Saved!!!', message: 'Data save success!'})
    // res.render('', {req: req.body});
    // res.redirect('/');//redirect to the page from where request came
    res.status(204).send();
  })
})

/**
 * Connecting to server
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = data;