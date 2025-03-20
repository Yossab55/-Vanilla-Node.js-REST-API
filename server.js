// in the name of Father, of Son and of Holy spirit one God forever Amen
// in the name of Cross
const http = require("http");
const ProductController = require("./controllers/productController");
const server = http.createServer((request, response) => {
  if (request.url == "/api/products" && request.method == "GET") {
    ProductController.getProducts(request, response);
  } else if (
    request.url.match(/^\/api\/products\/(\d+)$/) &&
    request.method == "GET"
  ) {
    const id = request.url.split("/")[3];
    ProductController.getProduct(request, response, id);
  } else if (request.url == "/api/products" && request.method == "POST") {
    ProductController.createProduct(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "404 Not Found :(" }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
