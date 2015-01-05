var openSubMenu = function(){
	$(this).find('ul').css("visibility", "visible");
};


var closeSubMenu = function(){
	$(this).find('ul').css("visibility", "hidden");
};

$(document).ready(function() {
  $('.dropdown > li').mouseover(openSubMenu);
  $('.dropdown > li').mouseout(closeSubMenu);
});