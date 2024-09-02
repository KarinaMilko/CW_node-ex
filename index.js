// req
const http = require("node:http");

const server = http.createServer((request, response) => {
  console.log("request.url :>> ", request.url);
  console.log("request.method :>> ", request.method);
  response.statusCode = 200;
  response.end("Response");
});

// localhost = 127.0.0.1
server.listen(5000, "127.0.0.1", () => {
  console.log("Server is listening http://127.0.0.1:5000");
});
