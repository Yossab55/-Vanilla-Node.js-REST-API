const Product = require("../models/productModel");
//@desc get all products
//@route Get api/products
async function getProducts(request, response) {
  try {
    const products = await Product.findAll();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
//@desc get one product
//@route Get api/products/:id
async function getProduct(request, response, id) {
  try {
    const product = await Product.findProductById(id);
    console.log(product)
    if(product) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(product));

    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({"message" : "Product is not found"}));
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProduct,
};
