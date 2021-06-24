var express = require('express');
var router = express.Router();
const tagRepo = require('../repositories/tags')

/* GET users listing. */
router.get('/', async function(req, res, next) {
        res.send(await tagRepo.getAllTags())
    })
    .get('/:id', async function(req, res, next) {
        res.send(await tagRepo.getTagById(req.params.id))
    })
    .post('/', async function(req, res, next) {
        res.send(await tagRepo.addTag(req.body))
    })
    .put('/', async function(req, res, next) {
        res.send(await tagRepo.updateTag(req.body))
    })
    .delete('/', async function(req, res, next) {
        res.send(await tagRepo.deleteTag(req.body));
        res.redirect("/");
    });

module.exports = router;