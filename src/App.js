import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      token: '',
      settings: []
    }
  }

  render() {

    return (
      <div>
        <table className="WHatever">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }

  componentWillMount() {
    fetch('http://localhost:44881/misc/authenticate', authPayload)
    .then(function(res) {
      return res.json();
     })
    .then(data => {
      let token = data.token;
      this.setState({token: token});

      var gpPayload = {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.state.token
        }
      }
      
      fetch('http://localhost:44881/settings/1', gpPayload)
    .then(function(res) {
      return res.json();
     })
    .then(data => {
      let settings = data.results.map;
      this.setState({settings: settings});
     })
    })
  }
}



var authPayload = {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: '{"username":"chrisbirth@gmail.com","password":"testing12345"}'
}

export default App;
