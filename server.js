const http = require('http')

const options = { "Content-Type": "application/json" };

http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url === '/cars'){
            res.writeHead(200, options);
            res.end(JSON.stringify({msg: "this is cars list"}))
        }
    }
}).listen(4040, () => {
    console.log(`Port: 4040. Server is running...`);
})