// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//             // 'Content-Type': 'text/css',
//         })
//         res.write(data)
//         res.end()
//     })
// }).listen(8000)

const http = require('http')
const fs = require('fs')
const url = require('url')
const queryString = require('querystring')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
            const page = url.parse(req.url).pathname;
            const params = querystring.parse(url.parse(req.url).query)
            console.log(page);
            if (page == '/') {
                fs.readFile('index.html', function (err, data) {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    res.end();
                });
            }

    else if (page == '/otherpage') {
        fs.readFile('otherpage.html', function (err, data) {
                    res.writeHead(200, {
                                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
            });
            }
}).listen(8000)