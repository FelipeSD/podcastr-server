require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

// app config
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./database/index'); // database connection
require('./routes/episodeRoutes')(app); // episode route setup

// start app
app.listen(process.env.PORT || 3333,  () => {
    console.log(`Podcastr server is running at port ${process.env.PORT || 3333}`);
});