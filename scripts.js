$(document).ready(function() { 

    function showSite() {
        $(".odslonWolno").show("slow");
        $(".odslon").show("fast");
    }
    if(location.search) {
        showSite();
        $('html, body').animate({
            scrollTop: $("#oMnie").offset().top
        }, 700);
    }

    $("#pokaz").click(function() {
        showSite();
    });
		/*$("#nawigacja").show("slow");
		$("#about").show("fast");
		$("#techno").show("fast");
		$("#projekty").show("fast");
		$("#kontakt").show("fast");
		$("#stopka").show("fast");*/
	
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