const React = require( 'react' )

const ToProjects = React.createClass({

  handleProjects : function( event ){
    event.preventDefault();
    this.props.ToProjects();
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerProjectsButton">
          <button className="navButton" id="projectsButton" onClick={ this.handleProjects }>Projects</button>
        </div>
      </li>
    )
  }
})

module.exports = ToProjects;
