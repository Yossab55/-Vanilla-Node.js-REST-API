const http = require("http");

const server = http.createServer((request, response) => {

  if (request.url == "/api/products" && request.method == "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(products));
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "404 Not Found :(" }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
