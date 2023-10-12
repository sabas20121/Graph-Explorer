const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const MetaData = require('../MetaData.json')
const port = MetaData.Port.GraphExplorerPort ;
const serverOptions = {
    key: fs.readFileSync(MetaData.SSL.SSL_Key),
    cert: fs.readFileSync(MetaData.SSL.SSL_Certificate)
};
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = https.createServer(serverOptions, app);

server.listen(port, () => {
    console.log(`GraphExplorer Server running on port ${port}`);
});
