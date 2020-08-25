import React from "react";
import { Switch, Route, withRouter} from 'react-router-dom';
import Login from './LoginComponent';
import EmpDetail from './DetailComponent';
import Signup from './SignupComponent'
import EmpsDetail from "./EmpdetailComponent";
import { fetchDetails } from "../redux/ActionCreators";
import {connect} from 'react-redux';


const mapStateToProps = state => {
  return{
    details: state.details
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDetails: () => {dispatch(fetchDetails())}
})

class Main extends React.Component {
  
  componentDidMount() {
    this.props.fetchDetails();
  }

  render() {

    const DetailWithId = () => {
      return (
        <EmpsDetail detail={this.props.details.details}/>

      )
    }

    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/detail/" component={EmpDetail}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/empdetail/:id" component={DetailWithId}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));