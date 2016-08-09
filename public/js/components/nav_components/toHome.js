const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToHome = React.createClass({

  handleHome : function( event ){
    event.preventDefault();
    this.props.ToHome();
    hashHistory.push('/');
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerHomeButton">
          <Link to="/"><button className="navButton" id="homeButton" onClick={ this.handleHome }>Home</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToHome;
