wHeight = $(window).height()
map = undefined



initialize = ->
	mapColors = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]}]
	mapOptions =
		zoom: 15
		center: new google.maps.LatLng(25.5496,-103.4464)
		mapTypeId: google.maps.MapTypeId.ROADMAP
		# maxZoom: 7
		scrollwheel: false
		mapTypeId: google.maps.MapTypeId.ROADMAP
		zoomControl: true
		zoomControlOptions:
			style: google.maps.ZoomControlStyle.SMALL
			position: google.maps.ControlPosition.TOP_RIGHT
		panControl: false
		mapTypeControl: false
		streetViewControl: false
		styles: mapColors

	map = new google.maps.Map(document.getElementById("mapa"), mapOptions)

	

	marker = new google.maps.Marker
		position: new google.maps.LatLng(25.5496,-103.4464)
		map: map
		icon: "img/pin.png"


google.maps.event.addDomListener window, "load", initialize



navigation = (currentSection)->

	nextSection = currentSection.attr "href"
	nextColor = currentSection.attr "bgcolor"
	$.scrollTo($(nextSection), 600, {easing:"easeOutQuad"})
	# if nextColor isnt ""
	# 	$(".container").animate
	# 		backgroundColor: nextColor
	# 	, 600


fadeStart2 = 100
fadeUntil2 = 400




menureveal = -> 
	$('.main_nav_menu').fadeIn(250)
	$('.nav_icon').hide()
	$('.nav_close').show()
menuhide = ->
	$('.main_nav_menu').fadeOut(250)
	$('.nav_icon').show()
	$('.nav_close').hide()
menuhide2 = ->
	$('.main_nav_menu').hide()
	$('.nav_icon').show()
	$('.nav_close').hide()


updateText = (event)->
	input = $(this)
	setTimeout ->
		val=input.val()
		if val isnt ""
			input.parent().addClass "floating-placeholder-float"
		else
			input.parent().removeClass "floating-placeholder-float"
	, 1
#


$ ->


	$(".floating-placeholder input").keydown(updateText)
	$(".floating-placeholder input").change(updateText)

	$(".nav_icon").on "click", (e)->
		e.preventDefault()
		menureveal()
	$(".nav_close").on "click", (e)->
		e.preventDefault()
		menuhide()
	$(document).scroll ->
		offset2 = $(window).scrollTop()
		if offset2 <= fadeStart2
			$(".main_nav").css
				opacity: 0
		if offset2 <= fadeUntil2
			opacity2 = 0+offset2/fadeUntil2
			$(".main_nav").css
				opacity: opacity2
			$(".main_nav_menu").css
				opacity: opacity2
		else if offset2 > fadeUntil2
			$(".main_nav").css
				opacity: 1
			$(".main_nav_menu").css
				opacity: 1


	$(".scrollTo").on "click", (e)->
		e.preventDefault()
		navigation($(this))
	


