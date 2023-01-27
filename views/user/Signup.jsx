const React = require("react")

class Signup extends React.Component{
  render(){
    return(
      <div>
        <h1>Login</h1>
        <form action="/user/signup" method="POST">
        Name:<input value="" name="name"/>
          Password:<input value="" name="password"/>
<input type="submit" name="" value="Sign up"/>
        </form>
      </div>
    )
  }
}

module.exports = Signup