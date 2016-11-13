const express = require("express"),
    router = express.Router();

const sequelizeDb = require("../config/db"),
    user = require("../models/user");

router
    .get("/", (req, res) => {
        user.findAll().then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(`not found : ${err}`);
        });
    })
    .get("/:id", (req, res) => {
        var id = req.params.id;
        user.findById(id).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(`not found : ${err}`);
        });
    })
    .post("/", (req, res) => {
        var body = req.body;
        user.create(body).then(function() {
            res.send("created");
        }).catch((err) => {
            res.send(`not created : ${err}`);
        });
    })
    .put("/:id", (req, res) => {
        var id = req.params.id;
        var body = req.body;
        if (id == body.UserId) {
            user.update({
                Name: body.Name,
                Address: body.Address,
                ContactNo: body.ContactNo
            }, {
                where: { UserId: body.UserId }
            }).then(() => {
                res.send("updated");
            }).catch((err) => {
                res.send(`not updated : ${err}`);
            });
        } else {
            res.send("not updated");
        }
    })
    .delete("/:id", (req, res) => {
        var id = req.params.id;
        user.destroy({
            where: {
                UserId: id
            }
        }).then(() => {
            res.send("deleted");
        }).catch((err) => {
            res.send(`not deleted : ${err}`);
        }).done();
    });

module.exports = router;