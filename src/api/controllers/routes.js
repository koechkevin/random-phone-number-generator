import express from 'express';
import Controllers from './modules';
import validators from './validators';

const { validateNumber } = validators;

const { generateRandomNumber, getAllGeneratedNumbers, getRecentlyGenerated } = Controllers;

const Router = express.Router();

Router.post('/generate', validateNumber, generateRandomNumber);
Router.get('/numbers', getAllGeneratedNumbers);
Router.get('/recently-generated', getRecentlyGenerated);

const routes = (app) => {
  app.use('/api', Router);
  return app;
};

export default routes;
