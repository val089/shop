const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const {
	NotFoundError,
	RouteNotFoundError,
	FormValidationError,
} = require('./errors');

app.use(logger('dev'));
app.use(cors());
app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Credentials', 'true');
	'OPTIONS' === req.method ? res.sendStatus(200) : next();
});

app.use('/api/book', require('./routes/book'));
app.use('/api/order', require('./routes/order'));
app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(require('./files/swagger.json'))
);
app.use('/static/cover', express.static(__dirname + '/files/cover'));

app.use((req, res, next) => {
	next(new RouteNotFoundError(req.method, req.url));
});

app.use((err, req, res, next) => {
	let response = { error: { message: err.message } };
	let status = 500;
	if (err instanceof NotFoundError) {
		status = 404;
	}
	if (err instanceof FormValidationError) {
		status = 422;
		response.error.violations = err.violations;
	}

	return res.status(status).json(response);
});

app.listen(3001, () => {
	console.log('App is running on port 3001');
});
module.exports = app;
