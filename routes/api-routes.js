var db = require("../models");
const { Workout } = require("../models");

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
    const workout = new db.Workout(req.body);
    workout.updateTotalDuration();

    db.Workout.create(workout)
    .then(results => {
        res.json(results);
    });
});

// adding an exercise
app.put("/api/workouts/:id", (req, res) => {
    

    db.Workout.updateOne({
        _id: req.params.id
    }, { $push: {
        exercises: req.body
    }
    }).then(dbWorkout => {
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