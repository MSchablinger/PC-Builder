let express = require('express');
let app = express();
let path = require('path');
let clientPath = path.join(__dirname, '../client');

app.get("/", function (request, response) {
    response.sendFile(path.join(clientPath, 'index.html'));
});
app.get("/img/:img", function (request, response) {
    response.sendFile(path.join(clientPath, 'img', `${request.params.img}.svg`));
});
app.get("/font", function (request, response) {
    response.sendFile(path.join(clientPath, 'style', 'Montserrat-Regular.ttf'));
});
app.get("/style/:style", function (request, response) {
    response.sendFile(path.join(clientPath, 'style', `${request.params.style}.css`));
});
app.get("/scripts/:script", function (request, response) {
    response.sendFile(path.join(clientPath, 'scripts', `${request.params.script}.js`));
});
app.listen(80, function () {
    console.log('Webserver is running on Port %d', 80);
});