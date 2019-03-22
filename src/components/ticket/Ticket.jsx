import React from 'react';

import './Ticket.scss';

const dataOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short',
  timezone: 'UTC',
}

const Ticket = ({ price, departure_time, arrival_time, origin, origin_name, destination, destination_name, departure_date, arrival_date, stops}) => {
  return (
    <li className="ticket">
      <div className="col-left">
        <img src={window.location.origin + '/img/aviasales.png'} width="120" height="35" alt="Aviasales logo"/>
        <a className="ticket__link" href="#">Купить за {price} ​₽</a>
      </div>
      <div className="col-right">
        <div className="meta">
          <span className="meta__time">
            {departure_time}
          </span>
          <span className="meta__departure">
            {`${origin}, ${origin_name}`}
          </span>
          <span className="meta__date">
            {`${new Date(departure_date).toLocaleString('ru', dataOptions)}`}
          </span>
        </div>
        <div className="meta__stops">
          <span>{ stops === 0 ? 'Без пересадок' : stops === 1 ? `1 пересадка` : `${stops} пересадки` }</span>
        </div>
        <div className="meta">
        <span className="meta__time">
            {arrival_time}
          </span>
          <span className="meta__arrival">
            {`${destination_name}, ${destination}`}
          </span>
          <span className="meta__date">
            {`${new Date(arrival_date).toLocaleString('ru', dataOptions)}`}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Ticket;
