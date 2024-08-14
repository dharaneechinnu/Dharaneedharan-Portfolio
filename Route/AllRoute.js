const express = require('express')
const router = express.Router()

router.route('/mail') //mail
    .post(require('../Controller/mail').sendMail)

module.exports = router