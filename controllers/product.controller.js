const Product = require('../models/product');

const getAllProducts = (req, res) => {
    return Product.find({ }, (err, products) => {
        return res.send({ err, products })
    })
};
const getProducts = (req, res) => {
    const { categoryId } = req.query;
    return Product.find({ categoryId }, (err, products) => {
        return res.send({ err, products })
    })
};

const products = [
    { "name" : "Byjus", "value" : "byjus", categoryId : "64a4056d5a63a8d07e95d57d" },
    { "name" : "Coursera", "value" : "coursera", categoryId : "64a4056d5a63a8d07e95d57d" },
    { "name" : "Medplus", "value" : "medplus", categoryId : "64a4056d5a63a8d07e95d57e" },
    { "name" : "Apollo", "value" : "apollo", categoryId : "64a4056d5a63a8d07e95d57e" }
];

const storeProducts = () => {
    Product.insertMany(products).then((d) => console.log(d))
}

// storeProducts()

module.exports = { getProducts, getAllProducts }