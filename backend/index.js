// import express (after npm install express)
const express = require('express');
const cors = require('cors');

// create new express app and save it as "app"
const app = express();

app.use(cors());

// server configuration
const PORT = 8080;

const filePath = './poke.json';
const usersData = require(filePath);


// create a route for the app
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/v1/pokemon/', (req, res) => {
	return res.json(usersData);
});

app.get('*', (req, res) => {

 });
 app.post('*', (req, res) => {
 });

// make the server listen to requests
app.listen(PORT, () => {
	console.log(`Server running at: http://localhost:${PORT}/`);
});