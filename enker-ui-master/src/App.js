import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Home from './pages/home/Home';
import Login from './pages/login/LoginContainer';
import Signup from './pages/signup/SignupContainer';
import Profile from './pages/profile/ProfileContainer';
import Search from './pages/search/SearchContainer';
import Network from './pages/network/NetworkContainer';
import {loginUser} from './redux/actions'
import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBarContainer';

class App extends Component {
  componentDidMount() {
    if(sessionStorage.getItem('email')){
      this.props.loginUser(sessionStorage.getItem('email'), sessionStorage.getItem('password'));
    }
  }
  render() {
    return (
      <Router>
        <NavigationBar {...this.props}  />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/search" component={Search} />
        <Route path="/network" component={Network} />
        <Route path="/profile" component={Profile} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  loginUser : (email,password) => dispatch(loginUser(email, password))
})

export default process.env.NODE_ENV === "development" ? 
  hot(connect(mapStateToProps, mapDispatchToProps)(App)) : 
  connect(mapStateToProps, mapDispatchToProps)(App);
