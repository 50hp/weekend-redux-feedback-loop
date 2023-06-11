const express = require('express');
const router = new express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req,res) => {
    const feedback = req.body;
    const values = [feedback.pageOneReducer/1, 
                    feedback.pageTwoReducer/1, 
                    feedback.pageThreeReducer/1,
                    feedback.pageFourReducer];
    console.log(feedback, values);
    const queryText = 
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
     VALUES ($1, $2, $3, $4);`;
    
    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error with query', queryText);
        res.sendStatus(500);
    });
});







module.exports = router;
