const http = require("http");

const server = http.createServer((request, response) => {

})


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
})