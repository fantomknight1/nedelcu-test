const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToInteriorPainting = React.createClass({

  handleInteriorPainting : function( event ){
    event.preventDefault();
    this.props.ToInteriorPainting();
    hashHistory.push('/projects/interior/interior_painting')
  },

  render : function(){
    return(
      <li>
        <div className="outerIntProjButton" id="outerInteriorPaintingButton">
          <Link to="interior_painting"><button className="intProjButton" id="interiorPaintingButton" onClick={ this.handleInteriorPainting }>Interior Painting</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToInteriorPainting;
