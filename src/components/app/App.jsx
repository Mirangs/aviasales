import React, { Component } from 'react';
import './App.scss';

import Sidebar from '../sidebar/Sidebar';
import TicketsList from '../ticketsList/TicketsList';

const BASE_URL = 'http://localhost:3000/tickets';
let initialTickets;

class App extends Component {
  state = {
    tickets: [],
    filter: {
      currency: 'RUB',
      stops: {
        'all': false,
        '0': true,
        '1': true,
        '2': true,
        '3': false
      }
    }
  };

  getData = async () => {
    const api_call = await fetch(BASE_URL);
    const data = await api_call.json();
    this.setState({
      tickets: data
    });
    initialTickets = data;
  }

  filterTickets = () => {
    const tickets = initialTickets;
    const { stops } = this.state.filter;

    let newTickets = [];

    for (let i in stops) {
      if (i === 'all' && stops[i]) {
        this.setState({
          tickets: initialTickets
        });
        return;
      } else {
        if (stops[i]) {
          const filter = tickets.filter(ticket => ticket.stops === +i);
          newTickets.push(...filter);
        }
      }
    }

    this.setState({
      tickets: newTickets
    });
  }

  onButtonClick = (evt) => {
    evt.preventDefault();
    const text = evt.target.textContent;

    this.setState(prevState => ({
      filter: {
        currency: text,
        stops: prevState.filter.stops,
      }
    }));
  }

  onCheckboxChange = async evt => {
    const { checked, name } = evt.target;

    await this.setState(prevState => ({
      filter: {
        currency: prevState.filter.currency,
        stops: Object.assign({}, this.state.filter.stops, { [name]: checked }),
      },
    }));

    await this.filterTickets();
  }

  async componentDidMount() {
    await this.getData();
    await this.filterTickets();
  }
  
  render() {
    const { tickets, filter } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          <div className="app__logo">
            <img src={window.location.origin + '/img/Logo.png'} alt="page logo"/>
          </div>
        </header>

        <Sidebar filter={filter} onButtonClick={this.onButtonClick} onCheckboxChange={this.onCheckboxChange}/>

        <main className="page-content">
          <TicketsList tickets={tickets}/>
        </main>
      </div>
    );
  }
}

export default App;
