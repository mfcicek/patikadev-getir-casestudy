const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema(
    {
        key: {
            type: String,
            required: true,
            trim: true,
        },
        value: {
            type: String,
            required: true,
            trim: true,
        },
        counts: [
            {
                type: Number,
            },
        ],
        createdAt: {
            type: Date,
            required: true,
        },
    },

);

/**
 * @typedef Record
 */
const Record = mongoose.model('Record', recordSchema);

module.exports = Record;

