import http from 'http'
import express from 'express'
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';
import '@babel/polyfill';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use('/uploads', express.static('server/uploads'))
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: false }));
// routes(app);
app.use(routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the E-service',
}));

const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log(`listening on port ${port}...`);
});