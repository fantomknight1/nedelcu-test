const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToCeilings = React.createClass({

  handleCeilings : function( event ){
    event.preventDefault();
    this.props.ToCeilings();
    hashHistory.push('/projects/interior/ceilings')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerCeilingsButton">
          <Link to="ceilings"><button className="intProjButton" id="ceilingsButton" onClick={ this.handleCeilings }>Ceilings</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToCeilings;
