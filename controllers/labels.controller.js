const Label = require('../models/label');

const getLabelsByCategory = (req, res) => {
    const categoryList = req.body.categoryList || [];
    const categories = categoryList.map(c => c.trim());

    return Label.find({ category : { $in : categories } }, (err, labels) => {
        if( err ) {
            return res.send(err)
        }
        return res.send(labels)
    })
};

const labels = [
    
    { "label" : "building", "category" : "object", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "outdoor", "category" : "object", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "smile", "category" : "object", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "footwear", "category" : "object", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "glasses", "category" : "object", videoId : "64a40c86f6a419a2eb3633e5" },

    { "label" : "jump", "category" : "activity", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "clap", "category" : "activity", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "smiling", "category" : "activity", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "crying", "category" : "activity", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "push", "category" : "activity", videoId : "64a40c86f6a419a2eb3633e5" },

    { "label" : "happy", "category" : "emotion", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "sad", "category" : "emotion", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "smile", "category" : "emotion", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "cry", "category" : "emotion", videoId : "64a40c86f6a419a2eb3633e5" },
    { "label" : "peace", "category" : "emotion", videoId : "64a40c86f6a419a2eb3633e5" }
];
const storeLabels = () => {
    Label.insertMany(labels).then((d) => console.log(d))
}

const getAllLabels = (req, res) => {
    const { videoId } = req.query;
    Label.find({ videoId }, (err, labels) => {
        return res.send({ err, labels })
    })
}

// storeLabels()

module.exports = { getLabelsByCategory, getAllLabels }