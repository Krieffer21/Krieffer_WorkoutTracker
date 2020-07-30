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
app.post("/api/workouts", (req, res) => {
    db.Workout.create({type: "workout"})
    .then(results => {
        res.json(results);
    });
});

app.put("/api/workouts/:id", ({body}, res) => {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, {$push: {exercises: _id }}, { new:true }))
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
    
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

};