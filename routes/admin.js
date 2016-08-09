const express       = require( 'express' );
const expressJWT    = require( 'express-jwt' );
const jwt           = require( 'jsonwebtoken' );
const admin         = express.Router();
const bodyParser    = require( 'body-parser' );
const db            = require( '../db/pgp.js' );
const request       = require( 'request' );
const secret        = 'you wanna hear a secret';

admin.route( '/' )
  .get( ( req, res ) => {
    res.json( { data: 'success' } )
  });

module.exports = admin;
