'use strict'

const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const browserHistory  = ReactRouter.browserHistory;

const Nav             = require( './components/nav_components/nav.js' );
const Home            = require( './components/home.js' );
const Projects        = require( './components/projects_components/projects.js' );
const About           = require( './components/about.js' );
const Contact         = require( './components/contact.js' );

const Footer          = require( './components/footer_components/footer.js' );

const App = React.createClass({

  getInitialState : function() {
    return {
      home : true,
      about : false,
      projects : false,
      contact : false
    }
  },

  home : function() {
    this.state.home = true;
    this.state.projects = false;
    this.state.about = false;
    this.state.contact = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact })
  },

  projects : function() {
    this.state.home = false;
    this.state.projects = true;
    this.state.about = false;
    this.state.contact = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact })
  },

  about : function() {
    this.state.home = false;
    this.state.projects = false;
    this.state.about = true;
    this.state.contact = false;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact })
  },

  contact : function() {
    this.state.home = false;
    this.state.projects = false;
    this.state.about = false;
    this.state.contact = true;
    this.setState( { home : this.state.home, projects : this.state.projects, about : this.state.about, contact : this.state.contact })
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
          </div>
        </div>
        <div className="row" id="footerBar">
          <Footer />
        </div>
      </div>
    )
  }
});


const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App } >
      <Route path="home" component={ Home }> </Route>
      <Route path="about" component={ About }> </Route>
    </Route>
  </Router>
)

ReactDOM.render( routes, document.querySelector( '#container' ) )
