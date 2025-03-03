import { createServer } from 'node:http';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if (req.url === '/') {
        res.end('HOME');
        return;  
    }

    if (req.url === '/about') {
        res.end('ABOUT');
        return;
    }

    res.end('404 | Not Found');
})

function startServer() {
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
}

export default startServer;