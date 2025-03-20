const products = require("../data/products");

function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
    reject(new Error("Products is not found"));
  })
}

module.exports = {find};