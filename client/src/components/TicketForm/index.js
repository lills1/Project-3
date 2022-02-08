import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../utils/mutations';
import { QUERY_TICKETS } from '../../utils/queries';

import Auth from '../../utils/auth';

const TicketForm = () => {
  const [formState, setFormState] = useState({
    ticketText: '',
    ticketTeam: '',
    ticketPhone: '',
    ticketName: '',
    ticketDepartment: '',
    ticketEmail: ''
  })

  const [addTicket, { error }] = useMutation(ADD_TICKET, {
    update(cache, { data: { addTicket } }) {
      try {
        const { tickets } = cache.readQuery({ query: QUERY_TICKETS });

        cache.writeQuery({
          query: QUERY_TICKETS,
          data: { tickets: [addTicket, ...tickets] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTicket({
        variables: { ...formState },
      });

      setFormState({
        ticketText: '',
        ticketTeam: '',
        ticketPhone: '',
        ticketName: '',
        ticketDepartment: '',
        ticketEmail: ''
      })
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'ticketText') {
      setFormState({ ...formState, [name]: value })
    } else if (name === 'ticketTeam') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'ticketDepartment') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'ticketEmail') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'ticketName') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'ticketPhone') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3 className="createTicket">Create a ticket</h3>

      {Auth.loggedIn() ? (
        <>

          <form
            className="align-items-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col">
              <textarea
                name="ticketName"
                placeholder="What is your name?"
                value={formState.ticketName}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="ticketDepartment"
                placeholder="What is your department?"
                value={formState.ticketDepartment}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="ticketTeam"
                placeholder="What is your team?"
                value={formState.ticketTeam}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="ticketText"
                placeholder="Please describe your issue"
                value={formState.ticketText}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="ticketPhone"
                placeholder="What is your contact number?"
                value={formState.ticketPhone}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="ticketEmail"
                placeholder="What is your contact email?"
                value={formState.ticketEmail}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="submit-align">
              <button className="btn btn-primary py-3" type="submit">
                Add Ticket
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your tickets. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TicketForm;
