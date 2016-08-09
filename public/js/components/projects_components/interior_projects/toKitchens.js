const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToKitchens = React.createClass({

  handleKitchens : function( event ){
    event.preventDefault();
    this.props.ToKitchens();
    hashHistory.push('/projects/kitchens')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerKitchensButton">
          <Link to="kitchens"><button className="intProjButton" id="kitchensButton" onClick={ this.handleKitchens }>Kitchens</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToKitchens;
