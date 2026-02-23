const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    category: {
        type: String,
        required: [true, 'Please add a category']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    spotsAvailable: {
        type: Number,
        required: [true, 'Please specify spots available'],
        default: 1
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
