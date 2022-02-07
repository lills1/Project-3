const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ticketSchema = new Schema({
  ticketText: {
    type: String,
    required: 'You need to leave a ticket!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  ticketAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  ticketTeam: {
    type: String,
    required: true,
    trim: true,
  },
  ticketPhone: {
    type: String,
    required: true,
    trim: true,
  },
  ticketEmail: {
    type: String,
    required: true,
    trim: true,
  },
  ticketName: {
    type: String,
    required: true,
    trim: true,
  },
  ticketDepartment: {
    type: String,
    required: true,
    trim: true,
  },
  ticketStatus: {
    type: String,
    default: 'Open'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
