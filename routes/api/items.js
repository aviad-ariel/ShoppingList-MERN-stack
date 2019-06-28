const express = require('express');
const router = express.Router();
const  auth = require('../../middleware/auth');
//Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Post new item
// @access Public
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a Item
// @access Public
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then( () => res.json({ Removed: true })))
    .catch(err => res.status(404).json({ error: err }))
});

module.exports = router;