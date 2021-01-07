const router = require("express").Router();
const auth = require("../../../middleware/checkAuth");
const Transaction = require("../../../models/Transaction");

// @route POST api/transactions
// @desc Добавить новую транзакцию
// @access Private
router.post("/add", auth, (req, res) => {
  const { title, type, amount } = req.body;

  const newTransaction = new Transaction({
      title,
      type,
      amount,
      owner: req.user.id
  })

  newTransaction
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => res.json({ msg: "ERROR" }));
    
});

// @route GET api/transactions
// @desc Получить все транзакции
// @access Private
router.get("/", auth, (req, res) => {
    Transaction.find({owner: req.user.id}).then((doc)=> res.json(doc)).catch(err => res.json(err))
});

// @route DELETE api/transactions
// @desc Удалить транзакцию по id
// @access Private
router.delete("/delete/:id", auth, (req, res) => {
    Transaction.findByIdAndDelete(req.params.id).then(doc => res.json(doc)).catch(err => res.json({msg: "ERROR"}))
})

router.delete("/delete-for-user/:id", auth, async (req, res) => {
    const transaction = await Transaction.findOne({owner: req.params.id});
    if (transaction !==null ) {
        await Transaction.deleteMany({owner: req.params.id})
    } else {
        res.json({msg: "NOTHING TO DELETE"})
    }
})

module.exports = router;