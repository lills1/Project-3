import React from 'react';
import { Link } from 'react-router-dom';

const TicketList = ({
  tickets,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {tickets &&
        tickets.map((ticket) => (
          <div key={ticket._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${ticket.ticketAuthor}`}
                >
                  {ticket.ticketAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {ticket.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {ticket.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{ticket.ticketText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/tickets/${ticket._id}`}
            >
              Join the discussion on this ticket.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TicketList;
