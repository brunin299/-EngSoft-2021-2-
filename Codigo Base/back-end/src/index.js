import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './app/controllers/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:8080',
  }),
);

app.use('/', router);

app.listen(3000, () => {
  console.log(`Servidor rodando no link http://localhost:3000`);
});
