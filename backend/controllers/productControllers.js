const productModel = require('../models/productModel')
const ProductModel = require('../models/productModel')

//Get products API - /api/v1/product
exports.getProducts =async (req, res, next) => {
    const query = req.query.keyword?{ name : {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
    const products = await ProductModel.find(query)

    res.json({
        success: true,
        products
    })
}


//Get products API - /api/v1/product/:id
exports.getSingleProducts = async (req, res, next) => {

    try{
        const product = await productModel.findById(req.params.id)
        res.json({
            success: true,
            product
        })
    }catch(err){
        res.status(404).json({
            success: false,
            message: err
        })
    }



}