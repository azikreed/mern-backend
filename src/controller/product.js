const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify')


exports.createProduct = (req, res)=>{

    const { name, price, quantity, description, category, createdBy } = req.body;
    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file=>{
            return { img: file.filename }
        })
    }
    
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    });
    // console.log(quantity);

    product.save((error, product)=>{
        if(error) return res.status(400).json({error});
        if(product){
            res.status(201).json({product});
        }
    })

}