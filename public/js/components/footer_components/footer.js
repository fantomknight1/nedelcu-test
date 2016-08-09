const React = require( 'react' );

const ToAdmin = require( './toAdmin.js' );
const Logout = require( './logout.js' );
const Edit = require( './edit.js' );

const Footer = React.createClass({

  ToAdmin : function( username, password ) {
    this.props.admin();
    this.props.login( username, password )
  },

  render : function() {
    return (
      <div className="footerContainers">
        <div className="footerLeft">

        </div>
        <div className="footerMiddle">
          <ul className="allUl navUl" id="footerUl">
            <div className="footerInfo" id="footerName">Silviu Nedelcu Painting & Remodeling |</div>
            <div className="footerInfo" id="footerAddress">Princeton, NJ | </div>
            <div className="footerInfo" id="footerContact">  609-454-5909  |  simnedelcu@yahoo.com |</div>
            <div className="footerLink" id="footerToAdmin"><ToAdmin ToAdmin={ this.ToAdmin }/></div>
          </ul>
        </div>
        <div className="footerRight">
        </div>
      </div>
    )
  }
})

module.exports = Footer;
