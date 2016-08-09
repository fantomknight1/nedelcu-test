const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToFireplaces = React.createClass({

  handleFireplaces : function( event ){
    event.preventDefault();
    this.props.ToFireplaces();
    hashHistory.push('/projects/interior/fireplaces');
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerFireplacesButton">
          <Link to="fireplaces"><button className="intProjButton" id="fireplacesButton" onClick={ this.handleFireplaces }>Fireplaces</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToFireplaces;
