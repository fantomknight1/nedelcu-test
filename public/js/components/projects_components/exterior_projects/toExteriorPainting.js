const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToExteriorPainting = React.createClass({

  handleExteriorPainting : function( event ){
    event.preventDefault();
    this.props.ToExteriorPainting();
    hashHistory.push('/projects/interior/exterior_painting')
  },

  render : function(){
    return(
      <li>
        <div className="outerExtProjButton" id="outerExteriorPainting">
          <Link to="exterior_painting"><button className="extProjButton" id="exteriorPaintingButton" onClick={ this.handleExteriorPainting }>Exterior Painting</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToExteriorPainting;
