const Category = require('../models/category');

const getCategories = (req, res) => {
    return Category.find({}, (err, categories) => {
        return res.send({ err, categories })
    })
};

const categories = [
    { name : 'Education', value : 'education' },
    { name : 'Health', value : 'health' }
];
const storeCategories = () => {
    Category.insertMany(categories).then((d) => console.log(d))
}

// storeCategories()

module.exports = { getCategories }