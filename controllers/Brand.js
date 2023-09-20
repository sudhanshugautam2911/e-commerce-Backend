const {Brand} = require('../models/Brand');

exports.fetchBrands = async (req, res) => {
    try {
        const brands = await Brand.find({}).exec();
        res.status(200).json({
          success: true,
          data: brands,
          message: "Brand Fetched Successfully",
        });
      } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
          success: false,
          data: "Internal server error while fetching brand",
          message: err.message,
        });
      }

}

// Create New Brand
exports.createBrand = async (req, res) => {
  // this product we have to get from  API body
  const brand = new Brand(req.body);

  try {
    const doc = await brand.save();
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
      data: "Internal server error while creating Brand",
      message: err.message, 
    });
  }
};