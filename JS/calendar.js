$('.grid').masonry({
 	itemSelector: '.grid-item',
  	// use element for option
  	columnWidth: '.grid-sizer',
  	percentPosition: true
});

console.log(window.innerWidth)
var likeHover = false;

$('.image-overlay').hover(function () {
	var self = $(this);
	TweenMax.to(self, 0.5, {opacity: 1});
	TweenMax.to(self, 0.5, {backgroundColor: "rgba(0,0,0,0.45)"});
}, function () {
	var self = $(this);
	TweenMax.to(self, 0.5, {backgroundColor: "rgba(0,0,0,0)"});
	TweenMax.to(self, 0.5, {opacity: 0});
})

$('.like-btn').hover(function () {
	var self = $(this);
	if(!self.hasClass('liked'))
	{
		self.addClass('glyphicon-heart');
		self.removeClass('glyphicon-heart-empty');
	}
}, function () {
	var self = $(this);
	if(!self.hasClass('liked'))
	{
		self.addClass('glyphicon-heart-empty');
		self.removeClass('glyphicon-heart');
	}
	
})

$('.like-btn').click(function () {
	var self = $(this);
	self.addClass('liked');
	TweenMax.to(self, 0.5, {color: "#f44242"});
})