const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let result = {}
    let data = {}
    result.name = req.query.name;
    result.phone = req.query.phone;
    result.age = req.query.age;
        
    
    res.send(result);
})



module.exports = router;