const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/");
const tabletsRouter = require("./routes/tablets");
const phonesRouter = require("./routes/phones");
const swaggerRouter = require("./routes/swagger")
const port = process.env.PORT;
const mongodb = require("./database/");
const bodyParser = require("body-parser");

// Routes
app.use(bodyParser.json())
    .use("/tablets", tabletsRouter)
    .use("/phones", phonesRouter)
    .use("/api-docs", swaggerRouter)
    .get("/", router);

//Get Everything Running
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
