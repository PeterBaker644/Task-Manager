//
// Needs to be tweaked a bit more.
//

const express = require("express");

const router = express.Router();

// Import the model (task.js) to use its database functions.
const task = require("../models/task.js");

router.get("/", function (req, res) {
    task.all(function (data) {
        const hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tasks", function (req, res) {
    task.create(req.body.body, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/tasks/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log(`Task complete. Id = ${req.params.id}`);

    task.update(
        condition,
        function (result) {
            // Send back the ID of the updated task
            res.json({ id: result.insertId });
        }
    ); 
});

router.delete("/api/tasks/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log(`Task deleted. Id = ${req.params.id}`);

    task.delete(
        condition,
        function (result) {
            res.status(200).end();
        }
    )
})

module.exports = router;
