const http = require('http');
//
// const server = http.createServer((req, res)=>{
//     console.log(req.url , req.method);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// })
//
// server.listen(5000, 'localhost', ()=>{
//     console.log('listening for requests on port 5000');
// });
// const formidable = require('formidable');
//
// const server = http.createServer((req, res) => {
//   if (req.url == '/fileupload') {
//     const form = new formidable.IncomingForm();
//     form.parse(req, (err, fields, files) => {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write('<h1>File Uploaded</h1>');
//       res.write('<button onclick="window.location.href=\'/\'">Go Back</button>');
//       res.end();
//     }).then(r => console.log(r));
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// });
//
// server.listen(5000,'localhost', () => {
//   console.log('Server is running at http://localhost:5000');
// });


const express = require('express');
const app = express();

// create a server and print the console.log

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});

// create a get request and send a response

// app.get('/', (req, res) => {
//     console.log("Hello World");
// });

// create a simple html page and send it as a response

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>');
//
// });

// use the html in puplic folder

// app.get('/', (req, res) => {
//     res.sendFile('./public/index.html', { root: __dirname });
//
// });
//
// app.get('/about', (req, res) => {
//     res.sendFile('./public/about.html', { root: __dirname });
//
// });

// app.use(express.static('./public')); // now we can use the html in public folder without specifying the path



// app.use((req,res,next)=>{
//     console.log("first middleware");
//     next();
// });
//
// app.use((req,res,next)=>{
//     console.log("second middleware");
//     next();
// }
// );
//
// app.use((req,res,next)=>{
//     console.log("third middleware");
//     next();
// });




// ejs template engine example

app.set('views engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        title : 'Registration Page',
        name : 'Heidar Ali',
    };

    // hello

    res.render('/register', data);
});

