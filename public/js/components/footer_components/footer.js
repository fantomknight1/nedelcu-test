const React = require( 'react' );

const Footer = React.createClass({

  render : function() {
    return (
      <div className="footerContainers">
        <div className="footerLeft">
          Silviu Nedelcu Painting & Remodeling
        </div>
        <div className="footerMiddle">
            |  Princeton, NJ
        </div>
        <div className="footerRight">
            |  609-454-5909  |  simnedelcu@yahoo.com
        </div>
      </div>
    )
  }
})

module.exports = Footer;
