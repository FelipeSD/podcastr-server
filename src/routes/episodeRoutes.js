module.exports = (app) => {
    const episode = require('../controllers/episodeController');
    
    var router = require("express").Router();

    router.get('/', episode.findAll);
    router.get('/:slug', episode.findOne);
    router.post('/', episode.create);
    router.delete('/:slug', episode.delete);

    app.use("/episodes", router);
}