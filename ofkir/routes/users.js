var express = require('express');
const app = require('../app');
const { request } = require('../app');
//var router = express.Router();
const router = require('express').Router();

const usereRepo = require('../respositories/users')

/* GET users listing. */
router.get('/', async function(req, res) {
        res.send(await usereRepo.getAllUses())
    })
    .post('/', async function(req, res) {
        res.send(await usereRepo.addUser(req.body))
    });

module.exports = router;