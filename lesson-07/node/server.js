var http = require("http");

function sayHello(name) {
  // hier fehlt im Grunde noch das HTML Skelleton...
  return `<h1>Hello ${name.replace("/", "")}</h1>`;
}

http
  .createServer(function (req, res) {
    if (req.url === undefined || req.url.includes("favicon")) return;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(sayHello(req.url));
  })
  .listen(8080);

console.log("Server listening on http://localhost:8080");
