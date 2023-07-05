const Clip = require('../models/clip');

const getAllClips = (req, res) => {
    const { videoId } = req.query;
    return Clip.find({ videoId }, (err, clips) => {
        return res.send({ err, clips })
    })
};

const clips = [
    { "timestamp" : "1,4", "labelId" : "64a412e576f0aee02f5d7914", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "5,7", "labelId" : "64a412e576f0aee02f5d7914", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "31,34", "labelId" : "64a412e576f0aee02f5d7914", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "35,37", "labelId" : "64a412e576f0aee02f5d7914", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "3,3", "labelId" : "64a412e576f0aee02f5d7915", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "7,8", "labelId" : "64a412e576f0aee02f5d7915", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "12,18", "labelId" : "64a412e576f0aee02f5d7916", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "15,16", "labelId" : "64a412e576f0aee02f5d7916", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "24,26", "labelId" : "64a412e576f0aee02f5d7916", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "11,12", "labelId" : "64a412e576f0aee02f5d7917", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "18,26", "labelId" : "64a412e576f0aee02f5d7917", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "1,2", "labelId" : "64a412e576f0aee02f5d7919", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "5,6", "labelId" : "64a412e576f0aee02f5d7919", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "21,23", "labelId" : "64a412e576f0aee02f5d7918", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "25,27", "labelId" : "64a412e576f0aee02f5d7918", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "1,2", "labelId" : "64a412e576f0aee02f5d791a", videoId : "64a40c86f6a419a2eb3633e5" },
    { "timestamp" : "5,6", "labelId" : "64a412e576f0aee02f5d791a", videoId : "64a40c86f6a419a2eb3633e5" },
];

const storeClips = () => {
    Clip.insertMany(clips).then((d) => console.log(d))
}

// storeClips()

module.exports = { getAllClips }