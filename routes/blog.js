const db = require("../app/models");
const Tutorial = db.tutorials;
const express = require('express');
const router = express();


router.get('/', (async (req, res) => {


    const tutorial = new Tutorial({
        title: "New Blog",
        description: "Description",
        published: true
      });
      // Save Tutorial in the database
      tutorial
        .save(tutorial)
        .then(data => {
            return res.status(200).json({
                'message':'Booking Status Update & History generated',
                'data':data
            });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
}));

module.exports = router;
