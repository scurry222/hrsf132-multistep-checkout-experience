const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit_form', (req, res) => {
    console.log(req.body);
    res.send();
})

app.listen(PORT, () => console.log(`server is listening at localhost:${PORT}!`))
