
$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#height').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#height').append(err+" N/A");
		}
	});
});
