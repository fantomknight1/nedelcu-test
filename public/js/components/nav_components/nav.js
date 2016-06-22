const React                       = require( 'react' );

const ToHome                      = require( './toHome.js' );
const ToAbout                     = require( './toAbout.js' );
const ToProjects                  = require( './toProjects.js' );
const ToContact                   = require( './toContact.js' );

const Nav = React.createClass({

  ToHome : function() {
    this.props.home();
  },

  ToAbout : function() {
    this.props.about();
  },

  ToProjects : function() {
    this.props.projects();
  },

  ToContact : function() {
    this.props.contact();
  },

  render : function() {
    return(
      <div className="navContainer">
        <div className="upperNav">
          <ul className="allUl" id="navUl">
            <div className="navLinks" id="navHome"><ToHome ToHome={ this.ToHome }/></div>
            <div className="navLinks" id="navProjects"><ToProjects ToProjects={ this.ToProjects }/></div>
            <div className="navLinks" id="navAbout"><ToAbout ToAbout={ this.ToAbout }/></div>
            <div className="navLinks" id="navAbout"><ToContact ToContact={ this.ToContact }/></div>
          </ul>
        </div>

        <div className="middleNav">
          <div className="allImage" id="navNedelcuLogo">
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
