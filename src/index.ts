import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// import * as lookUpController from './controllers/lookup.controller';
// import * as suggestController from './controllers/suggest.controller';
import contentController from './controllers/content.controller';
import { Router } from 'express';

const host = 'localhost';
const port = '7070';
const app = express();
const routes = Router();

app.use(cors());
app.use(bodyParser.json());

routes.get('/getcontentbykey/*', contentController);
// routes.get('/suggest/*', (suggestController.index));

app.use('/api/', routes);

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}/api`);
});
