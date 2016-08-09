const React = require( 'react' );

const Signup = React.createClass({

  handleSignup : function( event ) {
    event.preventDefault()

    const name = this.refs.name.value
    const email = this.refs.email.value
    const pass = this.refs.pass.value

    $.post('/users', { email: email, password: pass, username: name } )
    .done( ( data ) => {
      this.props.signedIn();
    })
  },

  render : function() {
    return (
      <form onSubmit={this.handleSignup}>
        <div className="searchContainers">
          <div className="searchCenter">
            <h3>Admin Signup</h3>
            <input id="signupName" type="text" ref="name" placeholder="username"/>
            <input id="signupEmail" type="text" ref="email" placeholder="email"/>
            <input id="signupPassword" type="password" ref="pass" placeholder="password" /><br />
            <button type="submit">signup</button>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = Signup;
