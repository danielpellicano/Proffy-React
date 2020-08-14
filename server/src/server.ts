import express from 'express';

const app = express();

app.get('/user', (request, response) => {
  return response.json('Hellow Word');
});

app.listen(3333);
