jQuery(document).ready(function(){

	jQuery(".owl-carousel1").owlCarousel(
	{
		loop:false,
		center: false,
		margin:30,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:2,
				nav:false,

			}
		}
	}
	);

	jQuery(".owl-carousel2").owlCarousel(
	{
		loop:true,
		center: false,
		margin:0,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true,

			}
		}
	}
	);

	jQuery(".owl-carousel3").owlCarousel(
	{
		loop:true,
		center: true,
		margin:30,
		responsiveClass:true,
		nav:false,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:3,
				nav:false,

			}
		}
	}
	);



	function myFunction(x) {
		x.classList.toggle("change");
	}

});