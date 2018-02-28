const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    console.log('running...')
    res.send({'tits': 'good'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);