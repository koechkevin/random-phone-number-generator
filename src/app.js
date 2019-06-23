import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './api/controllers/routes';

const expressApp = express();
expressApp.use(cors());
expressApp.use(bodyParser.json());
// This registers your routes
const app = routes(expressApp);

app.use('*', (req, res) => {
  res
    .status(200)
    .json({
      message: 'Nothing',
    });
});
export default app;
