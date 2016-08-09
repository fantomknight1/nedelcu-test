const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToDecksPatiosWalkways = React.createClass({

  handleDecksPatiosWalkways : function( event ){
    event.preventDefault();
    this.props.ToDecksPatiosWalkways();
    hashHistory.push('/projects/interior/decks_patios_walkways')
  },

  render : function(){
    return(
      <li>
        <div className="outerExtProjButton" id="outerDecksPatiosWalkwaysButton">
          <Link to="decks_patios_walkways"><button className="extProjButton" id="decksPatiosWalkwaysButton" onClick={ this.handleDecksPatiosWalkways }>Decks Patios & Walkways</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToDecksPatiosWalkways;
