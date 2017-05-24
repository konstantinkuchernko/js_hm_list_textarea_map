$(document).ready(function() {
	var map;
  	initMap();

});

function initMap() {
	var kharkov = {lat: 49.994507, lng: 36.145742};
		map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: kharkov,
		scrollwheel: false,
	});

}	

function drivingRoute(from, to) {
	var request = {
		origin: from,
		destination: to,
		travelMode: google.maps.DirectionsTravelMode.TRANSIT
	};

	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();

	directionsDisplay.setMap(map);
	directionsDisplay.setOptions( { suppressMarkers: true, suppressInfoWindows: true } );


	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
}

$('#drivingRoute').on('click', function(event) {
	drivingRoute( $('input[name=from]').val(), $('input[name=to]').val() );
});