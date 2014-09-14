$(document).ready(function() {

	$('.dropdown > li').on('mouseover', openSubMenu);


	$('.dropdown > li').on('mouseout', closeSubMenu);

	
	function openSubMenu() {
		$(this).find('ul').css({'visibility': 'visible'});
	};


	function closeSubMenu() {
		$(this).find('ul').css({'visibility': 'hidden'});
	};
});