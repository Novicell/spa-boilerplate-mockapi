import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// import * as lookUpController from './controllers/lookup.controller';
// import * as suggestController from './controllers/suggest.controller';
import contentController from './controllers/content.controller';
import { Router } from 'express';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '7070';
const app = express();
const routes = Router();

const whitelist = ['http://127.0.0.1:3000']; // Add the routes that you want to whitelist
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

routes.get('/getcontentbykey/*', contentController);
// routes.get('/suggest/*', (suggestController.index));

app.use('/api/', routes);

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}/api`);
});
