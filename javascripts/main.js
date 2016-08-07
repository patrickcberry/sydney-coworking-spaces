// Below is the script to create and display the map using the 
// GoogleMaps API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.799, lng: 151.006},
    zoom: 11
  });

  var infoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  for (i = 0; i < locationData.length; i++ ) {
	
	marker = new google.maps.Marker({
	  	position: locationData[i].position,
	  	title: locationData[i].title,
	    map: map,
	    content: locationData[i].content
  	});

	google.maps.event.addListener(marker,'click', function(){
		infoWindow.setContent(this.content);
		infoWindow.open(map,this);
	});

	bounds.extend(marker.getPosition());
  } 
  //center the map to the geometric center of all markers
  map.setCentre(bounds.getCenter());
  map.fitBounds(bounds);  
  //remove one zoom level to ensure no marker is on the edge. 	
  map.setZoom(map.getZoom()-1);
}
