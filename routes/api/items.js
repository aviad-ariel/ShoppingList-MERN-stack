const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Model
const Item = require("../../models/Item");
const User = require("../../models/User");

// @route GET api/items/id
// @desc Get items
// @access Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then(user => {
    res.json(user.list);
  });
  // Item.find()
  //     .sort({ date: -1 })
  //     .then(items => res.json(items))
});

// @route POST api/items/:id
// @desc Post new item
// @access Public
router.post("/:id", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity
  });
  User.findByIdAndUpdate(req.params.id, { $push: { list: newItem } }).then(
    user => {
      res.json(newItem);
    }
  );
});

// @route DELETE api/items/:id/:itemName
// @desc Delete a Item
// @access Public
router.delete("/:id/:itemName", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $pull: { list: { name: req.params.itemName } }
  }).then(user => {
    res.json(user.list);
  });
  // User.findByIdAndUpdate(req.params.id, { $pull: {list: newItem} }).then( user => {
  //     res.json(user.list)
  // })
  // Item.findById(req.params.id)
  // .then(item => item.remove().then( () => res.json({ Removed: true })))
  // .catch(err => res.status(404).json({ error: err }))
});

module.exports = router;
