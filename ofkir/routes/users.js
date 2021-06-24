var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
const ArticleRepo = require('../repositories/articles');


/* GET users listing. */
router.get('/', async function(req, res, next) {
        res.send(await usersRepo.getAllUsers())
    })
    .get('/:id', async function(req, res, next) {
        res.send(await usersRepo.getUser(req.params.id))
    })
    .get('/:id/articles', async function(req, res, next) {
        res.send(await ArticleRepo.getUserArticles(req.params.id))
    })
    .post('/', async function(req, res, next) {
        res.send(await usersRepo.addUser(req.body))
    })
    .put('/', async function(req, res, next) {
        res.send(await usersRepo.updateUser(req.body))
    })
    .delete('/', async function(req, res, next) {
        res.send(await usersRepo.deleteUser(req.body));
        //res.redirect("/");
    });

module.exports = router;