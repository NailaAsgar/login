import React from "react";


export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        firstname:"",
        lastname:"",
        email:"",
        username: '',
        password: '',
    }
  }

  login(e) {
    e.preventDefault();
        this.props.history.push("/");
  }

  render() {
    return (
      <div>
          <h3>
              Register Here
          </h3>
          <form method ="post" onSubmit={this.login.bind(this)}>
              Firstname <input type='text' name ="firstname"/>
              <br/>
              Lastname <input type='text' name ="lastname"/>
              <br/>
              Email <input type='email' name ="email"/>
              <br/>
              Username <input type='text' name ="username"/>
              <br/>
              Password <input type='password' name ="password"/>
              <br/>
              <input type="submit" value="Signup"/>
          </form>
          
      </div>
    );
  }
}