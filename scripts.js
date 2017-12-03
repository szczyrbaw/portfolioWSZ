$(document).ready(function() { 
 	$("#show").click(function() {
		
		$("#nawigacja").show("slow");
		$("#about").show("fast");
		$("#techno").show("fast");
		$("#projekty").show("fast");
		$("#kontakt").show("fast");
		$("#stopka").show("fast");
	});
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});
	
});