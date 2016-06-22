const React = require( 'react' );

const ToInteriorPainting = React.createClass({

  handleInteriorPainting : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerInteriorPaintingButton">
          <button className="intProjButton" id="interiorPaintingButton" onClick={ this.handleInteriorPainting }>Interior Painting</button>
        </div>
      </li>
    )
  }
})

module.exports = ToInteriorPainting;
