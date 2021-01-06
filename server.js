const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', () => {
//     console.log('working...')
// })

// app.post('/upload_json', (req, res) => {
    
//     $.ajax({
//         method: 'POST',
//         url: '/upload_json',
//         data: req.body,
//         success: res.send()
//     })
// })

app.listen(PORT, () => console.log(`server is listening at localhost:${PORT}!`))
