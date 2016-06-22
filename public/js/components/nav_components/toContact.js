const React = require( 'react' );

const ToContact = React.createClass({

  handleContact : function( event ){
    event.preventDefault();
    this.props.ToContact();
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerContactButton">
          <button className="navButton" id="contactButton" onClick={ this.handleContact }>Contact</button>
        </div>
      </li>
    )
  }
})

module.exports = ToContact;
