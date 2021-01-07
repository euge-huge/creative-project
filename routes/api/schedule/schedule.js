const router = require("express").Router();
const auth = require("../../../middleware/checkAuth");
const CalendarDay = require("../../../models/CalendarDay");


// @route GET api/schedule
// @desc Получить все дни расписания
// @access Private
router.get("/", auth, (req, res) => {
    CalendarDay.find({owner: req.user.id}).then((doc)=> res.json(doc)).catch(err => res.json(err));
})

// @route POST api/schedule
// @desc Добавить новый фрагмент
// @access Private
router.post("/add", auth, (req, res) => {
    const { dayOfTheWeek, timeOfTheDay, subject, typeOfLesson } = req.body;
  
    const newFragment = new CalendarDay({
        dayOfTheWeek,
        timeOfTheDay,
        subject,
        typeOfLesson,
        owner: req.user.id,
    });
  
    newFragment
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => res.json({ msg: "ERROR" }));
});

// @route DELETE api/schedule
// @desc Удалить фрагмент
// @access Private
router.delete("/delete/:id", auth, (req, res) => {
    CalendarDay.findByIdAndDelete(req.params.id).then(doc => res.json(doc)).catch(err => res.json({msg: "ERROR"}))
})

router.delete("/delete-for-user/:id", auth, async (req, res) => {
    const schedule = await CalendarDay.findOne({owner: req.params.id});

    if (schedule !== null) {
        await CalendarDay.deleteMany({owner: req.params.id})
    } else {
        res.json({msg: "NOTHING TO DELETE"})
    }
    
})

module.exports = router;