import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Nav from "./components/Nav"
import Login from "./components/LoginForm"
import Logout from "./components/Logout"
import SignUp from "./components/SignUp"
import MyTrips from "./components/MyTrips"
import MainContainer from "./components/MainContainer.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {

  componentDidMount(){
      this.props.getCurrentUser()
   
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello dear people!</h1>

        <img className="App-logo" src="https://static.tvtropes.org/pmwiki/pub/images/azula1.jpg" alt="smirk" /><br/>
     <Nav />
     <Router>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/my-trips" component={MyTrips}/>
          <Route exact path="/signup" component={SignUp}/>
          
      </Router>
      </header>

    </div>
  );
}
}


export default connect(null, { getCurrentUser })(App)


 // fetch("http://localhost:3001/api/v1/users/1")
    // .then(res => res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/api/v1/users/1'))
    // .then(r=>r.json())
    // .then(res => res.text()) 
    // .then(console.log)