import express from 'express';
import nunjucks from 'nunjucks';
import methodOverride from 'method-override';

import routes from './routes/index.js';

const app = express();

nunjucks.configure('views', {
    noCache: true,
    express: app
});

app.engine('njk', nunjucks.render);
app.set('view engine', 'njk');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
