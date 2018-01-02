import express from 'express'; //eslint-disable-line react/require-extension, react/wrap-multilines
import config from './config';
import serverRender from 'renderers/server';
import { data } from './testData.json';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`); //eslint-disable-line no-console
});