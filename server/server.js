const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

const test = require('./Router/test');

app.use(cors());
app.use('/test', test);

app.get('/', (req, res) => {
	res.status(400).json({})
})


app.listen(port, () => {console.log(`${port}`)})