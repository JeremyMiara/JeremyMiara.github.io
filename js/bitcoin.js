
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
			//$('#time').append(data.time);
			//$('#latest_url').append(data.latest_url);
			//$('#peer_count').append(data.peer_count);
			//$('#unconfirmed_count').append(data.unconfirmed_count);
			//$('#high_fee_per_kb').append(data.high_fee_per_kb);
			//$('#medium_fee_per_kb').append(data.medium_fee_per_kb);
			//$('#low_fee_per_kb').append(data.low_fee_per_kb);
			//$('#last_fork_height').append(data.last_fork_height);
			//$('#last_fork_hash').append(data.last_fork_hash);
		},

		error : function(xhr, status, err) {
			$('#name').append(err+" N/A");
			$('#height').append(err+" N/A");
			$('#hash').append(err+" N/A");
			//$('#time').append(err+" N/A");
			//$('#latest_url').append(err+" N/A");
			//$('#peer_count').append(err+" N/A");
			//$('#unconfirmed_count').append(err+" N/A");
			//$('#high_fee_per_kb').append(err+" N/A");
			//$('#medium_fee_per_kb').append(err+" N/A");
			//$('#low_fee_per_kb').append(err+" N/A");
			//$('#last_fork_height').append(err+" N/A");
			//$('#last_fork_hash').append(err+" N/A");
		}
	});
});
