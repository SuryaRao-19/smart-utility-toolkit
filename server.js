// Basic HTTP Server using Node.js core http module

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("Request received:", req.method, req.url);

    res.setHeader("Content-Type", "text/plain");

    switch (req.url) {
        case "/":
            res.statusCode = 200;
            res.end("Welcome to Node Server");
            break;

        case "/about":
            res.statusCode = 200;
            res.end("About Page");
            break;

        case "/contact":
            res.statusCode = 200;
            res.end("Contact Page");
            break;

        default:
            res.statusCode = 404;
            res.end("404 Error: Route Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Available routes:");
    console.log("/");
    console.log("/about");
    console.log("/contact");
});
