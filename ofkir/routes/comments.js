var express = require('express');
var router = express.Router();
const commsRepo = require('../repositories/comments')

/* GET users listing. */
router.get('/', async function(req, res, next) {
        res.send(await commsRepo.getAllComments())
    })
    .get('/:id/', async function(req, res, next) {
        res.send(await commsRepo.getCommentById(req.params.id))
    })
    .post('/', async function(req, res, next) {
        res.send(await commsRepo.addComment(req.body))
    })
    .post('/', async function(req, res, next) {
        res.send(await commsRepo.addComment(req.body))
    })
    .put('/', async function(req, res, next) {
        res.send(await commsRepo.updatComment(req.body))
    })
    .delete('/', async function(req, res, next) {
        res.send(await commsRepo.deleteComment(req.body));
        res.redirect("/");
    });

module.exports = router;