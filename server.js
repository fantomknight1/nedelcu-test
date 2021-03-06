pry = require( 'pryjs' )

'use strict'

require( 'dotenv' ).config()
const express = require( 'express' );
const logger = require( 'morgan' );
const expressJwt = require( 'express-jwt' );
const path = require( 'path' );
const db = require( './db/pgp.js' );
const bodyParser = require( 'body-parser' );
const jsonwebtoken = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );
const React = require( 'react' );
const Router = require( 'react-router' );

const app = express();
const userRoutes = require( path.join( __dirname, './routes/users' ) );
const adminRoutes = require( path.join( __dirname, './routes/admin' ) );

app.use( logger( 'dev' ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.use( '/users', userRoutes );
app.use( '/admin', adminRoutes );

app.get( '/*', ( req, res ) => {
  res.sendFile( path.join( __dirname, 'index.html' ) )
});


const port = process.env.PORT || 3000;
app.listen( port, () => {
  console.log( 'All systems are go! Mission is green', port);
});
