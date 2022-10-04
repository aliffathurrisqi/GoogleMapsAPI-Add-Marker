var marker;

function taruhMarker(peta, posisiTitik) {
  if (marker) {
    // meletakkan marker
    marker.setPosition(posisiTitik);
  } else {
    // membuat marker maru
    marker = new google.maps.Marker({
      position: posisiTitik,
      map: peta,
    });
  }
}

function initialize() {
  var propertiPeta = {
    center: new google.maps.LatLng(-7.794915406409172, 110.37020923802413),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var peta = new google.maps.Map(
    document.getElementById("map-canvas"),
    propertiPeta
  );

  // even listner ketika peta diklik
  google.maps.event.addListener(peta, "click", function (event) {
    taruhMarker(this, event.latLng);
  });
}

// event jendela di-load
google.maps.event.addDomListener(window, "load", initialize);
