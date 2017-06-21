const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
	res.sendFile('index.html', { root: path.join(__dirname, 'public')});
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
