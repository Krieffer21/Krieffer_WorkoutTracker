var db = require("../models");

module.exports = function(app) {

// gets previous workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// adds a workout
app.post("/api/workouts/:id", (req, res) => {
    db.Workout.create(req.body)
    .then(res => {
        res.json(res);
    });
});



};