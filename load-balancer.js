const https = require('https')
const fs = require('fs');
const path = require('path');
const httpProxy = require('http-proxy')
const seaport = require('seaport')
const ports = seaport.connect('localhost', 9090);

const proxy = httpProxy.createProxyServer({});

const key = fs.readFileSync(path.join(__dirname, 'certs', 'key.pem'))
const cert = fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))

let i = -1;

const sslServer = https.createServer({
  key: key,
  cert: cert
}, (req, res) => {
  const addresses = ports.query('add-server');
  
  if (!addresses.length) {
   res.writeHead(500, { 'Content-Type': 'text/plain' });
   res.end('ingen servere er ledig');
       return;
   }

   i = (i + 1) % addresses.length;
   const host = addresses[i].host.split(":").reverse()[0];
   const port = addresses[i].port;

   proxy.web(req, res, { target: 'http://' + host + ':' + port });
})

sslServer.listen(8080, () => console.log('load balancer lytter på port ', 8080));
