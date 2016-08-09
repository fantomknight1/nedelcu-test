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

function createSecure( email, password, username, callback ) {
  bcrypt.genSalt( function( err, salt ) {
    bcrypt.hash( password, salt, function( err, hash ){
      callback( email, hash, username )
    })
  })
}

function createUser( req, res, next ) {
  createSecure( req.body.email, req.body.password, req.body.username, saveUser );

  function saveUser( email, hash, username ) {
    db.none( "INSERT INTO users ( email, password_digest, username ) VALUES( $1, $2, $3 );", [ email, hash, username ] )
    .then( function( data ) {
      next();
    })
    .catch( function( error ) {
      console.log( 'error: ', error );
    })
  }
}

function loginUser( req, res, next ) {
  const email = req.body.email
  const password = req.body.password
  db.one( "SELECT * FROM users WHERE email LIKE $1;" [ email ] )
    .then( ( data ) => {
      if ( bcrypt.compareSync( password, data.password_digest ) ) {
        res.rows = data
        next()
      } else {
        res.status( 401 ).json( { data:"I'm sorry Dave.  I can't let you do that." } )
        next()
      }
    })
    .catch( () => {
      console.error( error )
    })
}

function updatePassword( req, res, next ) {
  const currentPassword = req.body.currentPass
  const newPassword = req.body.newPass
  console.log( 'req: ', req.user );

  db.one("SELECT * FROM users where emaile LIKE $1;", [ req.user.email ])
    .then( ( data ) => {
      console.log( 'email: ', data.email );
      if ( bcrypt.compareSync( currentPassword, data.password_digest ) ) {
        console.log('It\'s working.... ');
        createSecure( data.email, newPassword, data.username, updateUser )
        function updateUser( email, hash, username ) {
          db.none( "UPDATE users SET password_digest =( $1 ) WHERE user_id=( $2 )", [ hash, req.user.user_id ])
          .then( () => {
            next()
          })
          .catch( ( error ) => {
            console.log( error );
          })
        }
        next();
      }
    })
    .catch( ( error ) => {
      console.log( 'error I suck: ', error );
    })

}

function deleteUser( req, res, next ) {
  db.none( 'DELETE FROM users WHERE user_id=( $1 )', [ req.user.user_id ] )
  .then( () => {
    next();
  })
  .catch( ( error ) => {
  })
}

function createHash( email, password, username, callback ) {
  bcrypt.genSalt( function( err, salt ) {
    bcrypt.hash( password, salt, function( err, hash ) {
      callback( email, hash, username );
    })
  })
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.updatePassword = updatePassword;
module.exports.deleteUser = deleteUser;
