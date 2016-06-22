const React = require( 'react' );

const ToKitchens = React.createClass({

  handleKitchens : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerKitchensButton">
          <button className="intProjButton" id="kitchensButton" onClick={ this.handleKitchens }>Kitchens</button>
        </div>
      </li>
    )
  }
})

module.exports = ToKitchens;
