const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },      
    title: {
        type: String,
        require: true,
    },
    members: {
        type: String,
        require: true,
    },
    published_at: {
        type: String,
    },
    thumbnail: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    file: {
        url: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            require: true,
        }
    }
});

const Episode = mongoose.model('Episode', EpisodeSchema);

module.exports = Episode;