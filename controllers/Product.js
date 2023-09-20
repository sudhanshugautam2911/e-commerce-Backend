const { Product } = require("../models/Product");
const mongoose = require("mongoose");

exports.createProduct = async (req, res) => {
  // this product we have to get from  API body
  const product = new Product(req.body);

  try {
    const doc = await product.save();
    res.status(201).json({
      success: true,
      data: doc,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal server error while creating product",
      message: err.message,
    });
  }
};
exports.fetchAllProducts = async (req, res) => {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
    // TODO: we have to try multiple categories and brands after change in frontend   

  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({ category: req.query.category})
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand})

  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  //   here in backend we dont have 'X-Total-Count' in Header, on frontend we need this so writing this...
  const totalDocs = await totalProductsQuery.count().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set('X-Total-Count', totalDocs)
    res.status(200).json({
      success: true,
      data: docs,
      message: "Product Fetched Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "server error while fetching products",
      message: err.message,
    });
  }
};
