const React = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToBathrooms = React.createClass({

  handleBathrooms : function( event ){
    event.preventDefault();
    this.props.ToBathrooms();
    hashHistory.push('/projects/bathrooms')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerBathroomsButton">
          <Link to="bathrooms"><button className="intProjButton" id="bathroomsButton" onClick={ this.handleBathrooms }>Bathrooms</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToBathrooms;
