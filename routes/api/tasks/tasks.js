const router = require("express").Router();
const auth = require("../../../middleware/checkAuth");
const Task = require("../../../models/Task");

// @route POST api/tasks
// @desc Добавить новую задачу
// @access Private
router.post("/add", auth, (req, res) => {
  const { title, description } = req.body;

  const newTask = new Task({
    title,
    description,
    expiredAt: Date.now(),
    owner: req.user.id,
  });

  newTask
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => res.json({ msg: "ERROR" }));
  res.json({ msg: description });
});

// @route GET api/tasks
// @desc Получить все задачи пользователя
// @access Private
router.get("/", auth, (req, res) => {});

module.exports = router;
