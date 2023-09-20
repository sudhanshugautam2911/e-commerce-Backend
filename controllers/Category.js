const {Category} = require('../models/Category');

exports.fetchCategories = async (req, res) => {
    try {
        const categories  = await Category.find({}).exec();
        res.status(200).json({
          success: true,
          data: categories,
          message: "Categories Fetched Successfully",
        });
      } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
          success: false,
          data: "Internal server error while fetching Categories",
          message: err.message,
        });
      }

}

// Create New Category
exports.createCategory = async (req, res) => {
  // this product we have to get from  API body
  const category = new Category(req.body);

  try {
    const doc = await category.save();
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
      data: "Internal server error while creating Category",
      message: err.message, 
    });
  }
};