const express = require('express');
const router = new express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
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

router.get('/', (req, res) =>{
    const queryText = `SELECT * FROM "feedback" ORDER BY date ASC`;
    
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
        console.log('get request');
    }).catch(error => {
        res.sendStatus(500);
        console.log('error with query', queryText);
    });
});

router.put('/:id', (req, res) => {
    const idToUpdate = req.params.id;
    const data = req.body.status;
    console.log(idToUpdate, data);
    let queryText = ``;
    (data) ? (
        queryText = `UPDATE "feedback" SET flagged = false WHERE id=$1;`
    ) : (
        queryText = `UPDATE "feedback" SET flagged = true WHERE id=$1;`
    )

    pool.query(queryText, [idToUpdate])
    .then(result => {
        res.sendStatus(202);
        console.log('successfull put');
    }).catch(error => {
        res.sendStatus(500);
        console.log('error with query', queryText);
    });
});

router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    console.log(idToDelete);
    const queryText = `DELETE FROM "feedback" WHERE id=$1;`;

    pool.query(queryText, [idToDelete])
    .then(result => {
        console.log('successfull delete of id:', idToDelete);
        res.sendStatus(202);
    }).catch(error => {
        console.log('error with query', queryText)
        res.sendStatus(500);
    });
});



module.exports = router;
