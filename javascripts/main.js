console.log('This would be the main JS file.');

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.799, lng: 151.006},
    zoom: 11
  });

  var marker = new google.maps.Marker({
    position: {lat: -33.714056, lng: 151.054259},
    map: map,
    title: "Home"
  });  

}
