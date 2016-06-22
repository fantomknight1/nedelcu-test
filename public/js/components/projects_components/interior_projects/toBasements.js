const React = require( 'react' );

const ToBasements = React.createClass({

  handleBasements : function( event ){
    event.preventDefault();
    this.props.ToBasements();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerBasementsButton">
          <button className="intProjButton" id="basementsButton" onClick={ this.handleBasements }>Basements</button>
        </div>
      </li>
    )
  }
})

module.exports = ToBasements;
