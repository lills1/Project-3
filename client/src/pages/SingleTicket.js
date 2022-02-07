import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { REMOVE_TICKET } from '../utils/mutations'
import { QUERY_SINGLE_TICKET } from '../utils/queries';

const SingleTicket = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { ticketId } = useParams();
  const [removeTicket, { error }] = useMutation(REMOVE_TICKET)
  const { loading, data } = useQuery(QUERY_SINGLE_TICKET, {
    // pass URL parameter
    variables: { ticketId: ticketId },
  });
  const handleDelete = async () => {
    await removeTicket({
      variables: {
        ticketId
      }
    })
    window.location.replace("/me")
  }
  const ticket = data?.ticket || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0 login-text">
        {ticket.ticketAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          Created this ticket on {ticket.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
        >
          Status: {ticket.ticketStatus}
        </blockquote>
      </div>
      <div>
        <div className="bg-light py-4">
          <blockquote
          >
            {ticket.ticketName} User's issue: {ticket.ticketText}
          </blockquote>
        </div>

        <div className="bg-light py-4">
          <blockquote

          >
            User's department: {ticket.ticketDepartment}
          </blockquote>
        </div>

        <div className="bg-light py-4">
          <blockquote
          >
            User's Team: {ticket.ticketTeam}
          </blockquote>
        </div>

        <div className="bg-light py-4">
          <blockquote
          >
            User's contact number: {ticket.ticketPhone}
          </blockquote>
        </div>

        <div className="bg-light py-4">
          <blockquote
          >
            User's email: {ticket.ticketEmail}
          </blockquote>
        </div>
        <button onClick={handleDelete} type="button" className="btn btn-danger">Delete ticket</button>
      </div>
      <div className="my-5">
        <CommentList comments={ticket.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm ticketId={ticket._id} />
      </div>
    </div>
  );
};

export default SingleTicket;
