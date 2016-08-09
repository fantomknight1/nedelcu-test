'use strict'

const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const hashHistory  = ReactRouter.hashHistory;

const auth            = require( './auth.js' )
const Nav             = require( './components/nav_components/nav.js' );
const Home            = require( './components/home.js' );
const Projects        = require( './components/projects_components/projects.js' );
const About           = require( './components/about.js' );
const Contact         = require( './components/contact.js' );
const Admin           = require( './components/admin.js' );
const Login           = require( './components/login.js');
const Signup          = require( './components/signup.js' );
const notFound        = require( './notFound.js' );

const Footer          = require( './components/footer_components/footer.js' );

const App = React.createClass({

  getInitialState : function() {
    return {
      home : true,
      about : false,
      projects : false,
      contact : false,
      admin : false,
      signupBox : false,
      loggedIn : false
    }
  },

  home : function() {
    this.state.home = true;
    this.state.projects = false;
    this.state.about = false;
    this.state.contact = false;
    this.state.admin = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact, admin : this.state.admin })
  },

  projects : function() {
    this.state.home = false;
    this.state.projects = true;
    this.state.about = false;
    this.state.contact = false;
    this.state.admin = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact, admin : this.state.admin })
  },

  about : function() {
    this.state.home = false;
    this.state.projects = false;
    this.state.about = true;
    this.state.contact = false;
    this.state.admin = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact, admin : this.state.admin })
  },

  contact : function() {
    this.state.home = false;
    this.state.projects = false;
    this.state.about = false;
    this.state.contact = true;
    this.state.admin = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact, admin : this.state.admin })
  },

  admin : function() {
    this.state.home = false;
    this.state.projects = false;
    this.state.about = false;
    this.state.contact = false;
    this.state.admin = true;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact, admin : this.state.admin })
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

    let homePage =
      <div>
        <Home />
      </div>

    let projectsPage =
      <div>
        <Projects />
      </div>

    let aboutPage =
      <div>
        <About />
      </div>

    let contactPage =
      <div>
        <Contact />
      </div>

    let adminPage =
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

    return (
      <div className="container" id="allBody">
        <div className="row" id="navbar">
        <br/>
            <Nav home={ this.home } projects={ this.projects } about={ this.about } contact={ this.contact } />
        </div>
        <div className="row" id="mainBody">
          <div>
            <br/>
            { this.state.home ? homePage : '' }

            { this.state.projects ? projectsPage : '' }

            { this.state.about ? aboutPage : '' }

            { this.state.contact ? contactPage : '' }

            { this.state.admin ? adminPage : '' }
          </div>
        </div>
        <div className="row" id="footerBar">
          <Footer admin={ this.admin }/>
        </div>
      </div>
    )
  }
});

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="home" component={ Home } />
      <Route path="projects" component={ Projects } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
      <Route path="admin" component= {Admin}/>
      <Route path="admin/signup" component={ Signup } />
      <Route path="admin/login" component={ Login } />
      <Route path="*" component={ notFound } />
    </Route>
  </Router>
)

ReactDOM.render( routes, document.querySelector( '#container' ) )
