$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout: "5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
			$('#protocol_version').append(data.protocolversion);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			$('#protocol_version').append(err+" N/A");
		}
	});
});
