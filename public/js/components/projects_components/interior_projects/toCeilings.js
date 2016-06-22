const React = require( 'react' );

const ToCeilings = React.createClass({

  handleCeilings : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerCeilingsButton">
          <button className="intProjButton" id="ceilingsButton" onClick={ this.handleCeilings }>Ceilings</button>
        </div>
      </li>
    )
  }
})

module.exports = ToCeilings;
