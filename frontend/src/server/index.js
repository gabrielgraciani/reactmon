const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const fs = require('fs');
const path = require('path');
const filePath = './poke.json';
const usersData = require(filePath);

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());

	server.get('/api/v1/pokemon', (req, res) => {
		return res.json(usersData);
	});

	const PORT = process.env.PORT || 3000;

	server.use(handle).listen(PORT, (err) => {
		if(err) throw err
		console.log('> ready on port ' + PORT);
	});
});