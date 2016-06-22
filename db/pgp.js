const bcrypt = require( 'bcrypt' );
const salt   = bcrypt.genSaltSync( 10 );
const pgp    = require( 'pg-promise' )({});

const cn = {
  host: 'localhost',
  port: 5432,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const db = pgp( cn );
