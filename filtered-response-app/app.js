const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/filter', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    res.json({ numbers });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
