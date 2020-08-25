import React from "react";
import { Link } from "react-router-dom";



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }
  }

  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if(username === 'abc' && password === '123') {
        this.props.history.push("/detail/");
    }
  }

  render() {
    return (
      <div>
          <h3>
              Login
          </h3>
          <form method ="post" onSubmit={this.login.bind(this)}>
              Username <input type='text' name ="username"/>
              <br/>
              Password <input type='password' name ="password"/>
              <br/>
              <input type="submit" value="Login"/>
               <button><Link to="Signup">Signup</Link></button>
            </form>
      </div>
    );
  }
}