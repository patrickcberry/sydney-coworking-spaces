// Below is the script to create and display the map using the 
// GoogleMaps API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.799, lng: 151.006},
    zoom: 11
  });

  var infoWindow = new google.maps.InfoWindow();
  bounds = new google.maps.LatLngBounds();

  for (i = 0; i < locationData.length; i++ ) {
	
	marker = new google.maps.Marker({
	  	position: locationData[i].position,
	  	title: locationData[i].title,
	    map: map,
	    content: locationData[i].content,
	    idx: i
  	});

	google.maps.event.addListener(marker,'click', function(){
		infoWindow.setContent(this.content);
		infoWindow.open(map,this);

		// Fill details 

		$("#details-info").hide();
		$("#details").show();

		$("#details-title").text(locationData[this.idx].title);
		$("#details-address").text(locationData[this.idx].address);
		$("#details-url").html("<a href='" + locationData[this.idx].url + "' target='_blank'>Website</a>");

		if ( locationData[this.idx].desc) {
			if ( locationData[this.idx].desc.length > 0 ) {
				$("#details-desc").text(locationData[this.idx].desc);
				$("#details-desc").show();
			} else {
				$("#details-desc").hide();
			}
			
		} else {
			$("#details-desc").hide();			
		}




	});

	bounds.extend(marker.getPosition());

	google.maps.event.addListener(infoWindow,'closeclick',function(){
		$("#details-info").show();
		$("#details").hide();		
	});


  } 
  //center the map to the geometric center of all markers
  map.setCenter(bounds.getCenter());
  map.fitBounds(bounds);  
  //remove one zoom level to ensure no marker is on the edge. 	
  //map.setZoom(map.getZoom()-1); - removed zooms out too far when recentering
}

function centerMap(){
 //center the map to the geometric center of all markers
  map.setCenter(bounds.getCenter());
  map.fitBounds(bounds);  
  //remove one zoom level to ensure no marker is on the edge. 	
  map.setZoom(map.getZoom()-1);
}
