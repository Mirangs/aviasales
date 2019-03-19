import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types'

const BASE_URL = 'http://localhost:3000/tickets';

class App extends Component {
  state = {
    tickets: []
  };

  getData = async () => {
    const api_call = await fetch(BASE_URL);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      tickets: data
    });
  }

  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="app__logo">
            <img src={window.location.origin + '/img/Logo.png'} alt="page logo"/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
