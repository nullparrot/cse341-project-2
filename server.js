const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/');
const port = process.env.PORT;
const mongodb = require('./database/');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Routes
app.get('/', router);

//Get Everything Running
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
