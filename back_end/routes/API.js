var express = require('express');
var router = express.Router();
const db = require('../config');

router.get('/testFetch', function(req, res, next) {
	db.conn.query('SELECT * FROM test.testTable', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;