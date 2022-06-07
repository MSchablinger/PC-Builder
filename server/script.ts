import cheerio from "cheerio"
import request from "request-promise";

export function getPrice(asin: string) {
    let price = 0;
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
    return price;
}