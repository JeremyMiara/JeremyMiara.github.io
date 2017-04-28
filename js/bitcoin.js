
$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#name').append(data.name);
			$('#height').append(data.height);
			$('#hash').append(data.hash);
			$('#time').append(data.time);			
			$('#peer_count').append(data.peer_count);
			
		},

		error : function(xhr, status, err) {
			$('#name').append(err+" N/A");
			$('#height').append(err+" N/A");
			$('#hash').append(err+" N/A");
			$('#time').append(err+" N/A");			
			$('#peer_count').append(err+" N/A");			
	});
});
