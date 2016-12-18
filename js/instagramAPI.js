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
			$('#ig-feed').append('<div class="col-md-4 col-xs-6"><a target="_blank" href="'+ data.data[x].link +'"><img src="'+data.data[x].images.standard_resolution.url+'"></a><div class="caption">' + data.data[x].caption.text + '</div><div class="likes">' + data.data[x].likes.count + '<i class="fa fa-heart" aria-hidden="true"></i></div></div>' );
		}
	},
	error: function(data){
		console.log(data);
	}
});
