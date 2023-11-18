// creating server option 1
//
const http = require('http');
//
// const server = http.createServer((req, res) => {
//     console.log("Codsigaada waala aqbalay");
// });
//
// server.listen(3000, 'localhost', () => {
//     console.log("Server is running on port 3000");
// });

// creating server option 2

// const hostname = 'localhost';
// const port = 8000;
//
// const requestListener = function (req, res) {};
//
// const server = http.createServer(requestListener);
//
// server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}`);
// });

// creating server option 3 with showing text on browser
//
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    console.log(req.url,req.method); // this is to log the url and method of the request
    res.setHeader('Content-Type', 'text/html'); // this is to set the header of the response to text/html so that the browser knows what to expect
    var path = './public/'; // this is to set the path of the file that we want to send to the browser

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            path += 'index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += 'about.html';
            break;
        default:
            res.statusCode = 404;
            res.write('<h1>404 Page Not Found</h1>');
            res.end();
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    }
    );


});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

// creating server option 4 with showing html on browser
//
// const hostname = 'localhost';
// const port = 5000;
//
// const fs = require('fs');
//
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.url)
//     res.setHeader('Content-Type', 'text/html');
//     let path = './public/';
//
//     switch (req.url) {
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += '404.html';
//             break;
//     }
//
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     }
//     );
//
//
//
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server is running at https://${hostname}:${port}`);
// });