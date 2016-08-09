const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToAbout = React.createClass({

  handleAbout : function( event ){
    event.preventDefault();
    this.props.ToAbout();
    hashHistory.push('/about');
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerAboutButton">
          <Link to="about"><button className="navButton" id="aboutButton" onClick={ this.handleAbout }>About</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToAbout;
