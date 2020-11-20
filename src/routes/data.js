const express = require('express');
const router = express.Router();

const data = require('../controllers/data.controller');

/* GET users listing. */
router.post('/', data.create);
router.get('/', data.all);

module.exports = router;
