const { Schema, model, Types } = require("mongoose");

const calendarDaySchema = new Schema({
    dayOfTheWeek: {
        type: String,
        required: true
    },
    timeOfTheDay: {
        type: String,
        required: true,
    },
    typeOfLesson: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: "User",
    },
});

module.exports = model("CalendarDay", calendarDaySchema);
