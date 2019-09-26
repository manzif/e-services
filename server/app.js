import http from 'http'
import express from 'express'
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const hostname = '127.0.0.1';
const port = 5000;
const app = express()
const server = http.createServer(app);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(logger('dev'));
app.use('/uploads', express.static('server/uploads'))
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the .',
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});