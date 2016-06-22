const React = require( 'react' );

const ToTilework = React.createClass({

  handleTilework : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerTileworkButton">
          <button className="intProjButton" id="tileworkButton" onClick={ this.handleTilework }>Tilework</button>
        </div>
      </li>
    )
  }
})

module.exports = ToTilework;
