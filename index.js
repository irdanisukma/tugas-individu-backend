const http = require('http');
const express = require('express')
const cors = require('cors')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/ambil', (req, res) => {
    res.send({sensor3 : 300})
})

app.get('/ambil2', (req, res) => {
  res.send({sensor2 : 500})
})

app.post('/kirim', (req, res) => {
    res.send('sensor2')
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })