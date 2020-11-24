const app = require('express');
var citas = require('./citas.json');

const router = app.Router();



router.get("/", (req,res) => {

    const randomValue = citas[parseInt(Math.random() * citas.length)]
    
    res.send(randomValue)

    console.log(randomValue);
})

module.exports = router