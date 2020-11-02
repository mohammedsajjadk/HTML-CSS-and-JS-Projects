const { v4: uuidv4 } = require('uuid');
const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');

// app.use("/css", express.static(__dirname + '/css'));
// app.use("/js", express.static(__dirname + '/js'));
// app.use(express.static('css'))

app.use("/css", express.static('../css'));
// app.use("/js", express.static('/js'));
app.use("/js", express.static(__dirname + ''));

app.use(bodyParser.urlencoded({extended: false}))
// app.set('views','src/js/views');
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  // res.sendFile('index.html', {root: __dirname})
  // res.sendFile('../index.html', {root: __dirname})
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

/**
 * Uncomment below code to push the data to DB
 */
// app.post('/submit', function (req, res) {
//   console.log('Submitting...!!!!')
//   var sql = "insert into users values('"+req.body.companyName+"')"
//   connection.query(sql, function (err) {
//     if (err) throw err
//     console.log("data saved!")
//     connection.end();
//     console.log("Connection ended!")
//       res.render('index', { title: 'Data Saved!!!', message: 'Data save success!'})
//     // res.render('', {req: req.body});
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})