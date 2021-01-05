const router = require("express").Router();
const auth = require("../../../middleware/checkAuth");
const Task = require("../../../models/Task");

// @route POST api/tasks
// @desc Добавить новую задачу
// @access Private
router.post("/add", auth, (req, res) => {
  const { title, description, expiredAt, importance } = req.body;

  const newTask = new Task({
    title,
    description,
    expiredAt: expiredAt,
    owner: req.user.id,
    importance: importance
  });

  newTask
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => res.json({ msg: "ERROR" }));
});

router.get("/", auth, (req, res) => {
  Task.find({owner: req.user.id}).then((doc)=> res.json(doc)).catch(err => res.json(err))
});

router.delete("/delete/:id", auth, (req, res) => {
  Task.findByIdAndDelete(req.params.id).then(doc => res.json(doc)).catch(err => res.json({msg: "ERROR"}))
})

router.put("/update/:id", auth, (req, res) => {
  const { title, description, expiredAt, importance } = req.body;

  const newTask = {
    title,
    description,
    expiredAt,
    importance,
  };

  Task.findByIdAndUpdate(req.params.id, newTask).then(doc => res.json(doc)).catch(err => res.json({msg: "ERROR"}))
})


module.exports = router;
