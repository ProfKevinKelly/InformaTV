var express = require('express');
var router = express.Router();
const db = require('../config');
const cors = require('cors');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-l7o00ivv.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 
    "https://dev-l7o00ivv.eu.auth0.com/api/v2/"
  ,
  issuer: `https://dev-l7o00ivv.eu.auth0.com/`,
  algorithms: ['RS256']
});

// This route needs authentication
router.get('/getTokenCheckAuthenticated', cors(), checkJwt, function(req, res) {
	res.json({
	  message: 'Hello from a private endpoint! You need to be authenticated to see this.'
	});
  });

router.get('/getTokenCheck', cors(), function(req, res, next) {
	res.send(JSON.stringify({"status": 200, "error": null, "response": "WORKED"}));
});
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