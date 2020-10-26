	/*--------Water Ripples Effect----------*/

	jQuery(document).ready(function(){
		"use strict"
		$('.slider').ripples({
		  dropRadius: 11,
		  perturbance: 0.01
		});	

	});

	/*---------Water Ripples Effect Ends--------*/

	/*-----------Type Animation Starts-----------*/

	var typed = new Typed('.text', {
	  	strings: ["<strong>Opening Time :</strong><strong class='primary'> 09:00 AM</strong>", "<strong>Closing Time :</strong><strong class='primary'> 06:00 PM</strong>"],
	  	typeSpeed:80,
	  	loop:true
	});

	/*-----------Type Animation Ends-------------*/

	/*----------CUSTOM STICKY NAV-------------*/

	$(window).scroll(function(){

			var top = $(window).scrollTop();
			 if(top>=60){
			 	$("nav").addClass('secondary');
			 }
			 else
			 	if($("nav").hasClass('secondary')){
			 		$("nav").removeClass('secondary');
			 	}
		});

	/*---------CUSTOM STICKY NAV ENDS----------*/

	

	/*----------Magnific Popup Starts------------*/

	$('.image').magnificPopup({
	  type: 'image',
	  gallery:{
	  	enabled: true
	  }
	});

	/*----------Magnific Popup Ends------------*/

	/*----------Owl Carousel Starts------------*/

	 $("#team-members").owlCarousel({
	  	items:3,
	  	autoplay:true,
	  	smartSpeed:700,
	  	loop:true,
	  	autoplayHoverPause:true,
	  		responsive:{
	  			0:{
	  				items:1
	  			},
	  			480:{
	  				items:2
	  			},
	  			768:{
	  				items:3
	  			}
	  		}
	  });	

	/*----------Owl Carousel Ends------------*/

	/*----------Counter stat Starts------------*/

	$('.counter').counterUp({
	    delay: 10,
	    time: 4000
	});


	/*----------Counter stat Ends------------*/


	/*----------Smooth Scroll Starts------------*/

	$("a").click(function(event){
		event.preventDefault();
		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(section).offset().top - -2
		}, 1250, "easeInOutExpo");
	})

	/*----------Smooth Scroll Ends------------*/