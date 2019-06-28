const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')
//Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Auth user
// @access Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({msg: "Missing Fileds"});
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: "User Does Not Exists" });

            //Password Validation
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if(!isMatch) return res.status(400).json({ mas: "Invalid Password" })
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    
                                }
                            })
                        }
                    )
                })
        })
});

module.exports = router;