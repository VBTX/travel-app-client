import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Login from "./components/LoginForm"
import Logout from "./components/Logout"
import SignUp from "./components/SignUp"
import MyTrips from "./components/MyTrips"
import MainContainer from "./components/MainContainer.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"



class App extends Component {

  componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
    const {loggedIn} = this.props
  return (
    <div className="App">
      <header className="App-header">

        <img className="App-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-jfLkw_rvE_ji-ijtGCS59tkbOAHHqlO-o-rNuiSYtMCdui" alt='earth'/><br/>
   
     <Router>
     <Route exact path="/" render={()=> loggedIn ? <MyTrips /> : <Home />}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/my-trips" component={MyTrips}/>
          <Route exact path="/signup" component={SignUp}/>
          
      </Router>
      { loggedIn ? <Logout/> : null}
      </header>

    </div>
  );
}
}


const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, { getCurrentUser })(App)


 // fetch("http://localhost:3001/api/v1/users/1")
    // .then(res => res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api/v1/users/1'))
    // .then(r=>r.json())
    // .then(res => res.text()) 
    // .then(console.log)