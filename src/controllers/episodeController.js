const Episode = require('../models/episode');

module.exports = {
    create: async (req, res) => {
        try {
            const episode = await Episode.create(req.body);
            return res.send({episode});
        }catch (err) {
            return res.status(400).send({error: 'Registration failed'}, err)
        }
    },

    delete: async (req, res) => {
        try{
            const slug = req.params.slug;
            await Episode.findOneAndRemove({
                id : slug
            });
            return res.send({ message: slug + " Successfully removed" });
        }catch(err){
            return res.status(500).send({ message:  slug + "Couldn't be removed" });
        }
    },

    findOne: async (req, res) => {
        try{
            const slug = req.params.slug;
            const episode = await Episode.findOne({
                id : slug
            });
            return res.send(episode);
        }catch(err){
            return res.status(500).send({ message:  slug + "Couldn't be found" });
        }
    },

    findAll: async (req, res)=>{
        try {
            const episodeList = await Episode.find()
                .sort({'published_at': -1})
                .limit(12);

            return res.send(episodeList);
        } catch (err) {
            console.error(err);
            return res.status(500).send({message: "Couldn't get training sheet list"});
        } 
    }
}