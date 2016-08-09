const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToContact = React.createClass({

  handleContact : function( event ){
    event.preventDefault();
    this.props.ToContact();
    hashHistory.push('/contact');
  },

  render : function() {
    return (
      <li>
        <div className="outerNavButton" id="outerContactButton">
          <Link to="contact"><button className="navButton" id="contactButton" onClick={ this.handleContact }>Contact</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToContact;
