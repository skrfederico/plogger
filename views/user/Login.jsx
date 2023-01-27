const React = require("react")

class Login extends React.Component{
  render(){
    return(
      <div>
        <h1>Login</h1>
        <form action="/user/login" method="POST">
        Name: <input value="" name="name"/>
          Password: <input type="hidden" value="" name="password"/>
<input type="submit" name="" value="Log in"/>
        </form>
      </div>
    )
  }
}

module.exports = Login
