const { Router } = require('express')
// const example = require('./example.js')
const search = require('./search.js');
const router = Router()
// router.use('/example', example)
router.use('/search',search);
module.exports = router