const React = require( 'react' );

const ToHome = React.createClass({

  handleHome : function( event ){
    event.preventDefault();
    this.props.ToHome();
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerHomeButton">
          <button className="navButton" id="homeButton" onClick={ this.handleHome }>Home</button>
        </div>
      </li>
    )
  }
})

module.exports = ToHome;
