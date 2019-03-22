import React from 'react';
import PropTypes from 'prop-types';

import Ticket from '../ticket/Ticket';

import './TicketsList.scss';

const TicketsList = ({ tickets }) => {

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
          .map((ticket, i) => (
            <Ticket
              key={i}
              { ...ticket }
            />
          ))
      }
    </ul>
  )
}

TicketsList.propTypes = {
  tickets: PropTypes.array,
}

TicketsList.defaultProps = {
  tickets: [],
}

export default TicketsList;
