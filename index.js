// req
const http = require("node:http");
const { readFile } = require("fs/promises");
const fs = require("node:fs");
const path = require("node:path");

// GET  + /users => getUser
// POST + /users => createUser

const requestListener = (requst, response) => {
  const { method, url } = requst;

  switch (method) {
    case "GET": {
      const pageName = url === "/" ? "index.html" : url;

      // html
      if (/^.*\.html$/.test(pageName)) {
        const pagePath = path.join(__dirname, "/pages/", pageName);

        if (fs.existsSync(pagePath, { encoding: "utf-8" })) {
          readFile(pagePath)
            .then((data) => {
              // - файл є 200
              response.statusCode = 200;
              response.setHeader("Content-Type", "text/html");
              response.end(data);
            })
            .catch((err) => {
              // - файл є, але помилки при читанні 500
              response.statusCode = 500;
              response.end("Sever Error");
            });
        } else {
          // - файла немає 404
          response.statusCode = 404;
          response.end("Page not found");
        }
      } else {
        // не html 403
        response.statusCode = 403;
        response.end("You have no access");
      }
      break;
    }
    default: {
      response.statusCode = 400;
      response.end("Bad Request");
    }
  }
};

const server = http.createServer(requestListener);
// localhost = 127.0.0.1
server.listen(5000, "127.0.0.1", () => {
  console.log("Server is listening http://127.0.0.1:5000");
});
