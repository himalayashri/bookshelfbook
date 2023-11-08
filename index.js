const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PORT || 5000
const mongoDB = require("./db");
const CreateUser = require("./Routes/CreateUser");
const Home = require("./Routes/HomeRoute")
mongoDB();

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", "true")
//     res.header("Access-Control-Request-Method", "POST")
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-requested-With, Content-Type, Accept"
//     );
//     next();
// })

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());

app.use('/', Home);

app.use('/api', CreateUser);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})