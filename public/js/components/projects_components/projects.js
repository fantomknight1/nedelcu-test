const React = require( 'react' );
const InteriorProjects = require( './interior_projects/interiorProjects.js' );
const ExteriorProjects = require( './exterior_projects/exteriorProjects.js' );

const Projects = React.createClass( {

  getInitialState : function() {
    return {
      InteriorProjects : true,
      ExteriorProjects : true
    }
  },

  exteriorProjects : function() {
    this.state.exteriorProjects = true;
    this.setState( { exteriorProjects : this.state.exteriorProjects } )
  },

  interiorProjects : function() {
    this.state.interiorProjects = true;
    this.setState( { interiorProjects : this.state.interiorProjects } )
  },

  render : function() {

    let interiorProjectsPage =
      <div>
        <InteriorProjects />
      </div>

    let exteriorProjectsPage =
      <div>
        <ExteriorProjects />
      </div>

    return (
      <div className="projectsContainer">
        <div className="upperProjects">
          <h1>Projects</h1>
        </div>
        <div className="middleProjects">
          <div className="leftSide" id="projectsMenu">
            { interiorProjectsPage }
            { exteriorProjectsPage }
          </div>
          <div className="rightSide" id="projectsDisplay">

          </div>
        </div>
        <div className="lowerProjects"></div>
      </div>
    )
  }
})

module.exports = Projects;
