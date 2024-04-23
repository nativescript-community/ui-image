const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/image' && req.method === 'GET') {
        // Check the authorization header
        const authToken = req.headers['authorization'];
        if (!authToken || authToken !== "Bearer 1234") {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Unauthorized: No token provided or token is invalid');
            return;
        }

        // Path to the image file
        const imagePath = path.join(__dirname, 'assets', 'images', 'dessert.jpg');

        // Read and send the image file
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading image file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
        });
    } else {
        // Handle other requests or methods
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});