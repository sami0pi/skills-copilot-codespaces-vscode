// Create web server
const http = require('http');
const fs = require('fs');

// Create server
http.createServer((req, res) => {
    // Read file
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            // Error
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }

        // Success
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); // Listen on port 8080

// Display message
console.log('Server running at http://localhost:8080/');