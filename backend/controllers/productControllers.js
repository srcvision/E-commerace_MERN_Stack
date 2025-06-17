const Product = require('../models/Product');

exports.createProduct = async (req,res) => {
    try{
        const product = new Product(req.body);
        const saved = await product.save();
        res.status(201).json(saved);
    }catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
}

exports.getAllProducts = async (req, res) => {
    try{
        const { search,category, minPrice, maxPrice} = req.query;
        const filter = {};
        if(search) {
            filter.name = { $regex: search, $options: 'i' };
        }
        if(category) {
            filter.category = category;
        }
        if(minPrice || maxPrice) {
            filter.price = {};
            if(minPrice) {
                filter.price.$gte = Number(minPrice);
            }
            if(maxPrice) {
                filter.price.$lte = Number(maxPrice);
            }
        }
        const products = await Product.find(filter);
        res.json(products);
    }catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
}

exports.getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
    }catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
}

exports.updateProduct = async (req, res) => {
    try{
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
    )
    res.json(updated);

    }catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message:"Product deleted successfully"});
    }catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
}

