const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("./db/conn");
const UserRoute = require('./routers/Users');
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));
// app.use(cors({origin: true,credentials: true}));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(UserRoute);

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port);
});