const React = require( 'react' );

const ToAdmin = React.createClass({

  handleAdmin : function( event ){
    event.preventDefault();
    this.props.ToAdmin();
  },

  render : function() {
    return (
      <li>
        <div className="outerFooterButton" id="outerAdminButton">
          <button className="footerButton" id="adminButton" onClick={ this.handleAdmin }>Admin</button>
        </div>
      </li>
    )
  }
})

module.exports = ToAdmin;
