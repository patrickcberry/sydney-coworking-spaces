console.log('This would be the main JS file.');


var locationData = {
	{
		title: 		"Home",
		position: 	{lat: -33.714056, lng: 151.054259},
	},
	{
		title: 		"Pyrmont",
		position: 	{lat: -33.868641, lng: 151.196729},
	},
	{
		title: 		"Paramatta",
		position: 	{lat: -33.813676, lng: 151.007102},
	}
}


// -33.868641, 151.196729 Pyrmont
// -33.813676, 151.007102 Paramatta


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.799, lng: 151.006},
    zoom: 11
  });

  var marker = new google.maps.Marker({

  	position: locationData[1].position,
  	title: locationData[1].title,

    //position: {lat: -33.714056, lng: 151.054259},
    //title: "Home\n34 Wisteria Crescent\nCherrybrook"
    map: map,
  });  

}
