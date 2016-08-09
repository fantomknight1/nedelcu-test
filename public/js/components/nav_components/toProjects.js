const React           = require( 'react' )
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToProjects = React.createClass({

  handleProjects : function( event ){
    event.preventDefault();
    this.props.ToProjects();
    hashHistory.push('/projects');
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerProjectsButton">
          
          <Link to="projects"><button className="navButton" id="projectsButton" onClick={ this.handleProjects } >Projects</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToProjects;
