const request= require("request-promise");
const cheerio= require("cheerio");

export function getPrice(asin){
	request(`https://www.amazon.de/NVIDIA-GeForce-3080ti-Founders-Grafikkarte/dp/${asin}/`, (error, response, html) => {
		if(!error && response.statusCode==200) {
			const $= cheerio.load(html);
			let price;
			if(!isNaN(parseFloat($("a.a-link-normal > span.a-size-base.a-color-price").text()))){
				price = parseFloat($("a.a-link-normal > span.a-size-base.a-color-price").text());
			} else {
				price = parseFloat($(".a-price > .a-offscreen").text());
			}
			console.log(price);
		}
	});
}