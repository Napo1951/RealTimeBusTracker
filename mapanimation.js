
// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.08691851, 42.345705029],
    [-71.08131661, 42.34024907],
    [-71.08365472, 42.34182987],
    [-71.09387, 42.35942],
    [-71.07451388, 42.33429733],
    [-71.10272142, 42.36474451],
    [-71.09384, 42.35942],
    [-71.0851, 42.34288],
    [-71.092369809, 42.3568184],
    
    ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibmFwbzE5NTEiLCJhIjoiY2w2dWIwdWJkMTVuaDNkbWo2aDN6b3RmMCJ9.IcfAPo7wWL60AnVay4vJ3w';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.09240551, 42.35688732],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
    .setLngLat([-71.08691851, 42.345705029])
    .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() =>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  
  