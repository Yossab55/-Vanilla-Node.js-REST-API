const products = require("../data/products");
const { writeToFile } = require("../utils");
const { v4: uuidv4 } = require("uuid");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
    reject(new Error("Products is not found"));
  });
}
function findProductById(id) {
  return new Promise((resolve, reject) => {
    // let product;
    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].id == id) {
    //     resolve(products[i]);
    //     break;
    //   }
    // }
    // resolve(product)

    //# one line way
    const product = products.find((e) => e.id == id);
    resolve(product);
  });
}
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeToFile("data/products.json", products);
    resolve(newProduct);
  });
}
function update(id, product) {
  return new Promise((resolve, reject) => {
    let updatedProduct;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        updatedProduct = product;
        products[i] = { id, ...product };
        break;
      }
    }

    writeToFile("data/products.json", products);
    resolve(updatedProduct);
  });
}
function remove(id, product) {
  return new Promise((resolve, reject) => {
    // let deletedProduct;
    // let index;
    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].id == id) {
    //     index = i;
    //     break;
    //   }
    // }
    // if (index != undefined) {
    //   deletedProduct = {"message": "deleted successfully", ...products[index]};
      
    //   let newProducts = products.slice(0, index).concat(products.slice(index+1));
    //   writeToFile("data/products.json", newProducts);
    // }
    let newProducts = products.filter(p => p.id != id);
    writeToFile("data/products.json", newProducts);
    resolve();
  });
}

module.exports = {
  findAll,
  findProductById,
  create,
  update,
  remove
};
