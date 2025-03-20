const products = require("../data/products");

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
    
    //# on line way 
    const product = products.find(e => e.id == id);
    resolve(product)
  });
}
module.exports = {
  findAll,
  findProductById,
};
