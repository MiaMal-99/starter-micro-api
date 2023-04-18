var http = require('http');
const port = 8000;

const requestListener = function (req, res) {
res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
