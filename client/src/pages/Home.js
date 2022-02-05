import React from 'react';
import { useQuery } from '@apollo/client';

import TicketList from '../components/TicketList';
import TicketForm from '../components/TicketForm';

import { QUERY_TICKETS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TICKETS);
  const tickets = data?.tickets || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TicketForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TicketList
              tickets={tickets}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
