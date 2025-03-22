const Product = require("../models/productModel");
const { getPostData, writeToFile } = require("../utils");

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
    console.log(product);
    if (product) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(product));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Product is not found" }));
    }
  } catch (error) {
    console.log(error);
  }
}

//@desc Create product
//@route POST api/products
async function createProduct(request, response) {
  try {
    // we destruct because if there is unnecessary data
    const { name, description, price } = JSON.parse(await getPostData(request));
    const product = {
      name,
      description,
      price,
    };
    const newProduct = await Product.create(product);

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

//@desc Update product
//@route PUT api/products/:id
async function updateProduct(request, response, id) {
  try {
    const product = await Product.findProductById(id);
    if (product) {
      const body = await getPostData(request);
      const { name, description, price } = JSON.parse(body);

      const productDate = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.description,
      };

      const updatedProduct = await Product.update(id, productDate);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(updatedProduct));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end({ message: "id is wrong" });
    }
  } catch (error) {
    console.log(error);
  }
}

//@desc delete product
//@route DELETE api/products/:id
async function deleteProduct(request, response, id) {
  try {
    const product = await Product.findProductById(id);
    if (product) {
      // const deletedProduct = await Product.remove(id, product);
      // response.writeHead(201, { "Content-Type": "application/json" });
      // response.end(JSON.stringify(deletedProduct));
      //# another solution
      await Product.remove(id, product);
      response.writeHead(201, { "Content-Type": "application/json" });
      response.end(JSON.stringify({message: `product with ${id} is removed`}));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end({ message: "id is wrong" });
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
