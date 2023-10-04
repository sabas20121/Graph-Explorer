const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5173;
const serverOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
};
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = https.createServer(serverOptions, app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
