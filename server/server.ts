import express from "express";
import { join, resolve } from "path";
import { availableCpus } from "./data/components";

let app = express();

let clientPath = join(resolve(), './client');

app.get("/", function (request, response) {
    response.sendFile(join(clientPath, 'index.html'));
});
app.get("/img/:img", function (request, response) {
    response.sendFile(join(clientPath, 'img', `${request.params.img}.svg`));
});
app.get("/api/:componentType", function(request, response) {
	switch(request.params.componentType) {
		case "CPU":
			response.send(availableCpus) 
	}
});
app.get("/font", function (request, response) {
    response.sendFile(join(clientPath, 'style', 'Montserrat-Regular.ttf'));
});
app.get("/sites/:site", function (request, response) {
	response.sendFile(join(clientPath, "sites", `${request.params.site}.html`));
});
app.get("/style/:style", function (request, response) {
    response.sendFile(join(clientPath, 'style', `${request.params.style}.css`));
});
app.get("/scripts/:script", function (request, response) {
    response.sendFile(join(clientPath, 'scripts', `${request.params.script}.js`));
});
app.listen(8080, function () {
    console.log('Webserver is running on Port %d', 8080);
});