// api_load.js
var $ = require('jquery');

var api_load = function(url, next_url){
	var results = [];

	$.ajax({
		url: url,
		dataType: 'json',
		success: function(d) {
			(function(data){
				results = results.concat(data.results);
				var url = data[next_url];
				if (url) {
					api_load(url, next_url);
				}else{
					console.log(results);
					return results;
				}
			})(d);

		}
	})
}

module.exports = api_load;