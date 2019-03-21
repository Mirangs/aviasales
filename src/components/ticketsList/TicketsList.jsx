import React from 'react';
import PropTypes from 'prop-types';

import Ticket from '../ticket/Ticket';

const TicketsList = ({ tickets }) => {
  return (
    <ul className="tickets-list">
      {
        tickets.map(ticket => (
          <Ticket />
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
