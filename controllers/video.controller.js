const Video = require('../models/video');

const getallVideos = (req, res) => {
    // const { episodeId } = req.query;
    // return Video.find({ episodeId }, (err, videos) => {
    return Video.find({  }, (err, videos) => {
        return res.send({ err, videos })
    })
};

const videos = [
    { "src" : "videoplayback.mp4", "episodeId" : "64a408db88e3903de11a05d1" },
    { "src" : "funny.mp4", "episodeId" : "64a408db88e3903de11a05d2" },
    { "src" : "videoplayback.mp4", "episodeId" : "64a408db88e3903de11a05d3" },
    { "src" : "funny.mp4", "episodeId" : "64a408db88e3903de11a05d4" }
]

const storeVideos = () => {
    Video.insertMany(videos).then((d) => console.log(d))
}

// storeVideos()

module.exports = { getallVideos }