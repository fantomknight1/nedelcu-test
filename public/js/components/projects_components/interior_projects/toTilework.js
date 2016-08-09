const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToTilework = React.createClass({

  handleTilework : function( event ){
    event.preventDefault();
    this.props.ToTilework();
    hashHistory.push('/projects/interior/tilework')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerTileworkButton">
          <Link to="tilework"><button className="intProjButton" id="tileworkButton" onClick={ this.handleTilework }>Tilework</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToTilework;
