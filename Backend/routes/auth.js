const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    obj = {
        name: 'Rock',
        no: 26
    }
    res.json(obj)
})
module.exports = router