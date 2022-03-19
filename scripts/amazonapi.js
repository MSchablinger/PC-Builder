const request= require("request-promise");
const cheerio= require("cheerio");

let asin = "B096L83WV8";

request(`https://www.amazon.de/NVIDIA-GeForce-3080ti-Founders-Grafikkarte/dp/${asin}/`, (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);
		let price;
		try {
			console.log("Debug try");
			price = parseInt($("a-offscreen").text().trim());
			console.log($("a-offscreen").text().trim());

		} catch(error) {
			console.log("Debug catch");
			price = parseInt($(".a-price-whole").text().trim());
			price += parseInt($(".a-price-fraction").text().trim());
		}
        
        console.log(price);
    }

});