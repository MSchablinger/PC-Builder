let asin = "B08HR6ZBYJ";
fetch(`https://amazon-price1.p.rapidapi.com/search?keywords=%3C${asin}%3E&marketplace=ES`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon-price1.p.rapidapi.com",
		"x-rapidapi-key": "326aae80d5mshdcf3a05ea4d5587p194d97jsn32a7a6d215ee"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});