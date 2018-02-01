$(document).ready(function() { 

$('#search-btn').on('click', function(e) {
	e.preventDefault();
	$('ul').empty();
	$('.no-entery').empty();
	//gets search input
	let searchTerm = $("#search").val();

	//API url
	let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json&callback=?`;

    $.ajax({
      	type: 'GET',
      	url: url,
      	async: false,
      	dataType: 'json',
      	success: function(data){
	        $('#output').html('');

			if (searchTerm === '') {
				$('.no-entery').append(`No entery`);
			} else {	
		        for (i=0; i<data[1].length; i++){
		       		$('#output').append(`<li>
					       				<a href=${data[3][i]} target='_blank'>${data[1][i]}</a>
					       				<p>${data[2][i]}</p>
					       				</li>`);
		        	}
		   		}
      		},
      	error: function(errorMessage){
        	alert('Error');
      		}
	});

	//clears the input field
	$('#search').val('');
});

$('#random').on('click', function(){
	$('ul').empty();
	window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
});

});