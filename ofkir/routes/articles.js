var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
const commsRepo = require('../repositories/comments')
const articleRepo = require('../repositories/articles')

/* GET users listing. */
router.get('/', async function(req, res, next) {
        res.send(await articleRepo.getAllArticles())
    })
    .get('/:id', async function(req, res, next) {
        res.send(await articleRepo.getArticleById(req.params.id))
    })
    .get('/:id/comments', async function(req, res, next) {
        res.send(await commsRepo.getCommenteArticles(req.body))
    })
    .post('/', async function(req, res, next) {
        const { role } = req.body.role;
        if (role == "admin" || role == "author") {
            const article = req.body
            res.send(await articlesRepo.addArticle(article))
        } else {
            res.status(403).json({ message: 'unauthorised access!' })
        }
    })
    .put('/', async function(req, res, next) {
        const { role } = req.user;
        if (role == "admin" || role == "author") {
            const article = req.body
            res.send(await articlesRepo.updateArticle(article))
        } else {
            res.status(403).json({ message: 'unauthorised access!' })
        }
    })
    .delete('/', async function(req, res, next) {
        const { role } = req.user;
        if (role == "admin" || role == "author") {
            const id = req.params.id
            res.send(await articlesRepo.deleteArticle(id))
        } else {
            res.status(403).json({ message: 'unauthorised access!' })
        }
    });

module.exports = router;