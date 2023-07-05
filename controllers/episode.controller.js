const Episode = require('../models/episode');

const getEpisodes = (req, res) => {
    const { productId } = req.query;
    return Episode.find({ productId }, (err, episodes) => {
        return res.send({ err, episodes })
    })
};

const episodes = [
    { "name" : "srf", "episode" : 1, productId : "64a4078c88f7e2d49917c413" },
    { "name" : "srf", "episode" : 2, productId : "64a4078c88f7e2d49917c413" },
    { "name" : "dgsd", "episode" : 1, productId : "64a4078c88f7e2d49917c414" },
    { "name" : "dgsd", "episode" : 2, productId : "64a4078c88f7e2d49917c414" }
]

const getAllEpisodes = (req, res) => {
    return Episode.find({}, (err, episodes) => {
        return res.send({ err, episodes })
    })
}

const storeEpisodes = () => {
    Episode.insertMany(episodes).then((d) => console.log(d))
}

// storeEpisodes()

module.exports = { getEpisodes, getAllEpisodes }