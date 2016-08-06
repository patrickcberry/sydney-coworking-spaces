console.log('This would be the main JS file.');

// Below is the data for each co-working space location

var locationData = [
	{
		title: 		"Home",
		position: 	{lat: -33.714056, lng: 151.054259},
		content:    "Home content"
	},
	{
		title: 		"Pyrmont",
		position: 	{lat: -33.868641, lng: 151.196729},
		content:    "Pyrmont content"
	},
	{
		title: 		"Paramatta",
		position: 	{lat: -33.813676, lng: 151.007102},
		content:    "Paramatta content"
	}
]

// Below is the script to create and display the map using the 
// GoogleMaps API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.799, lng: 151.006},
    zoom: 11
  });

  for (i = 0; i < locationData.length; i++ ) {
	
	marker = new google.maps.Marker({
  	position: locationData[i].position,
  	title: locationData[i].title,
    map: map,
  	});

	infoWindow = new google.maps.InfoWindow({
		content: locationData[i].content
	});

	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	});
  }    	
}
