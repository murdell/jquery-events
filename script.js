$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click", function() {
		$("p").addClass('color-text'); 
	});
	
	$("h2").hover(function()
		{    $("h2").css("background-color", "lightblue");   $(this).css("fontSize", "1.25em");    }, 
	    	function()
	    {    $("h2").css("background-color", ""); $(this).css("fontSize", "1em");		}
	);	

	$(".bottom_button").hover(function()
		{    $("body").css("background-color", "#000");    }, 
	    	function()
	    {    $("body").css("background-color", "#eee"); 	}
	);	





}); 
