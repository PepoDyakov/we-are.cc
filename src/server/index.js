import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/routes';

const app = express();
app.set('views', path.join(__dirname, '../../dist/public'));
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '../../dist/public')));

app.use('/', bodyParser.json(), routes);

app.listen(3000);
