const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToBasements = React.createClass({

  handleBasements : function( event ){
    event.preventDefault();
    this.props.ToBasements();
    hashHistory.push('/projects/interior/basements');
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerBasementsButton">
          <Link to="basements"><button className="intProjButton" id="basementsButton" onClick={ this.handleBasements }>Basements</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToBasements;
