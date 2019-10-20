var express = require('express');

var app = express();
var bodyParser = require('body-parser');

var router = require('./routes/hotels');

var mongoose = require('mongoose');

var dotenv = require('dotenv');
dotenv.config({ path: `./environments/.env.${process.env.NODE_ENV}` })
var { PORT, DB_URL, DB_USER, DB_PASS, NODE_ENV } = process.env;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_URL}`);

mongoose.connection.on('error', err => console.log('connection error:', err));
mongoose.connection.once('open', () => console.log('Connected'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/api/hotels', router);

app.listen(PORT, () => {
    console.log(`Server is now running in ${NODE_ENV} on por ${PORT}`);
})
