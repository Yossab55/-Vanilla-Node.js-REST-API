const products = require("../data/products");
const {writeToFile} = require("../utils");
const {v4: uuidv4} = require("uuid");

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
    const product = products.find(e => e.id == id);
    resolve(product)
  });
}
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {id: uuidv4(), ...product};
    products.push(newProduct)
    writeToFile("../data/products.json", products);
  })
}
module.exports = {
  findAll,
  findProductById,
};
