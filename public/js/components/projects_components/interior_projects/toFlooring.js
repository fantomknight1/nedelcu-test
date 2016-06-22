const React = require( 'react' );

const ToFlooring = React.createClass({

  handleFlooring : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerFlooringButton">
          <button className="intProjButton" id="flooringButton" onClick={ this.handleFlooring }>Flooring</button>
        </div>
      </li>
    )
  }
})

module.exports = ToFlooring;
