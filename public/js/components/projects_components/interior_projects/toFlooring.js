const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToFlooring = React.createClass({

  handleFlooring : function( event ){
    event.preventDefault();
    this.props.ToFlooring();
    hashHistory.push('/projects/interior/flooring')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerFlooringButton">
          <Link to="flooring"><button className="intProjButton" id="flooringButton" onClick={ this.handleFlooring }>Flooring</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToFlooring;
