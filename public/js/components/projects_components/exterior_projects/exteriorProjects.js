const React                         = require( 'react' );
const ToDecksPatiosWalkways         = require( './toDecksPatiosWalkways.js' );
const ToExteriorPainting            = require( './toExteriorPainting.js' );
const ToWindowsDoors                = require( './toWindowsDoors.js' );
const ExteriorProjects              = React.createClass({

  ToDecksPatiosWalkways : function() {
    this.props.decksPatiosWalkways();
  },

  ToExteriorPainting : function(){
    this.props.exteriorPainting();
  },
  ToWindowsDoors : function() {
    this.props.windowsDoors();
  },

  render : function() {
    return(
      <div className="exteriorProjectsContainer">
        <ul className="allUL" id="extProjUl">
          <div className="projectLinks extProjLinks" id="extProjectsDecksPatiosWalkways"><ToDecksPatiosWalkways ToDecksPatiosWalkways={ this.ToDecksPatiosWalkways }/></div>
          <div className="projectLinks extProjLinks" id="extProjectsExteriorPainting"><ToExteriorPainting ToExteriorPainting={ this.ToExteriorPainting }/></div>
          <div className="projectLinks extProjLinks" id="extProjectsWindowsDoors"><ToWindowsDoors ToWindowsDoors={ this.ToWindowsDoors }/></div>
        </ul>
      </div>
    )
  }
})

module.exports = ExteriorProjects;
