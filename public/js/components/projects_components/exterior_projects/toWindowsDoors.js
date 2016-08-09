const React           = require( 'react' );
const ReactRouter     = require( 'react-router' );
const hashHistory     = ReactRouter.hashHistory;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;

const ToWindowsDoors = React.createClass({

  handleWindowsDoors : function( event ){
    event.preventDefault();
    this.props.ToWindowsDoors();
    hashHistory.push('/projects/interior/windows_doors')
  },

  render : function(){
    return(
      <li>
        <div className="outerExtProjButton" id="outerWindowsDoors">
          <Link to="windows_doors"><button className="extProjButton" id="windowsDoorsButton" onClick={ this.handleWindowsDoors }>Windows & Doors</button></Link>
        </div>
      </li>
    )
  }
})

module.exports = ToWindowsDoors;
