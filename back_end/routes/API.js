var express = require('express');
var router = express.Router();
const db = require('../config');

router.get('/getCurator', function(req, res, next) {
	db.conn.query('SELECT * FROM test.Curator', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/getElderlyPortal', function(req, res, next) {
	db.conn.query('SELECT * FROM test.ElderlyPortal', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/getReminders', function(req, res, next) {
	db.conn.query('SELECT * FROM test.Reminders', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/getCloseCircle', function(req, res, next) {
	db.conn.query('SELECT * FROM test.CloseCirlcle', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
router.get('/getCloseCircleMessages', function(req, res, next) {
	db.conn.query('SELECT * FROM test.CloseCirlcleMessages', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
module.exports = router;