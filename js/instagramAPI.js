var mytoken = config.MY_TOKEN,
    num_photos = 6;

$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: mytoken, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('#ig-feed').append('<div class="col-md-4 col-xs-6"><img src="'+data.data[x].images.standard_resolution.url+'"></div>' );
		}
	},
	error: function(data){
		console.log(data);
	}
});
