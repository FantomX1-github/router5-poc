const express = require('express');
const fs = require('fs');
port = 8080;

const app = express();

app.use(express.static('dist'));

app.post('/save/dirty', (req, res) => {
	setTimeout(() => {
		const data = {result: false};
		res.json(data);
	}, 2000);
});

app.post('/save/', (req, res) => {
	setTimeout(() => {
		const data = {result: true};
		res.json(data);
	}, 800);
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
