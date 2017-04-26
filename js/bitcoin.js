$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout: "5000",
		async : false,

		success : function(data) {
			$('#name').append(data.blocks);
			$('#height').append(data.protocolversion);
		},

		error : function(xhr, status, err) {
			$('#name').append(err+" N/A");
			$('#height').append(err+" N/A");
		}
	});
});
