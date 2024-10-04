
const http = require('node:http');

const hostname = '192.168.130.69';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`

Activation windows en ligne 
1- Ouvrir powershell en tant qu'admin

/**********************************/
irm https://massgrave.dev/get|iex
/**********************************/

https://we.tl/t-eLFpIfl6zr 



 `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});