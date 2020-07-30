const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now     
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "resistance"
        },
        name: {
            type: String,
            trim: true,
            required: "Bicep Curl"
        },
        duration: {
            type: Number,
            unique: false
        },
        weight: {
            type: Number,
            unique: false
        },
        reps: {
            type: Number,
            unique: false
        },
        sets: {
            type: Number,
            unique: false
        },
        distance: {
            type: Number,
            unique: false
        }
    }],

    lastUpdated: Date

});

WorkoutSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
  
    return this.lastUpdated;
  };  

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
