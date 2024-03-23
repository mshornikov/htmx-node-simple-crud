import express from 'express';
import methodOverride from 'method-override';

import routes from './routes/index.js';

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
