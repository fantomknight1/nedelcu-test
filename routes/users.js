const express                             = require( 'express' );
const expressJWT                          = require( 'express-jwt' );
const jwt                                 = require( 'jsonwebtoken' );
const users                               = express.Router();
const bodyParser                          = require( 'body-parser' );
const db                                  = require( '../db/pgp.js' );
const secret                              = process.env.SECRET;

users.use( function( error, request, response, next ) {
  if( error.name === 'UnauthorizedError' ) {
    response.status( 401 ).json( { message: 'Sorry, you need authorization to view this' } );
  }
});

users.post( '/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );
  res.json( { agent: res.rows, token: token } );
});

users.delete( '/delete', expressJWT( { secret : secret } ), db.deleteUser, ( req, res ) => {
  res.send( 'deads' );
});

users.put('/update', expressJWT( { secret : secret } ), db.updatePassword, ( req, res ) => {
  res.send( 'go' );
});

users.route( '/' )
  .get( ( req, res ) => {
    res.json( { data : 'success' } )
  })
  .post( db.createUser, (req, res ) => {
    res.staatus( 201 ).json( { data : 'success' } );
  });

module.exports = users;
