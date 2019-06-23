import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import routes from './api/controllers/routes';

const expressApp = express();
expressApp.use(cors());
expressApp.use(bodyParser.json());
// This registers your routes
const app = routes(expressApp);

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('*', (req, res) => {
  res
    .sendFile(path.resolve(
      __dirname, '..', 'public/index.html',
    ));
});
export default app;
