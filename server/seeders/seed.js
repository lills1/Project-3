const db = require('../config/connection');
const { User, Ticket } = require('../models');
const userSeeds = require('./userSeeds.json');
const ticketSeeds = require('./ticketSeeds.json');

db.once('open', async () => {
  try {
    await Ticket.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < ticketSeeds.length; i++) {
      const { _id, ticketAuthor } = await Ticket.create(ticketSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: ticketAuthor },
        {
          $addToSet: {
            tickets: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
