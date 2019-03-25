import React from 'react';
import PropTypes from 'prop-types';

import Ticket from '../ticket/Ticket';

import './TicketsList.scss';

const TicketsList = ({ tickets, currency }) => {

  const compare = (a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  return (
    <ul className="tickets-list">
      {
        tickets.sort(compare)
          .map((ticket, i) => {
            if (currency === 'EUR') {
              const newPrice = Math.round(ticket.price / 73);
              ticket = { ...ticket, price: newPrice }
            } else if (currency === 'USD') {
              const newPrice = Math.round(ticket.price / 64);
              ticket = { ...ticket, price: newPrice };
            }

            return  (
              <Ticket
                key={i}
                { ...ticket }
                currency={currency}
              />
            )
          }
          )
      }
    </ul>
  )
}

TicketsList.propTypes = {
  tickets: PropTypes.array,
  currencyRate: PropTypes.object,
}

TicketsList.defaultProps = {
  tickets: [],
  currencyRate: {},
}

export default TicketsList;
