const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const browserHistory  = ReactRouter.browserHistory;

const auth            = require( '../auth.js' )
const Login           = require( './login.js');
const Signup          = require( './signup.js' );

const Admin       = React.createClass({

  getInitialState : function() {
    loggedIn : false

  },

  login : function( username, password ) {

    let data = {
      username: username,
      password: password
    }
    $.post( 'users/login', data )
    .done( ( data ) => {
      localStorage.token = data.token;
      this.state.home = true;
      this.state.projects = false;
      this.state.about = false;
      this.state.contact = false;
      this.state.loggedIn = true;
      this.state.signupBox = false;
      this.setState( { loggedIn : this.state.loggedIn, signupBox : this.state.signupBox,  } )
    })
  },

  logout : function() {
    this.state.loggedIn = false;
    this.setState( { loggedIn : this.state.loggedIn } )
  },

  signup : function() {
    this.state.signupBox = true;
    this.setState( { signupBox : this.state.signupBox } )
  },

  signedIn : function() {
    this.state.signupBox = false;
    this.state.loggedIn = true;
    this.setState( { signupBox : this.state.signupBox, loggedIn : this.state.loggedIn } )
  },

  render : function() {

    let adminSecurity =
      <div>
        <Login />
        <Signup />
      </div>

      let signedInView =
        <div>
        </div>

      let notSignedIn =
        <div>
          <Signup signedIn={ this.signedIn }/>
        </div>

    return(
      <div className="container">
        <div className="row" id="adminNav">
        </div>
        <div className="row" id="adminDisplay">
          { this.state.admin ? adminSecurity : '' }
        </div>
        <div className="row" id="adminFooter">
        </div>
      </div>
    )
  }
})

module.exports = Admin;
