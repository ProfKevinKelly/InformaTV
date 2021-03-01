var express = require('express');
var router = express.Router();
const apiService = require('../services/apiService');

/* GET pro. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await apiService.getTest(req.query.page));
  } catch (err) {
    console.error(`Error while getting `, err.message);
    next(err);
  }
});
module.exports = router;