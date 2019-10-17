$(document).ready(function() {
	
	$(".content-holder").css("display", "none");

    $(".content-holder").fadeIn(1500);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$(".content-holder").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
