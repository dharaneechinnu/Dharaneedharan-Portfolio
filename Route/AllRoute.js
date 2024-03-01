const express = require('express')
const router = express.Router()

router.route('/mail')
    .post(require('../Controller/Mail').sendMail)

module.exports = router