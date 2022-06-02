import express from "express";
import cheerio from "cheerio"
import request from "request-promise";
import { join, resolve } from "path";

let app = express();

let clientPath = join(resolve(), './client');

app.get("/", function (request, response) {
    response.sendFile(join(clientPath, 'index.html'));
});
app.get("/img/:img", function (request, response) {
    response.sendFile(join(clientPath, 'img', `${request.params.img}.svg`));
});
app.get("/price/:asin", function (req, res) {
    let asin = req.params.asin;
    let price;
	request(`https://www.amazon.de/dp/${asin}/`, (error, response, html) => {
		if(!error && response.statusCode==200) {
			const $= cheerio.load(html);
			if(!isNaN(parseFloat($("a.a-link-normal > span.a-size-base.a-color-price").text()))){
				price = parseFloat($("a.a-link-normal > span.a-size-base.a-color-price").text());
			} else {
				price = parseFloat($(".a-price > .a-offscreen").text());
			}
		}
	});
	res.send(price);
})
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