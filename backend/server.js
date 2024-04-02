/**
 * Created by Syed Afzal
 */
require("./config/config");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const id = ''; //TEST
const password = ''; //TEST

const app = express();
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${id}:${password}@cluster0.ovdpffh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(()=>console.log('MongoDB connected...'))
    .catch(err => console.log(err));


//connection from db here
db.connect(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  adding routes
require("./routes")(app);

app.on("ready", () => {
  app.listen(3000, () => {
    console.log("Server is up on port", 3000);
  });
});

module.exports = app;
