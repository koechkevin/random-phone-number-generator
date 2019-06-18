import express from 'express';


const expressApp = express();

// This registers your routes
const app = expressApp;

app.use('*', (req, res) => {
  res
    .status(200)
    .json({
      message: 'Nothing',
    });
});
export default app;
