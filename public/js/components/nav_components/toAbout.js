const React = require( 'react' );

const ToAbout = React.createClass({

  handleAbout : function( event ){
    event.preventDefault();
    this.props.ToAbout();
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerAboutButton">
          <button className="navButton" id="aboutButton" onClick={ this.handleAbout }>About</button>
        </div>
      </li>
    )
  }
})

module.exports = ToAbout;
