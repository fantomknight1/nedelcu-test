const React                     = require( 'react' );
const ToBasements               = require( './toBasements.js' );
const ToBathrooms               = require( './toBathrooms.js' );
const ToCeilings                = require( './toCeilings.js' );
const ToFireplaces              = require( './toFireplaces.js' );
const ToFlooring                = require( './toFlooring' );
const ToInteriorPainting        = require( './toInteriorPainting.js' );
const ToKitchens                = require( './toKitchens.js' );
const ToTilework                = require( './toTileWork.js' );

const InteriorProjects          = React.createClass({

  ToBasements : function() {
    this.props.basements();
  },

  ToBathrooms : function() {
    this.props.bathrooms();
  },

  ToCeilings : function() {
    this.props.ceilings();
  },

  ToFireplaces : function() {
    this.props.fireplaces();
  },

  ToFlooring : function() {
    this.props.flooring();
  },

  ToInteriorPainting : function(){
    this.props.interiorPainting();
  },

  ToKitchens : function(){
    this.props.kitchens();
  },

  ToTilework : function(){
    this.props.tilework();
  },

  render : function() {
    return(
      <div className="interiorProjectsContainer">
        <ul className="allUl" id="intProjUl">
          <div className="projectLinks intProjLinks" id="intProjectsBasement"><ToBasements ToBasements={ this.ToBasements }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsBathrooms"><ToBathrooms ToBathrooms={ this.ToBathrooms }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsCeilings"><ToCeilings ToCeilings={ this.ToCeilings }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsFireplaces"><ToFireplaces ToFireplaces={ this.ToFireplaces }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsFlooring"><ToFlooring ToFlooring={ this.ToFlooring }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsInteriorPainting"><ToInteriorPainting ToInteriorPainting={ this.ToInteriorPainting }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsKitchens"><ToKitchens ToKitchens={ this.ToKitchens }/></div>
          <div className="projectLinks intProjLinks" id="intProjectsTilework"><ToTilework ToTilework={ this.ToTilework }/></div>
        </ul>
      </div>
    )
  }
})

module.exports = InteriorProjects;
