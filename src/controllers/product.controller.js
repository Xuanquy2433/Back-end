const ProductModel = require("../models/product.schema");
module.exports = {
  create: async (req, res, next) => {
    const body = req.body;
    const newProduct = new ProductModel(body);
    const isCreated = await newProduct.save();
    return res.json(isCreated);
  },
  getList: async (req, res, next) => {
    try {
      const data = await ProductModel.find().populate("category", "-__v");
      return res.json(data);
    } catch (error) {
      throw error;
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await ProductModel.findOne({ _id: id }).populate(
        "category",
        "-__v"
      );
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ message: "id not exist" });
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      console.log(body, id);
      const isUpdate = await ProductModel.findOneAndUpdate({ _id: id }, body);
      return res.json({ message: "update success" });
    } catch (error) {
      return res.status(400).json({ message: "id not exist" });
    }
  },
  remove: async (req, res, next) => {
    try {
      const { id } = req.params;
      const isDelete = await ProductModel.deleteOne({ _id: id });
      return res.json({ message: "delete success" });
    } catch (error) {
      return res.status(400).json({ message: "id not exist" });
    }
  },

  
  search: async (req, res, next) => {
    try {
      const name = req.body.name;
      console.log("name ", name);
      const isDelete = await ProductModel.find({
        name: name
      });
      return res.json(isDelete);
    } catch (error) {
      return res.status(400).json({ message: "id not exist" });
    }
  },
};
