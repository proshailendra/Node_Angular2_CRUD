const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    webRoutes = require("./server/routes/webRoutes"),
    apiRoutes = require("./server/routes/apiRoutes");

const app = express();

//application/json
app.use(bodyParser.json());

//www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// set the static files location
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use("/api", apiRoutes);
app.use("/", webRoutes);

const port = process.env.PORT || 1320;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});