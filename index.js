// req
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  // console.log("request.url :>> ", request.url);
  // console.log("request.method :>> ", request.method);
  fs.readFile("./pages/index.html", { encoding: "utf-8" }, (err, file) => {
    if (err) {
      response.statusCode = 500;
      return response.end("Read file error");
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(file);
  });

  // response.statusCode = 200;
  // response.end('Response');
});

// localhost = 127.0.0.1
server.listen(5000, "127.0.0.1", () => {
  console.log("Server is listening http://127.0.0.1:5000");
});
