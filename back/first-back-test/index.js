import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, woasdrld!")
})

server.listen(4000, () => {
    console.log("http://localhost:4000");
})