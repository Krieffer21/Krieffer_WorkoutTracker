const db = require("../models");

module.exports = function(app) {

app.get("/exercise?", (req, res) => {
    res.render("exercise");
});

// app.get("/exercise")

};