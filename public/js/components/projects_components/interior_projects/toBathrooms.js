const React = require( 'react' );

const ToBathrooms = React.createClass({

  handleBathrooms : function( event ){
    event.preventDefault();
    this.props.ToBathrooms();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerBathroomsButton">
          <button className="intProjButton" id="bathroomsButton" onClick={ this.handleBathrooms }>Bathrooms</button>
        </div>
      </li>
    )
  }
})

module.exports = ToBathrooms;
