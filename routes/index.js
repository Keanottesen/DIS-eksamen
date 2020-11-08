// This will be our application entry. We'll setup our server here.
const http = require('http');
const fs = require('fs');
const path = require('path');
const seaport = require('seaport')
const app = require('../app'); // The express app we just created

const ports = seaport.connect('localhost', 9090);

// const key = fs.readFileSync(path.join(__dirname, '../certs', 'key.pem'))
// const cert = fs.readFileSync(path.join(__dirname, '../certs', 'cert.pem'))

app.set('ports', ports);

// const server = http.createServer(app)
//
const server = http.createServer((app))

server.listen(ports.register('add-server'));
