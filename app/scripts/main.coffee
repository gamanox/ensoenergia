wHeight = $(window).height()
map = undefined

resize = ->
	$(".container").height wHeight-130

aniColors = ->
	#sHeight = $(".seccion").height()
	sHeight = 850
	$(".container").attr("data-0", "background-color:rgb(247,170,4);")
	$(".container").attr("data-#{sHeight*1}", "background-color:rgb(153,189,192);")
	$(".container").attr("data-#{sHeight*5.2}", "background-color:rgb(153,189,192);")
	$("#productos .prog01 .progressBar").attr("data-#{sHeight*1}", "width: 0%;")
	$("#productos .prog01 .progressBar").attr("data-#{sHeight*1.75}", "width: 100%;")
	$("#productos .prog02 .progressBar").attr("data-#{sHeight*1.75}", "width: 0%;")
	$("#productos .prog02 .progressBar").attr("data-#{sHeight*2.5}", "width: 100%;")
	$("#productos .prog03 .progressBar").attr("data-#{sHeight*2.5}", "width: 0%;")
	$("#productos .prog03 .progressBar").attr("data-#{sHeight*3.25}", "width: 100%;")
	$("#productos .prog04 .progressBar").attr("data-#{sHeight*3.25}", "width: 0%;")
	$("#productos .prog04 .progressBar").attr("data-#{sHeight*4}", "width: 100%;")
	$("#productos .prog05 .progressBar").attr("data-#{sHeight*4}", "width: 0%;")
	$("#productos .prog05 .progressBar").attr("data-#{sHeight*4.75}", "width: 100%;")
	#$("#productos .prog06 .progressBar").attr("data-#{sHeight*4.75}", "width: 0%;")
	#$("#productos .prog06 .progressBar").attr("data-#{sHeight*5.5}", "width: 100%;")
	$(".container").attr("data-#{sHeight*6}", "background-color:rgb(15,206,154);")
	$(".container").attr("data-#{sHeight*7}", "background-color:rgb(246,208,36);")
	$(".container").attr("data-#{sHeight*8}", "background-color:rgb(48,74,100);")
	$(".container").attr("data-#{sHeight*9}", "background-color:rgb(205,205,204);")

initialize = ->
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

	map = new google.maps.Map(document.getElementById("mapa"), mapOptions)

	map.set "styles", [

		elementType: "labels.text.fill"
		stylers: [color: "#765d3e"]
	,
		elementType: "labels.text.stroke"
		stylers: [color: "#edcf9d"]
	,
		featureType: "landscape"
		elementType: "geometry.fill"
		stylers: [color: "#edcf9d"]
	,
		featureType: "administrative"
		elementType: "geometry.fill"
		stylers: [color: "#edcf9d"]
	,
		featureType: "landscape.man_made"
		elementType: "geometry.fill"
		stylers: [color: "#edcf9d"]
	,
		featureType: "poi"
		elementType: "geometry"
		stylers: [color: "#edcf9d"]
	,
		featureType: "road"
		elementType: "geometry"
		stylers: [color: "#af8b62"]
	,
		featureType: "road.arterial"
		elementType: "geometry.stroke"
		stylers: [color: "#eccd9c"]
	,
		featureType: "road.local"
		elementType: "geometry"
		stylers: [color: "#c6a377"]
	,
		featureType: "water"
		elementType: "geometry.fill"
		stylers: [color: "#ffffff"]
	,
		featureType: "transit"
		elementType: "geometry.fill"
		stylers: [color: "#af8b62"]
	,
		featureType: "administrative.province"
		elementType: "geometry"
		stylers: [color: "#af8b62"]
	,
		featureType: "administrative.country"
		elementType: "geometry"
		stylers: [color: "#af8b62"]
	]

	marker = new google.maps.Marker
    	position: new google.maps.LatLng(25.5496,-103.4464)
    	map: map
    	icon: "img/pin.png"


google.maps.event.addDomListener window, "load", initialize



navigation = (currentSection)->

	nextSection = currentSection.attr "href"
	nextColor = currentSection.attr "bgcolor"
	$(".container").scrollTo($(nextSection), 600, {easing:"easeOutQuad"})
	# if nextColor isnt ""
	# 	$(".container").animate
	# 		backgroundColor: nextColor
	# 	, 600



$ ->
	resize()
	aniColors()
	$(".scrollTo").on "click", (e)->
		e.preventDefault()
		navigation($(this))
	skrollr.init()


$(window).resize ->
	resize()
