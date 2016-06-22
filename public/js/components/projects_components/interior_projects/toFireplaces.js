const React = require( 'react' );

const ToFireplaces = React.createClass({

  handleFireplaces : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerFireplacesButton">
          <button className="intProjButton" id="fireplacesButton" onClick={ this.handleFireplaces }>Fireplaces</button>
        </div>
      </li>
    )
  }
})

module.exports = ToFireplaces;
