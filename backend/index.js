const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./config/config.env"});

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", () => {
    console.log("DB is connected");
});

mongoose.connection.on("error", () => {
    console.error("DB connection is failed");
});

const port = process.env.PORT;

let app = express();

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/notes', require("./routes/notes"));

app.listen(port, () => {
    console.log(`Server run on port ${port}. http://localhost:${port}`);
});